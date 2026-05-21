# SECTION 03: WHY VECTORVAULT

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:7646 |
| Section Name | Group (Why VectorVault Heading) |
| Type | Pixel Art Image Heading |
| Position | x=87px, y=613px |

---

## B. HEADING ELEMENT

### B.1 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 691.3px | 54.008vw |
| Height | 53px | 4.141vw |

### B.2 Position

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X (Left Margin) | 87px | 6.797vw |
| Y (From Top) | 613px | 47.891vw |

### B.3 Visual Style

| Property | Value |
|----------|-------|
| Text Content | "WHY VECTORVAULT ?" |
| Style | Pixel art retro gaming font |
| Primary Color | Magenta/Pink (#E040E0 approx) |
| Background | Transparent (black page) |

### B.4 Asset Type

This heading is a **complex pixel art image** composed of multiple masked image layers. It should be exported as a single PNG asset.

### B.5 Recommended Export

| Property | Value |
|----------|-------|
| Export Format | PNG (2x for retina) |
| Export Dimensions | 1382px × 106px (@2x) |
| Local Path | `/public/images/vectorvault/why-vectorvault-heading.png` |

---

## C. INTERNAL STRUCTURE

The heading consists of 30 image group layers creating the pixel art text effect:

```
Frame 1:7646 "Group"
└── Frame 1:7647 "Clip path group"
    └── Frame 1:7650 "Group" (main content container)
        ├── Frame 1:7651 "Group" - Letter W part 1
        ├── Frame 1:7655 "Group" - Letter W part 2
        ├── ... (28 more image groups for letters)
        └── Frame 1:7767 "Group" - Question mark
```

### Child Groups (Letters)

| Letter/Symbol | Approx Position | Width |
|---------------|-----------------|-------|
| W | x=93px | 48px |
| H | x=148px | 35px |
| Y | x=191px | 35px |
| (space) | - | - |
| V | x=254px | 35px |
| E | x=296px | 35px |
| C | x=339px | 35px |
| T | x=381px | 35px |
| O | x=423px | 35px |
| R | x=466px | 35px |
| V | x=508px | 35px |
| A | x=550px | 35px |
| U | x=592px | 35px |
| L | x=635px | 35px |
| T | x=677px | 35px |
| ? | x=740px | 35px |

---

## D. SPACING ANALYSIS

### D.1 From Previous Section

| Property | Value |
|----------|-------|
| Introduction section end | y=604px (313+291) |
| Why VectorVault start | y=613px |
| **Gap from previous section** | **9px (0.703vw)** |

### D.2 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 613px (47.891vw) |
| Section End Y | 613px + 53px = 666px (52.031vw) |
| Total Section Height (heading only) | 53px (4.141vw) |

---

## E. IMPLEMENTATION CSS

```css
.why-vectorvault-heading {
  position: relative;
  margin-left: 6.797vw;    /* 87px */
  margin-top: 0.703vw;     /* 9px gap from previous */
  width: 54.008vw;         /* 691.3px */
  height: 4.141vw;         /* 53px */
}

.why-vectorvault-heading img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

---

## F. COLOR PALETTE

| Element | Color | Hex |
|---------|-------|-----|
| Primary text color | Magenta/Pink | #E040E0 (approx) |
| Highlight/3D effect | Lighter pink | #FF80FF (approx) |
| Background | Transparent | - |

---

## G. SCREENSHOT REFERENCE

![Why VectorVault Heading](./screenshots/section_03_heading.png)

*Pink pixel art text reading "WHY VECTORVAULT ?"*

---

## H. NOTES

1. **Export Strategy**: Due to the complex layered structure with masks, this heading should be exported as a single rasterized PNG asset rather than attempting to recreate with CSS/SVG.

2. **Scalability**: The pixel art aesthetic requires careful scaling to maintain crisp edges. Use `image-rendering: pixelated` in CSS for smaller screens.

3. **Body Content**: This section may include body text/bullet points below the heading. The adjacent content nodes should be investigated for the full section content.

```css
/* For pixel-perfect scaling on retina/various screens */
.why-vectorvault-heading img {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```
