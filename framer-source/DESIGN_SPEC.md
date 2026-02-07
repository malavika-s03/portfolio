# Framer Source Design Specification
## Extracted from: https://resourceful-color-369893-df7638d8d.framer.app/
## Extracted on: 2026-02-07

---

## Color Tokens (Exact)
| Token | Value | Usage |
|-------|-------|-------|
| `--token-c21010f9` | `#fff` | White / Background |
| `--token-e9abed44` | `#000` | Black / Foreground |
| `--token-2c41600e` | `#333` | Dark Gray |
| `--token-d33b7ab3` | `#b3b3b3` | Light Gray / Muted |
| `--token-041fe102` | `#f5f5f5` | BG Light / Divider / Button BG |
| `--token-d2ccd5d2` | `#ed4337` | Accent Red |

---

## Typography Presets (Exact from CSS)

### H1 Name (preset-bglb1i)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height | Alignment | OpenType |
|-----------|-----------|--------|----------------|-------------|-----------|----------|
| Desktop (≥1200) | **174px** | 600 | -0.09em | 1em | start | "blwf","cv09","cv03","cv04","cv11" |
| Tablet (810-1199) | **116px** | 600 | -0.09em | 1em | start | same |
| Mobile (<810) | **76px** | 600 | -0.09em | 1em | start | same |

### Intro Paragraph (preset-1jr5377)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height | Alignment |
|-----------|-----------|--------|----------------|-------------|-----------|
| Desktop | **40px** | 500 | -0.06em | 1.1em | justify |
| Tablet | **32px** | 500 | -0.06em | 1.1em | justify |
| Mobile | **28px** | 500 | -0.06em | 1.1em | justify |

### About Statement (preset-9wzn91)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height | Alignment |
|-----------|-----------|--------|----------------|-------------|-----------|
| Desktop | **50px** | 500 | -0.06em | 1.1em | justify* |
| Tablet | **40px** | 500 | -0.06em | 1.1em | justify* |
| Mobile | **28px** | 500 | -0.06em | 1.1em | justify* |
*Preset says "left" but inline style overrides to "justify"

### Section Titles - work./about. (preset-1gvuoy3)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height | Alignment |
|-----------|-----------|--------|----------------|-------------|-----------|
| Desktop | **30px** | 500 | **-0.03em** | 1.2em | start |
| Tablet | **24px** | 500 | -0.03em | 1.2em | start |
| Mobile | **19px** | 500 | -0.03em | 1.2em | start |

### CTA/Footer Heading (preset-v5rub6)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height |
|-----------|-----------|--------|----------------|-------------|
| Desktop | **48px** | 500 | **-0.05em** | 1.2em |
| Tablet | **32px** | 500 | -0.05em | 1.2em |
| Mobile | **38px** | 500 | -0.05em | 1.2em |

### Button Text (preset-1l7bfec)
- Font: Inter, 16px, weight 500, letter-spacing -0.04em, line-height 1.2em

### Philosophy Text (preset-1ej9in7)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height | Alignment |
|-----------|-----------|--------|----------------|-------------|-----------|
| Desktop | **20px** | 500 | **-0.04em** | 1.2em | justify |
| Tablet | **16px** | 500 | -0.04em | 1.2em | justify |
| Mobile | **16px** | 500 | -0.04em | 1.2em | justify |

### Email Text (preset-1p380mk)
- Font: Inter, **26px**, weight 500, letter-spacing -0.06em, line-height 1.3em

### Nav Menu Links (preset-147aka4)
| Breakpoint | Font Size | Weight | Letter-spacing | Line-height |
|-----------|-----------|--------|----------------|-------------|
| Desktop | **18px** | 500 | -0.06em | 1.1em |
| Tablet | **18px** | 500 | -0.06em | 1.1em |
| Mobile | **38px** | 500 | -0.06em | 1.1em |

---

## Layout Specifications (Exact from CSS classes)

