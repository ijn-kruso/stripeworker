/**
 * JobProgress component - displays job status with polling
 */

import { useState, useEffect } from 'react';
import {
  Box,
  Spinner,
} from '@stripe/ui-extension-sdk/ui';
import type { createApiClient, Job, JobListResponse } from '../api';

interface JobProgressProps {
  api: ReturnType<typeof createApiClient>;
}

const JobProgress = ({ api }: JobProgressProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs on mount and poll for updates
  useEffect(() => {
    let isMounted = true;
    let pollInterval: ReturnType<typeof setInterval> | null = null;

    const fetchJobs = async () => {
      try {
        const response = await api.get<JobListResponse>('/jobs', { limit: '10' });
        if (isMounted) {
          setJobs(response.jobs);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load jobs');
          setIsLoading(false);
        }
      }
    };

    fetchJobs();

    // Poll every 5 seconds if there are active jobs
    pollInterval = setInterval(() => {
      const hasActiveJobs = jobs.some(j => 
        j.status === 'pending' || j.status === 'processing'
      );
      if (hasActiveJobs) {
        fetchJobs();
      }
    }, 5000);

    return () => {
      isMounted = false;
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [api]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  const getStatusText = (status: Job['status']) => {
    switch (status) {
      case 'pending': return '⏳ Pending';
      case 'processing': return '🔄 Processing';
      case 'completed': return '✓ Completed';
      case 'failed': return '✗ Failed';
      case 'cancelled': return '⊘ Cancelled';
      default: return status;
    }
  };

  const getProgress = (job: Job) => {
    if (job.totalRows === 0) return 0;
    return Math.round((job.processedRows / job.totalRows) * 100);
  };

  if (isLoading) {
    return (
      <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
        <Spinner size="small" />
        <Box>Loading jobs...</Box>
      </Box>
    );
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  if (jobs.length === 0) {
    return <Box>No recent jobs. Start an export or import to see progress here.</Box>;
  }

  return (
    <Box css={{ stack: 'y', gap: 'medium' }}>
      {jobs.map((job) => (
        <Box key={job.id} css={{ stack: 'y', gap: 'xsmall', padding: 'small' }}>
          {/* Job header */}
          <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
            <Box css={{ fontWeight: 'semibold' }}>
              {job.type === 'export' ? 'Export' : 'Import'} - {getStatusText(job.status)}
            </Box>
          </Box>
          
          {/* Date */}
          <Box css={{ font: 'caption' }}>
            {formatDate(job.createdAt)}
          </Box>

          {/* Progress info */}
          <Box css={{ font: 'caption' }}>
            {job.status === 'processing' ? (
              <Box css={{ stack: 'x', gap: 'xsmall', alignY: 'center' }}>
                <Spinner size="small" />
                <span>{getProgress(job)}% ({job.processedRows}/{job.totalRows} rows)</span>
              </Box>
            ) : (
              <span>{job.processedRows} of {job.totalRows} rows</span>
            )}
          </Box>

          {/* Import-specific stats */}
          {job.type === 'import' && job.status === 'completed' && (
            <Box css={{ font: 'caption' }}>
              Created: {job.createdCount ?? 0}, Updated: {job.updatedCount ?? 0}, Skipped: {job.skippedCount ?? 0}
              {job.dryRun && ' (Dry Run)'}
            </Box>
          )}

          {/* Error count */}
          {job.errorCount > 0 && (
            <Box>
              {job.errorCount} errors
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default JobProgress;
