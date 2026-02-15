# Feature Specification: Product CSV Import/Export

**Feature Branch**: `001-product-csv-import`  
**Created**: 2026-02-14  
**Status**: Draft  
**Input**: User description: "Build a Stripe Marketplace app that can help do import/exports in csv. This is to help editing and creating bulk data where Stripe's own dashboard is not very good. Starting with products without pricing."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Export Products to CSV (Priority: P1)

As a Stripe merchant, I want to export all my products to a CSV file so that I can review them in a spreadsheet, make bulk edits, or back up my catalog.

**Why this priority**: Export is the foundation - merchants need to see their current data before they can edit it. This delivers immediate value even without import functionality.

**Independent Test**: Can be fully tested by connecting a Stripe account with products and downloading a CSV. Delivers value as a backup/audit tool standalone.

**Acceptance Scenarios**:

1. **Given** a merchant has connected their Stripe account via the Marketplace app, **When** they click "Export Products", **Then** a CSV file downloads containing all their products with columns for ID, name, description, active status, metadata, and images.

2. **Given** a merchant has 10,000+ products, **When** they export, **Then** the export completes successfully and the CSV contains all products.

3. **Given** a merchant has products with special characters (commas, quotes, newlines) in descriptions, **When** they export, **Then** the CSV is properly escaped and can be opened in Excel/Google Sheets without corruption.

---

### User Story 2 - Import Products from CSV (Priority: P2)

As a Stripe merchant, I want to upload a CSV file to create new products or update existing products in bulk, so I can manage my catalog more efficiently than using Stripe's dashboard one-by-one.

**Why this priority**: Import is the core value proposition for bulk editing. Depends on understanding the export format first (P1).

**Independent Test**: Can be tested by uploading a valid CSV and verifying products are created/updated in Stripe. Delivers bulk creation capability standalone.

**Acceptance Scenarios**:

1. **Given** a merchant uploads a CSV with new products (no Stripe ID), **When** the import runs, **Then** new products are created in Stripe matching the CSV data.

2. **Given** a merchant uploads a CSV with existing product IDs, **When** the import runs, **Then** those products are updated with the new values from the CSV.

3. **Given** a merchant uploads a CSV with mixed new and existing products, **When** the import runs, **Then** new products are created and existing products are updated appropriately.

4. **Given** a CSV has 100,000 rows, **When** the import runs, **Then** all products are processed (may take time, but completes successfully).

---

### User Story 3 - Dry-Run Preview (Priority: P3)

As a Stripe merchant, I want to preview what changes will be made before committing an import, so I can catch errors and avoid accidentally corrupting my product catalog.

**Why this priority**: Safety feature that builds confidence. Core import (P2) must work first.

**Independent Test**: Can be tested by uploading a CSV in dry-run mode and verifying the preview shows accurate create/update/skip counts without modifying Stripe data.

**Acceptance Scenarios**:

1. **Given** a merchant uploads a CSV, **When** they select "Dry Run" mode, **Then** they see a summary showing how many products will be created, updated, or skipped.

2. **Given** a dry-run is complete, **When** the merchant reviews the results, **Then** they can see specific changes per product (e.g., "Name: Old Value -> New Value").

3. **Given** a dry-run shows potential issues, **When** the merchant chooses not to proceed, **Then** no changes are made to their Stripe account.

---

### User Story 4 - Custom Field Mapping (Priority: P4)

As a Stripe merchant, I want to map CSV columns to Stripe product fields, so I can import data from other systems that use different column names.

**Why this priority**: Nice-to-have for flexibility. Basic import with standard column names (P2) must work first.

**Independent Test**: Can be tested by uploading a CSV with non-standard column names, configuring mappings, and verifying import works correctly.

**Acceptance Scenarios**:

1. **Given** a merchant uploads a CSV with column "Product Title" instead of "name", **When** they map "Product Title" to the Stripe "name" field, **Then** the import correctly uses that column for product names.

2. **Given** a merchant saves a field mapping configuration, **When** they import another CSV, **Then** they can reuse the saved mapping.

---

### Edge Cases

