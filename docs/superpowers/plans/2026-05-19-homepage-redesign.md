# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio homepage to match the Figma design — new section layout with alternating project cards on black/white backgrounds, simplified footer, updated hero.

**Architecture:** Replace the current Hero → Work (grid) → About → Footer layout with Hero → InfoBar → Projects (alternating cards, black+white sections) → Footer (GET IN TOUCH). Reuse existing framer-motion animation system and responsive patterns. Download all Figma assets to `public/images/projects/`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Vite

---

## File Structure

**Create:**
- `public/images/projects/yulu-hero.png` — Yulu project image
- `public/images/projects/vectorvault-main.png` — Vector Vault isometric art
- `public/images/projects/vectorvault-float-1.png` through `vectorvault-float-5.png`
- `public/images/projects/peakmind-phones.png` — Peakmind phone mockup
- `public/images/projects/zoho-dashboard.png` — Zoho Books dashboard
- `public/images/projects/zoho-smart-reconcile.png` — Zoho overlay image
- `public/images/profile-photo.jpg` — Profile photo (replaces Framer CDN)
- `src/components/sections/InfoBar/index.tsx` — thin black divider with links
- `src/components/sections/Projects/index.tsx` — two-block projects section
- `src/components/sections/Projects/ProjectCard.tsx` — alternating layout card

**Modify:**
- `src/data/profile.ts` — update bio text to match Figma
- `src/data/projects.ts` — rewrite with 4 Figma projects
- `src/types/index.ts` — add fields to Project type
- `src/components/sections/Hero/index.tsx` — new layout (128px name, repositioned bio)
- `src/components/layout/Footer/index.tsx` — simplify to GET IN TOUCH
- `src/pages/Home/index.tsx` — new section order
- `src/lib/animations.ts` — add projectSection animation variants

**Delete:**
- `src/components/sections/Work/index.tsx`
- `src/components/sections/About/index.tsx`
- `src/components/shared/ProjectCard/index.tsx` (old grid card, no longer used)

---

### Task 1: Download Figma Assets

**Files:**
- Create: `public/images/projects/` directory + all image files
- Create: `public/images/profile-photo.jpg`

- [ ] **Step 1: Create directory and download all assets**

```bash
mkdir -p public/images/projects

# Yulu project image
curl -sL -o public/images/projects/yulu-hero.png "https://www.figma.com/api/mcp/asset/8e90cbb4-f9d2-402f-90d9-058bb6077cbc"

# Vector Vault main isometric
curl -sL -o public/images/projects/vectorvault-main.png "https://www.figma.com/api/mcp/asset/8a27f4b5-d2d5-493d-93c5-a08d5045325c"

# Vector Vault floating elements
curl -sL -o public/images/projects/vectorvault-float-1.png "https://www.figma.com/api/mcp/asset/74aae17f-9318-4de3-a1fa-855bcc635d44"
curl -sL -o public/images/projects/vectorvault-float-2.png "https://www.figma.com/api/mcp/asset/07405e09-5918-4fca-a8ab-3398370b4b1a"
curl -sL -o public/images/projects/vectorvault-float-3.png "https://www.figma.com/api/mcp/asset/f9e42c2a-5229-4c67-979e-8efd6b0fde27"
curl -sL -o public/images/projects/vectorvault-float-4.png "https://www.figma.com/api/mcp/asset/b7554956-2c08-4e67-a1f3-6ef4007a2abd"
curl -sL -o public/images/projects/vectorvault-float-5.png "https://www.figma.com/api/mcp/asset/fe8aca87-0e4e-46ee-bef0-3283ada976b0"

# Peakmind phone mockup
curl -sL -o public/images/projects/peakmind-phones.png "https://www.figma.com/api/mcp/asset/8657f304-c7c3-4b04-93e4-0f6f5fc7f9dd"

# Zoho Books dashboard + Smart Reconcile overlay
curl -sL -o public/images/projects/zoho-smart-reconcile.png "https://www.figma.com/api/mcp/asset/096f1ce1-f59b-4ed3-871e-e9ebf87b1a5c"

# Profile photo
curl -sL -o public/images/profile-photo.jpg "https://www.figma.com/api/mcp/asset/fd7ead6a-906e-4804-a5b2-5f5b11e59198"

# Video player frame elements
curl -sL -o public/images/projects/video-frame.png "https://www.figma.com/api/mcp/asset/4cc70587-bf08-43a4-823d-28e3587b2b31"
curl -sL -o public/images/projects/video-frame-overlay.png "https://www.figma.com/api/mcp/asset/6d0583a5-264a-4042-8503-28adf89aa713"
curl -sL -o public/images/projects/video-icon.png "https://www.figma.com/api/mcp/asset/99a9cc33-090a-477d-a442-8bcb341328d0"
```

