# Tasks: Product CSV Import/Export

**Input**: Design documents from `/specs/001-product-csv-import/`  
**Prerequisites**: plan.md ✓, spec.md ✓, research.md ✓, data-model.md ✓, contracts/ ✓

**Tests**: Manual testing for MVP (per plan.md). No automated test tasks included.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Tasks without [Story] are shared infrastructure

## Path Conventions

- **Backend**: `worker/src/`
- **Frontend**: `stripeworker-ui/src/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for both worker and UI extension

- [ ] T001 Initialize worker project with `pnpm init` and configure TypeScript in worker/
- [ ] T002 [P] Initialize Stripe App project with `stripe apps create` in stripeworker-ui/
- [ ] T003 [P] Add dependencies (hono, stripe) to worker/package.json
- [ ] T004 [P] Add dependencies (@stripe/ui-extension-sdk) to stripeworker-ui/package.json
- [ ] T005 Configure wrangler.toml with KV namespace and R2 bucket bindings in worker/wrangler.toml
- [ ] T006 [P] Configure stripe-app.json with product_read/product_write permissions in stripeworker-ui/stripe-app.json
- [ ] T007 [P] Configure TypeScript strict mode in worker/tsconfig.json
- [ ] T008 [P] Configure TypeScript for Stripe App in stripeworker-ui/tsconfig.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T009 Create Worker entry point with Hono app and CORS config in worker/src/index.ts
- [ ] T010 [P] Implement Stripe signature verification middleware in worker/src/lib/auth.ts
- [ ] T011 [P] Create Job type definitions matching data-model.md in worker/src/models/job.ts
- [ ] T012 [P] Create Product CSV row type definitions in worker/src/models/product.ts
- [ ] T013 Implement job CRUD operations with KV storage in worker/src/services/jobs.ts
- [ ] T014 [P] Create Stripe client wrapper with rate limit handling in worker/src/services/stripe.ts
- [ ] T015 [P] Create signed API client helper with fetchStripeSignature in stripeworker-ui/src/api.ts
- [ ] T016 Create base view component structure in stripeworker-ui/src/views/ProductListView.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Export Products to CSV (Priority: P1) 🎯 MVP

**Goal**: Merchants can export all products to a downloadable CSV file

**Independent Test**: 
1. Open Stripe Dashboard with app installed
2. Click "Export Products"
3. Wait for job completion
4. Download CSV and verify it contains all products with correct columns

### Implementation for User Story 1

- [ ] T017 [US1] Implement CSV generation service with RFC 4180 compliance in worker/src/services/csv.ts
- [ ] T018 [US1] Create export routes file with POST /export/start endpoint in worker/src/routes/export.ts
- [ ] T019 [US1] Implement startExport handler: create job, fetch products with pagination in worker/src/routes/export.ts
- [ ] T020 [US1] Implement product-to-CSV-row transformation with metadata.* and image.* columns in worker/src/services/csv.ts
- [ ] T021 [US1] Add GET /export/{jobId}/download endpoint returning presigned R2 URL in worker/src/routes/export.ts
- [ ] T022 [US1] Implement R2 presigned URL generation for download in worker/src/services/storage.ts
- [ ] T023 [US1] Create job status routes (GET /jobs, GET /jobs/{jobId}) in worker/src/routes/jobs.ts
- [ ] T024 [US1] Wire up export and jobs routes in worker entry point in worker/src/index.ts
- [ ] T025 [P] [US1] Create ExportButton component triggering /export/start in stripeworker-ui/src/components/ExportButton.tsx
- [ ] T026 [P] [US1] Create JobProgress component with polling for job status in stripeworker-ui/src/components/JobProgress.tsx
- [ ] T027 [US1] Integrate ExportButton and JobProgress into ProductListView in stripeworker-ui/src/views/ProductListView.tsx

**Checkpoint**: User Story 1 complete - merchants can export products to CSV

---

## Phase 4: User Story 2 - Import Products from CSV (Priority: P2)

**Goal**: Merchants can upload CSV to create new or update existing products in bulk

**Independent Test**:
1. Export products (US1) to get CSV format
2. Modify CSV (add new rows, edit existing)
3. Upload modified CSV
4. Verify new products created and existing products updated in Stripe

### Implementation for User Story 2

- [ ] T028 [US2] Implement CSV parsing service for import in worker/src/services/csv.ts
- [ ] T029 [US2] Create import routes file with POST /import/upload-url endpoint in worker/src/routes/import.ts
- [ ] T030 [US2] Implement presigned URL generation for R2 upload in worker/src/services/storage.ts
- [ ] T031 [US2] Add POST /import/{jobId}/start endpoint to begin processing in worker/src/routes/import.ts
- [ ] T032 [US2] Implement CSV row validation with skip-and-continue strategy in worker/src/lib/validation.ts
- [ ] T033 [US2] Add POST /import/{jobId}/process endpoint for chunked processing in worker/src/routes/import.ts
- [ ] T034 [US2] Implement Stripe product create/update logic with rate limit backoff in worker/src/routes/import.ts
- [ ] T035 [US2] Implement error CSV generation for failed rows in worker/src/services/csv.ts
- [ ] T036 [US2] Add GET /import/{jobId}/errors endpoint for error CSV download in worker/src/routes/import.ts
- [ ] T037 [US2] Add DELETE /jobs/{jobId} endpoint for job cancellation in worker/src/routes/jobs.ts
- [ ] T038 [US2] Wire up import routes in worker entry point in worker/src/index.ts
- [ ] T039 [P] [US2] Create ImportUpload component with file selection and upload in stripeworker-ui/src/components/ImportUpload.tsx
- [ ] T040 [US2] Add chunked processing loop to poll /import/{jobId}/process in stripeworker-ui/src/components/ImportUpload.tsx
- [ ] T041 [US2] Integrate ImportUpload into ProductListView in stripeworker-ui/src/views/ProductListView.tsx

**Checkpoint**: User Story 2 complete - merchants can import/update products from CSV

---

## Phase 5: User Story 3 - Dry-Run Preview (Priority: P3)

**Goal**: Merchants can preview import changes before committing them

**Independent Test**:
1. Upload a CSV file
2. Enable "Dry Run" mode before starting import
3. Verify preview shows create/update/skip counts
4. Verify no changes made to Stripe when dry-run completes

### Implementation for User Story 3

- [ ] T042 [US3] Add dryRun flag handling to import start endpoint in worker/src/routes/import.ts
- [ ] T043 [US3] Implement dry-run mode in process endpoint (validate without Stripe API calls) in worker/src/routes/import.ts
- [ ] T044 [US3] Track would-be-created/updated/skipped counts in dry-run mode in worker/src/routes/import.ts
- [ ] T045 [US3] Add dryRun checkbox to ImportUpload component in stripeworker-ui/src/components/ImportUpload.tsx
- [ ] T046 [US3] Display dry-run preview results (create/update/skip counts) in JobProgress in stripeworker-ui/src/components/JobProgress.tsx
- [ ] T047 [US3] Add "Proceed with Import" button after dry-run review in stripeworker-ui/src/components/ImportUpload.tsx

**Checkpoint**: User Story 3 complete - merchants can safely preview changes before import

---

## Phase 6: User Story 4 - Custom Field Mapping (Priority: P4)

**Goal**: Merchants can map non-standard CSV columns to Stripe product fields

**Independent Test**:
1. Upload CSV with column "Product Title" instead of "name"
2. Create mapping: "Product Title" → "name"
3. Run import with saved mapping
4. Verify products created with correct names

### Implementation for User Story 4

- [ ] T048 [P] [US4] Create FieldMapping type definitions in worker/src/models/mapping.ts
- [ ] T049 [US4] Create mappings routes file with CRUD endpoints in worker/src/routes/mappings.ts
- [ ] T050 [US4] Implement mapping storage in KV (create, read, update, delete) in worker/src/routes/mappings.ts
- [ ] T051 [US4] Wire up mappings routes in worker entry point in worker/src/index.ts
- [ ] T052 [US4] Implement field mapping application during CSV parsing in worker/src/lib/mapping.ts
- [ ] T053 [US4] Integrate mapping lookup in import process endpoint in worker/src/routes/import.ts
- [ ] T054 [P] [US4] Create FieldMapper component for column mapping UI in stripeworker-ui/src/components/FieldMapper.tsx
- [ ] T055 [US4] Add mapping management (save/load/delete) to FieldMapper in stripeworker-ui/src/components/FieldMapper.tsx
- [ ] T056 [US4] Integrate FieldMapper into ImportUpload flow in stripeworker-ui/src/components/ImportUpload.tsx

**Checkpoint**: User Story 4 complete - merchants can use custom CSV formats

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T057 [P] Add error handling and user-friendly error messages across all routes in worker/src/
- [ ] T058 [P] Add logging for debugging and monitoring in worker/src/
- [ ] T059 [P] Optimize CSV generation for large exports (streaming if possible) in worker/src/services/csv.ts
- [ ] T060 [P] Add job cleanup (delete old jobs/files after 7 days) in worker/src/services/jobs.ts
- [ ] T061 [P] Polish UI with loading states and error feedback in stripeworker-ui/src/components/
- [ ] T062 Run quickstart.md validation steps to verify full workflow

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - Can proceed in parallel (if staffed) or sequentially in priority order
- **Polish (Phase 7)**: Depends on desired user stories being complete

### User Story Dependencies

| Story | Depends On | Can Start After |
|-------|------------|-----------------|
| US1 (Export) | Foundational only | Phase 2 complete |
| US2 (Import) | Foundational only | Phase 2 complete (parallel with US1) |
| US3 (Dry-Run) | US2 implementation | Phase 4 complete |
| US4 (Mapping) | US2 implementation | Phase 4 complete |

### Within Each Phase

- Tasks marked [P] can run in parallel
- Other tasks should be completed in order
- Complete phase before moving to next

### Parallel Opportunities

```bash
# Phase 1 - All [P] tasks can run together:
T002, T003, T004, T006, T007, T008

