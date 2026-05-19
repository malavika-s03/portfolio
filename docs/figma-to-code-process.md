# Figma-to-Code Process — What Works

Reference for implementing any section pixel-perfect from Figma MCP.

## The Process (in order)

### 1. Pull ALL Figma specs FIRST — before writing any code
- Use `get_metadata` on the parent node to see the full structure (node IDs, positions, sizes)
- Use `get_design_context` on EACH significant node to get exact generated code + screenshot
- Save ALL specs into a reference doc (`docs/figma-{section}-specs.md`) BEFORE implementing
- Never guess or fabricate content — if Figma frames are empty, they're empty

### 2. Document every element with exact values
For each element record:
- Position (x, y within parent frame)
- Size (w, h)
- Typography (font family, weight, size, line-height, letter-spacing, color)
- Image crop data (exact percentage positioning from Figma)
- Border radius, backgrounds, spacing

### 3. Convert ALL values to `vw` units
Reference frame width: **1280px** → `1vw = 12.8px`
Formula: `pixel_value / 1280 * 100 = vw_value`

This gives uniform scaling on ALL screen sizes (same as Yulu page pattern).
No max-width containers needed — content scales proportionally.

### 4. Implement matching Figma's generated code structure
- Use the EXACT same nesting/structure Figma outputs
- For images: replicate Figma's percentage-based crop exactly (width%, height%, left%, top%) — do NOT use `object-cover` + `objectPosition`
- Add `maxWidth: 'none'` on cropped images to override the global `img { max-width: 100% }` reset
- Preserve framer-motion animations from existing code

### 5. Verify and iterate
- Check at 1280px viewport (should match Figma pixel-perfect)
- Check at 500px viewport (should scale down uniformly, same layout)
- Check at wider viewports (should scale up proportionally)

---

## Key Rules

### DO
- Pull Figma specs into a doc BEFORE writing any code
- Use `vw` for ALL dimensions (font size, padding, margin, width, height, position, gap, border-radius)
- Keep image crop percentages as `%` (they're relative to the image container, not viewport)
- Use `position: absolute` with vw offsets for hero-style layouts
- Match Figma's element hierarchy exactly

### DON'T
- Don't use `max-w-[1280px]` containers — use full-width with vw positioning
- Don't use `object-cover` for images — use Figma's exact percentage crop
- Don't use `position: fixed` for headers unless Figma explicitly shows a sticky header
- Don't fabricate text content — if Figma text frames are empty, leave them empty
- Don't use `px` units for anything visible (only for things like `border-width` where sub-pixel matters)
- Don't guess colors — pull exact hex values from Figma

### Image Handling
```tsx
// WRONG — guessing the crop
<img className="object-cover" style={{ objectPosition: '52% 15%' }} />

// RIGHT — Figma's exact crop
<div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '5.78vw' }}>
  <img
    className="absolute"
    style={{ width: '177.85%', height: '100.09%', left: '-38.26%', top: '-0.04%', maxWidth: 'none' }}
  />
</div>
```

### VW Conversion Quick Reference (1280px base)
| px | vw |
|----|-----|
| 8 | 0.625 |
| 12 | 0.94 |
| 14 | 1.09 |
| 15 | 1.17 |
| 16 | 1.25 |
| 20 | 1.56 |
| 24 | 1.875 |
| 32 | 2.5 |
| 48 | 3.75 |
| 51 | 3.98 |
| 55 | 4.30 |
| 60 | 4.69 |
| 128 | 10.0 |

---

## File Organization
- Specs: `docs/figma-{section}-specs.md`
- Components: `src/components/sections/{Section}/index.tsx`
- Data: `src/data/{section}.ts`
- Assets: `public/images/projects/`