- [ ] **Step 2: Verify all assets downloaded**

```bash
ls -la public/images/projects/
ls -la public/images/profile-photo.jpg
file public/images/projects/*.png public/images/profile-photo.jpg
```

Expected: All files exist and are valid PNG/JPEG images.

- [ ] **Step 3: Commit**

```bash
git add public/images/projects/ public/images/profile-photo.jpg
git commit -m "feat: download Figma assets for homepage redesign"
```

---

### Task 2: Update Data Files & Types

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/profile.ts`
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Update Project type**

In `src/types/index.ts`, update the `Project` interface to support the new card layout:

```typescript
export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  description?: string;
  year?: string;
  client?: string;
  role?: string;
  images?: string[];
  link?: string;
  floatingImages?: string[];
  overlayText?: string;
  overlayTextColor?: string;
}
```

New fields:
- `floatingImages` — for Vector Vault's layered floating element images
- `overlayText` — for Zoho's "Smart Reconcile" text overlay
- `overlayTextColor` — color for overlay text (#006fda for Zoho)

- [ ] **Step 2: Update profile.ts**

Replace the full content of `src/data/profile.ts`:

```typescript
import type { Profile } from '@/types';

export const profile: Profile = {
  name: "Malavika Suresh",
  firstName: "MALAVIKA",
  lastName: "SURESH",
  title: "Freelance Designer",
  email: "malavikasparambumana@gmail.com",
  phone: "+91 9207768108",
  location: "Tokyo",
  intro: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time.",
  about: "I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.",
  philosophy: "I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.",
  available: true,
  social: {
    linkedin: "https://www.linkedin.com/in/malavika-suresh-40642a293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYRmcKUiyQAOpWKGnadCgNQ%3D%3D",
    behance: "https://www.behance.net/malavikasuresh1",
  }
};
```

Changes: Removed `emailDisplay`, updated `intro` to Figma text.

- [ ] **Step 3: Rewrite projects.ts**

Replace the full content of `src/data/projects.ts`:

```typescript
import type { Project } from '@/types';

const BASE = import.meta.env.BASE_URL + 'images/projects';

export const projects: Project[] = [
  {
    id: 1,
    title: "YULU : A UX STUDY",
    slug: "yulu",
    thumbnail: `${BASE}/yulu-hero.png`,
    category: "UX Research",
    description: "This project is a user research attempt at understanding the pain points that users face while using the Yulu app, explored through methodologies like Usability testing, Heuristic evaluation, Contextual enquiry etc.",
    year: "2024",
  },
  {
    id: 2,
    title: "VECTOR VAULT : FUN LEARN",
    slug: "vector-vault",
    thumbnail: `${BASE}/vectorvault-main.png`,
    category: "UI/UX",
    description: "Vector Vault is an attempt at creating a gamified way fo learning 3D software in this case Blender. It emerged from trying to understand what is a blocker for users to learn such free software, difficulty was found in not being able to do along to tutorials and getting lost while switching tabs. This project is an attempt at simplifying that",
    year: "2024",
    floatingImages: [
      `${BASE}/vectorvault-float-1.png`,
      `${BASE}/vectorvault-float-2.png`,
      `${BASE}/vectorvault-float-3.png`,
      `${BASE}/vectorvault-float-4.png`,
      `${BASE}/vectorvault-float-5.png`,
    ],
  },
  {
    id: 3,
    title: "WORK EXPERIENCE : PEAKMIND",
    slug: "peakmind",
    thumbnail: `${BASE}/peakmind-phones.png`,
    category: "Work Experience",
    description: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time.",
    year: "2024",
  },
  {
    id: 4,
    title: "ZOHO BOOKS CAMPAIGN",
    slug: "zoho-books",
    thumbnail: `${BASE}/zoho-smart-reconcile.png`,
    category: "Campaign",
    description: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time.",
    year: "2024",
    overlayText: "Smart Reconcile",
    overlayTextColor: "#006fda",
  },
];
```

- [ ] **Step 4: Build check**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 5: Commit**

```bash
git add src/types/index.ts src/data/profile.ts src/data/projects.ts
git commit -m "feat: update data files and types for homepage redesign"
```

---

### Task 3: Add Animation Variants

**Files:**
- Modify: `src/lib/animations.ts`

- [ ] **Step 1: Add project section animations**

Append to the end of `src/lib/animations.ts` (before the closing of the file), add:

```typescript
// ─── Projects Section Animations ────────────────────────────────────
export const projectSectionAppear = {
  title: {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  image: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  text: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  button: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.3, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  floatingImage: (index: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.2 + index * 0.1, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  }),
};

