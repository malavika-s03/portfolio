# VectorVault Comprehensive Audit - March 5, 2026

## AUDIT CHECKLIST

### 1. HERO ILLUSTRATION/COIN SIZE

**Figma Source (SECTION_01_HERO.md):**
| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X Position | 579px | 45.234vw |
| Y Position | 17px | 1.328vw |
| Width | 1100px | 85.938vw |
| Height | 618px | 48.281vw |

**Current Issue:**
- The hero image is 2000×2000px square (with padding)
- Being positioned incorrectly due to square aspect ratio

**FIX:**
- Need to position the visible content area properly
- The content (character+coin+bricks) occupies roughly center-right of the 2000×2000 image
- Scale based on matching the visual appearance to Figma

---

### 2. BULLET TEXT FONT WEIGHT

**Figma Source (from SECTION_02_INTRODUCTION.md):**
| Property | Value |
|----------|-------|
| Font Family | Press Start 2P |
| Font Weight | Regular (400) |
| Font Size | 16px (1.25vw) |
| Line Height | 31px (2.422vw) |

**Current Code:**
- fontSize: 0.859vw (11px) - TOO SMALL!
- Should match intro body text: 1.25vw (16px)

**FIX:**
- Change bullet text fontSize to 1.25vw
- Change lineHeight to 2.422vw

---

### 3. ALT + TAB COLOR

**Figma Source (Visual inspection):**
- ALT + TAB text is **GREEN/CYAN** colored, NOT pink!
- Color appears to be #00BCD4 (cyan) or similar green

**Current Code:**
- Using #FF69B4 (hot pink) - WRONG!

**FIX:**
- Change ALT + TAB spans to use `COLORS.cyan` (#00BCD4)

---

### 4. ARROW BULLET IMAGES

**Available Assets:**
- `arrow_grreen.png` - Filled cyan/green diamond (20×20px approx)
- `arrow_white.png` - White outlined arrow (hollow)

**Figma Bullets:**
- Use cyan/teal filled bullets (matches arrow_grreen.png)
- Size: approximately 11-13px

**FIX:**
- Replace Unicode ◆ with `<img src="arrow_grreen.png" />`
- Size: ~11px (0.859vw)

---

### 5. TABLE COLORS

**Figma Source (SECTION_06_JOBS_TO_BE_DONE.md + Screenshot):**
| Element | Figma Color | Hex |
|---------|-------------|-----|
| Border | Cyan | #00BCD4 |
| Header Row BG | Dark Blue | #1A237E |
| Data Cells BG | Dark Gray/Blue | #263238 |
| Stakeholder STUDENT | Blue | #2196F3 |
| Stakeholder TEACHER | Orange | #FF9800 |
| Stakeholder ADVERTISER | Green | #4CAF50 |
| Text | White | #FFFFFF |

**Current Code Colors (data.ts):**
```typescript
headerDarkBlue: '#1A237E', // ✅ Correct
tableBorder: '#00BCD4',    // ✅ Correct
tableRowDark: '#263238',   // ✅ Correct
studentBlue: '#2196F3',    // ✅ Correct
teacherOrange: '#FF9800',  // ✅ Correct
advertiserGreen: '#4CAF50',// ✅ Correct
```

**Issue:** Colors are defined correctly, but may not be applied properly in JSX.

---

## FIXES TO APPLY

1. **Hero illustration** - Adjust positioning/sizing
2. **Bullet text font** - fontSize: 1.25vw, lineHeight: 2.422vw
3. **ALT + TAB color** - Change from #FF69B4 to #00BCD4 (COLORS.cyan)
4. **Arrow bullets** - Use arrow_grreen.png image instead of ◆ symbol
5. **Table** - Verify all color constants are applied correctly