### Breakpoints
- Desktop: min-width 1200px
- Tablet: 810px - 1199px  
- Mobile: 0 - 809px

### Hero Section (.framer-c6378y)
```
Desktop: padding: 0 80px; flex-column; align-items: center
Tablet:  padding: 0 30px
Mobile:  padding: 0 20px
```

### Hero Container (.framer-1umilaq)
```
Desktop: max-width: 1600px; height: 100vh; min-height: 800px;
         padding: 140px 0 80px; flex-column; justify: space-between
Tablet:  height: min-content; gap: 34px; padding: 140px 0 40px
Mobile:  same as tablet
```

### Profile Section (.framer-1llba4z)
```
Desktop: flex-row; gap: 10px; width: 100%
Mobile:  flex-column; gap: 30px
```

### Name Column (.framer-7o4si6)
```
Desktop: flex: 1 0 0; width: 1px (takes remaining space)
Mobile:  flex: none; order: 1; width: 100%
```

### Profile Photo (.framer-aqkbdw)
- border-radius: 140px (circle)
- Contains responsive images inside

### Bio Section (.framer-1ogdxxd)
- Contains Email component + Intro text
- Email component: flex-row, gap: 12px, items-center

### Divider (.framer-127ea2h → .framer-1fvxecq)
```
background: #f5f5f5; height: 1px
Desktop: flex: 1 0 0; width: 1px
Mobile:  flex: none; width: 100%
```

### Work Section (.framer-19i4xg)
```
Desktop: padding: 30px 80px 80px; gap: 36px
Tablet:  padding: 30px 30px 80px
Mobile:  padding: 30px 20px 20px
```

### Work Container (.framer-txbo53)
```
max-width: 1600px
Desktop: gap: 36px
Mobile:  gap: 30px
```

### Work Grid (.framer-pcf6c)
```
Desktop: grid-template-columns: repeat(2, minmax(50px, 1fr)); gap: 20px
Mobile:  grid-template-columns: repeat(1, minmax(50px, 1fr))
```

### About Section (.framer-1rlt24d)
```
background: #fff; z-index: 2; position: relative
Desktop: padding: 80px 80px 160px
Tablet:  padding: 80px 30px 110px
Mobile:  padding: 30px 20px 70px
```

### About Container (.framer-kscgcc)
```
max-width: 1600px
Desktop: gap: 80px
Mobile:  gap: 40px
```

### Footer (.framer-d6igg.framer-1d5uo46)
```
Desktop: width: 1200px; padding: 0 80px
Tablet:  width: 810px; padding: 0 30px
Mobile:  width: 390px; padding: 0 20px
```

### Footer Container (.framer-p15zb8)
```
Desktop: height: 100vh; max-width: 1600px; padding: 60px 0;
         flex-column; justify: space-between
Mobile:  padding: 140px 0 24px
```

### Footer CTA Area (.framer-1i0y87o)
- gap: 40px (desktop), 32px (mobile)

### Footer CTA+Status Row (.framer-114cw9p)
- flex-row; gap: 40px; items-center
- Mobile: flex-column; items-start

### Footer Social Links (.framer-5rx6hh)
- flex-row; justify: flex-end; gap: 26px (desktop), 30px (mobile)

### Footer Info (.framer-xqh94c)
- gap: 170px (desktop), unset/space-between (mobile)

---

## Buttons (Exact)

### "Show More" Button (Small variant)
```
padding: 16px 26px
background: #f5f5f5
text: 16px, weight 500, letter-spacing -0.04em
border: none
cursor: pointer
```

### "Get in Touch" Button (Big variant)  
```
padding: 20px 36px
background: #fff
text: 16px, weight 500, letter-spacing -0.04em, color: #000
cursor: pointer
```

---

## Appear Animations (Page Load)