// ─── Info Bar Animation ────────────────────────────────────────────
export const infoBarAppear = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, ease: FRAMER_EASE },
  viewport: { once: true },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/animations.ts
git commit -m "feat: add project section and info bar animation variants"
```

---

### Task 4: Rewrite Hero Section

**Files:**
- Modify: `src/components/sections/Hero/index.tsx`

- [ ] **Step 1: Rewrite Hero component**

Replace the full content of `src/components/sections/Hero/index.tsx`:

```tsx
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear } from '@/lib/animations';

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center px-5 md:px-[30px] lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col justify-between min-h-0 lg:min-h-[633px] pt-[120px] md:pt-[126px] pb-10 lg:pb-[50px] relative">
        <div className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[10px] w-full">
          <div className="flex flex-col flex-none lg:flex-1 w-full lg:w-[1px] overflow-hidden order-1 lg:order-none">
            <div className="overflow-hidden">
              <motion.div
                initial={heroNameAppear.initial}
                animate={heroNameAppear.animate}
                transition={heroNameAppear.transition(0.3)}
              >
                <h1 className="text-[60px] md:text-[90px] lg:text-[128px] font-medium leading-[1em] tracking-[-0.014em]">
                  {profile.firstName}
                </h1>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={heroNameAppear.initial}
                animate={heroNameAppear.animate}
                transition={heroNameAppear.transition(0.4)}
              >
                <h1 className="text-[60px] md:text-[90px] lg:text-[128px] font-medium leading-[1em] tracking-[-0.014em]">
                  {profile.lastName}
                </h1>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex-shrink-0 w-[110px] lg:w-[149px] h-[110px] lg:h-[149px] rounded-[74px] overflow-hidden relative"
            initial={heroPhotoAppear.initial}
            animate={heroPhotoAppear.animate}
            transition={heroPhotoAppear.transition}
          >
            <img
              src={`${BASE}images/profile-photo.jpg`}
              alt={profile.name}
              className="absolute h-full left-[-38%] max-w-none top-0 w-[178%] object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-end mt-10 lg:mt-0 w-full"
          initial={heroBioAppear.initial}
          animate={heroBioAppear.animate}
          transition={heroBioAppear.transition}
        >
          <p className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.33em] text-[#0a0a0a] max-w-[607px]">
            {profile.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
```

Key changes from current:
- Name size: 128px (was 174px), font-medium (was semibold), tracking -0.014em (was -0.09em)
- Profile photo: 149px (was 168px), rounded-[74px] (was rounded-[140px]), single image instead of two-layer
- Bio: 24px regular weight, right-aligned via flex justify-end, max-w-[607px] (was 643px justified)
- Removed divider line (replaced by InfoBar)

- [ ] **Step 2: Build check**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero/index.tsx
git commit -m "feat: rewrite hero section to match Figma design"
```

---

### Task 5: Create InfoBar Component

**Files:**
- Create: `src/components/sections/InfoBar/index.tsx`

- [ ] **Step 1: Create InfoBar**

Create `src/components/sections/InfoBar/index.tsx`:

```tsx
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { infoBarAppear } from '@/lib/animations';

export function InfoBar() {
  return (
    <motion.div
      className="w-full bg-black"
      {...infoBarAppear}
    >
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-[46px] py-[8px]">
        <span className="text-[12px] font-normal text-white/60 tracking-[0.3px]">
          Portfolio 2024
        </span>
        <div className="flex items-center gap-[40px]">
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
            >
              LinkedIn
            </a>
          )}
          {profile.social.behance && (
            <a
              href={profile.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
            >
              Behance
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
          >
            Email
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default InfoBar;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/InfoBar/index.tsx
git commit -m "feat: create InfoBar divider component"
```

---

### Task 6: Create ProjectCard Component

**Files:**
- Create: `src/components/sections/Projects/ProjectCard.tsx`

- [ ] **Step 1: Create ProjectCard**

Create `src/components/sections/Projects/ProjectCard.tsx`:

```tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { projectSectionAppear } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: 'dark' | 'light';
}

export function ProjectCard({ project, index, variant }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;
  const textColor = variant === 'dark' ? 'text-white' : 'text-black';
  const descColor = variant === 'dark' ? 'text-[#fffbfb]' : 'text-black';
  const btnBg = variant === 'dark' ? 'bg-white text-black' : 'bg-black text-white';
  const linkTarget = project.slug === 'yulu' ? '/project/yulu' : `/project/${project.slug}`;

  return (
    <div className="relative w-full py-[32px]">
      <motion.h3
        className={`text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.875em] tracking-[-0.014em] ${textColor} ${isReversed ? 'text-right' : 'text-left'} px-[51px] md:px-[51px]`}
        {...projectSectionAppear.title}
      >
        {project.title}
      </motion.h3>

      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-0 mt-4 lg:mt-0 relative min-h-[400px] lg:min-h-[500px]`}>
        <motion.div
          className={`w-full lg:w-[55%] relative ${isReversed ? 'lg:pl-[88px]' : ''}`}
          {...projectSectionAppear.image}
        >
          <div className="relative">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {project.floatingImages && project.floatingImages.length > 0 && (
              <div className="absolute inset-0">
                {project.floatingImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt=""
                    className="absolute object-contain"
                    style={getFloatingPosition(i)}
                    loading="lazy"
                    {...projectSectionAppear.floatingImage(i)}
                  />
                ))}
              </div>
            )}
            {project.overlayText && (
              <p
                className="absolute bottom-4 right-4 text-[24px] font-black text-center"
                style={{ color: project.overlayTextColor || '#006fda' }}
              >
                {project.overlayText}
              </p>
            )}
          </div>
        </motion.div>

        <div className={`w-full lg:w-[45%] flex flex-col justify-start px-5 md:px-[51px] ${isReversed ? 'lg:px-[88px]' : 'lg:pl-[88px] lg:pr-[51px]'} pt-4 lg:pt-[60px]`}>
          <motion.p
            className={`text-[16px] lg:text-[20px] font-normal leading-[1.22em] ${descColor} max-w-[470px]`}
            {...projectSectionAppear.text}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="mt-6 lg:mt-8"
            {...projectSectionAppear.button}
          >
            <Link
              to={linkTarget}
              className={`inline-flex items-center justify-center px-[19px] py-[13px] ${btnBg} rounded-full text-[14px] font-medium leading-[20px] hover:opacity-80 transition-opacity`}
            >
              VIew Project →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function getFloatingPosition(index: number): React.CSSProperties {
  const positions: React.CSSProperties[] = [
    { top: '10%', right: '-5%', width: '21%', height: 'auto' },
    { bottom: '5%', left: '-3%', width: '20%', height: 'auto' },
    { top: '20%', left: '35%', width: '10%', height: 'auto' },
    { top: '35%', right: '15%', width: '15%', height: 'auto' },
    { bottom: '15%', left: '20%', width: '17%', height: 'auto' },
  ];
  return positions[index] || {};
}
```

- [ ] **Step 2: Build check**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Projects/ProjectCard.tsx
git commit -m "feat: create ProjectCard component with alternating layout"
```