- What happens when a CSV row has an invalid product ID that doesn't exist in Stripe? (Skip row, report error, continue processing)
- What happens when a CSV has duplicate product IDs? (Process first occurrence, skip duplicates, report in errors)
- What happens when a required field (name) is empty? (Skip row, report validation error, continue processing)
- What happens when the Stripe API rate limit is hit during import? (Should pause and retry with backoff)
- What happens when the user's session expires mid-import? (Should resume or clearly report progress)
- What happens when the CSV encoding is not UTF-8? (Should attempt detection or report encoding error)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST be implemented as a Stripe Marketplace App that integrates natively into the Stripe Dashboard
- **FR-002**: System MUST authenticate requests via Stripe Apps signed requests (`fetchStripeSignature()` + app signing secret verification)
- **FR-003**: System MUST export products to CSV format with proper escaping for special characters
- **FR-004**: System MUST support importing products from CSV files to create new or update existing products
- **FR-005**: System MUST handle product fields: id, name, description, active status, metadata (as `metadata.` prefixed columns, e.g., `metadata.weight`), and images (as numbered columns `image.01`, `image.02`, etc.)
- **FR-006**: System MUST NOT handle pricing in this version (pricing is out of scope for this feature)
- **FR-007**: System MUST provide a dry-run mode that previews changes without modifying Stripe data
- **FR-008**: System MUST handle bulk operations of at least 100,000 products
- **FR-009**: System MUST report progress during long-running operations via job-based polling (users can close browser and return to check status)
- **FR-010**: System MUST handle Stripe API rate limits gracefully with retry logic
- **FR-011**: System MUST validate CSV data and use skip-and-continue strategy (process valid rows, skip invalid rows, report all errors at end)
- **FR-012**: System MUST allow mapping custom CSV columns to Stripe product fields
- **FR-013**: System MUST provide downloadable error CSV containing failed rows with an `error` column explaining each issue for re-import

### Key Entities

- **Product**: The Stripe product entity being imported/exported. Attributes: id (Stripe ID), name, description, active (boolean), metadata (key-value pairs as `metadata.` prefixed columns), images (list of URLs as numbered `image.01`, `image.02` columns)
- **Import Job**: Represents a bulk import operation. Tracks: status (pending, processing, completed, failed), total rows, processed rows, errors, created/updated/skipped counts
- **Export Job**: Represents a bulk export operation. Tracks: status, total products, progress
- **Field Mapping**: Configuration for mapping CSV columns to Stripe fields. Attributes: CSV column name, Stripe field name, transformation rules (if any)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can export their entire product catalog to CSV in under 5 minutes for catalogs up to 10,000 products
- **SC-002**: Users can import 10,000 products within 30 minutes
- **SC-003**: System handles catalogs of 100,000+ products without failure (may require longer processing time)
- **SC-004**: Dry-run preview completes in under 2 minutes for files up to 10,000 rows
- **SC-005**: 95% of import operations complete successfully without user intervention (excluding user data errors)
- **SC-006**: Error CSV download allows users to identify, fix, and re-import failed rows without support assistance

## Assumptions

- Stripe Marketplace App SDK provides necessary authentication and API access patterns
- Merchants have appropriate Stripe permissions to read/write products
- CSV is an acceptable format for the target user base (spreadsheet-literate merchants)
- Products without pricing still have value for catalog management (descriptions, metadata, organization)
- Network connectivity is stable enough for bulk operations (standard web app assumption)

## Clarifications

### Session 2026-02-14

- Q: How should metadata be represented in CSV format? → A: Prefix pattern with `metadata.` (e.g., `metadata.weight`, `metadata.color`)
- Q: How should multiple images be represented in CSV? → A: Numbered columns with dot separator (e.g., `image.01`, `image.02`)
- Q: How should long-running import progress be tracked? → A: Job-based polling (user can close browser, return later to check status)
- Q: How should invalid rows be handled during import? → A: Skip-and-continue (process valid rows, skip invalid, report all errors at end)
- Q: How should import errors be presented for correction? → A: Downloadable error CSV (failed rows with error column for re-import)

## Out of Scope

- Product pricing (prices, tiers, recurring billing configuration) - planned for future feature
- Customer entity import/export - planned for future feature
- Other Stripe entities (invoices, subscriptions, etc.) - future consideration
- Real-time sync between CSV and Stripe (this is batch import/export only)
- Version history or rollback of changes
