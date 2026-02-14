# Data Model: Product CSV Import/Export

**Feature**: 001-product-csv-import  
**Date**: 2026-02-14  
**Purpose**: Define entities, relationships, and storage schema

## Entity Definitions

### 1. Product (Stripe-owned)

The Stripe Product entity being imported/exported. This is the external entity we read/write via Stripe API.

```typescript
/**
 * Stripe Product - External entity
 * @see https://stripe.com/docs/api/products/object
 */
interface StripeProduct {
  id: string;              // "prod_xxx" - Stripe product ID
  name: string;            // Product name (required)
  description: string | null;
  active: boolean;
  metadata: Record<string, string>;
  images: string[];        // Array of image URLs (max 8)
  created: number;         // Unix timestamp
  updated: number;         // Unix timestamp
  // Other fields (livemode, url, etc.) not used in this feature
}

/**
 * CSV representation of a product for import/export
 */
interface ProductCsvRow {
  id?: string;             // Optional - blank for create, present for update
  name: string;            // Required
  description?: string;
  active?: boolean | string; // "true"/"false" or 1/0
  [key: `metadata.${string}`]: string;  // Dynamic metadata columns
  [key: `image.${string}`]: string;     // Dynamic image columns (image.01, image.02)
}
```

**Validation Rules**:
| Field | Rule | Error Message |
|-------|------|---------------|
| `name` | Required, non-empty | "Name is required" |
| `id` | If present, must match `prod_*` pattern | "Invalid product ID format" |
| `active` | Must be boolean-like or empty | "Active must be true/false" |
| `image.*` | Must be valid URL or empty | "Invalid image URL" |
| `metadata.*` | Key max 40 chars, value max 500 chars | "Metadata key/value too long" |

**State Transitions**: N/A - Products are stateless records

---

### 2. Job (Application-owned)

Represents an import or export operation. Stored in Cloudflare KV.

```typescript
/**
 * Job entity - stored in KV
 * Key pattern: "job:{jobId}"
 */
interface Job {
  // Identity
  id: string;                    // UUID v4
  type: 'import' | 'export';
  stripeAccountId: string;       // Connected Stripe account
  
  // Status
  status: JobStatus;
  
  // Progress tracking
  totalRows: number;
  processedRows: number;
  
  // Results (import only)
  createdCount: number;
  updatedCount: number;
  skippedCount: number;
  
  // Error tracking
  errors: JobError[];
  
  // File references (R2 keys)
  inputFileKey?: string;         // Import: uploaded CSV
  outputFileKey?: string;        // Export: generated CSV, Import: error CSV
  
  // Timestamps
  createdAt: string;             // ISO 8601
  updatedAt: string;             // ISO 8601
  completedAt?: string;          // ISO 8601
  
  // Configuration
  options?: ImportOptions;
}

type JobStatus = 
  | 'pending'      // Created, not yet started
  | 'processing'   // Actively processing rows
  | 'completed'    // Finished successfully
  | 'failed'       // Terminated due to fatal error
  | 'cancelled';   // User cancelled

interface JobError {
  row: number;                   // 1-indexed row number
  message: string;               // Human-readable error
  field?: string;                // Which field caused the error
  value?: string;                // The invalid value
}

interface ImportOptions {
  dryRun: boolean;               // Preview only, don't modify Stripe
  skipInvalidRows: boolean;      // Continue on row errors (default: true)
}
```

**Storage**: Cloudflare KV  
**Key Pattern**: `job:{jobId}`  
**TTL**: 7 days after completion

**State Transitions**:
```
┌─────────┐     start     ┌────────────┐
│ pending │──────────────►│ processing │
└─────────┘               └────────────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
              ┌───────────┐ ┌────────┐ ┌───────────┐
              │ completed │ │ failed │ │ cancelled │
              └───────────┘ └────────┘ └───────────┘
```

---

### 3. AppInstallation (Application-owned, Optional)

Tracks Stripe accounts that have used the app. Used for listing previous jobs per account. 
**Note**: No OAuth tokens needed - authentication is handled per-request via signed requests.

```typescript
/**
 * App installation record - stored in KV (optional, for tracking)
 * Key pattern: "install:{stripeAccountId}"
 */
interface AppInstallation {
  stripeAccountId: string;       // "acct_xxx" - from signed request
  
  // Cached info (optional, from first interaction)
  businessName?: string;
  
  // Timestamps
  firstSeenAt: string;           // ISO 8601
  lastActiveAt: string;          // ISO 8601
}
```