---

### Task 7: Create Projects Section

**Files:**
- Create: `src/components/sections/Projects/index.tsx`

- [ ] **Step 1: Create Projects section**

Create `src/components/sections/Projects/index.tsx`:

```tsx
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { scrollAppear, FRAMER_EASE } from '@/lib/animations';

export function Projects() {
  const darkProjects = projects.slice(0, 2);
  const lightProjects = projects.slice(2, 4);

  return (
    <>
      <section className="w-full flex flex-col items-center px-5 md:px-[30px] lg:px-0">
        <motion.h2
          className="text-[36px] md:text-[48px] lg:text-[55px] font-medium leading-[118px] tracking-[-0.014em] text-[#0a0a0a] w-full max-w-[1600px] px-0 md:px-0 lg:px-[51px] py-2"
          {...scrollAppear.sectionHeader}
        >
          PROJECTS
        </motion.h2>
      </section>

      <section className="w-full bg-black overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto relative">
          {darkProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="dark"
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-white overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto relative">
          {lightProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="light"
            />
          ))}

          <motion.div
            className="flex flex-col items-center gap-4 py-[60px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: FRAMER_EASE }}
            viewport={{ once: true }}
          >
            <button className="w-[56px] h-[56px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <span className="text-[12px] font-normal text-[#0a0a0a] tracking-[0.3px]">
              View more projects
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;
```

