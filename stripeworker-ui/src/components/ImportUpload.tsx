/**
 * ImportUpload component - file selection and upload for CSV import
 */

import { useState, useRef } from 'react';
import {
  Box,
  Button,
  Icon,
  Spinner,
  Banner,
  Checkbox,
} from '@stripe/ui-extension-sdk/ui';
import type { createApiClient, Job, UploadUrlResponse } from '../api';

interface ImportUploadProps {
  api: ReturnType<typeof createApiClient>;
}

const ImportUpload = ({ api }: ImportUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dryRun, setDryRun] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      if (!file.name.toLowerCase().endsWith('.csv')) {
        setError('Please select a CSV file');
        return;
      }
      setSelectedFile(file);
      setError(null);
      setCurrentJob(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    try {
      // Step 1: Get presigned upload URL
      const uploadResponse = await api.post<UploadUrlResponse>('/import/upload-url', {
        filename: selectedFile.name,
        contentType: selectedFile.type || 'text/csv',
      });

      // Step 2: Upload file to presigned URL
      await api.uploadFile(uploadResponse.uploadUrl, selectedFile);

      // Step 3: Start import job
      setIsProcessing(true);
      const job = await api.post<Job>(`/import/${uploadResponse.jobId}/start`, {
        dryRun,
      });
      setCurrentJob(job);

      // Step 4: Poll for chunk processing
      await processChunks(uploadResponse.jobId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
      setIsProcessing(false);
    }
  };

  const processChunks = async (jobId: string) => {
    const maxAttempts = 600; // 30 minutes max (at 3 second intervals)
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        // Process next chunk
        const job = await api.post<Job>(`/import/${jobId}/process`, {
          batchSize: 100,
        });
        setCurrentJob(job);

        if (job.status === 'completed' || job.status === 'failed' || job.status === 'cancelled') {
          return;
        }

        // Brief pause between chunks
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

  const getProgress = () => {
    if (!currentJob || currentJob.totalRows === 0) return 0;
    return Math.round((currentJob.processedRows / currentJob.totalRows) * 100);
  };

  return (
    <Box css={{ stack: 'y', gap: 'small' }}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        style={{ display: 'none' }}
        onChange={handleFileChange as unknown as React.ChangeEventHandler<HTMLInputElement>}
      />

      {error && (
        <Banner
          type="critical"
          title="Import Error"
          description={error}
          onDismiss={() => setError(null)}
        />
      )}

      {/* File selection */}
      {!isProcessing && !currentJob && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
            <Button type="secondary" onPress={handleFileSelect}>
              <Icon name="file" />
              <span>Select CSV File</span>
            </Button>
            {selectedFile && (
              <Box css={{ color: 'secondary' }}>
                {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
              </Box>
            )}
          </Box>

          {selectedFile && (
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
                {isUploading ? (
                  <Box css={{ stack: 'x', gap: 'xsmall', alignY: 'center' }}>
                    <Spinner size="small" />
                    <span>Uploading...</span>
                  </Box>
                ) : (
                  <Box css={{ stack: 'x', gap: 'xsmall', alignY: 'center' }}>
                    <Icon name="upload" />
                    <span>{dryRun ? 'Preview Import' : 'Import Products'}</span>
                  </Box>
                )}
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
            <Box css={{ color: 'secondary', font: 'caption' }}>
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
        <Banner
          type="positive"
          title={dryRun ? 'Dry Run Complete' : 'Import Complete'}
          description={
            dryRun
              ? `Preview: Would create ${currentJob.createdCount ?? 0}, update ${currentJob.updatedCount ?? 0}, skip ${currentJob.skippedCount ?? 0} products.`
              : `Successfully created ${currentJob.createdCount ?? 0}, updated ${currentJob.updatedCount ?? 0} products. ${currentJob.skippedCount ?? 0} skipped.`
          }
          actions={
            dryRun ? (
              <Button onPress={() => {
                setDryRun(false);
                setCurrentJob(null);
              }}>
                Proceed with Import
              </Button>
            ) : undefined
          }
        />
      )}
    </Box>
  );
};

export default ImportUpload;
