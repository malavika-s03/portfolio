/**
 * Centralized animation constants matching the Framer template exactly.
 * Source of truth: framer-source/DESIGN_SPEC.md
 *
 * Easing: cubic-bezier(0.44, 0, 0.56, 1) — Framer default
 * All values extracted from the live Framer site HTML/CSS.
 */

// Framer default easing curve
export const FRAMER_EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];

// Smooth ease-out for hero entrance (fast start, gentle deceleration — no stutter)
export const HERO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Ease-out for scroll reveals (no hesitation on entry, smooth deceleration)
export const SCROLL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Hero Appear Animations ─────────────────────────────────────────
// Initial states extracted from data-framer-appear-id elements
export const heroNameAppear = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: (delay: number) => ({
    duration: 0.8,
    delay,
    ease: HERO_EASE,
  }),
};

// Phase 2: everything else appears AFTER name has settled (~1.2s)
export const heroPhotoAppear = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.7,
    delay: 1.2,
    ease: HERO_EASE,
  },
};

export const heroBioAppear = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay: 1.2,
    ease: HERO_EASE,
  },
};

export const headerAppear = {
  initial: { opacity: 0.001, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay: 1.2,
    ease: HERO_EASE,
  },
};

// ─── Scroll-Triggered Animations ────────────────────────────────────
// About section elements use will-change:transform with scroll triggers
export const scrollAppear = {
  sectionHeader: {
    initial: { opacity: 0, y: '4vw' },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
};

// ─── Projects Section Animations ────────────────────────────────────
export const projectSectionAppear = {
  title: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  image: {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  text: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  button: {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  floatingImage: (_index: number) => ({
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  }),
};

// ─── Info Bar Animation ────────────────────────────────────────────
export const infoBarAppear = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay: 1.2, ease: HERO_EASE },
};

