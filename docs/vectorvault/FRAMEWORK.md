# VectorVault Design Analysis Framework

## Purpose
This framework defines the systematic methodology for extracting and documenting every design detail from the VectorVault Figma file to ensure pixel-perfect implementation.

---

## Source Information

| Property | Value |
|----------|-------|
| Figma URL | https://www.figma.com/design/SqIXD77CplNjeWPV8aFq4K/Test-2 |
| Main Frame | MacBook Air - 3 (Node ID: 1:4) |
| Frame Dimensions | 1280px × 6275px |
| Base Width | 1280px |

---

## VW Conversion Formula

All pixel values must be converted to viewport width (vw) units for responsive scaling:

```
vw_value = (pixel_value / 1280) × 100
```

### Quick Reference Table
| Pixels | VW Value |
|--------|----------|
| 10px | 0.781vw |
| 16px | 1.25vw |
| 24px | 1.875vw |
| 32px | 2.5vw |
| 48px | 3.75vw |
| 64px | 5vw |
| 87px | 6.797vw |
| 100px | 7.813vw |
| 200px | 15.625vw |
| 500px | 39.063vw |
| 1000px | 78.125vw |

---

## Section Analysis Template

For each section, document the following:

### A. IDENTIFICATION
```
Node ID: [Figma node ID]
Section Name: [Name from Figma]
Position: x=[X]px, y=[Y]px
```

### B. DIMENSIONS
```
Width: [W]px ([W/1280*100]vw)
Height: [H]px ([H/1280*100]vw)
Aspect Ratio: [W:H]
```

### C. POSITION IN PAGE
```
Distance from top: [Y]px ([Y/1280*100]vw)
Left margin: [X]px ([X/1280*100]vw)
Gap from previous section: [G]px
```

### D. BACKGROUND
```
Color: [Hex value]
Opacity: [0-100%]
```

### E. TYPOGRAPHY (for each text element)
```
Element: [Label/Title/Body/etc]
Node ID: [ID]
Font Family: [Font name]
Font Size: [S]px ([S/1280*100]vw)
Font Weight: [100-900 or name]
Line Height: [Value]px or [multiplier]
Letter Spacing: [Value]px or [em]
Text Color: [Hex]
Text Align: [left/center/right]
Text Content: "[Actual text]"
```

### F. SPACING
```
Padding: [T]px [R]px [B]px [L]px
Margin: [T]px [R]px [B]px [L]px
Gap between children: [G]px
```

### G. BORDERS
```
Border Width: [W]px
Border Style: [solid/dashed/none]
Border Color: [Hex]
Border Radius: [R]px
```

### H. SHADOWS
```
Shadow: [X-offset]px [Y-offset]px [Blur]px [Spread]px [Color]
```

### I. CHILD ELEMENTS
List each child element with:
- Node ID
- Position relative to parent
- Dimensions
- All applicable properties above

### J. IMAGES/ASSETS
```
Asset Name: [Name]
Node ID: [ID]
Dimensions: [W]px × [H]px
Position: x=[X]px, y=[Y]px (relative to section)
Format: [PNG/SVG/JPG]
Export URL: [Figma MCP asset URL]
```

---

## Sections to Document

1. **SECTION_01_HERO** - VectorVault SVG illustration header
2. **SECTION_02_INTRODUCTION** - Introduction label + body text
3. **SECTION_03_WHY_VECTORVAULT** - Pixel heading + bullet points
4. **SECTION_04_SOFTWARE_PROVIDERS** - Pie chart with providers
5. **SECTION_05_CREATIVE_SOFTWARE_SPEND** - Geographic spend pie chart
6. **SECTION_06_JOBS_TO_BE_DONE** - JTBD data table
7. **SECTION_07_USER_PERSONA** - ARUN and SARA persona cards
8. **SECTION_08_HOW_THIS_WORKS** - Isometric cityscape illustration
9. **SECTION_09_GAME_OVER_FOOTER** - Footer with controllers

---

## Analysis Process

For each section:

1. **Screenshot**: Get visual reference using `get_screenshot` MCP tool
2. **Context**: Get code/measurements using `get_design_context` MCP tool
3. **Extract**: Parse all values from generated Tailwind classes
4. **Document**: Fill in template with exact values
5. **Verify**: Cross-reference screenshot with documented values

---

## Tailwind Class Parsing Guide

Common patterns to extract from generated code:

| Tailwind Pattern | Property | Example |
|------------------|----------|---------|
| `text-[Npx]` | Font size | `text-[16px]` → 16px |
| `leading-[N]` | Line height | `leading-[31px]` → 31px |
| `font-['Name']` | Font family | `font-['Press_Start_2P']` |
| `font-bold` | Font weight | bold → 700 |
| `text-white` | Text color | white → #FFFFFF |
| `bg-[#HEX]` | Background | `bg-[#73927A]` |
| `w-[N]` | Width | `w-[243px]` → 243px |
| `h-[N]` | Height | `h-[44px]` → 44px |
| `rounded-[N]` | Border radius | `rounded-[6px]` → 6px |
| `border-N` | Border width | `border-3` → 3px |
| `left-[N]` | X position | `left-[87px]` → 87px |
| `top-[N]` | Y position | `top-[240px]` → 240px |
| `inset-[%]` | Position % | `inset-[20%_30%_40%_10%]` |

---

## Color Extraction

When colors appear in code, document them as:
- Hex value (e.g., #73927A)
- RGB if needed (e.g., rgb(115, 146, 122))
- Color name/purpose (e.g., "Button Green")

---

## Output Files

Each section document will be saved as:
```
docs/vectorvault/SECTION_[NN]_[NAME].md
```

Where:
- `[NN]` = Two-digit section number (01-09)
- `[NAME]` = Section name in SCREAMING_SNAKE_CASE
