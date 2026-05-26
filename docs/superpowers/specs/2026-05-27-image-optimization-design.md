# Image & Asset Optimization Design

## Goal

Reduce deployed image payload and improve load performance without any visible quality degradation. The portfolio must look identical before and after.

## Constraints

- Zero visible quality loss — this is a design portfolio
- No changes to image paths in source code (plugin compresses in-place)
- No responsive srcset variants — single optimized image per asset
- No file extension renaming
- GitHub Pages static hosting (no server-side content negotiation)

---

## Phase 1: Asset Cleanup

Delete 16 unused image files (~16MB):

| File | Size | Reason |
|------|------|--------|
| `public/images/profile-photo-figma.jpg` | 6.1MB | Duplicate of `profile-photo.jpg` |
| `public/images/yulu/yulu-bike.jpg` | 8.7MB | Not referenced in code |
| `public/images/yulu/usability-test.png` | 1.3MB | Not referenced |
| `public/images/yulu/phone-mockup.jpg` | 87KB | PNG version used instead |
| `public/images/yulu/feature-table.png` | 37KB | Not referenced |
| `public/images/district/decorative/sparkle-iridescent.png` | 203KB | Not referenced |
| `public/images/district/decorative/sparkle2.png` | 16KB | Not referenced |
| `public/images/district/decorative/hero-vector.svg` | 260B | Not referenced |
| `public/images/district/decorative/hero-vector2.svg` | 262B | Not referenced |
| `public/images/district/purple-bar.svg` | 290B | Not referenced |
| `public/images/district/right-accent.svg` | 12KB | Not referenced |
| `public/images/district/test-download.png` | 16KB | Not referenced |
| `public/images/zoho/zoho-logo.png` | 3.6KB | `zoho-logo-full.png` used instead |
| `public/images/zoho/zoho-logo-text.png` | 2.2KB | Not referenced |
| `public/images/projects/video-icon.svg` | 508B | Not referenced |
| `public/images/projects/zoho-smart-reconcile.png` | ~KB | Not referenced |

Remove `district/decorative/` directory if empty after cleanup.

## Phase 2: Build-Time Image Optimization

### Plugin

Install `vite-plugin-image-optimizer` as a dev dependency.

### Configuration in `vite.config.ts`

```ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 90,
      },
      jpeg: {
        quality: 90,
      },
      jpg: {
        quality: 90,
      },
      webp: {
        quality: 90,
      },
      svg: {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        ],
      },
    }),
  ],
});
```

### Behavior

- Runs only during `vite build` — dev server unaffected
- Compresses images in `dist/` output — source files in repo stay full quality
- Keeps original file extensions (`.jpg`, `.png`) — no code path changes needed
- SVGO preserves `viewBox` attribute (needed for responsive SVGs)

### Pixel-art safety

VectorVault case study uses `imageRendering: 'pixelated'` PNGs. The plugin compresses PNGs as PNGs (not converting format), so hard pixel edges are preserved. At quality 90 this is safe — but these images must be visually verified during Phase 4. If any pixel smearing appears, we can exclude the `vectorvault/` directory from optimization.

### Quality escalation

If any image shows visible degradation after build:
- Bump all quality values from 90 to 95
- This is a one-line config change

## Phase 3: Image Loading Improvements

### 3a. `width` and `height` attributes

Add explicit `width` and `height` to all `<img>` tags to prevent Cumulative Layout Shift (CLS). Derive values from existing style objects.

**Files to update:**
- `src/components/sections/Hero/index.tsx`
- `src/components/sections/Projects/index.tsx`
- `src/components/sections/Projects/ProjectCard.tsx`
- `src/components/sections/WorkExperience/index.tsx`
- `src/pages/YuluCaseStudy/index.tsx`
- `src/pages/VectorVaultCaseStudy/index.tsx`
- `src/pages/DistrictCaseStudy/index.tsx`
- `src/pages/ZohoCaseStudy/index.tsx`
- `src/pages/PeakmindCaseStudy/index.tsx`
- `src/pages/PeakmindCmsStudy/index.tsx`

### 3b. `decoding="async"` on below-fold images

Add `decoding="async"` to all `<img>` tags that are not above-the-fold. This lets the browser decode images off the main thread.

### 3c. `fetchpriority="high"` on Hero image

The Hero profile photo is the only above-fold image. Adding `fetchpriority="high"` tells the browser to prioritize downloading it.

### 3d. Preload Hero image in `index.html`

Add to `<head>`:
```html
<link rel="preload" as="image" href="/images/profile-photo.jpg" />
```

This starts downloading the hero image before React mounts, improving first paint.

## Phase 4: Verification

1. Run `npm run build` and compare `dist/` image sizes to `public/` originals
2. Serve `dist/` locally with `npm run preview`
3. Visual comparison of all pages — hero, project cards, all 6 case studies
4. If any quality issues: bump quality config to 95%
5. Confirm no broken image paths (check browser console for 404s)

## Out of Scope

- Responsive `srcset` / `<picture>` variants
- File extension renaming to `.webp`
- CI/CD pipeline changes
- `reference/` and `framer-source/` directories (dev-only, not deployed)
- Lazy loading changes (already correctly applied)

## Expected Impact

- ~16MB removed from unused assets
- ~30-50% compression on remaining images
- Faster hero image load via preload + fetchpriority
- Zero CLS from width/height attributes
- Zero visible quality difference
