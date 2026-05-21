# SECTION 07: USER PERSONAS

## A. IDENTIFICATION

| Property | Value |
|----------|-------|
| Section Name | User Persona Cards |
| Contains | ARUN Card (1:15829) + SANA Card (1:5303) |
| Layout | Two cards side by side |
| Position Y | 3651px |

---

## B. OVERALL SECTION DIMENSIONS

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Total Width | 1120px (543 + 34 gap + 543) | 87.5vw |
| Height | 225px | 17.578vw |
| Left Margin | 81px | 6.328vw |

---

## C. PERSONA CARD 1: ARUN

### C.1 Identification

| Property | Value |
|----------|-------|
| Node ID | 1:15829 |
| Frame Name | Frame 6 |
| Position | x=81px, y=3651px |

### C.2 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 543px | 42.422vw |
| Height | 225px | 17.578vw |

### C.3 Card Contents

| Element | Description |
|---------|-------------|
| Avatar | Cyberpunk-style male character illustration |
| Avatar Frame | Rounded rectangle with teal/cyan border |
| Name | "ARUN" (pixel art text) |
| Role | "ASPIRING ANIMATOR" |
| Health Bar | Pink heart icon + progress bar |

### C.4 Avatar Dimensions

| Property | Pixels |
|----------|--------|
| Avatar Width | ~184px |
| Avatar Height | ~157px |
| Border Radius | 12px |
| Border Color | #00BCD4 (Cyan) |
| Border Width | 3px |

### C.5 Typography

| Element | Font | Size | Color |
|---------|------|------|-------|
| Name "ARUN" | Press Start 2P | ~30px | White |
| Role | Press Start 2P | ~14px | Light Gray |

### C.6 Health Bar

| Property | Value |
|----------|-------|
| Heart Icon | Pink pixel art heart |
| Bar Background | Dark/transparent |
| Bar Fill | Pink/Magenta gradient |
| Bar Width | ~160px |
| Bar Height | ~40px |

---

## D. PERSONA CARD 2: SANA

### D.1 Identification

| Property | Value |
|----------|-------|
| Node ID | 1:5303 |
| Frame Name | Frame 7 |
| Position | x=658px, y=3651px |

### D.2 Dimensions

| Property | Pixels | VW (÷1280×100) |
|----------|--------|----------------|
| Width | 543px | 42.422vw |
| Height | 225px | 17.578vw |

### D.3 Card Contents

| Element | Description |
|---------|-------------|
| Avatar | Cyberpunk-style female character illustration |
| Avatar Frame | Rounded rectangle with purple/pink tones |
| Name | "SANA" (pixel art text) |
| Role | "FREELANCER" |
| Health Bar | Pink heart icon + progress bar |

### D.4 Avatar Dimensions

| Property | Pixels |
|----------|--------|
| Avatar Width | 147px |
| Avatar Height | 144px |
| Border Radius | 12px |

### D.5 Typography

| Element | Font | Size | Color |
|---------|------|------|-------|
| Name "SANA" | Press Start 2P | ~30px | White |
| Role "FREELANCER" | Press Start 2P | ~14px | Light Gray |

---

## E. SPACING ANALYSIS

### E.1 Gap Between Cards

| Property | Value |
|----------|-------|
| ARUN card right edge | 81 + 543 = 624px |
| SANA card left edge | 658px |
| **Gap between cards** | **34px (2.656vw)** |

### E.2 From Previous Section

| Property | Value |
|----------|-------|
| Section 06 end | 2853 + 650 = 3503px |
| Section 07 start | 3651px |
| **Gap from previous section** | **148px (11.563vw)** |

### E.3 Section Boundaries

| Property | Value |
|----------|-------|
| Section Start Y | 3651px (285.234vw) |
| Section End Y | 3651px + 225px = 3876px (302.813vw) |
| Total Section Height | 225px (17.578vw) |

---

## F. VISUAL STYLE

### F.1 Card Background

