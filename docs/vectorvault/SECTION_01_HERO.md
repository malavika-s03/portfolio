# SECTION 01: HERO ILLUSTRATION

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:5 |
| Section Name | SPM_VectorVault (1) 1 |
| Type | Complex SVG Illustration |
| Position | x=579px, y=17px |

## B. DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 1100px | 85.938vw |
| Height | 618px | 48.281vw |

## C. POSITION IN PAGE

| Property | Value |
|----------|-------|
| Distance from top (Y) | 17px (1.328vw) |
| Left offset (X) | 579px (45.234vw) |
| Horizontal centering | Offset to right side of frame |

**Note:** The illustration extends beyond the 1280px base frame width. Original asset spans from x=-110 to x=1210 in some vectors.

## D. BACKGROUND

| Property | Value |
|----------|-------|
| Background | Transparent (inherits page black #000000) |

## E. VISUAL CONTENT DESCRIPTION

The hero is a **pixel art game-style illustration** featuring:

1. **Character** - Pixel art figure (blonde hair, cyan shirt, gray pants, black shoes)
   - Standing on pink/magenta brick platform
   - Holding a wand/tool (cyan/turquoise color)
   - Position: Center-right of the composition

2. **Coin** - Yellow/gold pixel art coin
   - Floating above the character
   - Classic game coin aesthetic

3. **Platform** - Pink/magenta brick blocks
   - 5 columns × 2.5 rows visible
   - Textured with darker dots/details

## F. ASSET HANDLING

This section should be treated as a **single exportable SVG/PNG asset** due to:
- Complex nested structure (1400+ vector elements)
- Pixel art nature (hard edges, flat colors)
- Decorative purpose (no interactive elements)

### Recommended Export

| Property | Value |
|----------|-------|
| Export Format | PNG (2x for retina) |
| Export Dimensions | 2200px × 1236px (@2x) |
| Local Path | `/public/images/vectorvault/hero-illustration.png` |

## G. IMPLEMENTATION NOTES

```css
/* Container positioning */
.hero-illustration {
  width: 85.938vw;      /* 1100px ÷ 1280 */
  height: 48.281vw;     /* 618px ÷ 1280 */
  margin-left: 45.234vw; /* 579px ÷ 1280 */
  margin-top: 1.328vw;   /* 17px ÷ 1280 */
}

/* Alternative: center-aligned approach */
.hero-illustration-centered {
  width: 85.938vw;
  margin: 1.328vw auto 0;
  transform: translateX(3.359vw); /* Slight right offset */
}
```

## H. SPACING FROM NEXT SECTION

| Property | Value |
|----------|-------|
| Hero bottom Y | 17px + 618px = 635px |
| Next section (Introduction) Y | 240px |
| **Overlap/Position** | Hero overlaps with content area |

**Note:** The hero illustration is positioned at the top as a decorative header element. Content sections begin below the main visual.

## I. COLOR PALETTE EXTRACTED

| Element | Color | Hex |
|---------|-------|-----|
| Character Hair | Yellow | Approx #F7E200 |
| Character Shirt | Cyan/Teal | Approx #5CC5C5 |
| Character Pants | Gray | Approx #4A4A4A |
| Platform Blocks | Magenta/Pink | Approx #E040E0 |
| Platform Shadows | Darker Pink | Approx #C030C0 |
| Coin | Gold/Yellow | Approx #FFD700 |
| Background | Black | #000000 |
| Wand/Tool | Cyan | Approx #40E0E0 |

## J. SCREENSHOT REFERENCE

![Hero Section Screenshot](./screenshots/section_01_hero.png)

*Screenshot captured via Figma MCP get_screenshot on node 1:5*
