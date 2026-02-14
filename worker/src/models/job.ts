/**
 * Job type definitions matching data-model.md
 */

export type JobStatus = 
  | 'pending'      // Created, not yet started
  | 'processing'   // Actively processing rows
  | 'completed'    // Finished successfully
  | 'failed'       // Terminated due to fatal error
  | 'cancelled';   // User cancelled

export interface JobError {
  row: number;           // 1-indexed row number
  message: string;       // Human-readable error
  field?: string;        // Which field caused the error
  value?: string;        // The invalid value
}

export interface ImportOptions {
  dryRun: boolean;              // Preview only, don't modify Stripe
  skipInvalidRows: boolean;     // Continue on row errors (default: true)
  mappingId?: string;           // Optional field mapping configuration ID
}

export interface Job {
  // Identity
  id: string;                    // UUID v4
  type: 'import' | 'export';
  stripeAccountId: string;       // Connected Stripe account
  
  // Status
  status: JobStatus;
  
  // Progress tracking
  totalRows: number;
  processedRows: number;
  
  // Results (import only)
  createdCount: number;
  updatedCount: number;
  skippedCount: number;
  
  // Error tracking
  errors: JobError[];
  
  // File references (R2 keys)
  inputFileKey?: string;         // Import: uploaded CSV
  outputFileKey?: string;        // Export: generated CSV, Import: error CSV
  
  // Processing state (for chunked processing)
  cursor?: string;               // Pagination cursor for Stripe API or CSV row position
  
  // Timestamps
  createdAt: string;             // ISO 8601
  updatedAt: string;             // ISO 8601
  completedAt?: string;          // ISO 8601
  
  // Configuration
  options?: ImportOptions;
}

/**
 * Create a new job with default values
 */
export function createJob(
  type: 'import' | 'export',
  stripeAccountId: string,
  options?: Partial<Job>
): Job {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    type,
    stripeAccountId,
    status: 'pending',
    totalRows: 0,
    processedRows: 0,
    createdCount: 0,
    updatedCount: 0,
    skippedCount: 0,
    errors: [],
    createdAt: now,
    updatedAt: now,
    ...options,
  };
}

/**
 * Job response for API (excludes internal fields)
 */
export interface JobResponse {
  id: string;
  type: 'import' | 'export';
  status: JobStatus;
  totalRows: number;
  processedRows: number;
  createdCount?: number;
  updatedCount?: number;
  skippedCount?: number;
  errorCount: number;
  dryRun?: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

/**
 * Convert internal Job to API response
 */
export function toJobResponse(job: Job): JobResponse {
  const response: JobResponse = {
    id: job.id,
    type: job.type,
    status: job.status,
    totalRows: job.totalRows,
    processedRows: job.processedRows,
    errorCount: job.errors.length,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    completedAt: job.completedAt,
  };

  if (job.type === 'import') {
    response.createdCount = job.createdCount;
    response.updatedCount = job.updatedCount;
    response.skippedCount = job.skippedCount;
    response.dryRun = job.options?.dryRun;
  }

  return response;
}
