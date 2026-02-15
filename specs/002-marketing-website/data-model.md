# Data Model: Marketing Website

**Date**: 2026-02-15  
**Feature**: 002-marketing-website

## Overview

This is a static marketing site with no database. The "data model" describes the content structure and component props for the homepage.

## Page Structure

### Homepage (index.astro)

```text
┌─────────────────────────────────────────┐
│              Navigation                 │
│  Logo                      [CTA Button] │
├─────────────────────────────────────────┤
│                                         │
│              Hero Section               │
│  Headline + Subheadline                 │
│  [Primary CTA]                          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           Features Section              │
│  ┌───────┐  ┌───────┐  ┌───────┐       │
│  │ Feat1 │  │ Feat2 │  │ Feat3 │       │
│  └───────┘  └───────┘  └───────┘       │
│  ┌───────┐  ┌───────┐                  │
│  │ Feat4 │  │ Feat5 │                  │
│  └───────┘  └───────┘                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          How It Works Section           │
│  Step 1 → Step 2 → Step 3              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│            CTA Section                  │
│  Final call-to-action                   │
│  [Install from Stripe Marketplace]      │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
│  © 2026 StripeWorker                    │
└─────────────────────────────────────────┘
```

## Content Entities

### Hero

| Field | Type | Description |
|-------|------|-------------|
| headline | string | Main attention-grabbing text |
| subheadline | string | Supporting explanation |
| ctaText | string | Primary button text |
| ctaUrl | string | Link to Stripe Marketplace |

**Example Content**:
```yaml
headline: "Bulk Edit Your Stripe Products"
subheadline: "Export to CSV, edit 100k+ products, and import back with custom field mappings"
ctaText: "Install from Stripe Marketplace"
ctaUrl: "https://marketplace.stripe.com/apps/stripeworker"
```

### Feature

| Field | Type | Description |
|-------|------|-------------|
| icon | string | Icon identifier or SVG |
| title | string | Feature name |
| description | string | Brief explanation |

**Example Content**:
```yaml
features:
  - icon: "export"
    title: "CSV Export"
    description: "Export your entire product catalog to CSV with one click"
  - icon: "import"
    title: "Bulk Import"
    description: "Upload edited CSVs to update thousands of products"
  - icon: "mapping"
    title: "Field Mapping"
    description: "Map CSV columns to Stripe fields with saved templates"
  - icon: "preview"
    title: "Dry Run"
    description: "Preview changes before applying to avoid mistakes"
  - icon: "scale"
    title: "100k+ Scale"
    description: "Handle massive catalogs efficiently"
```

### Step (How It Works)

| Field | Type | Description |
|-------|------|-------------|
| number | number | Step order (1, 2, 3) |
| title | string | Step name |
| description | string | What happens in this step |

**Example Content**:
```yaml
steps:
  - number: 1
    title: "Export"
    description: "Download your products as CSV"
  - number: 2
    title: "Edit"
    description: "Make bulk changes in Excel or Google Sheets"
  - number: 3
    title: "Import"
    description: "Upload and apply changes with preview"
```

## Contracts

**N/A** - This is a static marketing site with no API endpoints.

All content is hardcoded in Astro components or extracted to a simple `content.ts` file if content management becomes needed later.
