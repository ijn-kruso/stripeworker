/**
 * Job status routes - GET /jobs, GET /jobs/{jobId}, DELETE /jobs/{jobId}
 */

import { Hono } from 'hono';
import type { Env } from '../index';
import { createJobStore, updateJobStatus, formatJobResponse } from '../services/jobs';

const jobsRoutes = new Hono<{ Bindings: Env }>();

/**
 * GET /jobs - List all jobs for the account
 */
jobsRoutes.get('/', async (c) => {
  try {
    const accountId = c.req.query('account_id');
    const type = c.req.query('type') as 'import' | 'export' | undefined;
    const status = c.req.query('status') as 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | undefined;
    const limitStr = c.req.query('limit');
    const limit = limitStr ? parseInt(limitStr, 10) : 20;
    
    if (!accountId) {
      return c.json({ error: 'Missing account_id query parameter' }, 400);
    }

    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    const listOptions: { type?: 'import' | 'export'; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'; limit: number } = { limit };
    if (type !== undefined) listOptions.type = type;
    if (status !== undefined) listOptions.status = status;
    const jobs = await jobStore.list(accountId, listOptions);
    
    return c.json({
      jobs: jobs.map(formatJobResponse),
    });
  } catch (err) {
    console.error('List jobs error:', err);
    return c.json({ error: 'Failed to list jobs' }, 500);
  }
});

/**
 * GET /jobs/:jobId - Get job status and details
 */
jobsRoutes.get('/:jobId', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    
    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    return c.json(formatJobResponse(job));
  } catch (err) {
    console.error('Get job error:', err);
    return c.json({ error: 'Failed to get job' }, 500);
  }
});

/**
 * DELETE /jobs/:jobId - Cancel a running job
 */
jobsRoutes.delete('/:jobId', async (c) => {
  try {
    const jobId = c.req.param('jobId');
    const jobStore = createJobStore(c.env.STRIPEWORKER_KV);
    
    const job = await jobStore.get(jobId);
    
    if (!job) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    // Can only cancel pending or processing jobs
    if (!['pending', 'processing'].includes(job.status)) {
      return c.json(
        { error: 'Job cannot be cancelled', status: job.status },
        409
      );
    }
    
    // Update status to cancelled
    updateJobStatus(job, 'cancelled');
    await jobStore.save(job);
    
    return c.json(formatJobResponse(job));
  } catch (err) {
    console.error('Cancel job error:', err);
    return c.json({ error: 'Failed to cancel job' }, 500);
  }
});

export default jobsRoutes;