| Property | Value |
|----------|-------|
| Background | Black (#000000) |
| Border | 1px solid white/light |
| Border Radius | 12px |
| Shadow | Subtle glow effect |

### F.2 Avatar Style

Both avatars feature:
- Cyberpunk aesthetic
- Neon color accents (pink, cyan, purple)
- Futuristic cityscape backgrounds
- Character-specific styling (hair color, clothing)

---

## G. COLOR PALETTE

| Element | Color | Hex |
|---------|-------|-----|
| Card Background | Black | #000000 |
| Card Border | White | #FFFFFF |
| ARUN Avatar Border | Cyan | #00BCD4 |
| Heart Icon | Pink | #FF4081 |
| Health Bar Fill | Pink/Magenta | #E040E0 |
| Name Text | White | #FFFFFF |
| Role Text | Light Gray | #BDBDBD |

---

## H. IMPLEMENTATION CSS

```css
.personas-container {
  display: flex;
  gap: 2.656vw;            /* 34px */
  margin-left: 6.328vw;    /* 81px */
  margin-top: 11.563vw;    /* 148px gap from previous */
}

.persona-card {
  width: 42.422vw;         /* 543px */
  height: 17.578vw;        /* 225px */
  background: #000000;
  border: 1px solid #FFFFFF;
  border-radius: 12px;
  display: flex;
  padding: 1.5vw;
  align-items: center;
  gap: 2vw;
}

.persona-avatar {
  width: 14.375vw;         /* ~184px */
  height: 12.266vw;        /* ~157px */
  border-radius: 12px;
  overflow: hidden;
}

.persona-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.persona-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1vw;
}

.persona-health-bar {
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

.persona-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 2.344vw;      /* ~30px */
  color: #FFFFFF;
}

.persona-role {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.094vw;      /* ~14px */
  color: #BDBDBD;
  text-transform: uppercase;
}
```

---

## I. ASSET EXPORTS

### ARUN Card Assets

| Asset | Format | Dimensions | Path |
|-------|--------|------------|------|
| Full Card | PNG @2x | 1086 × 450 | `/public/images/vectorvault/persona-arun.png` |
| Avatar Only | PNG @2x | 368 × 314 | `/public/images/vectorvault/persona-arun-avatar.png` |

### SANA Card Assets

| Asset | Format | Dimensions | Path |
|-------|--------|------------|------|
| Full Card | PNG @2x | 1086 × 450 | `/public/images/vectorvault/persona-sana.png` |
| Avatar Only | PNG @2x | 294 × 288 | `/public/images/vectorvault/persona-sana-avatar.png` |

---

## J. SCREENSHOT REFERENCES

### ARUN Card
![ARUN Persona Card](./screenshots/section_07_arun.png)

*Cyberpunk-styled persona card for ARUN, an aspiring animator*

### SANA Card
![SANA Persona Card](./screenshots/section_07_sana.png)

*Cyberpunk-styled persona card for SANA, a freelancer*

---

## K. IMPLEMENTATION OPTIONS

### Option 1: Static Images
- Export both cards as full PNG images
- Simplest implementation
- Maintains pixel-perfect design

### Option 2: Hybrid Approach
- Export avatars as images
- Build card structure with HTML/CSS
- Use pixel art font for text
- Better for accessibility

### Option 3: Full Component
- Build complete cards as React components
- Most flexible for interaction/animation
- Requires careful font rendering

---

## L. DATA FOR PROGRAMMATIC IMPLEMENTATION

```typescript
interface Persona {
  name: string;
  role: string;
  avatar: string;
  healthLevel: number; // 0-100
}

const personas: Persona[] = [
  {
    name: 'ARUN',
    role: 'ASPIRING ANIMATOR',
    avatar: '/images/vectorvault/persona-arun-avatar.png',
    healthLevel: 75
  },
  {
    name: 'SANA',
    role: 'FREELANCER',
    avatar: '/images/vectorvault/persona-sana-avatar.png',
    healthLevel: 80
  }
];
```