**Storage**: Cloudflare KV  
**Key Pattern**: `install:{stripeAccountId}`  
**TTL**: None (persists until app uninstalled)

**Note**: This entity is optional. Authentication happens per-request:
1. UI calls `fetchStripeSignature()` and sends to backend with `user_id` + `account_id`
2. Backend verifies signature using app's signing secret
3. Backend uses platform secret key + `Stripe-Account` header to call Stripe API

---

### 4. FieldMapping (Application-owned, P4 feature)

Configuration for mapping custom CSV columns to Stripe fields. Stored in Cloudflare KV.

```typescript
/**
 * Field mapping configuration - stored in KV
 * Key pattern: "mapping:{stripeAccountId}:{mappingId}"
 */
interface FieldMapping {
  id: string;                    // UUID v4
  stripeAccountId: string;
  name: string;                  // User-defined mapping name
  
  mappings: ColumnMapping[];
  
  createdAt: string;
  updatedAt: string;
}

interface ColumnMapping {
  csvColumn: string;             // Column header in CSV
  stripeField: StripeProductField;
  transform?: TransformRule;
}

type StripeProductField = 
  | 'id'
  | 'name'
  | 'description'
  | 'active'
  | `metadata.${string}`
  | `image.${number}`;

type TransformRule = 
  | { type: 'none' }
  | { type: 'boolean'; trueValues: string[]; falseValues: string[] }
  | { type: 'trim' }
  | { type: 'lowercase' };
```

**Storage**: Cloudflare KV  
**Key Pattern**: `mapping:{stripeAccountId}:{mappingId}`  
**TTL**: None (user-managed)

---

## Storage Schema Summary

### Cloudflare KV Keys

| Pattern | Entity | Example |
|---------|--------|---------|
| `job:{jobId}` | Job | `job:550e8400-e29b-41d4-a716-446655440000` |
| `install:{stripeAccountId}` | AppInstallation (optional) | `install:acct_1234567890` |
| `mapping:{stripeAccountId}:{mappingId}` | FieldMapping | `mapping:acct_123:map_456` |
| `jobs:{stripeAccountId}` | Job ID list | `jobs:acct_123` (array of job IDs) |

### Cloudflare R2 Keys

| Pattern | Content | Example |
|---------|---------|---------|
| `{accountId}/imports/{jobId}/input.csv` | Uploaded import file | `acct_123/imports/job_456/input.csv` |
| `{accountId}/exports/{jobId}/products.csv` | Generated export file | `acct_123/exports/job_789/products.csv` |
| `{accountId}/imports/{jobId}/errors.csv` | Failed rows with errors | `acct_123/imports/job_456/errors.csv` |

---

## Relationships

```
Stripe Dashboard (UI Extension)
         │
         │ fetchStripeSignature()
         │ user_id + account_id
         ▼
┌───────────────────┐   Stripe-Account header   ┌─────────────────┐
│  Worker Backend   │─────────────────────────►│ Stripe API      │
└───────────────────┘                           └─────────────────┘
         │                                              │
         │ stores                                       │ reads/writes
         ▼                                              ▼
┌───────────────────┐                           ┌─────────────────┐
│  Job (KV)         │                           │ Stripe Products │
│  AppInstall (KV)  │                           └─────────────────┘
│  Files (R2)       │
│  FieldMapping (KV)│
└───────────────────┘
```

---

## CSV Format Specification

### Export CSV Schema

```csv
id,name,description,active,metadata.sku,metadata.category,image.01,image.02
prod_abc123,Widget Pro,"A professional widget",true,SKU-001,Electronics,https://example.com/img1.jpg,https://example.com/img2.jpg
prod_def456,Gadget Basic,"A basic gadget",false,SKU-002,Hardware,,
```

### Import CSV Schema (same as export)

- `id` column optional: blank = create new, present = update existing
- All other columns map to corresponding Stripe Product fields
- Unknown columns are ignored (warning logged)

### Error CSV Schema

```csv
_error,_row,id,name,description,active
"Name is required",5,prod_xyz,,Some description,true
"Invalid product ID format",12,invalid-id,Test Product,,false
```
