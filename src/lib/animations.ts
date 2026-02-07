/**
 * Centralized animation constants matching the Framer template exactly.
 * Source of truth: framer-source/DESIGN_SPEC.md
 *
 * Easing: cubic-bezier(0.44, 0, 0.56, 1) — Framer default
 * All values extracted from the live Framer site HTML/CSS.
 */

// Framer default easing curve
export const FRAMER_EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];

// Durations (seconds)
export const APPEAR_DURATION = 0.6;
export const COLOR_TRANSITION_DURATION = 0.4;
export const STAGGER_DELAY = 0.1;

// ─── Hero Appear Animations ─────────────────────────────────────────
// Initial states extracted from data-framer-appear-id elements
export const heroNameAppear = {
  initial: { opacity: 0.001, y: 175 },
  animate: { opacity: 1, y: 0 },
  transition: (delay: number) => ({
    duration: 0.8,
    delay,
    ease: FRAMER_EASE,
  }),
};

export const heroPhotoAppear = {
  initial: { opacity: 0.001, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.6,
    delay: 0.5,
    ease: FRAMER_EASE,
  },
};

export const heroBioAppear = {
  initial: { opacity: 0.001, y: 265 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay: 0.7,
    ease: FRAMER_EASE,
  },
};

export const headerAppear = {
  initial: { opacity: 0.001, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay: 0.2,
    ease: FRAMER_EASE,
  },
};

// ─── Scroll-Triggered Animations ────────────────────────────────────
// About section elements use will-change:transform with scroll triggers
export const scrollAppear = {
  sectionHeader: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  textBlock: {
    initial: { opacity: 0, y: 160 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
  },
  imageBlock: {
    initial: { opacity: 0, y: 160 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: FRAMER_EASE },
    viewport: { once: true, margin: '-10%' as const },
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
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: (index: number) => ({
    duration: APPEAR_DURATION,
    delay: index * STAGGER_DELAY,
    ease: FRAMER_EASE,
  }),
};

// ─── Page Transition ────────────────────────────────────────────────
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: FRAMER_EASE,
      when: 'beforeChildren' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: FRAMER_EASE,
    },
  },
};
