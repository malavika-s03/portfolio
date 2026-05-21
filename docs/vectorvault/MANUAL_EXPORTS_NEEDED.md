# VectorVault - Asset Status & Manual Export Guide

## Asset Strategy

VectorVault follows the same **local-file-only** approach as Yulu. All images are stored in `public/images/vectorvault/` and committed to git. No Figma URLs are used at runtime.

---

## CURRENT ASSET STATUS

### ✅ Working Local Assets (All Complete)

| Asset | Path | Status |
|-------|------|--------|
| VECTORVAULT Title | `headings/vectorvault-title.png` | ✅ Working |
| WHY VECTORVAULT ? | `headings/why-vectorvault.png` | ✅ Working |
| SOFTWARE PROVIDERS | `headings/software-providers.png` | ✅ Working |
| CREATIVE SOFTWARE SPEND | `headings/creative-software-spend.png` | ✅ Working |
| JOBS TO BE DONE | `headings/jobs-to-be-done.png` | ✅ Working |
| USER PERSONA | `headings/user-persona.png` | ✅ Working |
| HOW THIS WORKS | `headings/how-this-works.png` | ✅ Working |
| GAME OVER | `headings/game-over.png` | ✅ Working |
| Hero Illustration | `hero-illustration.png` | ✅ Working (correct cyan-shirt character) |
| Cityscape | `how-this-works-cityscape.png` | ✅ Working (with 5 characters) |
| Arun Avatar | `personas/arun-profile.png` | ✅ Working |
| Sana Avatar | `personas/sana-profile.png` | ✅ Working |
| Vault Icon | `vault-icon.png` | ✅ Working |

### ⚠️ Needs Manual Export from Figma

| Asset | Path | Issue |
|-------|------|-------|
| Footer Landscape | `footer-landscape.png` | **MISSING** - treasure chest + colorful grass |

---

## REQUIRED MANUAL EXPORT

### Footer Landscape (Optional but recommended)

| Property | Value |
|----------|-------|
| **Figma Node ID** | `1:5784` |
| **Export Path** | `public/images/vectorvault/footer-landscape.png` |
| **Dimensions** | ~1428 × 155 px |

**Should contain:**
- Pixel art treasure chest (gold/yellow)
- Gold sparkles/coins above chest
- Colorful grass landscape (pink flowers, cyan accents)

---

## How to Export from Figma

1. Open the Figma file: https://www.figma.com/design/SqIXD77CplNjeWPV8aFq4K/Test-2
2. Select the specified node (use Figma's node ID search or navigate visually)
3. Right-click → Export
4. Choose PNG format with 1x scale
5. Save to the specified path

---

## Directory Structure (Final)

```
public/images/vectorvault/
├── headings/
│   ├── vectorvault-title.png     ✅ VECTORVAULT main title
│   ├── why-vectorvault.png       ✅ WHY VECTORVAULT ? heading
│   ├── software-providers.png    ✅ SOFTWARE PROVIDERS heading
│   ├── creative-software-spend.png ✅ CREATIVE SOFTWARE SPEND heading
│   ├── jobs-to-be-done.png       ✅ JOBS TO BE DONE heading
│   ├── user-persona.png          ✅ USER PERSONA heading
│   ├── how-this-works.png        ✅ HOW THIS WORKS heading
│   └── game-over.png             ✅ GAME OVER heading
├── personas/
│   ├── arun-profile.png          ✅ ARUN avatar
│   └── sana-profile.png          ✅ SANA avatar
├── hero-illustration.png         ✅ Cyan-shirt character with coin
├── how-this-works-cityscape.png  ✅ Isometric cityscape with 5 characters
├── vault-icon.png                ✅ Golden vault icon
└── footer-landscape.png          ⚠️ NEEDS EXPORT - treasure chest landscape
```

---

## Code Implementation

All heading images are now rendered via the `PixelArtHeading` component which uses actual PNG images instead of CSS-styled text:

```typescript
const HEADING_IMAGES: Record<string, string> = {
  'VECTORVAULT': 'headings/vectorvault-title.png',
  'WHY VECTORVAULT ?': 'headings/why-vectorvault.png',
  'SOFTWARE PROVIDERS': 'headings/software-providers.png',
  'CREATIVE SOFTWARE SPEND': 'headings/creative-software-spend.png',
  'JOBS TO BE DONE': 'headings/jobs-to-be-done.png',
  'USER PERSONA': 'headings/user-persona.png',
  'HOW THIS WORKS': 'headings/how-this-works.png',
  'GAME OVER': 'headings/game-over.png'
};
```

This ensures pixel-perfect rendering of the pink/green pixel art typography across all browsers and screen sizes.
