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

// Durations (seconds)
export const APPEAR_DURATION = 0.6;
export const COLOR_TRANSITION_DURATION = 0.4;
export const STAGGER_DELAY = 0.1;

// ─── Hero Appear Animations ─────────────────────────────────────────
// Initial states extracted from data-framer-appear-id elements
export const heroNameAppear = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: (delay: number) => ({
    duration: 1.2,
    delay,
    ease: HERO_EASE,
  }),
};

export const heroPhotoAppear = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 1.0,
    delay: 0.6,
    ease: HERO_EASE,
  },
};

export const heroBioAppear = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    delay: 0.8,
    ease: HERO_EASE,
  },
};

export const headerAppear = {
  initial: { opacity: 0.001, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay: 0.2,
    ease: HERO_EASE,
  },
};

// ─── Scroll-Triggered Animations ────────────────────────────────────
// About section elements use will-change:transform with scroll triggers
// Ease-out curve for scroll reveals (fast start, smooth deceleration — no "hang")
export const SCROLL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const scrollAppear = {
  sectionHeader: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  textBlock: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
  imageBlock: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: SCROLL_EASE },
    viewport: { once: true, margin: '0px 0px -30px 0px' as const },
  },
};

// ─── Footer Animation ───────────────────────────────────────────────
export const footerAppear = {
  initial: { opacity: 0.001, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: FRAMER_EASE,
  },
};

// ─── Generic Variants (for stagger patterns) ────────────────────────
export const staggerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: APPEAR_DURATION,
      ease: FRAMER_EASE,
    },
  }),
};

// ─── Project Card Animation ─────────────────────────────────────────
export const projectCardAppear = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -30px 0px' },
  transition: (index: number) => ({
    duration: 0.8,
    delay: index * 0.08,
    ease: SCROLL_EASE,
  }),
};

// ─── Projects Section Animations ────────────────────────────────────
export const projectBlockAppear = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: SCROLL_EASE },
  viewport: { once: true, margin: '0px 0px -30px 0px' as const },
};

// ─── Info Bar Animation ────────────────────────────────────────────
export const infoBarAppear = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8, ease: SCROLL_EASE },
  viewport: { once: true },
};

// ─── Page Transition ────────────────────────────────────────────────
export const pageVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'linear' as const,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear' as const,
    },
  },
};
