# Framer to React Implementation Plan - Exact Match

## Source Analysis
- **Source URL:** https://resourceful-color-369893-df7638d8d.framer.app/
- **Template Name:** YUYA – Minimalistic Framer Template for Creatives

---

## 1. Typography System

### Display/H1 (Name)
- **Font:** Inter, 600 weight (semibold)
- **Size:** 174px (desktop) → 116px (tablet) → 76px (mobile)
- **Letter-spacing:** -0.09em
- **Line-height:** 1em
- **Color:** #000

### Intro Paragraph (Body Large)
- **Font:** Inter, 500 weight (medium)
- **Size:** 40px (desktop) → 32px (tablet) → 28px (mobile)
- **Letter-spacing:** -0.06em
- **Line-height:** 1.1em
- **Text-align:** justify

### About Statement
- **Font:** Inter, 500 weight (medium)
- **Size:** 50px (desktop) → 40px (tablet) → 32px (mobile)
- **Letter-spacing:** -0.06em
- **Line-height:** 1.1em
- **Text-align:** justify

### Section Titles (work., about.)
- **Font:** Inter, 500 weight
- **Size:** 20px (all breakpoints)
- **Letter-spacing:** normal
- **Color:** #000

### Button Text
- **Font:** Inter, 500 weight
- **Size:** 16px
- **Color:** #000

### Footer CTA Text
- **Gradient:** linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%)
- **Size:** 50px (desktop) → 40px (tablet)
- **Background-clip: text** effect

