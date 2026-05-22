# VectorVault Top Section — Figma Specs (Source of Truth)

Base frame: 1280px wide (MacBook Air - 3, node 22:15953)
Convert: `vw = (px / 1280) * 100`

## Figma Absolute Coordinates → Code Mapping

### HeroAndIntroSection (y=0 to y=604)

| Element | Figma x | Figma y | Figma w | Figma h | Code position | Status |
|---------|---------|---------|---------|---------|---------------|--------|
| Hero illustration | 579 | 17 | 701 (visible) | 618 | left=vw(579), top=vw(17) | ✅ Fixed |
| Vault icon | 85 | 48 | 96 | 93 | left=vw(85), top=vw(48) | ✅ |
| VECTORVAULT title | 206 | 63 | 734 | 60 | left=vw(206), top=vw(63) | ✅ |
| Introduction label | 87 | 240 | 184 | 40 | left=vw(87), top=vw(240) | ✅ |
| Body text | 87 | 313 | 776 | 291 | left=vw(87), top=vw(313) | ✅ |

### WhyVectorVaultSection (starts at page y=613, section-relative coords)

| Element | Figma x | Figma y | Section top | Figma w | Code position | Status |
|---------|---------|---------|-------------|---------|---------------|--------|
| WHY heading | 87 | 613 | 0 | 691 | left=vw(87), top=0 | ✅ |
| Right bullet | 835 | 623 | 10 | 398 | left=vw(835), top=vw(10) | ✅ |
| YouTube screenshot | 640 | 787 | 174 | 595×324 | left=vw(640), top=vw(174) | ✅ Added |
| Left bullets | 87 | 833 | 220 | 487 | left=vw(87), top=vw(220) | ✅ Fixed |

### JobsToBeDonesection (starts at page y=2755, heading; table at y=2853)

| Element | Figma x | Figma y | Section top | Figma w | Figma h | Code position | Status |
|---------|---------|---------|-------------|---------|---------|---------------|--------|
| JTBD heading | 76 | 2755 | 0 | 553 | 37 | marginLeft=vw(14), top | ✅ |
| JTBD table | 62 | 2853 | 98 | 1156 | 650 | width=vw(1156) | ✅ |

### UserPersonasSection (starts at page y=3521)

| Element | Figma x | Figma y | Figma w | Figma h | Code position | Status |
|---------|---------|---------|---------|---------|---------------|--------|
| USER PERSONA heading | 71 | 3521 | 476 | 37 | marginLeft=vw(71) | ✅ |
| Arun card | 81 | 3651 | 543 | 225 | Card 1 | ✅ |
| Sana card | 658 | 3651 | 543 | 225 | Card 2 | ✅ |
| Health bar (Arun) | 223 | 42 (rel) | 161 | 41 | img asset | ✅ Fixed |
| Health bar (Sana) | 210 | 45 (rel) | 161 | 41 | img asset | ✅ Fixed |
| Arun avatar | 18 | 35 (rel) | 184 | 157 | per-card pos | ✅ Fixed |
| Sana avatar | 30 | 45 (rel) | 147 | 144 | per-card pos | ✅ Fixed |

### DetailedPersonaCard (starts at page y=3911)

| Element | Figma x | Figma y | Figma w | Figma h | Code position | Status |
|---------|---------|---------|---------|---------|---------------|--------|
| Card frame | 73 | 3911 | 1149 | 647 | marginLeft=vw(73) | ✅ |
| Health bar (detail) | 168 | 22 (rel) | 96 | 29 | img asset (scaled) | ✅ Fixed |

### Inter-section gaps (from Figma absolute positions)

| From → To | Figma gap | Code margin | Status |
|-----------|-----------|-------------|--------|
| JTBD table bottom → USER PERSONA heading | 18px | marginTop=vw(18) | ✅ |
| Persona cards bottom → Detailed persona | 35px | marginTop=vw(35) | ✅ |

## Fixes Applied

1. **Hero illustration image**: Replaced 2000×2000 square PNG with proper 701×618 Figma export. Changed from `right:0` + `objectFit:cover` to `left:vw(579)` — coin/avatar now appears correctly on the right side.
2. **Left bullets position**: top changed from vw(150) to vw(220).
3. **YouTube screenshot**: Added missing image at correct coordinates.
4. **Section height**: WhyVectorVault minHeight changed from vw(280) to vw(498).
5. **Downstream margin**: SoftwareProviders marginTop reduced from vw(307) to vw(89) to compensate.
6. **Health bars**: Replaced code-generated SVG heart + CSS gradient bars with pixel art health-bar.png image exported from Figma. Same asset used at different sizes: 161×41 in persona cards, 96×29 in detailed persona card.
7. **Per-card positioning**: Arun and Sana cards now use Figma-specific avatar/health bar/name/role positions instead of shared values.
