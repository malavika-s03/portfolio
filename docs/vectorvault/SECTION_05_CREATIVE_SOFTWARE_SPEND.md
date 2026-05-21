# SECTION 05: CREATIVE SOFTWARE SPEND BY COUNTRY

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:3175 |
| Section Name | Group (Geographic Spend Chart) |
| Type | Pie Chart with Country Labels |
| Position | x=89px, y=2147px |

---

## B. DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 524.59px | 40.984vw |
| Height | 416px | 32.5vw |

## C. POSITION IN PAGE

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X (Left Margin) | 89px | 6.953vw |
| Y (From Top) | 2147px | 167.734vw |

**Note:** This chart is positioned on the LEFT side of the page, contrasting with Section 04 which is on the right.

---

## D. PIE CHART DATA

### D.1 Segment Data (Geographic Distribution)

| Country | Percentage | Color | Hex (approx) |
|---------|------------|-------|--------------|
| USA | 52.8% | Green | #00E676 |
| OTHERS | 20.5% | Magenta/Pink | #E040E0 |
| UNITED KINGDOM | 5% | Teal | #00BFA5 |
| CHINA | 4.8% | Blue | #2962FF |
| GERMANY | 4.5% | Blue | #304FFE |
| JAPAN | 3.5% | Blue | #3949AB |
| CANADA | 3.1% | Blue | #5C6BC0 |
| FRANCE | 2.6% | Pink | #F06292 |
| AUSTRALIA | 1.7% | Blue | #7986CB |
| NETHERLANDS | 1.5% | Blue | #1A237E |

### D.2 Label Typography

| Property | Value |
|----------|-------|
| Font Family | Press Start 2P (pixel art font) |
| Font Weight | Regular (400) |
| Font Size | ~9px (estimated from pixel art) |
| Text Color | #FFFFFF (white) |
| Text Transform | UPPERCASE |

---

## E. CHART STRUCTURE

### E.1 Vector Segments

| Node ID | Description |
|---------|-------------|
| 1:3180 | USA segment (largest) |
| 1:3181 | Others segment |
| 1:3182 - 1:3189 | Remaining country segments |

### E.2 Labels Structure

Labels are positioned around the chart perimeter in pixel art style:

| Label | Approx Y Position |
|-------|-------------------|
| "OTHERS 20.5%" | Top area (~2150px) |
| "USA 52.8%" | Right side (~2340px) |
| "UNITED KINGDOM 5%" | Bottom center (~2519px) |
| "CHINA 4.8%" | Bottom area (~2490px) |
| "GERMANY 4.5%" | Left bottom (~2454px) |
| "JAPAN 3.5%" | Left side (~2402px) |
| "CANADA 3.1%" | Left side (~2359px) |
| "FRANCE 2.6%" | Left side (~2320px) |
| "AUSTRALIA 1.7%" | Left side (~2289px) |
| "NETHERLANDS 1.5%" | Top left (~2265px) |

---

## F. SPACING ANALYSIS

### F.1 From Previous Section

| Property | Value |
|----------|-------|
| Section 04 end | 1468 + 385 = 1853px |
| Section 05 start | 2147px |
| **Gap from previous section** | **294px (22.969vw)** |

### F.2 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 2147px (167.734vw) |
| Section End Y | 2147px + 416px = 2563px (200.234vw) |
| Total Section Height | 416px (32.5vw) |

---

## G. LAYOUT COMPARISON WITH SECTION 04

| Property | Section 04 | Section 05 |
|----------|------------|------------|
| Alignment | Right | Left |
| X Position | 655px | 89px |
| Width | 558px | 525px |
| Height | 385px | 416px |
| Data Type | Company Market Share | Geographic Spend |

This creates a balanced layout with alternating left/right chart positions.

---

## H. IMPLEMENTATION CSS

```css
.creative-spend-chart {
  width: 40.984vw;         /* 524.59px */
  height: 32.5vw;          /* 416px */
  margin-left: 6.953vw;    /* 89px - left positioned */
  margin-top: 22.969vw;    /* Gap from previous section */
}

.creative-spend-chart img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

---

## I. ASSET EXPORT

| Property | Value |
|----------|-------|
| Export Format | PNG (2x for retina) |
| Export Dimensions | 1049px × 832px (@2x) |
| Local Path | `/public/images/vectorvault/creative-software-spend.png` |

---

## J. COLOR PALETTE

### J.1 Chart Segment Colors

| Country | Color Name | Hex |
|---------|------------|-----|
| USA | Bright Green | #00E676 |
| Others | Magenta | #E040E0 |
| United Kingdom | Teal | #00BFA5 |
| China | Electric Blue | #2962FF |
| Germany | Indigo | #304FFE |
| Japan | Deep Indigo | #3949AB |
| Canada | Medium Blue | #5C6BC0 |
| France | Pink | #F06292 |
| Australia | Light Indigo | #7986CB |
| Netherlands | Navy | #1A237E |

### J.2 Text/Background Colors

| Element | Color | Hex |
|---------|-------|-----|
| Labels | White | #FFFFFF |
| Background | Black | #000000 |

---

## K. SCREENSHOT REFERENCE

![Creative Software Spend Chart](./screenshots/section_05_spend.png)

*Pie chart showing creative software spending by country - USA leads at 52.8%*

---

## L. NOTES

1. **Left-Right Balance**: This section is intentionally left-aligned to create visual rhythm with the right-aligned Section 04.

2. **Similar Structure**: Both pie chart sections share the same visual treatment with pixel art labels and consistent color coding scheme.

3. **Data Story**: The two charts together tell a story about the software market - who provides the software (Section 04) and where it's purchased (Section 05).

4. **Export Strategy**: Like Section 04, export as a single PNG asset for pixel-perfect label rendering.