| Element | Appear ID | Initial State | Final State |
|---------|-----------|---------------|-------------|
| Header backdrop | ydsxfz | `opacity:0.001; translateY(-100px)` | `opacity:1; translateY(0)` |
| First Name (MALAVIKA) | 1fxi65i | `opacity:0.001; translateY(175px)` | `opacity:1; translateY(0)` |
| Last Name (SURESH) | 120flr0 | `opacity:0.001; translateY(175px)` | `opacity:1; translateY(0)` |
| Profile Photo | aqkbdw | `opacity:0.001; scale(0)` | `opacity:1; scale(1)` |
| Bio Section | 1ogdxxd | `opacity:0.001; translateY(265px)` | `opacity:1; translateY(0)` |
| Footer | n0ccwk | `opacity:0.001; translateY(10px)` | `opacity:1; translateY(0)` |

Nav items (kczty4, 5gdhoe, 1mmows2) start at opacity:1, no animation.

---

## Scroll-Triggered Animations

| Element | Initial State (inline style) | Trigger |
|---------|-------------------------------|---------|
| About section header ("about." + "Show More") | `opacity:0; translateY(100px)` | Scroll into viewport |
| About text section | `opacity:0; translateY(160px)` | Scroll into viewport |
| About image section | `opacity:0; translateY(160px)` | Scroll into viewport |
| Footer container | `opacity:1; translateY(-500px)` | Scroll into viewport (parallax) |

---

## Transition Easing
- **Framer default easing:** `cubic-bezier(0.44, 0, 0.56, 1)` 
- Color transitions: `transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1)`

---

## Gradient
- Footer CTA text: `linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%)`
- Applied via `background-image` on a `<span data-text-fill="true">`

---

## Header Dots Icon (.framer-IJBOH)
```
Container: 19px × 19px; cursor: pointer; flex-column; gap: 2px
Rows (.framer-6adwx5, .framer-zjdpj): flex-row; gap: 9px
Dots (.framer-ryl9c1 etc): 5px × 5px; aspect-ratio: 1; background: #000
```

---

## Available Dot (Footer)
```
Small dot: 10px × 10px; border-radius: 20px; background: #fff
Big dot (pulse): 10px × 10px; absolute positioned; border-radius: 20px; background: #fff
Container: flex-row; gap: 16px
```

---

## Image Specifications
| Image | Width | Aspect Ratio |
|-------|-------|-------------|
| Profile photo | 336×336 (circle) | 1:1 |
| About portrait | 553px desktop / 350px tablet | 1.3825 |
| Project cards | responsive grid | 1:1 |

## Project Card Hover
- Title appears at bottom-left: white text, opacity transition
- Card links to `/works/:slug`

---

## Named Framer Elements (Component Hierarchy)
```
Header Section
  ├── Logo ("HOME" link)
  └── Dots icon (Top row + Bottom row, 2×2 dots)

Hero
  └── Container
      ├── Profile Section
      │   ├── Name
      │   │   ├── First Name ("MALAVIKA")
      │   │   └── Last Name ("SURESH")
      │   └── Profile Photo (circle, 140px border-radius)
      └── Bio Section
          ├── Email ("hello@yume.com" + Copy icon + Copy button)
          └── Intro text (justified)

Divider (1px #f5f5f5 line)

Work
  └── Container
      ├── Section header ("work." + "Show More")
      └── Grid (2×2, 20px gap)
          ├── Project 1 (Visual Screen Models)
          ├── Project 2 (Dash)
          ├── Project 3 (VectorVault)
          └── Project 4 (Flexible Area Models Copy Copy)

About (z-index: 2, white bg)
  └── Container
      ├── Section header ("about." + "Show More")
      ├── Text Section (about statement, justified)
      └── Image Section
          ├── Portrait image (aspect 1.3825)
          └── Philosophy text (justified)

Footer (black bg, 100vh)
  └── Container
      ├── Social media (Linkedin, Behance - right aligned)
      ├── CTA Text (gradient h4)
      ├── CTA (Get in Touch button + Available status)
      └── Footer detail (phone + email)
```
