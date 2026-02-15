/**
 * ProductListView - Main app view embedded in Stripe Dashboard product list
 * Following Stripe Apps SDK documentation structure exactly
 */

import { useState, useCallback } from 'react';
import {
  Box,
  ContextView,
  Button,
  Link,
  Icon,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { createApiClient, Job } from '../api';
import ImportUpload from '../components/ImportUpload';
import brandIcon from '../icon.svg';

type ViewState = 'home' | 'products';

const ProductListView = ({ userContext }: ExtensionContextValue) => {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [exportStatus, setExportStatus] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Check for required context
  if (!userContext?.id || !userContext?.account?.id) {
    return (
      <ContextView 
        title="Products" 
        brandColor="#635bff" 
        brandIcon={brandIcon}
      >
        <Box css={{ padding: 'medium' }}>
          Loading...
        </Box>
      </ContextView>
    );
  }

  const api = createApiClient({
    userId: userContext.id,
    accountId: userContext.account.id,
  });

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    setExportStatus('Starting export...');
    setDownloadUrl(null);

    try {
      const job = await api.post<Job>('/export/start');
      setExportStatus(`Exporting products...`);

      // Poll for completion
      let attempts = 0;
      while (attempts < 60) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const status = await api.get<Job>(`/jobs/${job.id}`);
        
        if (status.status === 'completed') {
          const download = await api.get<{ downloadUrl: string }>(`/export/${job.id}/download`);
          setDownloadUrl(download.downloadUrl);
          setExportStatus(`Export complete! ${status.totalRows} products exported.`);
          break;
        } else if (status.status === 'failed') {
          setExportStatus('Export failed');
          break;
        }
        
        setExportStatus(`Exporting... ${status.processedRows} products`);
        attempts++;
      }
    } catch (err) {
      setExportStatus(`Error: ${err instanceof Error ? err.message : 'Export failed'}`);
    } finally {
      setIsExporting(false);
    }
  }, [api]);

  // Home view - select resource type
  if (viewState === 'home') {
    return (
      <ContextView 
        title="Stripeworker" 
        description="Import and export Stripe resources to and from CSV"
        brandColor="#635bff" 
        brandIcon={brandIcon}
      >
        <Box css={{ padding: 'medium', stack: 'y', gap: 'medium' }}>
          <Box css={{ fontWeight: 'semibold' }}>Select Resource Type</Box>
          <Button type="primary" onPress={() => setViewState('products')}>
            <Icon name="product" size="xsmall" /> Products
          </Button>
        </Box>
      </ContextView>
    );
  }

  // Products view - import/export products
  return (
    <ContextView 
      title="Products" 
      description="Import and export products to and from CSV"
      brandColor="#635bff" 
      brandIcon={brandIcon}
    >
      <Box css={{ padding: 'medium', stack: 'y', gap: 'large' }}>
        <Link type="secondary" onPress={() => setViewState('home')}>
          <Icon name="arrowLeft" size="xsmall" /> Back
        </Link>
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ fontWeight: 'semibold' }}>Export Products</Box>
          <Box>Download all your products as a CSV file.</Box>
          
          {exportStatus && <Box>{exportStatus}</Box>}
          
          <Box css={{ stack: 'x', gap: 'small' }}>
            <Button 
              type="primary" 
              onPress={handleExport}
              disabled={isExporting}
            >
              {isExporting ? 'Exporting...' : 'Export Products to CSV'}
            </Button>
          </Box>
          
          {downloadUrl && (
            <Box css={{ stack: 'y', gap: 'xsmall' }}>
              <Link href={downloadUrl} target="_blank">
                Click here to download your CSV file
              </Link>
            </Box>
          )}
        </Box>

        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ fontWeight: 'semibold' }}>Import Products</Box>
          <Box>Paste CSV content to create or update products.</Box>
          <ImportUpload api={api} />
        </Box>
      </Box>
    </ContextView>
  );
};

export default ProductListView;
