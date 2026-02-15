# Quickstart: Marketing Website

**Date**: 2026-02-15  
**Feature**: 002-marketing-website

## Prerequisites

- Node.js 18+
- npm or yarn
- Cloudflare account (for deployment)

## Local Development

### 1. Create the project

```bash
# From repository root
cd c:\Projects\stripeworker

# Create www directory and initialize Astro
mkdir www
cd www
npm create astro@latest . -- --template minimal --typescript strict
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Site available at `http://localhost:4321`

### 4. Build for production

```bash
npm run build
```

Output in `www/dist/`

### 5. Preview production build

```bash
npm run preview
```

## Project Structure

```text
www/
├── src/
│   ├── pages/
│   │   └── index.astro      # Homepage
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell with <head>
│   └── components/
│       ├── Hero.astro       # Hero section
│       ├── Features.astro   # Feature grid
│       ├── HowItWorks.astro # 3-step process
│       ├── CTA.astro        # Final call-to-action
│       └── Footer.astro     # Footer
├── public/
│   ├── favicon.ico
│   └── images/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. Push code to GitHub
2. Go to Cloudflare Dashboard → Pages → Create project
3. Connect GitHub repository
4. Configure build settings:
   - **Build command**: `cd www && npm install && npm run build`
   - **Build output directory**: `www/dist`
5. Deploy

### Option B: Direct Upload

```bash
cd www
npm run build
npx wrangler pages deploy dist --project-name=stripeworker-www
```

## Custom Domain Setup

1. In Cloudflare Pages project settings → Custom domains
2. Add `www.stripeworker.com`
3. Cloudflare auto-configures DNS (if domain is on Cloudflare)
4. Add redirect rule for apex domain:
   - Source: `stripeworker.com/*`
   - Target: `https://www.stripeworker.com/$1`
   - Status: 301

## Configuration Files

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.stripeworker.com',
  build: {
    inlineStylesheets: 'auto',
  },
});
```

### package.json scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Type-check Astro components |
