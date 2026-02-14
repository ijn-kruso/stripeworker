/**
 * Job CRUD operations with KV storage
 */

import type { Job, JobStatus, JobError, JobResponse } from '../models/job';
import { toJobResponse } from '../models/job';

const JOB_KEY_PREFIX = 'job:';
const JOB_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

export interface JobStore {
  get(jobId: string): Promise<Job | null>;
  save(job: Job): Promise<void>;
  delete(jobId: string): Promise<void>;
  list(accountId: string, options?: ListJobsOptions): Promise<Job[]>;
}

export interface ListJobsOptions {
  type?: 'import' | 'export';
  status?: JobStatus;
  limit?: number;
}

/**
 * KV-backed job store implementation
 */
export function createJobStore(kv: KVNamespace): JobStore {
  return {
    async get(jobId: string): Promise<Job | null> {
      const key = `${JOB_KEY_PREFIX}${jobId}`;
      const data = await kv.get(key, 'json');
      return data as Job | null;
    },

    async save(job: Job): Promise<void> {
      const key = `${JOB_KEY_PREFIX}${job.id}`;
      job.updatedAt = new Date().toISOString();
      
      // Set TTL only for completed/failed/cancelled jobs
      const shouldExpire = ['completed', 'failed', 'cancelled'].includes(job.status);

      if (shouldExpire) {
        await kv.put(key, JSON.stringify(job), { expirationTtl: JOB_TTL_SECONDS });
      } else {
        await kv.put(key, JSON.stringify(job));
      }

      // Also store in account's job list for lookup
      await updateAccountJobsList(kv, job);
    },

    async delete(jobId: string): Promise<void> {
      const key = `${JOB_KEY_PREFIX}${jobId}`;
      await kv.delete(key);
    },

    async list(accountId: string, options: ListJobsOptions = {}): Promise<Job[]> {
      // List jobs for an account using the account index
      const indexKey = `account-jobs:${accountId}`;
      const jobIds = await kv.get(indexKey, 'json') as string[] | null;

      if (!jobIds || jobIds.length === 0) {
        return [];
      }

      // Fetch all jobs
      const jobs: Job[] = [];
      for (const jobId of jobIds) {
        const job = await this.get(jobId);
        if (job) {
          // Apply filters
          if (options.type && job.type !== options.type) continue;
          if (options.status && job.status !== options.status) continue;
          jobs.push(job);
        }
      }

      // Sort by createdAt descending
      jobs.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      // Apply limit
      const limit = options.limit ?? 20;
      return jobs.slice(0, limit);
    },
  };
}

/**
 * Maintain an index of jobs per account for listing
 */
async function updateAccountJobsList(kv: KVNamespace, job: Job): Promise<void> {
  const indexKey = `account-jobs:${job.stripeAccountId}`;
  let jobIds = await kv.get(indexKey, 'json') as string[] | null;

  if (!jobIds) {
    jobIds = [];
  }

  // Add job ID if not present
  if (!jobIds.includes(job.id)) {
    jobIds.unshift(job.id); // Add to front (most recent)
  }

  // Limit to last 100 jobs
  if (jobIds.length > 100) {
    jobIds = jobIds.slice(0, 100);
  }

  await kv.put(indexKey, JSON.stringify(jobIds));
}

/**
 * Update job status helper
 */
export function updateJobStatus(job: Job, status: JobStatus): Job {
  job.status = status;
  job.updatedAt = new Date().toISOString();

  if (['completed', 'failed', 'cancelled'].includes(status)) {
    job.completedAt = new Date().toISOString();
  }

  return job;
}

/**
 * Add error to job
 */
export function addJobError(job: Job, error: Omit<JobError, 'row'>, row?: number): Job {
  job.errors.push({
    row: row ?? job.errors.length + 1,
    ...error,
  });
  job.updatedAt = new Date().toISOString();
  return job;
}

/**
 * Increment job progress
 */
export function incrementJobProgress(
  job: Job,
  options: {
    processedRows?: number;
    createdCount?: number;
    updatedCount?: number;
    skippedCount?: number;
  } = {}
): Job {
  if (options.processedRows !== undefined) {
    job.processedRows += options.processedRows;
  }
  if (options.createdCount !== undefined) {
    job.createdCount += options.createdCount;
  }
  if (options.updatedCount !== undefined) {
    job.updatedCount += options.updatedCount;
  }
  if (options.skippedCount !== undefined) {
    job.skippedCount += options.skippedCount;
  }
  job.updatedAt = new Date().toISOString();
  return job;
}

/**
 * Format job for API response
 */
export function formatJobResponse(job: Job): JobResponse {
  return toJobResponse(job);
}
