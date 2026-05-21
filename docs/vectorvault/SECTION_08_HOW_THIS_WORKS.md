# SECTION 08: HOW THIS WORKS

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:7525 |
| Section Name | Group 60 (How This Works) |
| Type | Heading + Isometric Illustration + CTA Buttons |
| Position | x=-8px, y=4655px |

---

## B. OVERALL SECTION DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 1129.75px | 88.262vw |
| Height | 987px | 77.109vw |

## C. POSITION IN PAGE

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X (Left Edge) | -8px | -0.625vw (extends past left edge) |
| Y (From Top) | 4655px | 363.672vw |

---

## D. SECTION COMPONENTS

### D.1 Component Breakdown

| Component | Node ID | Position | Dimensions |
|-----------|---------|----------|------------|
| Heading "HOW THIS WORKS" | 1:7545 | y=4655 | 697×105px |
| Isometric Cityscape | 1:7526 | y=4879 | 963×607px |
| Button Group | 1:7533 | y=5500 | 243×142px |

---

## E. HEADING: "HOW THIS WORKS"

### E.1 Identification

| Property | Value |
|----------|-------|
| Node ID | 1:7545 |
| Name | Group (Clip path group) |
| Position | x=-8, y=4655 |

### E.2 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 697.08px | 54.459vw |
| Height | 105px | 8.203vw |

### E.3 Typography

