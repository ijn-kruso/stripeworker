# Research: Product CSV Import/Export

**Feature**: 001-product-csv-import  
**Date**: 2026-02-14  
**Purpose**: Resolve technical unknowns and establish best practices for implementation

## Research Tasks

### 1. Stripe Apps Integration (Dashboard Embedded)

**Question**: How does Stripe Apps authentication and backend communication work?

**Decision**: Use Stripe Apps with platform key authentication (`stripe_api_access_type: "platform"`). UI extension runs embedded in Stripe Dashboard, communicates with backend via signed requests using `fetchStripeSignature()`.

**Rationale**: 
- Stripe Apps are UI extensions embedded directly in the Stripe Dashboard (not external OAuth)
- When user installs the app, Stripe handles all authorization
- Backend uses platform's secret API key with `Stripe-Account` header to make API calls on behalf of installed accounts
- UI→Backend auth uses app signing secret to verify requests (not OAuth tokens)
- No need to store per-account tokens; just verify signature per request

**Alternatives Considered**:
- OAuth 2.0 flow: Not needed - platform key is simpler for Marketplace apps
- Restricted API keys: Rejected - requires user to copy/paste keys manually

**Key Implementation Details**:
```typescript
// UI Extension: Send signed request to backend
import { fetchStripeSignature } from '@stripe/ui-extension-sdk/utils';

const response = await fetch('https://backend.example.com/api/export', {
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

// Backend: Verify signature and make Stripe API call
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Verify request authenticity
const payload = JSON.stringify({ user_id: req.body.user_id, account_id: req.body.account_id });
stripe.webhooks.signature.verifyHeader(payload, req.headers['stripe-signature'], APP_SECRET);

// Make API call on behalf of the account
const products = await stripe.products.list(
  { limit: 100 },
  { stripeAccount: req.body.account_id }
);
```

**CORS Note**: UI extensions run in sandboxed iframes with `null` origin. Backend must return `Access-Control-Allow-Origin: *` for authenticated endpoints.

---

### 2. Cloudflare Workers CSV Handling

**Question**: How to parse/generate CSV within 50ms CPU limit for large files?

**Decision**: Use streaming CSV parsing with Web Streams API, process in chunks via client-side orchestration.

**Rationale**:
- Worker CPU limit is 50ms per invocation (free tier)
- Cannot process 100k rows in single request
- Client-side chunking: Upload file to R2, process N rows per request, track progress in KV
- Use `papaparse` (browser) for client-side parsing, lightweight custom parser for Worker

**Alternatives Considered**:
- Durable Objects: Rejected - adds complexity, has free tier limits (100k requests/day)
- Worker-side full file parsing: Rejected - will exceed CPU limit
- Queues: Rejected - paid feature, violates constitution

**Key Implementation Details**:
- Client uploads CSV to R2 via presigned URL
- Worker processes rows in batches of 100-500 per request
- Job state in KV: `{processed: N, total: M, errors: [], status: 'processing'}`
- Client polls job status endpoint every 2-5 seconds

---

### 3. Stripe API Rate Limits & Pagination

**Question**: How to handle 100k products with Stripe's rate limits?

**Decision**: Use pagination with `starting_after` cursor, implement exponential backoff on 429 responses.

**Rationale**:
- Stripe rate limits: 100 read requests/sec, 25 write requests/sec (default)
- Products API returns max 100 items per request
- Export 10k products = 100 requests minimum = ~1 second of API calls
- Export 100k products = 1000 requests = ~10 seconds (read-limited)
- Import with updates: 100k / 25 = 4000 seconds = ~67 minutes (worst case all writes)

**Alternatives Considered**:
- Bulk API: Stripe doesn't offer bulk product endpoints
- Parallel requests: Risky with rate limits, keep sequential with smart batching

**Key Implementation Details**:
- Use `stripe.products.list({ limit: 100, starting_after: lastId })`
- On 429: Retry with exponential backoff (1s, 2s, 4s, max 30s)
- Batch writes: Group creates/updates, respect 25/sec limit
- Store cursor position in job state for resumability

---

### 4. Job-Based Polling Architecture

**Question**: How to implement long-running jobs that survive browser close?

**Decision**: Store job state in KV, use client polling with job ID, allow resume/check status.

**Rationale**:
- Jobs can take 30+ minutes for large imports
- User must be able to close browser and return
- KV provides durable state with low latency reads
- Job ID generated on creation, returned to client immediately

