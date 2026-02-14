<!--
Sync Impact Report
==================
Version change: 1.0.0 -> 1.1.0
Modified principles:
  - Scale Performance: Removed Cloudflare Queues (paid feature), added free-tier chunking strategies
Added sections: None
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md (compatible - no changes needed)
  - .specify/templates/spec-template.md (compatible - no changes needed)
  - .specify/templates/tasks-template.md (compatible - no changes needed)
Follow-up TODOs: None
-->

# StripeWorker Constitution

A Stripe Marketplace App enabling merchants to export products to CSV, edit them, re-upload with custom field mappings, preview changes via dry-run, and apply updates at massive scale (100k+ rows).

## Core Principles

### I. Simplicity First (YAGNI)

- Start with the simplest implementation that solves the problem
- Do not add features or abstractions until they are needed
- Prefer straightforward, readable code over clever optimizations
- When in doubt, leave it out; complexity MUST be justified with measurable benefit
- Refactor only when current code blocks progress or causes maintainability issues

**Rationale**: A serverless bulk-processing tool requires maintainability; unnecessary complexity increases cost and debugging time.

### II. Scale Performance

- Operations MUST handle 100k+ rows efficiently within Cloudflare Worker limits
- Batch processing: Large datasets MUST be chunked to respect CPU time limits (50ms CPU per invocation on free tier)
- Memory constraints: Never load entire datasets into memory; use streaming or pagination
- Async patterns: Use client-side chunking with multiple requests; Durable Objects only if truly needed (has free tier limits)
- Dry-run MUST complete in reasonable time to provide preview before commit

**Rationale**: The core value proposition is bulk operations; failing at scale means failing the product.

### III. Serverless Architecture

- All backend code MUST be compatible with Cloudflare Workers runtime (V8 isolates, no Node.js APIs)
- Storage MUST use Cloudflare KV, R2, or D1; no external databases requiring persistent connections
- Stateless request handling: Each worker invocation MUST NOT rely on in-memory state from previous requests
- Use Stripe SDK appropriately, handling rate limits and pagination for large product catalogs
- Error handling MUST account for cold starts and timeout scenarios

**Rationale**: Cloudflare Workers imposes specific constraints; code that violates them will fail in production.

## Technology Stack

| Component | Technology | Location |
|-----------|------------|----------|
| Backend API | TypeScript, Cloudflare Workers | `/worker` |
| Frontend UI | TypeScript | `/stripeworker-ui` |
| Storage | Cloudflare KV | N/A |
| External API | Stripe SDK | Both |

**Conventions**:
- TypeScript strict mode enabled in both projects
- Shared types between worker and UI SHOULD be extracted if duplication occurs
- Environment variables via wrangler.toml for worker, standard .env for UI

## Development Workflow

1. **Feature Development**: Start with user story, define acceptance criteria, implement incrementally
2. **Testing**: Manual testing acceptable for MVP; automated tests added when stability is needed
3. **Deployment**: Worker deployed via `wrangler deploy`; UI deployment per chosen hosting platform
4. **Code Organization**: Keep worker and UI concerns separated; shared logic in common modules if needed

## Governance

This constitution provides guiding principles, not rigid enforcement. Amendments may be made as the project evolves.

- **Amendments**: Document reasoning in commit message; no formal approval required for minor clarifications
- **Violations**: Acceptable when justified with clear rationale in code comments or PR description
- **Reviews**: Constitution alignment is a consideration, not a blocker, during code review

**Version**: 1.1.0 | **Ratified**: 2026-02-14 | **Last Amended**: 2026-02-14
