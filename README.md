# Stripeworker - Product CSV Import/Export

A Stripe App for bulk importing and exporting products via CSV files.

## Prerequisites

- Node.js 18+
- [Yarn](https://yarnpkg.com/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) - `stripe login` to authenticate
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) (included as dev dependency)
- Cloudflare account (free tier works)

## Project Structure

```
stripeworker/
├── worker/              # Cloudflare Worker backend
└── stripeworker-ui/     # Stripe App UI extension
```

## Initial Setup

### 1. Install Dependencies

```bash
cd worker && yarn install
cd ../stripeworker-ui && yarn install
```

### 2. Get Stripe Credentials

#### STRIPE_SECRET_KEY
1. Go to [Stripe Dashboard > API Keys](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Secret key** (starts with `sk_test_`)

#### STRIPE_APP_SECRET
1. First, upload your app once: `cd stripeworker-ui && stripe apps upload`
2. Go to [Stripe Dashboard > Developers > Apps](https://dashboard.stripe.com/apps)
3. Select your app → click ⋮ menu → "Signing secret"
4. Copy the secret (starts with `absec_`)

### 3. Configure Local Secrets

Create `worker/.dev.vars`:

```ini
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_APP_SECRET=absec_your_secret_here
```

> ⚠️ This file is git-ignored. Never commit secrets.

### 4. Set Up Cloudflare Resources

```bash
cd worker

# Login to Cloudflare
yarn wrangler login

# Create KV namespace for job storage
yarn wrangler kv:namespace create STRIPEWORKER_KV
yarn wrangler kv:namespace create STRIPEWORKER_KV --preview

# Create R2 bucket for CSV files
yarn wrangler r2 bucket create stripeworker-files
```

Update `worker/wrangler.toml` with the returned namespace IDs.

## Local Development

### Terminal 1: Run Worker Backend

```bash
cd worker
yarn wrangler dev
```

Worker runs at `http://localhost:8787`

### Terminal 2: Run Stripe App UI

```bash
cd stripeworker-ui
stripe apps start
```

This opens the Stripe Dashboard with your app loaded in development mode.

## Deployment

### Deploy Worker to Custom Domain

The worker is configured to run at `api.stripeworker.com`.

#### 1. Add Domain to Cloudflare

1. In [Cloudflare Dashboard](https://dash.cloudflare.com), add `stripeworker.com` as a site
2. Update your domain registrar's nameservers to Cloudflare's nameservers
3. Wait for DNS propagation (can take up to 24h)

#### 2. Set Production Secrets

```bash
cd worker
yarn wrangler secret put STRIPE_SECRET_KEY
yarn wrangler secret put STRIPE_APP_SECRET
```

#### 3. Deploy the Worker

```bash
cd worker
yarn wrangler deploy
```

Cloudflare will automatically:
- Provision SSL certificate for `api.stripeworker.com`
- Create DNS record pointing to the worker
- Route traffic from the custom domain

Worker will be live at: `https://api.stripeworker.com`

### Upload Stripe App

```bash
cd stripeworker-ui
stripe apps upload
```

## Usage

1. Open Stripe Dashboard
2. Navigate to **Products** list
3. The app appears in the sidebar with Export/Import options

## Features

- **Export**: Download all products as CSV
- **Import**: Upload CSV to create/update products
- **Dry Run**: Preview changes before importing
- **Field Mapping**: Map custom CSV columns to Stripe fields

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Invalid signature` | Verify `STRIPE_APP_SECRET` in `.dev.vars` matches app's signing secret |
| `KVNamespace not found` | Run `wrangler kv:namespace create` and update `wrangler.toml` |
| CORS errors | Backend returns `Access-Control-Allow-Origin: *` for Stripe's sandboxed iframe |
| Rate limit exceeded | Reduce batch size or add delays between chunks |
