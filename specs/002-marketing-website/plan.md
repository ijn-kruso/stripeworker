# Implementation Plan: Marketing Website

**Branch**: `002-marketing-website` | **Date**: 2026-02-15 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-marketing-website/spec.md`

## Summary

Build a statically-generated marketing homepage for StripeWorker hosted on Cloudflare Pages at www.stripeworker.com. The page will showcase the product's value proposition (CSV export/import, field mapping, bulk operations for Stripe products) and direct visitors to the Stripe Marketplace for installation.

## Technical Context

**Language/Version**: HTML/CSS/JavaScript (static), optionally TypeScript for build tooling  
**Primary Dependencies**: Astro (static site generator) - lightweight, fast, minimal JS by default  
**Storage**: N/A (static site)  
**Testing**: Manual + Lighthouse audits  
**Target Platform**: Cloudflare Pages (global CDN)  
**Project Type**: Single static website  
**Performance Goals**: <2s load time on 3G, Lighthouse ≥90  
**Constraints**: Static generation only, no server-side runtime  
**Scale/Scope**: Single page, global CDN distribution

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Simplicity First (YAGNI) | ✅ PASS | Single static page, minimal dependencies, no over-engineering |
| II. Scale Performance | ✅ PASS | Static files on CDN = infinite scale, sub-second TTFB globally |
| III. Serverless Architecture | ✅ PASS | Cloudflare Pages is serverless static hosting, no Workers runtime needed |

**Gate Result**: PASS - Proceeding to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/002-marketing-website/
├── plan.md              # This file
├── research.md          # Phase 0 output - tech choices
├── data-model.md        # Phase 1 output - content structure
├── quickstart.md        # Phase 1 output - dev setup
└── contracts/           # N/A for static marketing site
```

### Source Code (repository root)

```text
www/
├── src/
│   ├── pages/
│   │   └── index.astro      # Homepage
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell
│   ├── styles/
│   │   └── global.css       # Reset, typography, colors
│   └── components/
│       ├── Hero.astro       # Hero section
│       ├── Features.astro   # Feature highlights
│       ├── HowItWorks.astro # 3-step process
│       ├── CTA.astro        # Call-to-action
│       ├── Navigation.astro # Logo and nav CTA
│       └── Footer.astro     # Footer
├── public/
│   ├── favicon.ico
│   └── images/              # Marketing images
├── astro.config.mjs         # Astro config
├── package.json
└── tsconfig.json
```

**Structure Decision**: New `/www` directory at repository root keeps the marketing site separate from the worker API and Stripe UI app. Astro chosen for zero-JS output by default, excellent performance, and native Cloudflare Pages integration.

## Complexity Tracking

> No constitution violations - no justification needed.
