# Homepage Redesign — Design Spec

## Overview
Redesign the portfolio homepage to match the Figma design (Test-6 file, node 0:1). The page transitions from the current Hero + Work grid + About + Footer layout to a new Hero + Info Bar + Projects (alternating cards) + Footer layout. All animations/transitions are preserved using the existing framer-motion system.

## Sections

### 1. Hero (white bg, ~633px tall on desktop)
- **Header**: "HOME" (32px, Inter Medium, #0a0a0a, tracking -1.815px) top-left; 4-dot menu (8px dots, 2x2 grid) top-right — **reuse existing Header component**
- **Name**: "MALAVIKA SURESH" two lines (128px, Inter Medium, #0a0a0a, leading 118px, tracking -1.815px) at x:53, y:126
- **Profile photo**: 149x149, border-radius 74px, at top-right (x:1050, y:118). Image overflows container same as current implementation.
- **Bio text**: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time." (24px, Inter Regular, #0a0a0a, leading 32px, w:607px) at x:605, y:443
- **Animations**: Keep existing heroNameAppear (y:175, 0.8s), heroPhotoAppear (scale:0, 0.6s), heroBioAppear (y:265, 0.8s)

### 2. Info Bar (black bg, 31px tall)
- Full-width black strip
- Left: text label (inside Container at x:46)
- Right: 3 links (LinkedIn, Behance, +1) with 40px gap
- Text: ~12-15px, Inter Regular, white/gray
- This is a subtle divider element; content inside is small

### 3. Projects Section 1 (BLACK bg, ~1183px)
- **"PROJECTS" title** appears between info bar and this section, or as part of transition (55px text at y:655 in white area)
- Section background: #000000

**Project Card A — Yulu: A UX Study**
- Title: "YULU : A UX STUDY" (48px, Inter Medium, #fffefe, leading 90px, tracking -1.815px) at x:51, y:32 (relative)
- Image: 581x404 at LEFT (x:56, y:146) — hands holding phone/AR image
- Description: "This project is a user research attempt at understanding the pain points that users face while using the Yulu app, explored through methodologies like Usability testing, Heuristic evaluation, Contextual enquiry etc." (20px, Inter Regular, #fffbfb, leading 24.375px, w:470) at RIGHT (x:708, y:204)
- Button: "VIew Project →" (14px, Inter Medium) white bg, black text, pill shape (rounded-full), 143x48 at x:708, y:378
- Links to: /project/yulu (existing case study)

**Project Card B — Vector Vault: Fun Learn**
- Title: "VECTOR VAULT : FUN LEARN" (48px, Inter Medium, #fffefe, leading 90px) at x:571, y:592 — RIGHT aligned
- Description: (20px, #fffbfb, w:470) at LEFT (x:88, y:765)
- Button: pill, white bg, at LEFT (x:88, y:999)
- Image: Isometric pixel art composition at RIGHT (x:640+, y:709) — main image 523x322 with 5 floating elements layered on top
- Small video player widget at bottom-right of section
- Links to: placeholder page

**Layout pattern**: Alternating — Card A is image-left/text-right, Card B is text-left/image-right

### 4. Projects Section 2 (WHITE bg, ~1275px)
Background: white. Text: black. Buttons: black bg, white text.

**Project Card C — Work Experience: Peakmind**
- Title: "WORK EXPERIENCE : PEAKMIND" (48px, Inter Medium, black, leading 90px) at x:51, y:32
- Image: 750x500 at LEFT (x:-52, y:109) — phone mockups, bleeds past left edge
- Description: same placeholder text (20px, black, w:470) at RIGHT (x:708, y:204)
- Button: "VIew Project →" BLACK bg, white text, pill at x:708, y:348
- Links to: placeholder page

**Project Card D — Zoho Books Campaign**
- Title: "ZOHO BOOKS CAMPAIGN" (48px, Inter Medium, black) at x:659, y:592 — RIGHT
- Description: placeholder (20px, black, w:470) at LEFT (x:88, y:765)
- Button: BLACK bg, white text, pill at LEFT (x:88, y:909)
- "Smart Reconcile" label: (24px, Inter Black, #006fda blue, centered) at x:662, y:710
- Dashboard image: 623x278 at RIGHT (x:597, relative y)
- Links to: placeholder page

**"View more projects"** centered at bottom — circular icon button (56px, black border) + "View more projects" text (12px, #0a0a0a, tracking 0.3px)

### 5. Footer (BLACK bg, 515px)
- "GET IN TOUCH" (48px, Inter Medium, #fffefe, leading 90px, tracking -1.815px) at x:51, y:52
- Email: "malavikasparambumana@gmail.com" (15px, Inter Regular, #99a1af) at x:59, y:166
- "LinkedIn" (15px, #99a1af) at x:59, y:207
- "Behance" (15px, #99a1af) at x:59, y:248
- All stacked vertically, left-aligned
- Much simpler than current footer

## Assets to Download
All from Figma MCP (7-day URLs — download immediately to public/images/):
1. `yulu-hero.png` — Yulu project image (hands/AR)
2. `vectorvault-main.png` — Isometric cityscape
3. `vectorvault-float-1.png` through `vectorvault-float-5.png` — 5 floating elements
4. `peakmind-phones.png` — Phone mockups
5. `zoho-dashboard.png` — Zoho Books screenshot
6. `zoho-smart-reconcile.png` — Smart Reconcile image (Frame 1 707479866)
7. `profile-photo.jpg` — DSC01458 profile photo (replaces Framer CDN URL)
8. `video-player-frame.png` — Video player widget elements

## Data Updates
- `profile.ts`: Update bio text to Figma copy
- `projects.ts`: Rewrite with 4 projects: Yulu, Vector Vault, Peakmind, Zoho Books — each with title, description, slug, image references, category

## Animation Strategy
- Keep all existing framer-motion animations (FRAMER_EASE, heroNameAppear, etc.)
- Projects: scroll-triggered reveal (whileInView), staggered entry per card
- Info bar: fade-in on scroll
- Footer: staggered text reveal on scroll
- Page transitions: keep AnimatePresence setup

## Component Changes
- `Hero/index.tsx` — Rewrite layout (name size 128px vs 174px, bio repositioned, photo repositioned)
- `Work/index.tsx` — DELETE (replaced by Projects)
- `About/index.tsx` — DELETE (absorbed into hero bio)
- NEW: `Projects/index.tsx` — Two sub-sections (black + white bg) with alternating project cards
- NEW: `ProjectCard.tsx` — Reusable card with image/text alternating sides
- `Footer/index.tsx` — Simplify to GET IN TOUCH layout
- `Home/index.tsx` — Update to use new section order

## Responsive Considerations
- Figma is 1280px desktop only — apply same responsive breakpoints as current: mobile (default) → md (768px) → lg (1024px)
- On mobile: stack project cards vertically (image above text)
- Name text scales down: 128px → ~76px mobile, ~100px tablet
- Keep existing px-5 → px-[30px] → px-20 padding pattern
