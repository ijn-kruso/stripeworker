/**
 * Export routes - POST /export/start, GET /export/{jobId}/download
 */

import { Hono } from 'hono';
import type { Env } from '../index';
import { createJobStore, updateJobStatus, formatJobResponse } from '../services/jobs';
import { createJob } from '../models/job';
import { createStorageService, generateFileKey } from '../services/storage';
import { createStripeClient, fetchProductsBatch } from '../services/stripe';
import { generateCsv } from '../services/csv';
import { stripeProductToCsvRow, collectCsvHeaders } from '../models/product';
import type Stripe from 'stripe';

const exportRoutes = new Hono<{ Bindings: Env }>();

/**
 * POST /export/start - Start a product export job
 */
exportRoutes.post('/start', async (c) => {
  try {
    const body = await c.req.json<{ user_id: string; account_id: string }>();
    const { account_id: accountId } = body;
    
    if (!accountId) {
      return c.json({ error: 'Missing account_id' }, 400);
    }

    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    const stripe = createStripeClient({ secretKey: c.env.STRIPE_SECRET_KEY });
    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );

    // Create new export job
    const job = createJob('export', accountId);
    job.status = 'processing';
    await jobStore.save(job);

    // Fetch all products and generate CSV
    // For MVP, do this synchronously (blocking)
    // TODO: For large exports, use chunked processing
    const products: Stripe.Product[] = [];
    let cursor: string | undefined;
    let hasMore = true;

    while (hasMore) {
      const batch = await fetchProductsBatch(stripe, accountId, {
        limit: 100,
        startingAfter: cursor,
      });
      
      products.push(...batch.products);
      cursor = batch.nextCursor;
      hasMore = batch.hasMore;
      
      // Update progress
      job.totalRows = products.length;
      job.processedRows = products.length;
      await jobStore.save(job);
    }

    // Generate CSV content
    const csvContent = generateCsv(products);
    
    // Store CSV in R2
    const fileKey = generateFileKey(accountId, job.id, 'products-export.csv');
    await storage.putFile(fileKey, csvContent, 'text/csv');
    
    // Update job with output file
    job.outputFileKey = fileKey;
    job.status = 'completed';
    job.completedAt = new Date().toISOString();
    await jobStore.save(job);

    return c.json(formatJobResponse(job), 202);
  } catch (err) {
    console.error('Export start error:', err);
    return c.json({ error: 'Failed to start export' }, 500);
  }
});

/**
 * GET /export/:jobId/download - Get download URL for completed export
 */
exportRoutes.get('/:jobId/download', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    
    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    if (job.type !== 'export') {
      return c.json({ error: 'Not an export job' }, 400);
    }
    
    if (job.status !== 'completed') {
      return c.json({ error: 'Export not yet complete', status: job.status }, 409);
    }
    
    if (!job.outputFileKey) {
      return c.json({ error: 'Export file not found' }, 404);
    }

    const storage = createStorageService(
      c.env.STRIPEWORKER_FILES,
      new URL(c.req.url).origin
    );
    
    const downloadUrl = await storage.getDownloadUrl(job.outputFileKey);
    
    return c.json({ downloadUrl });
  } catch (err) {
    console.error('Export download error:', err);
    return c.json({ error: 'Failed to get download URL' }, 500);
  }
});

export default exportRoutes;
