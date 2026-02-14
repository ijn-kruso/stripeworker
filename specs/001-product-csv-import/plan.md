# Implementation Plan: Product CSV Import/Export

**Branch**: `001-product-csv-import` | **Date**: 2026-02-14 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-product-csv-import/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a Stripe App (UI extension embedded in Stripe Dashboard) enabling merchants to export products to CSV and import CSV files to create/update products in bulk. Uses Cloudflare Workers for serverless backend with client-side chunking for 100k+ row scale, Cloudflare KV/R2 for job/file storage, and Stripe Apps SDK for dashboard-embedded UI.

## Technical Context

**Language/Version**: TypeScript (strict mode enabled)  
**Primary Dependencies**: Cloudflare Workers SDK, Stripe SDK, Stripe Apps UI Extension SDK, Hono (web framework)  
**Storage**: Cloudflare KV (job state), Cloudflare R2 (CSV file storage)  
**Testing**: Manual testing for MVP; automated tests added when stability is needed  
**Target Platform**: Cloudflare Workers (V8 isolates) for backend, Stripe Dashboard (embedded UI extension) for frontend  
**Project Type**: web (backend worker + Stripe App UI extension)  
**Performance Goals**: Export 10k products < 5 min, Import 10k products < 30 min, Dry-run < 2 min for 10k rows  
**Constraints**: 50ms CPU per invocation (free tier), no persistent connections, streaming/pagination required, handle Stripe rate limits (100 requests/sec read, 25 writes/sec)  
**Scale/Scope**: 100,000+ products, single tenant per request (Stripe merchant)  
**Auth Model**: Stripe Apps signed requests (`fetchStripeSignature()` + app signing secret), platform key with `Stripe-Account` header

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Assessment |
|-----------|--------|------------|
| **I. Simplicity First (YAGNI)** | ✅ PASS | Start with export+import only, no pricing. Client-side chunking avoids Durable Objects complexity. Skip custom field mapping for MVP. |
| **II. Scale Performance** | ✅ PASS | Design uses chunked client-side requests to stay within 50ms CPU limit. Pagination for Stripe API. Streaming CSV parsing. Job-based polling for long operations. |
| **III. Serverless Architecture** | ✅ PASS | Cloudflare Workers runtime, KV for job state, R2 for file storage. No persistent connections. Stripe SDK with rate limit handling. |

**Pre-design Gate**: PASS - All principles can be satisfied with planned approach.

**Post-design Gate** (after Phase 1):

| Principle | Status | Post-Design Assessment |
|-----------|--------|------------------------|
| **I. Simplicity First** | ✅ PASS | 4 entities defined (Product, Job, ConnectedAccount, FieldMapping). Clean REST API with 15 endpoints. FieldMapping deferred to P4. No unnecessary abstractions. |
| **II. Scale Performance** | ✅ PASS | `/import/{jobId}/process` endpoint enables client-side chunking. Batch size configurable (100-500 rows). R2 presigned URLs avoid Worker memory usage. |
| **III. Serverless** | ✅ PASS | All storage uses KV/R2. No WebSockets or persistent connections. OAuth tokens stored in KV. Job state survives browser close. |

**Post-design Gate**: PASS - Design adheres to all constitution principles.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
worker/
├── src/
│   ├── index.ts          # Worker entry point, route definitions
│   ├── routes/
│   │   ├── export.ts     # Export job endpoints
│   │   ├── import.ts     # Import job endpoints
│   │   └── jobs.ts       # Job status endpoints
│   ├── services/
│   │   ├── stripe.ts     # Stripe API client wrapper
│   │   ├── csv.ts        # CSV parsing/generation
│   │   └── jobs.ts       # Job state management
│   ├── models/
│   │   ├── product.ts    # Product type definitions
│   │   └── job.ts        # Job type definitions
│   └── lib/
│       ├── auth.ts       # Stripe signature verification
│       ├── validation.ts # CSV row validation
│       └── mapping.ts    # Field mapping utilities
├── wrangler.toml         # Worker configuration
└── package.json

stripeworker-ui/                   # Stripe App UI Extension
├── src/
│   ├── views/
│   │   └── ProductListView.tsx   # Main app view (dashboard viewport)
│   ├── components/
│   │   ├── ExportButton.tsx
│   │   ├── ImportUpload.tsx
│   │   ├── JobProgress.tsx
│   │   └── FieldMapper.tsx
│   └── api.ts                    # Backend API client with signature
├── stripe-app.json               # Stripe App manifest
├── package.json
└── tsconfig.json
```

**Structure Decision**: Stripe App architecture with separate `worker/` (Cloudflare Workers backend) and `stripeworker-ui/` (Stripe App UI extension) as specified in constitution.

## Complexity Tracking

> **No violations detected.** Design adheres to all constitution principles.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
