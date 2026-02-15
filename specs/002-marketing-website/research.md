# Research: Marketing Website

**Date**: 2026-02-15  
**Feature**: 002-marketing-website

## Research Tasks

### 1. Static Site Generator Selection

**Task**: Evaluate static site generators for a simple marketing homepage

**Decision**: Astro

**Rationale**:
- Zero JavaScript by default - ships pure HTML/CSS unless explicitly needed
- Native Cloudflare Pages adapter for optimized deployment
- Component-based architecture without framework lock-in
- Excellent Lighthouse scores out of the box
- Simple learning curve for a single-page site

**Alternatives Considered**:
| Option | Pros | Cons | Rejected Because |
|--------|------|------|------------------|
| Next.js | Familiar React ecosystem | Heavy runtime, overkill for static page | Unnecessary complexity for single page |
| Hugo | Fastest build times | Go templating less ergonomic | Template syntax unfamiliar |
| 11ty | Flexible, minimal | Less structured defaults | Astro's component model cleaner |
| Plain HTML | Zero dependencies | No templating, harder to maintain | Astro adds minimal overhead with better DX |

---

### 2. Cloudflare Pages Deployment

**Task**: Research Cloudflare Pages deployment for Astro

**Decision**: Use `@astrojs/cloudflare` adapter with `output: 'static'` mode

**Rationale**:
- Astro has first-class Cloudflare Pages support
- Static output mode generates pure HTML/CSS/JS files
- Automatic deployments via Git integration
- Global CDN distribution included
- Free tier sufficient for marketing site

**Configuration**:
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.stripeworker.com',
});
```

**Deployment Steps**:
1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `www/dist`
4. Deploy triggers on push to main branch

---

### 3. Domain Configuration (www.stripeworker.com)

**Task**: Research custom domain setup on Cloudflare

**Decision**: Configure www.stripeworker.com as primary domain with apex redirect

**Rationale**:
- Cloudflare manages DNS for stripeworker.com domain
- CNAME record for `www` pointing to Pages project
- Apex domain (stripeworker.com) redirects to www version
- SSL/TLS handled automatically by Cloudflare

**DNS Records Required**:
| Type | Name | Target |
|------|------|--------|
| CNAME | www | `<project>.pages.dev` |
| Redirect Rule | @ | https://www.stripeworker.com |

---

### 4. Performance Optimization

**Task**: Research best practices for sub-2-second load times

**Decision**: Follow Astro defaults with minimal additions

**Rationale**:
- Astro's island architecture prevents unnecessary JS
- Cloudflare's global CDN provides edge caching
- Modern image formats (WebP/AVIF) with `<picture>` element
- Inline critical CSS, defer non-critical assets

**Implementation Details**:
- Use `astro:assets` for optimized images
- Keep above-fold content minimal (~50KB target)
- Preconnect to Stripe Marketplace domain
- No analytics on initial launch (add later if needed)

---

## Summary

All NEEDS CLARIFICATION items resolved:

| Item | Resolution |
|------|------------|
| Static site generator | Astro with static output |
| Hosting | Cloudflare Pages (free tier) |
| Domain | www.stripeworker.com with apex redirect |
| Build tool | npm/yarn with Astro CLI |
| Performance | Astro defaults + CDN sufficient |