# Phase 2 - All [P] tasks can run together:
T010, T011, T012, T014, T015

# Phase 3 (US1) - Parallel UI tasks:
T025, T026

# Phase 4 (US2) - Parallel UI task:
T039

# Phase 6 (US4) - Parallel tasks:
T048, T054
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (~1 hour)
2. Complete Phase 2: Foundational (~2-3 hours)
3. Complete Phase 3: User Story 1 Export (~3-4 hours)
4. **STOP and VALIDATE**: Test export with real Stripe account
5. Deploy if ready - delivers backup/audit value

### Incremental Delivery

| Milestone | Stories Complete | Value Delivered |
|-----------|------------------|-----------------|
| MVP | US1 | Export products to CSV |
| v1.0 | US1 + US2 | Full import/export capability |
| v1.1 | US1 + US2 + US3 | Safe preview before changes |
| v1.2 | All | Flexible CSV format support |

### Estimated Effort

| Phase | Tasks | Estimated Hours |
|-------|-------|-----------------|
| Setup | 8 | 1-2 |
| Foundational | 8 | 2-3 |
| US1 Export | 11 | 3-4 |
| US2 Import | 14 | 5-6 |
| US3 Dry-Run | 6 | 2-3 |
| US4 Mapping | 9 | 3-4 |
| Polish | 6 | 2-3 |
| **Total** | **62** | **18-25** |

---

## Notes

- [P] tasks = different files, no dependencies
- [US#] label maps task to specific user story
- Each user story should be independently testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Manual testing per quickstart.md after each user story
