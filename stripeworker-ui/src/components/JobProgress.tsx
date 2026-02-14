/**
 * JobProgress component - displays job status with polling
 */

import { useState, useEffect } from 'react';
import {
  Box,
  Icon,
  Spinner,
  Badge,
  List,
  ListItem,
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

  const getStatusBadge = (status: Job['status']) => {
    switch (status) {
      case 'pending':
        return <Badge type="info">Pending</Badge>;
      case 'processing':
        return <Badge type="warning">Processing</Badge>;
      case 'completed':
        return <Badge type="positive">Completed</Badge>;
      case 'failed':
        return <Badge type="negative">Failed</Badge>;
      case 'cancelled':
        return <Badge type="info">Cancelled</Badge>;
      default:
        return <Badge type="info">{status}</Badge>;
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
        <Box css={{ color: 'secondary' }}>Loading jobs...</Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box css={{ color: 'critical' }}>
        Error: {error}
      </Box>
    );
  }

  if (jobs.length === 0) {
    return (
      <Box css={{ color: 'secondary' }}>
        No recent jobs. Start an export or import to see progress here.
      </Box>
    );
  }

  return (
    <Box css={{ stack: 'y', gap: 'small' }}>
      <List>
        {jobs.map((job) => (
          <ListItem
            key={job.id}
            id={job.id}
            title={
              <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
                <Icon name={job.type === 'export' ? 'download' : 'upload'} />
                <span>{job.type === 'export' ? 'Export' : 'Import'}</span>
                {getStatusBadge(job.status)}
              </Box>
            }
            secondaryTitle={formatDate(job.createdAt)}
          >
            <Box css={{ stack: 'y', gap: 'xsmall' }}>
              {/* Progress info */}
              <Box css={{ color: 'secondary', font: 'caption' }}>
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
                <Box css={{ color: 'secondary', font: 'caption' }}>
                  Created: {job.createdCount ?? 0}, 
                  Updated: {job.updatedCount ?? 0}, 
                  Skipped: {job.skippedCount ?? 0}
                  {job.dryRun && <Badge type="info">Dry Run</Badge>}
                </Box>
              )}

              {/* Error count */}
              {job.errorCount > 0 && (
                <Box css={{ color: 'attention', font: 'caption' }}>
                  {job.errorCount} errors
                </Box>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JobProgress;
