# VectorVault Case Study - Asset Export Reference

**IMPORTANT:** The Figma MCP asset URLs below expire in 7 days. Download and save these assets before implementing.

---

## 1. ISOMETRIC CITYSCAPE & CHARACTERS (HOW THIS WORKS Section)

### Main Cityscape Background
```
Asset: isometric-pixel-art-cityscape-mp620dhj2uno214q 1
Node ID: 1:7527
Dimensions: 937px × 607px
URL: https://www.figma.com/api/mcp/asset/3686005e-65a5-45ea-9c3d-5e17a04a5741
Save As: public/images/vectorvault/cityscape-isometric.png
```

### Character Overlays
```
Character 1112 (Top Right - Female with staff)
Node ID: 1:7528
Dimensions: 201px × 201px
URL: https://www.figma.com/api/mcp/asset/e11f5361-46cf-41f9-8553-28f1e7be679e
Save As: public/images/vectorvault/characters/char-1112.png

Character 1113 (Bottom Left - Female casual)
Node ID: 1:7529
Dimensions: 192px × 202px
URL: https://www.figma.com/api/mcp/asset/6e7af9b5-9cd7-4535-997a-2280503f94a8
Save As: public/images/vectorvault/characters/char-1113.png

Character 1114 (Center - Worker with hardhat)
Node ID: 1:7530
Dimensions: 96px × 169px
URL: https://www.figma.com/api/mcp/asset/fa349693-2e1c-48cc-960e-4a27dccbffda
Save As: public/images/vectorvault/characters/char-1114.png

Character 1115 (Right Center - Cowboy style)
Node ID: 1:7531
Dimensions: 145px × 167px
URL: https://www.figma.com/api/mcp/asset/157844d0-5e9c-41c2-9d01-b5b3e8e7390f
Save As: public/images/vectorvault/characters/char-1115.png

Character 1116 (Center Left)
Node ID: 1:7532
Dimensions: 159px × 168px  
URL: https://www.figma.com/api/mcp/asset/e3f6feeb-9c16-4180-8001-2058255e869e
Save As: public/images/vectorvault/characters/char-1116.png
```

---

## 2. CONTROLLER UI ELEMENTS

```
Controller Frame Background
Node ID: 1:7535
URL: https://www.figma.com/api/mcp/asset/d9ca37db-01f8-4c6b-a4d5-65fd17828367
Save As: public/images/vectorvault/ui/controller-frame.png

Controller Play Icon
Node ID: 1:7539
URL: https://www.figma.com/api/mcp/asset/16cdafc1-d124-4b62-b071-1a273657d9bc
Save As: public/images/vectorvault/ui/controller-play-icon.png
```

---

## 3. PERSONA CARD IMAGES

### ARUN Persona
```
Profile Image (Cyberpunk male character)
Node ID: 1:15931
URL: https://www.figma.com/api/mcp/asset/056d95a2-d1ff-438e-bfa9-43d1811fb605
Save As: public/images/vectorvault/personas/arun-profile.png

Name Badge Background
Node ID: 1:15940
URL: https://www.figma.com/api/mcp/asset/0facf1f4-e563-43db-bdc1-691b3d7a9537
```

### SARA Persona
```
Profile Image (Neon cyberpunk female character)
Node ID: 1:5327
URL: https://www.figma.com/api/mcp/asset/b5735a4c-397a-40e1-b5a9-704959080bec
Save As: public/images/vectorvault/personas/sara-profile.png

Name Badge Background
Node ID: 1:5397
URL: https://www.figma.com/api/mcp/asset/94bc4e62-fb66-445b-a060-67a8cd1657b9
```

---

## 4. SECTION HEADING IMAGES (Pixel Art Text)

These are complex pixel art text renderings - export entire groups as PNG.

```
WHY VECTORVAULT ?
Node ID: 1:7646
Dimensions: 691px × 53px
Position: x=87, y=613
Save As: public/images/vectorvault/headings/why-vectorvault.png

HOW THIS WORKS
Node ID: 1:7545 (Group containing text)
Dimensions: 697px × 105px
Position: y=4655
Save As: public/images/vectorvault/headings/how-this-works.png
```

**Note:** Other section headings (SOFTWARE PROVIDERS, CREATIVE SOFTWARE SPEND, JOBS TO BE DONE, USER PERSONA, GAME OVER) should be exported similarly from their respective nodes.

---

## 5. PIE CHART IMAGES

### Software Providers Pie Chart
```
Node ID: 1:2882 (Full group)
Dimensions: 558px × 385px
Save As: public/images/vectorvault/charts/software-providers-pie.png
```

