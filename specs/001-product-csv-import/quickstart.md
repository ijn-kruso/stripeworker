# Quickstart: Product CSV Import/Export

**Feature**: 001-product-csv-import  
**Date**: 2026-02-14  
**Purpose**: Development setup and getting started guide

## Prerequisites

- Node.js 18+ (LTS recommended)
- Yarn (`npm install -g yarn`)
- Cloudflare account (free tier works)
- Stripe account with Apps enabled
- Stripe CLI (`brew install stripe/stripe-cli/stripe` or [download](https://stripe.com/docs/stripe-cli))
- Wrangler CLI (`yarn global add wrangler`)

## Project Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd stripeworker

# Install dependencies for worker and Stripe App UI
cd worker && yarn install
cd ../stripeworker-ui && yarn install
```

### 2. Cloudflare Setup

```bash
# Login to Cloudflare
wrangler login

# Create KV namespace for job storage
wrangler kv:namespace create STRIPEWORKER_KV
wrangler kv:namespace create STRIPEWORKER_KV --preview

# Create R2 bucket for CSV files
wrangler r2 bucket create stripeworker-files
```

Update `worker/wrangler.toml` with the created namespace/bucket IDs.

### 3. Stripe App Setup

```bash
# Initialize Stripe App in the UI directory
cd stripeworker-ui
stripe apps create stripeworker-csv

# This creates stripe-app.json with app configuration
```

Update `stripe-app.json`:
```json
{
  "id": "com.example.stripeworker-csv",
  "version": "0.0.1",
  "name": "Product CSV Import/Export",
  "icon": "./icon.png",
  "permissions": [
    { "permission": "product_read", "purpose": "Export products to CSV" },
    { "permission": "product_write", "purpose": "Import products from CSV" }
  ],
  "stripe_api_access_type": "platform",
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.product.list",
        "component": "ProductListView"
      }
    ]
  },
  "allowed_redirect_uris": []
}
```

### 4. Get App Signing Secret

After uploading your app for the first time:
```bash
stripe apps upload
```

Then get your signing secret:
1. Go to [Stripe Dashboard > Developers > Apps](https://dashboard.stripe.com/apps)
2. Select your app
3. Click overflow menu (⋮) → "Signing secret"
4. Copy the secret (`absec_...`)

### 5. Environment Variables

Create `worker/.dev.vars`:

```ini
# Your platform's Stripe secret key (for making API calls)
STRIPE_SECRET_KEY=sk_test_xxx

# App signing secret (for verifying requests from UI extension)
STRIPE_APP_SECRET=absec_xxx
```

### 6. Local Development

**Terminal 1 - Worker Backend:**
```bash
cd worker
wrangler dev
```
Worker runs at `http://localhost:8787`

**Terminal 2 - Stripe App UI:**
```bash
cd stripeworker-ui
stripe apps start
```
Opens Stripe Dashboard with your app loaded in development mode.

## Project Structure

```
stripeworker/
├── worker/                    # Cloudflare Worker backend
│   ├── src/
│   │   ├── index.ts          # Entry point, routes
│   │   ├── routes/           # API route handlers
│   │   ├── services/         # Business logic
│   │   ├── models/           # Type definitions
│   │   └── lib/
│   │       ├── auth.ts       # Signature verification
│   │       └── stripe.ts     # Stripe client helpers
│   ├── wrangler.toml         # Worker config
│   └── package.json
│
├── stripeworker-ui/           # Stripe App UI Extension
│   ├── src/
│   │   ├── views/            # Stripe App views
│   │   │   └── ProductListView.tsx
│   │   ├── components/       # React components
│   │   └── api.ts            # Backend API client with signature
│   ├── stripe-app.json       # Stripe App manifest
│   └── package.json
│
└── specs/                     # Feature specifications
    └── 001-product-csv-import/
        ├── spec.md           # Requirements
        ├── plan.md           # Implementation plan
        ├── research.md       # Technical research
        ├── data-model.md     # Entity definitions
        ├── contracts/        # API specifications
        └── quickstart.md     # This file
```

## Key Files to Create

### Worker Entry Point (`worker/src/index.ts`)

```typescript
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { exportRoutes } from './routes/export';
import { importRoutes } from './routes/import';
import { jobRoutes } from './routes/jobs';
import { verifyStripeSignature } from './lib/auth';

type Bindings = {
  STRIPEWORKER_KV: KVNamespace;
  STRIPEWORKER_FILES: R2Bucket;
  STRIPE_SECRET_KEY: string;
  STRIPE_APP_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// CORS: UI extensions run in sandboxed iframe with null origin
app.use('*', cors({
  origin: '*',  // Required for Stripe Apps sandboxed iframe
  credentials: false,
}));

// Signature verification middleware
app.use('/export/*', verifyStripeSignature);
app.use('/import/*', verifyStripeSignature);
app.use('/jobs/*', verifyStripeSignature);

app.route('/export', exportRoutes);
app.route('/import', importRoutes);
app.route('/jobs', jobRoutes);

export default app;
```