**Alternatives Considered**:
- WebSockets: Rejected - more complex, client must stay connected
- Server-sent events: Rejected - client must stay connected
- Email notification: Future enhancement, not MVP

**Key Implementation Details**:
```typescript
interface Job {
  id: string;
  type: 'import' | 'export';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  stripeAccountId: string;
  totalRows: number;
  processedRows: number;
  createdCount: number;
  updatedCount: number;
  skippedCount: number;
  errors: Array<{ row: number; message: string; data: object }>;
  csvFileKey?: string;  // R2 key for input/output file
  errorCsvKey?: string; // R2 key for error rows CSV
  createdAt: string;
  updatedAt: string;
}
```

---

### 5. R2 File Storage Patterns

**Question**: How to efficiently store and retrieve CSV files in R2?

**Decision**: Use presigned URLs for direct upload/download, store file metadata in KV.

**Rationale**:
- R2 has no egress fees, suitable for CSV download
- Presigned URLs allow direct browser upload/download without Worker proxying
- Reduces Worker CPU usage and memory
- Files keyed by `{accountId}/{jobId}/{filename}`

**Alternatives Considered**:
- Worker-proxied uploads: Rejected - uses Worker memory/CPU unnecessarily
- KV for file storage: Rejected - 25MB value limit, not suitable for large CSVs
- External storage (S3): Rejected - adds external dependency, egress costs

**Key Implementation Details**:
- Generate presigned PUT URL for upload (5 min expiry)
- Generate presigned GET URL for download (1 hour expiry)
- Store file metadata in KV: `file:{jobId}` → `{ key, size, uploadedAt }`
- Delete files after 7 days (R2 lifecycle rule)

---

### 6. CSV Format Specification

**Question**: What is the exact CSV schema for product import/export?

**Decision**: Use standard columns matching Stripe Product fields, with prefixed columns for metadata and images.

**Rationale**:
- Must be compatible with Excel/Google Sheets
- Metadata needs flexible key-value support
- Images need ordered list support
- Special characters must be properly escaped

**CSV Schema**:
| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | string | No | Stripe product ID (for updates, leave blank for create) |
| `name` | string | Yes | Product name |
| `description` | string | No | Product description |
| `active` | boolean | No | Whether product is active (default: true) |
| `metadata.{key}` | string | No | Custom metadata (e.g., `metadata.sku`, `metadata.weight`) |
| `image.01` | URL | No | First product image URL |
| `image.02` | URL | No | Second product image URL |
| ... | URL | No | Additional images as `image.NN` |

**Export Format**: RFC 4180 compliant CSV with UTF-8 BOM for Excel compatibility

---

### 7. Error Handling Strategy

**Question**: How to handle and report errors during import?

**Decision**: Skip-and-continue with error CSV download containing failed rows.

**Rationale**:
- Users want to process valid rows even if some fail
- Failed rows should be easily re-importable after correction
- Error CSV includes original row data plus error message

**Error CSV Schema**:
| Column | Description |
|--------|-------------|
| `_error` | Error message explaining the failure |
| `_row` | Original row number from input CSV |
| (original columns) | All original data preserved for re-import |

**Validation Rules**:
- `name` is required (non-empty string)
- `id` if provided must be valid Stripe product ID format (`prod_*`)
- `active` must be `true`, `false`, `1`, `0`, or empty
- `image.*` values must be valid URLs or empty
- Invalid metadata keys are reported but row can still succeed

---

## Resolved Clarifications

| Original Unknown | Resolution |
|------------------|------------|
| Stripe auth pattern | Stripe Apps with platform key + signed requests (not OAuth) |
| UI→Backend communication | `fetchStripeSignature()` + app signing secret verification |
| CSV processing within limits | Client-side chunking with R2 storage |
| Rate limit handling | Exponential backoff, sequential writes |
| Long-running job tracking | KV-stored job state with polling |
| File storage | R2 with presigned URLs |
| CSV schema | Prefixed columns for metadata/images |
| Error reporting | Error CSV with failed rows for re-import |

## Dependencies Identified

| Dependency | Version | Purpose |
|------------|---------|---------|
| `hono` | ^4.x | Lightweight web framework for Workers |
| `stripe` | ^14.x | Stripe API client |
| `papaparse` | ^5.x | CSV parsing (client-side) |

## Next Steps

Research complete. Proceed to Phase 1:
1. Create `data-model.md` with entity definitions
2. Create `contracts/` with API specifications
3. Create `quickstart.md` with setup instructions
