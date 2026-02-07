# Malavika Portfolio - Project Context

## Overview
This is a portfolio website for **Malavika Suresh**, a freelance designer. The goal is to create a pixel-perfect React implementation that exactly matches a Framer template design.

## URLs
- **Live Site:** https://malavika-s03.github.io/portfolio/
- **Reference (Framer):** https://resourceful-color-369893-df7638d8d.framer.app/
- **GitHub Repo:** https://github.com/malavika-s03/portfolio

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Routing:** React Router (HashRouter for GitHub Pages)
- **Hosting:** GitHub Pages

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header/          # Fixed header with HOME link + dots menu
│   │   ├── Footer/          # Dark section with gradient CTA text
│   │   ├── Container.tsx    # Max-width wrapper
│   │   └── PageTransition.tsx
│   ├── sections/
│   │   ├── Hero/            # Name, photo, email, intro
│   │   ├── Work/            # 2x2 project grid
│   │   └── About/           # Statement + expandable photo/philosophy
│   └── shared/
│       ├── ProjectCard/     # Individual project card
│       └── SmoothScroll/    # Lenis wrapper
├── context/
│   └── ThemeContext.tsx     # Light/dark mode
├── data/
│   ├── profile.ts           # Personal info, contact details
│   └── projects.ts          # Project data with Framer CDN images
├── hooks/
│   ├── useInView.ts
│   ├── useCopyToClipboard.ts
│   └── useMediaQuery.ts
├── pages/
│   ├── Home/
│   ├── Project/
│   └── NotFound/
├── types/
│   └── index.ts
├── lib/
│   └── cn.ts                # classnames utility
├── App.tsx
├── main.tsx
└── index.css                # Global styles, CSS variables
```

## Design Specifications (from Framer Analysis)

### Typography
| Element | Desktop | Tablet | Mobile | Weight | Letter-spacing |
|---------|---------|--------|--------|--------|----------------|
| Name (H1) | 174px | 116px | 76px | 600 | -0.09em |
| Intro | 40px | 32px | 28px | 500 | -0.06em |
| About Statement | 50px | 40px | 32px | 500 | -0.06em |
| Section Title | 20px | 20px | 20px | 500 | normal |
| Body Text | 16px | 16px | 16px | 400 | normal |

### Colors
```css
--background: #ffffff;
--foreground: #000000;
--muted: #f5f5f5;
--muted-foreground: #b3b3b3;
--border: #f5f5f5;
```

### Layout
- **Max content width:** 1600px
- **Horizontal padding:** 80px (desktop) → 40px (tablet) → 20px (mobile)
- **Hero:** 100vh, min-height 800px
- **Work grid:** 2 columns, 20px gap, 1:1 aspect ratio cards
- **Footer:** 100vh, black background

### Key Measurements
- Profile photo: 168px circle (desktop)
- Intro text max-width: 643px
- About statement max-width: 728px
- Philosophy text max-width: 311px
- About portrait aspect ratio: 1.3825

## Content

### Profile Data
```typescript
{
  name: "Malavika Suresh",
  firstName: "MALAVIKA",
  lastName: "SURESH",
  email: "malavikasparambumana@gmail.com",
  emailDisplay: "hello@yume.com",  // Shown in UI
  phone: "+91 9207768108",
  location: "Tokyo",
  intro: "Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!",
  about: "I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.",
  philosophy: "I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals."
}
```

### Projects
1. **Visual Screen Models** - Mobile/phone design
2. **Dash** - Dashboard UI
3. **VectorVault** - Branding/logo
4. **Flexible Area Models Copy Copy** - Abstract/neon design

All project images are served from Framer's CDN (`framerusercontent.com`).

## Sections Breakdown

### 1. Header
- Fixed position, z-index 50
- "HOME" text link (left)
- 2×2 dots menu button (right)
- Opens fullscreen menu overlay with navigation + theme toggle

### 2. Hero Section
- Full viewport height
- Large name typography (MALAVIKA / SURESH)
- Circular profile photo (168px, positioned right of name)
- Email with copy-to-clipboard functionality
- Intro paragraph (justified text)
- Divider line at bottom

### 3. Work Section
- "work." title + "Show More" button
- 2×2 responsive grid
- Project cards with 1:1 aspect ratio
- Hover: Title appears (white text, bottom-right)

### 4. About Section
- "about." title + "Show More" button
- Large statement text (justified)
- Expandable: Shows portrait photo + philosophy text
- White background with z-index 2 (overlaps footer)

### 5. Footer/Contact
- Black background, full viewport height
- Gradient text CTA: "Curious about what we can create together? Let's bring something extraordinary to life!"
- "Get in Touch" button (white, no border-radius)
- "Available For Work" status with pulsing dot
- Phone and email at bottom

## Styling Notes

### Gradient Text (Footer CTA)
```css
.gradient-text {
  background: linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Text Justify
The intro and about text use `text-align: justify` to match Framer's styling.

### No Custom Cursor
The Framer template uses the native cursor, so we removed the custom cursor implementation.

## Deployment

### GitHub Pages Setup
- Uses HashRouter for client-side routing compatibility
- Base URL configured in `vite.config.ts`: `/portfolio/`
- Deploy command: `npm run deploy` (uses gh-pages package)

### SSH Configuration
The repo uses a dedicated SSH key (`id_malavika`) configured in `~/.ssh/config`:
```
Host github-malavika
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_malavika
```

## Git Workflow
```bash
# Build and deploy
npm run deploy

# Commit changes
git add -A
git commit -m "message"
git push origin main
```

## Reference Files
- `IMPLEMENTATION_PLAN.md` - Detailed technical specs from Framer analysis
- `reference/` - Extracted frames from screen recording of Framer site

## What's Working
✅ Hero section with exact typography and layout
✅ Work section with 2×2 grid and hover effects
✅ About section with expandable content
✅ Footer with gradient text and contact info
✅ Header with dots menu and fullscreen overlay
✅ Smooth scrolling (Lenis)
✅ Page transitions (Framer Motion)
✅ Light/dark theme toggle
✅ Responsive design (desktop/tablet/mobile)
✅ GitHub Pages deployment

## Future Improvements (if needed)
- Project detail pages with more content
- Additional animations/micro-interactions
- SEO optimization
- Performance optimization (image lazy loading, code splitting)
- Contact form integration

## Commands Reference
```bash
# Development
npm run dev

# Build
npm run build

# Deploy to GitHub Pages
npm run deploy

# Type check
npx tsc --noEmit
```

## Important Notes
1. All images use Framer CDN URLs - if these become unavailable, replace with local images
2. The email displayed (`hello@yume.com`) differs from the actual contact email
3. Theme toggle is accessible via the fullscreen menu (dots menu → Dark/Light Mode)
4. The site uses HashRouter (`/#/`) for GitHub Pages compatibility
