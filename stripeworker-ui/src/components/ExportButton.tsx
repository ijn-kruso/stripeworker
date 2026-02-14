/**
 * ExportButton component - triggers /export/start
 */

import { useState } from 'react';
import {
  Box,
  Button,
  Spinner,
  Banner,
} from '@stripe/ui-extension-sdk/ui';
import type { createApiClient, Job } from '../api';

interface ExportButtonProps {
  api: ReturnType<typeof createApiClient>;
}

const ExportButton = ({ api }: ExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleExport = async () => {
    setIsExporting(true);
    setError(null);
    setDownloadUrl(null);
    setCurrentJob(null);

    try {
      // Start export job
      const job = await api.post<Job>('/export/start');
      setCurrentJob(job);

      // Poll for completion if not already complete
      if (job.status === 'processing') {
        await pollJobCompletion(job.id);
      } else if (job.status === 'completed') {
        await fetchDownloadUrl(job.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed');
    } finally {
      setIsExporting(false);
    }
  };

  const pollJobCompletion = async (jobId: string) => {
    const maxAttempts = 60; // 5 minutes max at 5 second intervals
    let attempts = 0;

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      
      try {
        const job = await api.get<Job>(`/jobs/${jobId}`);
        setCurrentJob(job);

        if (job.status === 'completed') {
          await fetchDownloadUrl(jobId);
          return;
        } else if (job.status === 'failed' || job.status === 'cancelled') {
          setError(`Export ${job.status}`);
          return;
        }
      } catch (err) {
        console.error('Poll error:', err);
      }

      attempts++;
    }

    setError('Export timed out');
  };

  const fetchDownloadUrl = async (jobId: string) => {
    try {
      const response = await api.get<{ downloadUrl: string }>(`/export/${jobId}/download`);
      setDownloadUrl(response.downloadUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get download link');
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <Box css={{ stack: 'y', gap: 'small' }}>
      {error && (
        <Banner
          type="critical"
          title="Export Error"
          description={error}
          onDismiss={() => setError(null)}
        />
      )}

      {currentJob && currentJob.status === 'processing' && (
        <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
          <Spinner size="small" />
          <Box>
            Exporting {currentJob.processedRows} products...
          </Box>
        </Box>
      )}

      {downloadUrl && (
        <Banner
          type="default"
          title="Export Complete"
          description={`Successfully exported ${currentJob?.totalRows ?? 0} products.`}
          actions={
            <Button onPress={handleDownload}>
              Download CSV
            </Button>
          }
        />
      )}

      <Button
        type="primary"
        onPress={handleExport}
        disabled={isExporting}
      >
        {isExporting ? 'Exporting...' : 'Export Products to CSV'}
      </Button>
    </Box>
  );
};

export default ExportButton;
