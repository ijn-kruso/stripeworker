/**
 * ImportUpload component - CSV import via text paste (Stripe Apps compatible)
 */

import { useState } from 'react';
import {
  Box,
  Button,
  Spinner,
  Banner,
  Checkbox,
  TextArea,
} from '@stripe/ui-extension-sdk/ui';
import type { createApiClient, Job } from '../api';

interface ImportUploadProps {
  api: ReturnType<typeof createApiClient>;
}

const ImportUpload = ({ api }: ImportUploadProps) => {
  const [csvContent, setCsvContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dryRun, setDryRun] = useState(false);

  const handleUpload = async () => {
    if (!csvContent.trim()) {
      setError('Please paste CSV content');
      return;
    }

    // Basic validation: check for header row
    const lines = csvContent.trim().split('\n');
    if (lines.length < 2) {
      setError('CSV must have a header row and at least one data row');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Start import with CSV content sent directly to backend
      const job = await api.post<Job>('/import/from-csv-content', {
        csvContent,
        dryRun,
      });
      setCurrentJob(job);
      setIsProcessing(true);

      // Poll for chunk processing
      await processChunks(job.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
      setIsProcessing(false);
    }
  };

  const processChunks = async (jobId: string) => {
    const maxAttempts = 600;
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        const job = await api.post<Job>(`/import/${jobId}/process`, {
          batchSize: 100,
        });
        setCurrentJob(job);

        if (job.status === 'completed' || job.status === 'failed' || job.status === 'cancelled') {
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (err) {
        console.error('Chunk processing error:', err);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      attempts++;
    }

    setError('Import timed out');
  };

  const handleCancel = async () => {
    if (!currentJob || currentJob.status !== 'processing') return;

    try {
      await api.delete(`/jobs/${currentJob.id}`);
      setCurrentJob(prev => prev ? { ...prev, status: 'cancelled' } : null);
    } catch (err) {
      console.error('Cancel error:', err);
    }
  };

  const handleReset = () => {
    setCsvContent('');
    setCurrentJob(null);
    setError(null);
    setDryRun(false);
  };

  const getProgress = () => {
    if (!currentJob || currentJob.totalRows === 0) return 0;
    return Math.round((currentJob.processedRows / currentJob.totalRows) * 100);
  };

  const getRowCount = () => {
    if (!csvContent.trim()) return 0;
    return Math.max(0, csvContent.trim().split('\n').length - 1);
  };

  return (
    <Box css={{ stack: 'y', gap: 'small' }}>
      {error && (
        <Banner
          type="critical"
          title="Import Error"
          description={error}
          onDismiss={() => setError(null)}
        />
      )}

      {/* CSV content input */}
      {!isProcessing && !currentJob && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <TextArea
            label="Paste CSV content"
            placeholder="id,name,description,active&#10;prod_xxx,My Product,Description,true&#10;..."
            value={csvContent}
            onChange={(e) => setCsvContent(e.target.value)}
            rows={8}
          />
          
          {csvContent.trim() && (
            <Box css={{ color: 'secondary' }}>
              {getRowCount()} data row(s) detected
            </Box>
          )}

          {csvContent.trim() && (
            <Box css={{ stack: 'y', gap: 'small' }}>
              <Checkbox
                label="Dry run (preview changes without applying)"
                checked={dryRun}
                onChange={(e) => setDryRun(e.target.checked)}
              />
              <Button
                type="primary"
                onPress={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? 'Uploading...' : (dryRun ? 'Preview Import' : 'Import Products')}
              </Button>
            </Box>
          )}
        </Box>
      )}

      {/* Processing progress */}
      {isProcessing && currentJob && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
            <Spinner size="small" />
            <Box>
              {dryRun ? 'Previewing' : 'Importing'}: {getProgress()}% ({currentJob.processedRows}/{currentJob.totalRows} rows)
            </Box>
          </Box>
          
          {currentJob.type === 'import' && (
            <Box>
              Created: {currentJob.createdCount ?? 0} | 
              Updated: {currentJob.updatedCount ?? 0} | 
              Skipped: {currentJob.skippedCount ?? 0}
            </Box>
          )}

          <Button type="destructive" onPress={handleCancel}>
            Cancel
          </Button>
        </Box>
      )}

      {/* Completion result */}
      {currentJob && currentJob.status === 'completed' && !isProcessing && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Banner
            type="default"
            title={dryRun ? 'Dry Run Complete' : 'Import Complete'}
            description={
              dryRun
                ? `Preview: Would create ${currentJob.createdCount ?? 0}, update ${currentJob.updatedCount ?? 0}, skip ${currentJob.skippedCount ?? 0} products.`
                : `Successfully created ${currentJob.createdCount ?? 0}, updated ${currentJob.updatedCount ?? 0} products. ${currentJob.skippedCount ?? 0} skipped.`
            }
          />
          {dryRun ? (
            <Button type="primary" onPress={() => {
              setDryRun(false);
              setCurrentJob(null);
            }}>
              Proceed with Import
            </Button>
          ) : (
            <Button type="secondary" onPress={handleReset}>
              Import Another File
            </Button>
          )}
        </Box>
      )}

      {/* Failed state */}
      {currentJob && currentJob.status === 'failed' && !isProcessing && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Banner
            type="critical"
            title="Import Failed"
            description="The import encountered an error and could not complete."
          />
          <Button type="secondary" onPress={handleReset}>
            Try Again
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ImportUpload;
