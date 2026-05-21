# SECTION 06: JOBS TO BE DONE (JTBD) TABLE

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Node ID | 1:3807 |
| Section Name | 10 60 (JTBD Table Frame) |
| Type | Data Table with Categories |
| Position | x=62px, y=2853px |

---

## B. DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 1156px | 90.313vw |
| Height | 650px | 50.781vw |

## C. POSITION IN PAGE

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| X (Left Margin) | 62px | 4.844vw |
| Y (From Top) | 2853px | 222.891vw |

**Note:** This is a wide table spanning nearly the full page width with a small left margin.

---

## D. TABLE STRUCTURE

### D.1 Column Headers

| Column | Header Text | Width (approx) |
|--------|-------------|----------------|
| 1 | STAKEHOLDER | ~18% |
| 2 | CAPTION | ~18% |
| 3 | SITUATION (WHEN I AM) | ~22% |
| 4 | MOTIVATION (I WANT TO) | ~22% |
| 5 | OUTCOME (SO THAT I) | ~20% |

### D.2 Data Rows

| Row | Stakeholder | Caption | Situation | Motivation | Outcome |
|-----|-------------|---------|-----------|------------|---------|
| 1 | STUDENT | "REWIND" | Following a tutorial | Go at my own pace | Can absorb the information |
| 2 | STUDENT | "STREAK" | Doing a course | Reminded of its timelines | Don't leave it midway |
| 3 | TEACHER | "GURUDAKSHINA" | Making a tutorial | Ensure viewers complete it | So that it can be monetised |
| 4 | ADVERTISER | "MONEYBALL" | Deploying ads | Ensure people interact with it | Can increase ROAS |

---

## E. COLOR CODING

### E.1 Stakeholder Labels

| Stakeholder | Background Color | Hex |
|-------------|-----------------|-----|
| STUDENT | Blue | #2196F3 |
| TEACHER | Orange | #FF9800 |
| ADVERTISER | Green | #4CAF50 |

### E.2 Table Structure Colors

| Element | Color | Hex |
|---------|-------|-----|
| Border | Cyan/Teal | #00BCD4 |
| Header Row Background | Dark Blue | #1A237E |
| Data Row Background | Dark Gray | #263238 |
| Alternating Row | Slightly Lighter Gray | #37474F |
| Text Color (Headers) | White | #FFFFFF |
| Text Color (Data) | White | #FFFFFF |
| Background | Black | #000000 |

---

## F. TYPOGRAPHY

### F.1 Header Row

| Property | Value |
|----------|-------|
| Font Family | Press Start 2P |
| Font Size | ~10-12px |
| Font Weight | Regular |
| Text Color | White |
| Text Transform | UPPERCASE |
| Text Alignment | Center |

### F.2 Data Cells

| Property | Value |
|----------|-------|
| Font Family | Press Start 2P |
| Font Size | ~10-12px |
| Font Weight | Regular |
| Text Color | White |
| Text Transform | UPPERCASE (Captions in quotes) |
| Text Alignment | Center |

### F.3 Stakeholder Labels

| Property | Value |
|----------|-------|
| Font Family | Press Start 2P |
| Font Size | ~10-12px |
| Font Weight | Bold |
| Text Color | White |
| Background | Colored per stakeholder type |
| Padding | ~8-12px |
| Border Radius | None (pixel art style) |

---

## G. SPACING ANALYSIS

### G.1 From Previous Section

| Property | Value |
|----------|-------|
| Section 05 end | 2147 + 416 = 2563px |
| Section 06 start | 2853px |
| **Gap from previous section** | **290px (22.656vw)** |

### G.2 Table Internal Spacing

| Element | Spacing |
|---------|---------|
| Cell padding | ~16-20px |
| Row height | ~120-130px |
| Header row height | ~80px |
| Border width | ~2-3px |

### G.3 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 2853px (222.891vw) |
| Section End Y | 2853px + 650px = 3503px (273.672vw) |
| Total Section Height | 650px (50.781vw) |

---

## H. IMPLEMENTATION CSS

```css
.jtbd-table-container {
  width: 90.313vw;         /* 1156px */
  margin-left: 4.844vw;    /* 62px */
  margin-top: 22.656vw;    /* Gap from previous section */
}

.jtbd-table {
  width: 100%;
  border: 2px solid #00BCD4;
  border-collapse: separate;
  border-spacing: 0;
  background: #000000;
}

.jtbd-table th {
  background: #1A237E;
  color: #FFFFFF;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.781vw;      /* ~10px */
  padding: 1.25vw;         /* ~16px */
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #00BCD4;
}

.jtbd-table td {
  background: #263238;
  color: #FFFFFF;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.781vw;
  padding: 1.25vw;
  text-align: center;
  border: 1px solid #00BCD4;
}

.stakeholder-badge {
  display: inline-block;
  padding: 0.625vw 1.25vw;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.781vw;
  color: #FFFFFF;
}

.stakeholder-student {
  background: #2196F3;
}

.stakeholder-teacher {
  background: #FF9800;
}

.stakeholder-advertiser {
  background: #4CAF50;
}
```

---

## I. ASSET EXPORT

| Property | Value |
|----------|-------|
| Export Format | PNG (2x for retina) |
| Export Dimensions | 2312px × 1300px (@2x) |
| Local Path | `/public/images/vectorvault/jtbd-table.png` |

**Note:** Consider building this as an HTML table for accessibility and responsiveness rather than as a static image.

---

## J. SCREENSHOT REFERENCE

![JTBD Table](./screenshots/section_06_jtbd.png)

*Jobs To Be Done framework table showing stakeholders, situations, motivations, and outcomes*

---

## K. IMPLEMENTATION OPTIONS

### Option 1: Static Image Export
- Simplest implementation
- Maintains pixel-perfect rendering
- Not accessible to screen readers
- Not searchable

### Option 2: HTML Table
- Better accessibility
- Responsive-friendly
- Requires careful font rendering to match pixel art style
- Recommended for production

### Option 3: Hybrid
- Export table background/borders as image
- Overlay HTML text for accessibility
- Best of both worlds

---

## L. DATA FOR PROGRAMMATIC IMPLEMENTATION

```typescript
const jtbdData = [
  {
    stakeholder: 'STUDENT',
    stakeholderColor: '#2196F3',
    caption: '"REWIND"',
    situation: 'Following a tutorial',
    motivation: 'Go at my own pace',
    outcome: 'Can absorb the information'
  },
  {
    stakeholder: 'STUDENT',
    stakeholderColor: '#2196F3',
    caption: '"STREAK"',
    situation: 'Doing a course',
    motivation: 'Reminded of its timelines',
    outcome: "Don't leave it midway"
  },
  {
    stakeholder: 'TEACHER',
    stakeholderColor: '#FF9800',
    caption: '"GURUDAKSHINA"',
    situation: 'Making a tutorial',
    motivation: 'Ensure viewers complete it',
    outcome: 'So that it can be monetised'
  },
  {
    stakeholder: 'ADVERTISER',
    stakeholderColor: '#4CAF50',
    caption: '"MONEYBALL"',
    situation: 'Deploying ads',
    motivation: 'Ensure people interact with it',
    outcome: 'Can increase ROAS'
  }
];
```
