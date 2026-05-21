# SECTION 04: SOFTWARE PROVIDERS PIE CHART

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:2882 |
| Section Name | Group (Software Providers Chart) |
| Type | Pie Chart with Labels |
| Position | x=655px, y=1468px |

---

## B. DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 558.06px | 43.598vw |
| Height | 385px | 30.078vw |

## C. POSITION IN PAGE

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X (Left Margin) | 655px | 51.172vw |
| Y (From Top) | 1468px | 114.688vw |

**Note:** This chart is positioned on the right side of the page.

---

## D. PIE CHART DATA

### D.1 Segment Data

| Company | Percentage | Color | Hex (approx) |
|---------|------------|-------|--------------|
| ADOBE | 49% | Green | #00E676 |
| OTHER | 24% | Magenta/Pink | #E040E0 |
| APPLE | 11% | Blue | #2962FF |
| CANVA | 7% | Blue | #304FFE |
| ALLUDO | 5% | Teal | #00BFA5 |
| AVID TECHNOLOGY | 2% | Blue | #3949AB |
| MAXON COMPUTER | 1% | Blue | #1A237E |

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

The pie chart is composed of:
1. **Vector shapes** - 8 segment vectors (1:2887 - 1:2894)
2. **Label groups** - Multiple text label groups positioned around the chart

### E.1 Vector Segments

| Node ID | Description |
|---------|-------------|
| 1:2887 | Adobe segment (largest) |
| 1:2888 - 1:2894 | Other segments |

### E.2 Labels Breakdown

Labels are rendered as pixel art text using masked image groups:

| Label | Position (approx) |
|-------|-------------------|
| "ADOBE 49%" | Right side, center |
| "OTHER 24%" | Top left |
| "APPLE 11%" | Bottom left |
| "CANVA 7%" | Left side |
| "AVID TECHNOLOGY 2%" | Left side |
| "MAXON COMPUTER 1%" | Left side |
| "ALLUDO 5%" | Bottom center |

---

## F. SPACING ANALYSIS

### F.1 Position Context

| Property | Value |
|----------|-------|
| Chart positioned | Right-aligned (not left margin like other sections) |
| Left boundary | 655px from left edge |
| Right boundary | 655 + 558 = 1213px |
| Approximate right margin | 1280 - 1213 = 67px (5.234vw) |

### F.2 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 1468px (114.688vw) |
| Section End Y | 1468px + 385px = 1853px (144.766vw) |
| Total Section Height | 385px (30.078vw) |

---

## G. IMPLEMENTATION APPROACH

### G.1 Option 1: Export as Image Asset

Due to the complex pixel art labels and chart styling, export the entire chart as a single PNG.

```css
.software-providers-chart {
  width: 43.598vw;         /* 558px */
  height: 30.078vw;        /* 385px */
  margin-left: 51.172vw;   /* 655px - right positioned */
}
```

### G.2 Option 2: Recreate with Chart Library

If interactivity is needed, use a charting library (Chart.js, Recharts) with:
- Custom colors matching the hex values above
- Pixel art font for labels
- Black background

---

## H. ASSET EXPORT

| Property | Value |
|----------|-------|
| Export Format | PNG (2x for retina) |
| Export Dimensions | 1116px × 770px (@2x) |
| Local Path | `/public/images/vectorvault/software-providers-chart.png` |

---

## I. COLOR PALETTE

### I.1 Chart Colors

| Segment | Color Name | Hex |
|---------|------------|-----|
| Adobe | Bright Green | #00E676 |
| Other | Magenta | #E040E0 |
| Apple | Electric Blue | #2962FF |
| Canva | Indigo Blue | #304FFE |
| Alludo | Teal | #00BFA5 |
| Avid Tech | Deep Blue | #3949AB |
| Maxon | Navy | #1A237E |

### I.2 Text/UI Colors

| Element | Color | Hex |
|---------|-------|-----|
| Labels | White | #FFFFFF |
| Background | Black | #000000 |

---

## J. SCREENSHOT REFERENCE

![Software Providers Chart](./screenshots/section_04_chart.png)

*Pie chart showing software provider market share - Adobe dominates at 49%*

---

## K. NOTES

1. **Pixel Art Style**: All text labels maintain the pixel art aesthetic consistent with the rest of the design.

2. **Data Visualization**: The chart communicates market share data with clear percentage labels.

3. **Export Recommendation**: Given the pixel-perfect text rendering requirements, exporting as a single image asset is recommended over programmatic recreation.

4. **Accessibility**: If recreating programmatically, ensure proper ARIA labels and screen reader support for the data values.
