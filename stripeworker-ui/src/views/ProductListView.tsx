/**
 * ProductListView - Main app view embedded in Stripe Dashboard product list
 */

import {
  Box,
  ContextView,
  Divider,
  Spinner,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

import { createApiClient } from '../api';
import ExportButton from '../components/ExportButton';
import ImportUpload from '../components/ImportUpload';
import JobProgress from '../components/JobProgress';

interface ProductListViewProps {
  userContext: ExtensionContextValue['userContext'];
  environment: ExtensionContextValue['environment'];
}

const ProductListView = ({ userContext, environment: _environment }: ProductListViewProps) => {
  // Ensure we have required context
  if (!userContext?.id || !userContext?.account?.id) {
    return (
      <ContextView title="Product CSV Import/Export">
        <Box css={{ padding: 'medium' }}>
          <Spinner size="small" />
          <Box css={{ marginTop: 'small' }}>Loading user context...</Box>
        </Box>
      </ContextView>
    );
  }

  // Create API client with user context
  const api = createApiClient({
    userId: userContext.id,
    accountId: userContext.account.id,
  });

  return (
    <ContextView
      title="Product CSV Import/Export"
      description="Export products to CSV or import products from a CSV file"
    >
      <Box css={{ padding: 'medium', stack: 'y', gap: 'large' }}>
        {/* Export Section */}
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ font: 'heading', fontWeight: 'semibold' }}>
            Export Products
          </Box>
          <Box css={{ color: 'secondary' }}>
            Download all your products as a CSV file for backup or editing.
          </Box>
          <ExportButton api={api} />
        </Box>

        <Divider />

        {/* Import Section */}
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ font: 'heading', fontWeight: 'semibold' }}>
            Import Products
          </Box>
          <Box css={{ color: 'secondary' }}>
            Upload a CSV file to create new products or update existing ones.
          </Box>
          <ImportUpload api={api} />
        </Box>

        <Divider />

        {/* Job Progress Section */}
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ font: 'heading', fontWeight: 'semibold' }}>
            Recent Jobs
          </Box>
          <JobProgress api={api} />
        </Box>
      </Box>
    </ContextView>
  );
};

export default ProductListView;