### Signature Verification (`worker/src/lib/auth.ts`)

```typescript
import Stripe from 'stripe';
import { Context, Next } from 'hono';

export async function verifyStripeSignature(c: Context, next: Next) {
  const signature = c.req.header('Stripe-Signature');
  const body = await c.req.json();
  
  if (!signature) {
    return c.json({ error: 'Missing Stripe-Signature header' }, 401);
  }

  const stripe = new Stripe(c.env.STRIPE_SECRET_KEY);
  const payload = JSON.stringify({
    user_id: body.user_id,
    account_id: body.account_id,
  });

  try {
    stripe.webhooks.signature.verifyHeader(
      payload,
      signature,
      c.env.STRIPE_APP_SECRET
    );
  } catch (err) {
    return c.json({ error: 'Invalid signature' }, 401);
  }

  // Store account_id for use in route handlers
  c.set('stripeAccountId', body.account_id);
  await next();
}
```

### Stripe App UI (`stripeworker-ui/src/views/ProductListView.tsx`)

```typescript
import { Box, Button, Banner } from '@stripe/ui-extension-sdk/ui';
import { fetchStripeSignature } from '@stripe/ui-extension-sdk/utils';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const BACKEND_URL = 'https://stripeworker.your-account.workers.dev';

const ProductListView = ({ userContext }: ExtensionContextValue) => {
  const startExport = async () => {
    const response = await fetch(`${BACKEND_URL}/export/start`, {
      method: 'POST',
      headers: {
        'Stripe-Signature': await fetchStripeSignature(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userContext?.id,
        account_id: userContext?.account.id,
      }),
    });
    const job = await response.json();
    console.log('Export job started:', job.id);
  };

  return (
    <Box css={{ padding: 'medium' }}>
      <Banner title="Product CSV Tools" />
      <Button onPress={startExport}>Export Products to CSV</Button>
    </Box>
  );
};

export default ProductListView;
```

### Worker Config (`worker/wrangler.toml`)

```toml
name = "stripeworker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[vars]
# Non-secret config

[[kv_namespaces]]
binding = "STRIPEWORKER_KV"
id = "xxx"           # From wrangler kv:namespace create
preview_id = "xxx"   # From wrangler kv:namespace create --preview

[[r2_buckets]]
binding = "STRIPEWORKER_FILES"
bucket_name = "stripeworker-files"
```

## Development Workflow

### Running Tests

```bash
# Worker (when tests exist)
cd worker && pnpm test

# UI (when tests exist)  
cd stripeworker-ui && pnpm test
```

### Deploying

```bash
# Deploy worker
cd worker && wrangler deploy

# Upload Stripe App
cd stripeworker-ui && stripe apps upload
```

### Manual Testing Checklist

1. **App Load:**
   - [ ] Run `stripe apps start` → Dashboard opens with app loaded
   - [ ] Navigate to Products list → App UI extension appears

2. **Export:**
   - [ ] Click "Export Products" → job starts
   - [ ] Poll job status → shows progress
   - [ ] Download CSV → valid file with products

3. **Import:**
   - [ ] Upload CSV → file stored in R2
   - [ ] Start import (dry-run) → preview shows changes
   - [ ] Start import (real) → products created/updated
   - [ ] Download errors → CSV with failed rows

## Common Issues

| Issue | Solution |
|-------|----------|
| `KVNamespace not found` | Run `wrangler kv:namespace create` and update wrangler.toml |
| `R2 bucket not found` | Run `wrangler r2 bucket create` and update wrangler.toml |
| `Invalid signature` | Ensure STRIPE_APP_SECRET in .dev.vars matches app's signing secret |
| `CORS error` | Backend must return `Access-Control-Allow-Origin: *` for sandboxed iframe |
| `Rate limit exceeded` | Reduce batch size or add delays between chunks |
| `stripe apps start` fails | Ensure stripe-app.json is valid and you're logged in via `stripe login` |

## Next Steps

After setup, implement in this order (by user story priority):

1. **P1 - Export Products** (`/export/*` endpoints)
2. **P2 - Import Products** (`/import/*` endpoints)
3. **P3 - Dry-Run Preview** (add `dryRun` flag to import)
4. **P4 - Custom Field Mapping** (`/mappings/*` endpoints)

See [tasks.md](tasks.md) for detailed implementation tasks (generated by `/speckit.tasks`).
