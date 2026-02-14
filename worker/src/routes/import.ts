/**
 * Import routes - file upload, job start, chunked processing, error download
 */

import { Hono } from 'hono';
import type { Env } from '../index';
import { createJobStore, updateJobStatus, addJobError, formatJobResponse } from '../services/jobs';
import { createJob, type Job } from '../models/job';
import { createStorageService, generateFileKey } from '../services/storage';
import { createStripeClient, createProduct, updateProduct, productExists } from '../services/stripe';
import { countCsvRows, extractCsvRows, generateErrorCsv } from '../services/csv';
import { validateBatch } from '../lib/validation';
import { applyMappingToBatch } from '../lib/mapping';
import type { FieldMapping } from '../models/mapping';
import type { ProductData } from '../models/product';
import type Stripe from 'stripe';

const importRoutes = new Hono<{ Bindings: Env }>();

/**
 * POST /import/upload-url - Get presigned URL for CSV upload
 */
importRoutes.post('/upload-url', async (c) => {
  try {
    const body = await c.req.json<{ 
      user_id: string; 
      account_id: string;
      filename: string;
      contentType?: string;
    }>();
    const { account_id: accountId, filename } = body;
    
    if (!accountId) {
      return c.json({ error: 'Missing account_id' }, 400);
    }
    
    if (!filename) {
      return c.json({ error: 'Missing filename' }, 400);
    }

    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );

    // Create new import job in pending state
    const job = createJob('import', accountId);
    await jobStore.save(job);

    // Generate file key
    const fileKey = generateFileKey(accountId, job.id, filename);
    job.inputFileKey = fileKey;
    await jobStore.save(job);

    // Generate upload URL
    const uploadUrl = await storage.getUploadUrl(fileKey);

    return c.json({
      uploadUrl,
      jobId: job.id,
    });
  } catch (err) {
    console.error('Upload URL error:', err);
    return c.json({ error: 'Failed to generate upload URL' }, 500);
  }
});

/**
 * POST /import/:jobId/start - Start processing uploaded CSV
 */
importRoutes.post('/:jobId/start', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const body = await c.req.json<{ 
      user_id?: string;
      account_id?: string;
      dryRun?: boolean;
      mappingId?: string;
    }>();
    
    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );

    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    if (job.type !== 'import') {
      return c.json({ error: 'Not an import job' }, 400);
    }
    
    if (job.status !== 'pending') {
      return c.json({ error: 'Job already started', status: job.status }, 409);
    }
    
    if (!job.inputFileKey) {
      return c.json({ error: 'No file uploaded' }, 409);
    }

    // Check if file exists
    const fileExists = await storage.fileExists(job.inputFileKey);
    if (!fileExists) {
      return c.json({ error: 'File not uploaded yet' }, 409);
    }

    // Get file content to count rows
    const content = await storage.getFile(job.inputFileKey);
    if (!content) {
      return c.json({ error: 'Failed to read uploaded file' }, 500);
    }

    const totalRows = countCsvRows(content);

    // Update job with options and start processing
    job.totalRows = totalRows;
    job.options = {
      dryRun: body.dryRun ?? false,
      skipInvalidRows: true,
    };
    if (body.mappingId !== undefined) {
      job.options.mappingId = body.mappingId;
    }
    job.status = 'processing';
    job.cursor = '1'; // Start at row 1 (after header)
    await jobStore.save(job);

    return c.json(formatJobResponse(job), 202);
  } catch (err) {
    console.error('Import start error:', err);
    return c.json({ error: 'Failed to start import' }, 500);
  }
});

/**
 * POST /import/:jobId/process - Process next chunk of import rows
 */