### Small Text (email, phone, Available)
- **Font:** Inter, 400-500 weight
- **Size:** 16px
- **Color:** varies (#000, #fff, #b3b3b3)

---

## 2. Color Palette

```css
:root {
  /* Primary Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-dark: #333333;
  --color-gray-light: #b3b3b3;
  --color-bg-light: #f5f5f5;
  --color-accent: #ed4337;
  --color-link: #0099ff;
}
```

---

## 3. Layout Specifications

### Container
- **Max-width:** 1600px (content area)
- **Outer width:** 1200px (desktop) → 810px (tablet) → 390px (mobile)
- **Padding:** 80px horizontal (desktop) → 40px (tablet) → 20px (mobile)

### Hero Section
- **Height:** 100vh, min-height: 800px
- **Padding-top:** 140px (for header space)
- **Padding-bottom:** 80px
- **Layout:** Flex column, space-between

### Work Section
- **Grid:** 2 columns, minmax(50px, 1fr)
- **Gap:** 20px
- **Padding:** 30px 80px 80px
- **Project cards:** Aspect ratio 1:1

### About Section
- **Padding:** 80px horizontal, 160px bottom
- **Image aspect ratio:** 1.3825
- **Philosophy text max-width:** 311px

### Footer Section
- **Full viewport height**
- **Dark background: #000**
- **Text in white/gradient**

---

## 4. Components Breakdown

### 4.1 Header/Navigation
- **Position:** Fixed, z-index: 3
- **"HOME" link:** Left side, uppercase, small text
- **Menu icon:** Right side, 4 dots (2x2 grid)

### 4.2 Hero Section
```
┌─────────────────────────────────────────┐
│ MALAVIKA              ┌──────┐         │
│ SURESH                │ Photo│         │
│                       │ 168px│         │
│                       └──────┘         │
│                                         │
│ hello@yume.com ⌘       Intro text...    │
│                        spanning right   │
└─────────────────────────────────────────┘
```
- Name: 174px font, -0.09em letter-spacing, weight 600
- Profile photo: 168px circle, border-radius: 140px
- Email: Left aligned with copy icon
- Intro: Right side, justified text, max-width ~643px

### 4.3 Work Section
```
┌─────────────────────────────────────────┐
│ work.                      [Show More]  │
│                                         │
│ ┌─────────────┐  ┌─────────────┐       │
│ │             │  │             │       │
│ │  Project 1  │  │  Project 2  │       │
│ │             │  │   "Dash"    │       │
│ └─────────────┘  └─────────────┘       │
│ ┌─────────────┐  ┌─────────────┐       │
│ │             │  │             │       │
│ │  Project 3  │  │  Project 4  │       │
│ │             │  │             │       │
│ └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────┘
```
- Grid: 2x2, 20px gap
- Cards: 1:1 aspect ratio
- Hover: Title appears (white text on image)
- Button: Rounded pill, border only

### 4.4 About Section
```
┌─────────────────────────────────────────┐
│ about.                     [Show More]  │
│                                         │
│ I collaborate with businesses of all    │
│ sizes worldwide, using the latest       │
│ technologies. My designs have also      │
│ earned multiple awards.                 │
│                                         │
│ ─────────────────────────────────────── │
│                                         │
│ ┌─────────────┐                         │
│ │             │   "I'm dedicated to     │
│ │    Photo    │    crafting beautiful   │
│ │   (553x400) │    and highly func..."  │
│ │             │                         │
│ └─────────────┘                         │
└─────────────────────────────────────────┘
```
- Main text: 50px, justified, max-width ~728px
- Expanded: Photo left (aspect 1.3825), philosophy right
- Philosophy text: Italic, smaller, max-width 311px

### 4.5 Footer/Contact Section
```
┌─────────────────────────────────────────┐
│                 (black bg)              │
│                                         │
│ Curious about what we can create        │
│ together?                               │
│ Let's bring something extraordinary     │
│ to life!                                │
│ (gradient text: white → gray)           │
│                                         │
│ ┌────────────┐  ● Available For Work    │
│ │Get in Touch│                          │
│ └────────────┘                          │
│                                         │
│ +91 9207768108                          │
│ malavikasparambumana@gmail.com          │
└─────────────────────────────────────────┘
```
- Background: #000
- CTA text: Gradient (white 37% → #383838 95%)
- Button: White bg, black text, no border-radius
- Contact info: Bottom left, white/gray text

---

## 5. Images Used

| Purpose | URL |
|---------|-----|
| Profile Photo | https://framerusercontent.com/images/j1OWdec3GtorzmtyEO583X355k.png |
| About Portrait | https://framerusercontent.com/images/7hMiTdrGlu2C0xyOGVzHXNKngfU.jpg |
| Project 1 (hands/phone) | https://framerusercontent.com/images/dzn3ZiFmKa9VjNJZAibN7th28k.jpg |
| Project 2 (Dash) | https://framerusercontent.com/images/HpYOQqypWOJ8EfkSik2rEBAMFwg.jpg |
| Project 3 (VectorVault) | https://framerusercontent.com/images/QeJFkTwD2mmMcjgJ5shzWmbl9z4.png |
| Project 4 (Neon) | https://framerusercontent.com/images/obb3zqFbOI0plXvmcRLAGwYDM.jpeg |

---

## 6. Project Data

```typescript
const projects = [
  {
    id: 1,
    title: "Visual Screen Models",
    slug: "visual-screen-models",
    thumbnail: "https://framerusercontent.com/images/dzn3ZiFmKa9VjNJZAibN7th28k.jpg"
  },
  {
    id: 2,
    title: "Dash",
    slug: "dash",
    thumbnail: "https://framerusercontent.com/images/HpYOQqypWOJ8EfkSik2rEBAMFwg.jpg"
  },
  {
    id: 3,
    title: "VectorVault",
    slug: "vectorvault",
    thumbnail: "https://framerusercontent.com/images/QeJFkTwD2mmMcjgJ5shzWmbl9z4.png"
  },
  {
    id: 4,
    title: "Flexible Area Models Copy Copy",
    slug: "flexible-area-models",
    thumbnail: "https://framerusercontent.com/images/obb3zqFbOI0plXvmcRLAGwYDM.jpeg"
  }
];
```

---

## 7. Interactions & Animations

### Cursor
- Custom cursor disabled in Framer template
- Show native cursor

### Scroll
- Smooth scroll on Lenis
- Sections flow naturally

### Hover Effects
- Project cards: Title fades in (white text)
- Buttons: Background fill transition
- Links: Underline on hover

### Page Transitions
- Simple fade in/out
- No complex transitions in source

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop | 1200px+ | Full layout, 174px name |
| Tablet | 810-1199px | 116px name, adjusted padding |
| Mobile | <810px | 76px name, single column grid, stacked layout |

---

## 9. Implementation Order

1. **Update CSS/Tailwind config** - Add typography scale, colors
2. **Update profile data** - Use exact text from Framer
3. **Rewrite Hero** - Match exact layout and typography
4. **Update Work section** - Grid, cards, hover effects
5. **Update About section** - Text sizes, expanded layout
6. **Rewrite Footer** - Dark bg, gradient text
7. **Fix Header** - Simple HOME + dots menu
8. **Remove custom cursor** - Use native cursor
9. **Add project images** - Use Framer CDN URLs
10. **Test responsive** - All breakpoints
11. **Deploy**