### Creative Software Spend Pie Chart
```
Node ID: 1:3175 (Full group)
Dimensions: 525px × 416px
Save As: public/images/vectorvault/charts/creative-spend-pie.png
```

---

## 6. HERO VECTORVAULT ILLUSTRATION

```
Full Hero SVG/Illustration
Node ID: 1:5
Name: SPM_VectorVault (1) 1
Dimensions: 1100px × 618px
Position: x=579, y=17

This is a complex multi-layer illustration with animated pixel effects.
Export as: PNG (for static) or SVG (for scalability)
Save As: public/images/vectorvault/hero-vectorvault.png
```

---

## 7. EXPORT INSTRUCTIONS

### Using Figma Export
1. Open Figma file: https://www.figma.com/design/SqIXD77CplNjeWPV8aFq4K/Test-2
2. Select the node by ID (use node-id in URL)
3. Right-click → Export → Choose PNG at 2x for retina
4. Download and save to the specified path

### Using MCP Asset URLs
The URLs above are temporary (7-day expiry). To download:
```bash
# Example: Download cityscape
curl -o public/images/vectorvault/cityscape-isometric.png "https://www.figma.com/api/mcp/asset/3686005e-65a5-45ea-9c3d-5e17a04a5741"
```

---

## 8. FOLDER STRUCTURE TO CREATE

```
public/images/vectorvault/
├── hero-vectorvault.png
├── cityscape-isometric.png
├── headings/
│   ├── why-vectorvault.png
│   ├── software-providers.png
│   ├── creative-spend.png
│   ├── jobs-to-be-done.png
│   ├── user-persona.png
│   ├── how-this-works.png
│   ├── game-over.png
│   └── thank-you.png
├── charts/
│   ├── software-providers-pie.png
│   └── creative-spend-pie.png
├── personas/
│   ├── arun-profile.png
│   └── sara-profile.png
├── characters/
│   ├── char-1112.png
│   ├── char-1113.png
│   ├── char-1114.png
│   ├── char-1115.png
│   └── char-1116.png
└── ui/
    ├── controller-frame.png
    ├── controller-play-icon.png
    └── health-heart.png
```

---

## 9. ASSET CHECKLIST

| Asset | Status | Priority |
|-------|--------|----------|
| [ ] Hero VectorVault illustration | Pending | High |
| [ ] WHY VECTORVAULT heading | Pending | High |
| [ ] SOFTWARE PROVIDERS heading | Pending | High |
| [ ] CREATIVE SOFTWARE SPEND heading | Pending | High |
| [ ] JOBS TO BE DONE heading | Pending | High |
| [ ] USER PERSONA heading | Pending | High |
| [ ] HOW THIS WORKS heading | Pending | High |
| [ ] GAME OVER heading | Pending | High |
| [ ] Software Providers pie chart | Pending | Medium |
| [ ] Creative Spend pie chart | Pending | Medium |
| [ ] ARUN profile image | Pending | High |
| [ ] SARA profile image | Pending | High |
| [ ] Isometric cityscape | Pending | High |
| [ ] Character 1112 | Pending | Medium |
| [ ] Character 1113 | Pending | Medium |
| [ ] Character 1114 | Pending | Medium |
| [ ] Character 1115 | Pending | Medium |
| [ ] Character 1116 | Pending | Medium |
| [ ] Controller frame | Pending | Low |
| [ ] Controller play icon | Pending | Low |
| [ ] Health bar heart | Pending | Low |

---

## 10. COLOR REFERENCE FOR SVG RECREATION

If recreating charts/elements as SVG instead of using images:

### Pie Chart Segment Colors
```css
/* Software Providers */
.adobe { fill: #00F593; }      /* 49% */
.other { fill: #E040FF; }      /* 24% */
.apple { fill: #2D4BFF; }      /* 11% */
.canva { fill: #7B1FA2; }      /* 7% */
.alludo { fill: #00E5FF; }     /* 5% */
.avid { fill: #1A237E; }       /* 2% */
.maxon { fill: #37474F; }      /* 1% */

/* Creative Software Spend */
.usa { fill: #00F593; }        /* 52.8% */
.others { fill: #E040FF; }     /* 20.5% */
.uk { fill: #2D4BFF; }         /* 5% */
.china { fill: #00E5FF; }      /* 4.8% */
.germany { fill: #7B1FA2; }    /* 4.5% */
.japan { fill: #1A237E; }      /* 3.5% */
.canada { fill: #FF5722; }     /* 3.1% */
.france { fill: #F44336; }     /* 2.6% */
.australia { fill: #FF80AB; }  /* 1.7% */
.netherlands { fill: #4FC3F7; }/* 1.5% */
```

---

*Document Generated: March 5, 2026*
*Asset URLs valid until: ~March 12, 2026*