importRoutes.post('/:jobId/process', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const body = await c.req.json<{ batchSize?: number }>();
    const batchSize = Math.min(Math.max(body.batchSize ?? 100, 1), 500);

    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );

    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    if (job.status !== 'processing') {
      return c.json({ error: 'Job not in processing state', status: job.status }, 409);
    }

    // Get file content
    const content = await storage.getFile(job.inputFileKey!);
    if (!content) {
      updateJobStatus(job, 'failed');
      addJobError(job, { message: 'Failed to read input file' });
      await jobStore.save(job);
      return c.json(formatJobResponse(job), 500);
    }

    // Extract rows for this chunk
    const startRow = parseInt(job.cursor ?? '1', 10);
    const { rows, hasMore } = extractCsvRows(content, startRow, batchSize);

    if (rows.length === 0) {
      // No more rows to process
      await finalizeImport(job, jobStore, storage);
      return c.json(formatJobResponse(job));
    }

    // Apply field mapping if configured
    let processedRows = rows;
    if (job.options?.mappingId) {
      const mappingKey = `mapping:${job.options.mappingId}`;
      const mapping = await c.env.STRIPEWORKER_KV.get(mappingKey, 'json') as FieldMapping | null;
      if (mapping) {
        processedRows = applyMappingToBatch(rows, mapping);
      }
    }

    // Validate rows
    const validation = validateBatch(processedRows, startRow);

    // Track errors for invalid rows
    for (const invalid of validation.invalidRows) {
      const errorInfo: { message: string; field?: string; value?: string } = {
        message: invalid.errors.map(e => `${e.field}: ${e.message}`).join('; '),
      };
      if (invalid.errors[0]?.field !== undefined) {
        errorInfo.field = invalid.errors[0].field;
      }
      if (invalid.errors[0]?.value !== undefined) {
        errorInfo.value = invalid.errors[0].value;
      }
      addJobError(job, errorInfo, invalid.rowNumber);
      job.skippedCount++;
    }

    // Process valid rows (unless dry run)
    if (!job.options?.dryRun) {
      const stripe = createStripeClient({ secretKey: c.env.STRIPE_SECRET_KEY });
      
      for (const valid of validation.validRows) {
        try {
          const result = await processProductRow(stripe, job.stripeAccountId, valid.data);
          if (result.created) {
            job.createdCount++;
          } else {
            job.updatedCount++;
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : 'Failed to process product';
          addJobError(job, { message }, valid.rowNumber);
          job.skippedCount++;
        }
      }
    } else {
      // Dry run - just count what would happen
      for (const valid of validation.validRows) {
        if (valid.data.id) {
          job.updatedCount++;
        } else {
          job.createdCount++;
        }
      }
    }

    // Update progress
    job.processedRows = startRow + rows.length - 1;
    job.cursor = String(startRow + rows.length);

    if (!hasMore) {
      // Finished processing all rows
      await finalizeImport(job, jobStore, storage);
    } else {
      await jobStore.save(job);
    }

    return c.json(formatJobResponse(job));
  } catch (err) {
    console.error('Import process error:', err);
    return c.json({ error: 'Failed to process chunk' }, 500);
  }
});

/**
 * Process a single product row - create or update
 */
async function processProductRow(
  stripe: Stripe,
  accountId: string,
  data: ProductData
): Promise<{ created: boolean }> {
  // Build params with only defined values
  const params: Stripe.ProductCreateParams = { name: data.name };
  if (data.description !== undefined) params.description = data.description;
  if (data.active !== undefined) params.active = data.active;
  if (data.tax_code !== undefined) params.tax_code = data.tax_code;
  if (data.metadata !== undefined) params.metadata = data.metadata;
  if (data.images !== undefined) params.images = data.images;

  if (data.id) {
    // Update existing product
    const exists = await productExists(stripe, accountId, data.id);
    if (exists) {
      const updateParams: Stripe.ProductUpdateParams = { name: data.name };
      if (data.description !== undefined) updateParams.description = data.description;
      if (data.active !== undefined) updateParams.active = data.active;
      if (data.tax_code !== undefined) updateParams.tax_code = data.tax_code;
      if (data.metadata !== undefined) updateParams.metadata = data.metadata;
      if (data.images !== undefined) updateParams.images = data.images;
      
      await updateProduct(stripe, accountId, data.id, updateParams);
      return { created: false };
    }
  }
  
  // Create new product
  await createProduct(stripe, accountId, params);
  return { created: true };
}

/**
 * Finalize import job - generate error CSV if needed
 */
async function finalizeImport(
  job: Job,
  jobStore: ReturnType<typeof createJobStore>,
  storage: ReturnType<typeof createStorageService>
): Promise<void> {
  job.status = 'completed';
  job.completedAt = new Date().toISOString();

  // Generate error CSV if there were errors
  if (job.errors.length > 0) {
    const errorCsv = generateErrorCsv(
      job.errors.map(e => ({
        row: e.row,
        message: e.message,
      }))
    );
    
    const errorFileKey = generateFileKey(
      job.stripeAccountId,
      job.id,
      'import-errors.csv'
    );
    await storage.putFile(errorFileKey, errorCsv);
    job.outputFileKey = errorFileKey;
  }

  await jobStore.save(job);
}

/**
 * GET /import/:jobId/errors - Download error CSV with failed rows
 */
importRoutes.get('/:jobId/errors', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    
    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    if (job.type !== 'import') {
      return c.json({ error: 'Not an import job' }, 400);
    }
    
    if (!job.outputFileKey || job.errors.length === 0) {
      return c.json({ error: 'No errors to download' }, 404);
    }

    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );
    
    const downloadUrl = await storage.getDownloadUrl(job.outputFileKey);
    
    return c.json({
      downloadUrl,
      errorCount: job.errors.length,
    });
  } catch (err) {
    console.error('Error download error:', err);
    return c.json({ error: 'Failed to get error download URL' }, 500);
  }
});

export default importRoutes;