| Property | Value |
|----------|-------|
| Text | "HOW THIS WORKS" |
| Font | Pixel art (image-based) |
| Color | Pink/Magenta (#E040E0) |
| Style | Similar to "Why VectorVault" heading |

### E.4 Asset Export

| Property | Value |
|----------|-------|
| Format | PNG @2x |
| Dimensions | 1394 × 210 |
| Path | `/public/images/vectorvault/how-this-works-heading.png` |

---

## F. ISOMETRIC CITYSCAPE ILLUSTRATION

### F.1 Identification

| Property | Value |
|----------|-------|
| Node ID | 1:7526 |
| Name | Group 4 |
| Position | x=159, y=4879 |

### F.2 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 962.75px | 75.215vw |
| Height | 607px | 47.422vw |

### F.3 Visual Elements

The isometric illustration contains:

| Element | Description |
|---------|-------------|
| Main Building | Gray/white office building with windows |
| Trees | Teal/green pixel art trees with geometric shapes |
| Water | Blue water elements (stream/pond) |
| Ground | Mint green isometric ground tiles |
| Characters | 5 pixel art human figures |

### F.4 Character Positions

| Character | Description | Approx Location |
|-----------|-------------|-----------------|
| Woman (left) | Blue dress, brown hair | Far left |
| Worker | Yellow hard hat, orange vest | Center-left |
| Man | Brown jacket | Upper-center |
| Man with hat | Brown hat, orange shirt | Center-right |
| Woman (right) | Long dress | Far right |

### F.5 Asset IDs

| Asset | Node ID | Description |
|-------|---------|-------------|
| Main cityscape | 1:7527 | Base isometric image |
| Character overlay 1 | 1:7528 | Character sprite |
| Character overlay 2 | 1:7529 | Character sprite |
| Character overlay 3 | 1:7530 | Character sprite |
| Character overlay 4 | 1:7531 | Character sprite |
| Character overlay 5 | 1:7532 | Character sprite |

### F.6 Asset Export

| Property | Value |
|----------|-------|
| Format | PNG @2x |
| Dimensions | 1926 × 1214 |
| Path | `/public/images/vectorvault/how-this-works-cityscape.png` |

---

## G. CTA BUTTON GROUP

### G.1 Identification

| Property | Value |
|----------|-------|
| Node ID | 1:7533 |
| Name | Group 17 |
| Position | x=529, y=5500 |

### G.2 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 243px | 18.984vw |
| Height | 142px | 11.094vw |

### G.3 View Prototype Button

| Property | Value |
|----------|-------|
| Node ID | 1:7541 |
| Text | "view prototype" |
| Width | 243px |
| Height | 44px |
| Background | Green (#73927A) |
| Border Radius | 6px |
| Font | Press Start 2P, 16px |
| Text Color | White |

### G.4 Play Button

| Property | Value |
|----------|-------|
| Node ID | 1:7534 |
| Width | 148px |
| Height | 79px |
| Background | Dark gray (#333333) |
| Icon | Play triangle (white) |
| Border Radius | 8px |

### G.5 Button Implementation CSS

```css
.view-prototype-btn {
  width: 18.984vw;         /* 243px */
  height: 3.438vw;         /* 44px */
  background: #73927A;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.view-prototype-btn span {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.25vw;       /* 16px */
  color: #FFFFFF;
  text-transform: lowercase;
}

.play-btn {
  width: 11.563vw;         /* 148px */
  height: 6.172vw;         /* 79px */
  background: #333333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 0.625vw;     /* 8px gap */
}
```

---

## H. SPACING ANALYSIS

### H.1 From Previous Section

| Property | Value |
|----------|-------|
| Section 07 end | 3651 + 225 = 3876px |
| Section 08 start | 4655px |
| **Gap from previous section** | **779px (60.859vw)** |

### H.2 Internal Spacing

| Elements | Gap |
|----------|-----|
| Heading to Illustration | 4879 - (4655+105) = 119px |
| Illustration to Buttons | 5500 - (4879+607) = 14px |

### H.3 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 4655px (363.672vw) |
| Section End Y | 4655px + 987px = 5642px (440.781vw) |
| Total Section Height | 987px (77.109vw) |

---

## I. COLOR PALETTE

| Element | Color | Hex |
|---------|-------|-----|
| Heading Text | Pink/Magenta | #E040E0 |
| Ground Tiles | Mint Green | #90EE90 |
| Water | Blue | #4FC3F7 |
| Trees | Teal | #00897B |
| Building | Gray/White | #9E9E9E / #FFFFFF |
| View Prototype Btn | Sage Green | #73927A |
| Play Btn | Dark Gray | #333333 |
| Button Text | White | #FFFFFF |
| Background | Black | #000000 |

---

## J. IMPLEMENTATION CSS

```css
.how-this-works-section {
  position: relative;
  width: 88.262vw;         /* 1129.75px */
  margin-left: -0.625vw;   /* -8px - extends past edge */
  margin-top: 60.859vw;    /* 779px gap from previous */
}

.how-this-works-heading {
  width: 54.459vw;         /* 697px */
  height: 8.203vw;         /* 105px */
  margin-left: 0.625vw;    /* Offset for negative parent margin */
}

.how-this-works-illustration {
  width: 75.215vw;         /* 962.75px */
  height: 47.422vw;        /* 607px */
  margin-left: 13.047vw;   /* 167px (159 + 8 offset) */
  margin-top: 9.297vw;     /* 119px */
}

.how-this-works-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.094vw;     /* 14px */
}
```

---

## K. ASSET EXPORTS

| Asset | Format | Dimensions | Path |
|-------|--------|------------|------|
| Full Section | PNG @2x | 2260 × 1974 | `/public/images/vectorvault/how-this-works-full.png` |
| Heading Only | PNG @2x | 1394 × 210 | `/public/images/vectorvault/how-this-works-heading.png` |
| Cityscape Only | PNG @2x | 1926 × 1214 | `/public/images/vectorvault/how-this-works-cityscape.png` |

---

## L. SCREENSHOT REFERENCE

![How This Works Section](./screenshots/section_08_how_it_works.png)

*Isometric pixel art cityscape showing VectorVault workflow concept with CTA buttons*

---

## M. IMPLEMENTATION NOTES

1. **Illustration as Single Asset**: The isometric cityscape should be exported as a single PNG image due to its complexity.

2. **Interactive Buttons**: The "View Prototype" and Play buttons should be implemented as actual interactive elements, not part of the image.

3. **Heading Treatment**: Similar to Section 03, the heading is pixel art and should be exported as an image asset.

4. **Responsive Consideration**: The negative left margin (-8px) means this section extends slightly beyond the normal content area. Handle this carefully in responsive layouts.

5. **Link Integration**: The "View Prototype" button should link to an external prototype URL (Figma prototype, InVision, etc.).
