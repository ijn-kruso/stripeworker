# Tasks: Marketing Website

**Input**: Design documents from `/specs/002-marketing-website/`
**Prerequisites**: plan.md ✓, spec.md ✓, research.md ✓, data-model.md ✓

**Tests**: Not requested - skipped

**Organization**: Single user story (P1) - entire homepage is one deliverable

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[US1]**: User Story 1 - Visitor Views Marketing Homepage
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Initialize Astro project and dependencies

- [ ] T001 Create www/ directory at repository root
- [ ] T002 Initialize Astro project with `npm create astro@latest` in www/
- [ ] T003 Configure astro.config.mjs with static output and site URL in www/astro.config.mjs
- [ ] T004 [P] Update tsconfig.json for strict TypeScript in www/tsconfig.json

---

## Phase 2: Foundational

**Purpose**: Base layout and global styles

- [ ] T005 Create BaseLayout.astro with HTML shell and meta tags in www/src/layouts/BaseLayout.astro
- [ ] T006 [P] Add global CSS styles (reset, typography, colors) in www/src/styles/global.css
- [ ] T007 [P] Add favicon to www/public/favicon.ico

**Checkpoint**: Base infrastructure ready - component implementation can begin

---

## Phase 3: User Story 1 - Visitor Views Marketing Homepage (Priority: P1) 🎯 MVP

**Goal**: Visitor sees professional marketing page explaining StripeWorker with CTA to Stripe Marketplace

**Independent Test**: Visit localhost:4321, verify page loads with hero, features, how-it-works, CTA, and footer visible

### Implementation for User Story 1

- [ ] T008 [P] [US1] Create Hero.astro component with headline, subheadline, and CTA button in www/src/components/Hero.astro
- [ ] T009 [P] [US1] Create Features.astro component with 5 feature cards (export, import, mapping, preview, scale) in www/src/components/Features.astro
- [ ] T010 [P] [US1] Create HowItWorks.astro component with 3-step process in www/src/components/HowItWorks.astro
- [ ] T011 [P] [US1] Create CTA.astro component with final call-to-action in www/src/components/CTA.astro
- [ ] T012 [P] [US1] Create Footer.astro component with copyright in www/src/components/Footer.astro
- [ ] T013 [P] [US1] Create Navigation.astro component with logo and CTA button in www/src/components/Navigation.astro
- [ ] T014 [US1] Compose index.astro page with all components in www/src/pages/index.astro
- [ ] T015 [US1] Add responsive styles for mobile (320px+) across all components
- [ ] T016 [US1] Add marketing copy content to all components

**Checkpoint**: Homepage fully functional locally - ready for deployment

---

## Phase 4: Polish & Deployment

**Purpose**: Production deployment and domain configuration

- [ ] T017 Build static site and verify output in www/dist/
- [ ] T018 Run Lighthouse audit - verify score ≥90
- [ ] T019 Deploy to Cloudflare Pages via wrangler or dashboard
- [ ] T020 Configure custom domain www.stripeworker.com in Cloudflare Pages
- [ ] T021 Add apex redirect from stripeworker.com to www.stripeworker.com
- [ ] T022 Verify live site at www.stripeworker.com

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **Polish (Phase 4)**: Depends on User Story 1 completion

### Within User Story 1

- All component tasks (T008-T013) can run in parallel
- T014 (compose index.astro) depends on T008-T013
- T015-T016 depend on T014

### Parallel Opportunities

All component creation tasks can run in parallel:
```
T008 Hero.astro
T009 Features.astro
T010 HowItWorks.astro
T011 CTA.astro
T012 Footer.astro
T013 Navigation.astro
```

---

## Implementation Strategy

### MVP Delivery

1. Complete Phase 1: Setup (T001-T004)
2. Complete Phase 2: Foundational (T005-T007)
3. Complete Phase 3: User Story 1 (T008-T016)
4. **VALIDATE**: `npm run dev` and test locally
5. Complete Phase 4: Polish & Deployment (T017-T022)
6. **LIVE**: Site accessible at www.stripeworker.com

---

## Summary

| Metric | Value |
|--------|-------|
| Total tasks | 22 |
| User Story 1 tasks | 9 |
| Parallel opportunities | 6 components can be built simultaneously |
| MVP scope | All tasks (single user story) |
| Format validation | ✅ All tasks follow `- [ ] [ID] [P?] [Story?] Description with file path` |

---

## Notes

- Astro components use `.astro` extension
- Static output mode - no server runtime needed
- Cloudflare Pages free tier sufficient
- Content hardcoded in components (no CMS needed for MVP)