- [ ] **Step 2: Build check**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Projects/index.tsx
git commit -m "feat: create Projects section with dark/light blocks"
```

---

### Task 8: Rewrite Footer

**Files:**
- Modify: `src/components/layout/Footer/index.tsx`

- [ ] **Step 1: Rewrite Footer to match Figma**

Replace the full content of `src/components/layout/Footer/index.tsx`:

```tsx
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { profile } from '@/data/profile';
import { FRAMER_EASE, APPEAR_DURATION } from '@/lib/animations';

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: APPEAR_DURATION,
        ease: FRAMER_EASE,
      },
    }),
  };

  return (
    <footer
      ref={ref}
      id="contact"
      className="bg-black text-white z-[1] relative w-full overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[51px] md:px-[51px] lg:px-[51px] py-[52px] min-h-[400px] lg:min-h-[515px]">
        <motion.h2
          className="text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[90px] tracking-[-0.014em] text-[#fffefe]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={staggerVariants}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="flex flex-col gap-[10px] mt-[24px]">
          <motion.a
            href={`mailto:${profile.email}`}
            className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={staggerVariants}
          >
            {profile.email}
          </motion.a>

          {profile.social.linkedin && (
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              variants={staggerVariants}
            >
              LinkedIn
            </motion.a>
          )}

          {profile.social.behance && (
            <motion.a
              href={profile.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              variants={staggerVariants}
            >
              Behance
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

Key changes: Removed gradient CTA, removed "Get in Touch" button, removed "Available For Work" pulse, removed social links at top. Simplified to heading + stacked links in gray.

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer/index.tsx
git commit -m "feat: simplify footer to match Figma GET IN TOUCH design"
```

---

### Task 9: Update Home Page & Clean Up

**Files:**
- Modify: `src/pages/Home/index.tsx`
- Delete: `src/components/sections/Work/index.tsx`
- Delete: `src/components/sections/About/index.tsx`

- [ ] **Step 1: Update Home page**

Replace the full content of `src/pages/Home/index.tsx`:

```tsx
import { Hero } from '@/components/sections/Hero';
import { InfoBar } from '@/components/sections/InfoBar';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/layout/Footer';

export function HomePage() {
  return (
    <main>
      <Hero />
      <InfoBar />
      <Projects />
      <Footer />
    </main>
  );
}

export default HomePage;
```

- [ ] **Step 2: Delete unused section components**

```bash
rm src/components/sections/Work/index.tsx
rm src/components/sections/About/index.tsx
rmdir src/components/sections/Work src/components/sections/About
```

- [ ] **Step 3: Check if old ProjectCard is still used elsewhere**

```bash
grep -r "ProjectCard" src/ --include="*.tsx" --include="*.ts"
```

If only referenced from the new `Projects/ProjectCard.tsx` and no longer from `shared/ProjectCard/`, delete the old one:

```bash
rm -rf src/components/shared/ProjectCard/
```

- [ ] **Step 4: Full build check**

```bash
npx tsc -b && npx vite build
```

Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: wire up new homepage layout, remove unused Work/About sections"
```

---

### Task 10: Visual Polish & Dev Server Verification

**Files:**
- Possibly adjust: `src/components/sections/Hero/index.tsx`, `src/components/sections/Projects/ProjectCard.tsx`, `src/components/sections/Projects/index.tsx`, `src/components/layout/Footer/index.tsx`

- [ ] **Step 1: Start dev server and verify in browser**

```bash
npm run dev
```

Open http://localhost:5173/portfolio/ and check each section against the Figma design:

1. **Hero**: Name size, photo position, bio text position and size
2. **InfoBar**: Black strip with links
3. **Projects (black)**: Yulu image left / text right, Vector Vault text left / images right
4. **Projects (white)**: Peakmind image left / text right, Zoho text left / image right
5. **Footer**: GET IN TOUCH with gray links

- [ ] **Step 2: Adjust spacing/sizing to pixel-match Figma**

Compare side-by-side with the Figma screenshot. Likely adjustments:
- Tweak padding/margin values in ProjectCard
- Adjust image container sizes to match Figma proportions
- Fine-tune typography sizes on mobile breakpoints
- Ensure Peakmind image bleeds past left edge (negative margin)

- [ ] **Step 3: Test responsive breakpoints**

Check at:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)

Ensure all sections stack properly on mobile, project cards switch to vertical layout.

- [ ] **Step 4: Test page transitions**

Navigate between Home → Yulu case study → Home. Verify:
- PageTransition animations work
- Smooth scrolling works
- Header HOME link visible and functional
- Custom cursor works over new sections

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "fix: visual polish and responsive adjustments for homepage"
```

---

### Task 11: Deploy

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

- [ ] **Step 2: Deploy to GitHub Pages**

```bash
npm run deploy
```

Expected: "Published" output, site live at https://malavika-s03.github.io/portfolio/
