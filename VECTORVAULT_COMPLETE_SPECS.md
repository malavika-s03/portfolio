# VectorVault Case Study - Complete Design Specifications

**Source:** Figma Design (https://www.figma.com/design/SqIXD77CplNjeWPV8aFq4K/Test-2?node-id=1-4)
**Frame:** MacBook Air - 3 (Node ID: 1:4)
**Design Dimensions:** 1280px × 6275px
**Design Style:** Retro pixel art / gaming theme

---

## 1. FRAME & CANVAS INFORMATION

| Property | Value |
|----------|-------|
| Frame Name | MacBook Air - 3 |
| Width | 1280px |
| Height | 6275px |
| Background | Black (#000000) |
| Base Width (for vw calculations) | 1280px |

**VW Conversion Formula:** `value_vw = (figma_px / 1280) * 100`

---

## 2. COLOR PALETTE

### Primary Colors
| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Background | #000000 | Page background |
| Text Primary | #FFFFFF | Body text, labels |
| Pixel Magenta | ~#E040FF | Section headings (pixel art style) |
| Pixel Cyan | ~#00E5FF | Section headings accent |

### UI Element Colors
| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Button Green | #73927A | View prototype button background |
| Button Accent | #179E7E | Button diamond indicator |
| Controller Dark | #333333 | Controller button shadow |
| Controller Gray | #4C4C4C | Controller button body |
| Controller Border | #666666 | Controller button border |

### Chart Colors (Software Providers Pie Chart)
| Color Name | Hex Value | Segment |
|------------|-----------|---------|
| Magenta | ~#E040FF | Other 24% |
| Green | ~#00F593 | Adobe 49% |
| Blue | ~#2D4BFF | Apple 11% |
| Cyan | ~#00E5FF | Alludo 5% |
| Dark Blue | ~#1A237E | Avid Technology 2% |
| Purple | ~#7B1FA2 | Canva 7% |
| Dark Gray | ~#37474F | Maxon Computer 1% |

### Chart Colors (Creative Software Spend Pie Chart)  
| Color Name | Hex Value | Segment |
|------------|-----------|---------|
| Green | ~#00F593 | USA 52.8% |
| Magenta | ~#E040FF | Others 20.5% |
| Blue | ~#2D4BFF | United Kingdom 5% |
| Cyan | ~#00E5FF | China 4.8% |
| Purple | ~#7B1FA2 | Germany 4.5% |
| Dark Blue | ~#1A237E | Japan 3.5% |
| Orange | ~#FF5722 | Canada 3.1% |
| Red | ~#F44336 | France 2.6% |
| Pink | ~#FF80AB | Australia 1.7% |
| Light Blue | ~#4FC3F7 | Netherlands 1.5% |

---

## 3. TYPOGRAPHY

### Font Family: Press Start 2P
| Usage | Size (px) | Size (vw) | Weight | Line Height | Color |
|-------|-----------|-----------|--------|-------------|-------|
| Body Text | 16px | 1.25vw | Regular (400) | 31px (1.9375em) | #FFFFFF |
| Button Text | 16px | 1.25vw | Regular (400) | 28.005px | #FFFFFF |
| Section Headings | Pixel art images | ~2.5vw height | N/A | N/A | Magenta/Cyan |

### Font Family: Inter
| Usage | Size (px) | Size (vw) | Weight | Line Height | Color |
|-------|-----------|-----------|--------|-------------|-------|
| "Introduction" Label | 24px | 1.875vw | Bold (700) | normal | #FFFFFF |

### Typography Import
```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;600;700&display=swap');
```

---

## 4. RESPONSIVE CONVERSION TABLE

| Figma (px) | VW Value | Clamp Formula (min/vw/max) |
|------------|----------|----------------------------|
| 16px | 1.25vw | `clamp(10px, 1.25vw, 18px)` |
| 24px | 1.875vw | `clamp(14px, 1.875vw, 28px)` |
| 44px | 3.438vw | `clamp(32px, 3.438vw, 52px)` |
| 87px | 6.797vw | `clamp(60px, 6.797vw, 100px)` |
| 105px | 8.203vw | `clamp(70px, 8.203vw, 120px)` |
| 225px | 17.578vw | `clamp(140px, 17.578vw, 260px)` |
| 243px | 18.984vw | `clamp(160px, 18.984vw, 280px)` |
| 543px | 42.422vw | `clamp(320px, 42.422vw, 600px)` |
| 607px | 47.422vw | `clamp(380px, 47.422vw, 700px)` |
| 691px | 53.984vw | `clamp(420px, 53.984vw, 780px)` |
| 776px | 60.625vw | `clamp(480px, 60.625vw, 880px)` |
| 963px | 75.234vw | `clamp(600px, 75.234vw, 1080px)` |

---

## 5. PAGE SECTIONS (Top to Bottom)

### Section 1: Hero Section
**Position:** x=579, y=17
**Node ID:** 1:5
**Name:** SPM_VectorVault (1) 1
**Dimensions:** 1100px × 618px (85.94vw × 48.28vw)

**Contents:**
- Main VectorVault SVG illustration (complex animated pixel art logo)
- Full-width positioning on right side of header

---

### Section 2: Introduction Block
**Position:** y=240 to y=604
**Left Padding:** 87px (6.797vw)

#### "Introduction" Label
- **Node ID:** 1:2742
- **Position:** x=87, y=240
- **Dimensions:** 184px × 40px
- **Font:** Inter Bold
- **Size:** 24px (1.875vw)
- **Color:** #FFFFFF

#### Body Text
- **Node ID:** 1:2881
- **Position:** x=87, y=313
- **Dimensions:** 776px × 291px (60.625vw × 22.734vw)
- **Font:** Press Start 2P Regular
- **Size:** 16px (1.25vw)
- **Line Height:** 31px
- **Color:** #FFFFFF
- **Content:** "Throughout the semester, we have been working on the Yulu app's user experience, starting with identifying the critical gaps in user experience faced by customers through techniques such as affinity mapping, secondary research, and user journey mapping; these allowed us to create a preliminary set of problem statements"

---

### Section 3: WHY VECTORVAULT ?
**Node ID:** 1:7646
**Position:** x=87, y=613
**Dimensions:** 691.3px × 53px (54vw × 4.14vw)
**Type:** Pixel art text image (magenta with cyan accents)

**Content:** "WHY VECTORVAULT ?" rendered as pixel art

---

### Section 4: Software Providers Pie Chart Section
**Node ID:** 1:2882
**Position:** x=655, y=1468
**Dimensions:** 558px × 385px

**Chart Data:**
- ADOBE 49%
- OTHER 24%
- APPLE 11%
- CANVA 7%
- ALLUDO 5%
- AVID TECHNOLOGY 2%
- MAXON COMPUTER 1%

**Bullet Points (left side):**
- Font: Press Start 2P Regular
- Size: Small (~10px)
- Color: #FFFFFF

---

### Section 5: Creative Software Spend Pie Chart Section
**Node ID:** 1:3175
**Position:** y offset from previous section
**Dimensions:** ~524px × 416px

**Chart Data:**
- USA 52.8%
- OTHERS 20.5%
- UNITED KINGDOM 5%
- CHINA 4.8%
- GERMANY 4.5%
- JAPAN 3.5%
- CANADA 3.1%
- FRANCE 2.6%
- AUSTRALIA 1.7%
- NETHERLANDS 1.5%

---

### Section 6: JOBS TO BE DONE Section
**Section Heading:** Pixel art text "JOBS TO BE DONE"
**Position:** ~y=2800 area

**Table Structure:**
- Header row with colored cells
- Multiple rows with JTBD items
- Color-coded categories
- Press Start 2P font for all text

---

### Section 7: USER PERSONA Section
**Section Heading:** Pixel art text "USER PERSONA"
**Position:** y=3651

#### Persona Card: ARUN (Frame 6)
- **Node ID:** 1:15829
- **Position:** x=81, y=3651
- **Dimensions:** 543px × 225px (42.42vw × 17.578vw)
- **Border:** 3px solid white
- **Border Radius:** 12px
- **Shadow:** 8px 8px 10.8px 0px white
- **Profile Image:** Rounded rectangle, 184px × 157px
- **Name Label:** "ARUN" (pixel art style)
- **Role:** "ASPIRING ANIMATOR"
- **Health Bar:** Pixel art pink/magenta heart + bar

#### Persona Card: SARA (Frame 7)
- **Node ID:** 1:5303
- **Position:** x=658, y=3651
- **Dimensions:** 543px × 225px (42.42vw × 17.578vw)
- **Border:** 1px solid white
- **Border Radius:** 12px
- **No Shadow**
- **Profile Image:** Rounded rectangle with neon cyberpunk character
- **Name Label:** "SARA" (pixel art style)
- **Role:** "FREELANCER"
- **Health Bar:** Pixel art pink/magenta heart + bar

---

### Section 8: HOW THIS WORKS Section
**Section Heading Node ID:** 1:7545
**Heading Position:** y=4655
**Heading Dimensions:** 697px × 105px
**Heading Text:** "HOW THIS WORKS" (magenta pixel art)

#### Isometric Cityscape Illustration
**Group Node ID:** 1:7525
**Position:** x=-8, y=4655
**Total Dimensions:** 1130px × 987px

**Components:**
- **Background cityscape:** 937px × 607px isometric pixel art city
- **Character overlays:**
  - Character 1112: 201px × 201px (top right)
  - Character 1113: 192px × 202px (bottom left)
  - Character 1114: 96px × 169px (center)
  - Character 1115: 145px × 167px (right center)
  - Character 1116: 159px × 168px (center left)

#### View Prototype Button
**Node ID:** 1:7541
**Position:** x=529, y=5500
**Dimensions:** 243px × 44px (18.98vw × 3.44vw)
**Background:** #73927A
**Border Radius:** 6px
**Text:** "view prototype"
**Text Font:** Press Start 2P Regular
**Text Size:** 16px
**Text Color:** #FFFFFF
**Text Alignment:** center
**Diamond Indicator:** 8px × 8px, rotated 45°, color #179E7E

#### Controller/Play Button
**Position:** x=587, y=5563
**Outer Dimensions:** 125px × 56px
**Background:** #4C4C4C
**Border:** 6px solid #666666
**Border Radius:** 10px
**Play Icon:** Triangle centered

---

### Section 9: GAME OVER Footer (Implied)
**Position:** Bottom of page (~y=5900+)
**Content:** "GAME OVER" pixel art text + "THANK YOU FOR PLAYING!" message
**Controllers:** Pixel art game controller images on sides

---

## 6. LAYOUT MEASUREMENTS

### Global Spacing
| Element | Figma Value | VW Value |
|---------|-------------|----------|
| Left Page Padding | 87px | 6.797vw |
| Section Vertical Gap | ~100-200px | 7.8-15.6vw |
| Content Max Width | 1118px | 87.34vw |

### Hero Section
| Property | Figma Value | VW Value |
|----------|-------------|----------|
| Hero X Position | 579px | 45.23vw |
| Hero Y Position | 17px | 1.33vw |
| Hero Width | 1100px | 85.94vw |
| Hero Height | 618px | 48.28vw |

### Text Block (Introduction)
| Property | Figma Value | VW Value |
|----------|-------------|----------|
| Left Margin | 87px | 6.797vw |
| Top Margin | 240px | 18.75vw |
| Text Block Width | 776px | 60.625vw |
| Text Block Height | 291px | 22.734vw |

### Persona Cards
| Property | Figma Value | VW Value |
|----------|-------------|----------|
| Card Width | 543px | 42.42vw |
| Card Height | 225px | 17.578vw |
| Gap Between Cards | 34px | 2.656vw |
| Card Border Radius | 12px | 0.938vw |

### Button (View Prototype)
| Property | Figma Value | VW Value |
|----------|-------------|----------|
| Width | 243px | 18.984vw |
| Height | 44px | 3.438vw |
| Border Radius | 6px | 0.469vw |

---

## 7. ASSET LIST

### Images to Export/Save
| Asset Name | Node ID | Dimensions | Format | URL |
|------------|---------|------------|--------|-----|
| VectorVault Hero | 1:5 | 1100×618 | SVG/PNG | Export from Figma |
| Isometric Cityscape | 1:7527 | 937×607 | PNG | MCP Asset URL |
| Character 1112 | 1:7528 | 201×201 | PNG | MCP Asset URL |
| Character 1113 | 1:7529 | 192×202 | PNG | MCP Asset URL |
| Character 1114 | 1:7530 | 96×169 | PNG | MCP Asset URL |
| Character 1115 | 1:7531 | 145×167 | PNG | MCP Asset URL |
| Character 1116 | 1:7532 | 159×168 | PNG | MCP Asset URL |
| ARUN Profile | 1:15931 | 184×157 | PNG | MCP Asset URL |
| SARA Profile | 1:5327 | 147×144 | PNG | MCP Asset URL |
| WHY VECTORVAULT Text | 1:7646 | 691×53 | PNG | MCP Asset URL |
| HOW THIS WORKS Text | 1:7545 | 697×105 | PNG | MCP Asset URL |
| Software Providers Chart | 1:2882 | 558×385 | PNG | MCP Asset URL |
| Creative Spend Chart | 1:3175 | 525×416 | PNG | MCP Asset URL |
| Health Bar Heart | Various | ~30×26 | PNG | MCP Asset URL |
| Controller | 1:7537/38 | 125×56 | PNG | MCP Asset URL |

### Section Heading Images (Pixel Art)
All section headings are rendered as pixel art images and should be exported:
- VECTORVAULT (hero)
- WHY VECTORVAULT ?
- SOFTWARE PROVIDERS
- CREATIVE SOFTWARE SPEND
- JOBS TO BE DONE
- USER PERSONA
- HOW THIS WORKS
- GAME OVER
- THANK YOU FOR PLAYING

---

## 8. CSS CUSTOM PROPERTIES TEMPLATE

```css
:root {
  /* VectorVault Theme Colors */
  --vv-bg: #000000;
  --vv-text: #FFFFFF;
  --vv-accent-magenta: #E040FF;
  --vv-accent-cyan: #00E5FF;
  --vv-button-green: #73927A;
  --vv-button-accent: #179E7E;
  --vv-controller-dark: #333333;
  --vv-controller-gray: #4C4C4C;
  --vv-controller-border: #666666;
  
  /* Chart Colors */
  --vv-chart-green: #00F593;
  --vv-chart-magenta: #E040FF;
  --vv-chart-blue: #2D4BFF;
  --vv-chart-cyan: #00E5FF;
  --vv-chart-purple: #7B1FA2;
  --vv-chart-dark-blue: #1A237E;
  
  /* Base Width for Calculations */
  --vv-base-width: 1280px;
  
  /* Typography */
  --vv-font-pixel: 'Press Start 2P', cursive;
  --vv-font-sans: 'Inter', sans-serif;
  
  /* Spacing */
  --vv-page-padding: 6.797vw;
  --vv-section-gap: 10vw;
}
```

---

## 9. COMPONENT STRUCTURE

```
VectorVaultCaseStudy/
├── index.tsx           # Main page component
├── data.ts            # Static content data
└── assets/            # Exported images
    ├── hero-vectorvault.png
    ├── cityscape-isometric.png
    ├── characters/
    │   ├── char-1112.png
    │   ├── char-1113.png
    │   ├── char-1114.png
    │   ├── char-1115.png
    │   └── char-1116.png
    ├── personas/
    │   ├── arun-profile.png
    │   └── sara-profile.png
    ├── headings/
    │   ├── why-vectorvault.png
    │   ├── software-providers.png
    │   ├── creative-spend.png
    │   ├── jobs-to-be-done.png
    │   ├── user-persona.png
    │   ├── how-this-works.png
    │   └── game-over.png
    └── charts/
        ├── software-providers-pie.png
        └── creative-spend-pie.png
```

---

## 10. IMPLEMENTATION NOTES

### Responsive Strategy (Following Yulu Pattern)
1. Use `vw` units for all dimensions based on 1280px base width
2. Apply `clamp()` for minimum readable sizes on text
3. Maintain aspect ratios for images with percentage-based sizing
4. No breakpoints - pure proportional scaling

### Special Considerations
1. **Pixel Art Images:** Section headings are pre-rendered pixel art - export as PNG with transparency
2. **Pie Charts:** Can be recreated with CSS/SVG or exported as images
3. **Persona Cards:** White border with optional shadow effect
4. **Controller Button:** Complex nested styling with borders and rounded corners
5. **Isometric Illustration:** Multiple layered images with absolute positioning

### Animation Suggestions
1. Subtle fade-in for sections on scroll
2. Hover effects on buttons (scale, glow)
3. Optional: Pixel-style glitch effect on headings

---

## 11. Z-INDEX LAYERS

| Layer | Z-Index | Elements |
|-------|---------|----------|
| Background | 0 | Page background |
| Content | 1 | Text, charts, cards |
| Overlays | 2 | Character images on cityscape |
| Interactive | 3 | Buttons, CTAs |

---

## 12. ACCESSIBILITY NOTES

- Ensure sufficient contrast for white text on black (passes WCAG AAA)
- Add appropriate alt text for all pixel art headings
- Maintain minimum 12px equivalent font size on mobile
- Include aria-labels for decorative elements

---

*Document Generated: March 5, 2026*
*Source: Figma MCP Design Context Extraction*
