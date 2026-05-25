import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  COLORS,
  heroData,
} from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1144;
const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

const CAVEAT = "'Caveat', cursive";
const IMG = `${BASE_URL}images/peakmind`;

const notebookBg = () => ({
  backgroundColor: COLORS.pageBg,
  backgroundImage: `repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 7px,
    ${COLORS.lineColor} 7px,
    ${COLORS.lineColor} 8.15px
  )`,
  backgroundSize: '100% 8.15px',
});

export function PeakmindCaseStudyPage() {
  useEffect(() => {
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.scrollbarWidth = 'none';
    const style = document.createElement('style');
    style.id = 'peakmind-scrollbar-hide';
    style.textContent = `
      html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.scrollbarWidth = '';
      const el = document.getElementById('peakmind-scrollbar-hide');
      if (el) el.remove();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{ maxWidth: '2560px', margin: '0 auto' }}
    >
      <HeroSection />
      <ProblemSection />
      <ResearchInsightsSection />
      <DesignGoalStrategySection />
      <WireframesSection />
      <KeyImprovementsSection />
      <FinalExperienceSection />
      <KeyLearningsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        ...notebookBg(),
        paddingTop: vw(112),
        paddingBottom: vw(70),
      }}
    >
      <motion.div
        style={{ width: vw(775), margin: '0 auto', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(72),
            lineHeight: vw(72),
            color: COLORS.heading,
          }}
        >
          <span className="relative inline-block">
            <span className="relative z-10">PeakMind</span>
            <svg
              viewBox="0 0 238 8"
              fill="none"
              className="absolute left-0 pointer-events-none"
              style={{ bottom: vw(-2), width: '100%', height: vw(8), zIndex: 0 }}
              preserveAspectRatio="none"
            >
              <path d="M2 6 C40 2, 80 2, 120 4 S200 6, 236 3" stroke={COLORS.orange} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </span>{' '}
          Break Page Redesign
        </h1>
        <p
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(30),
            lineHeight: vw(36),
            color: COLORS.body,
            marginTop: vw(16),
          }}
        >
          {heroData.subtitle}
        </p>

        <div
          className="flex justify-center"
          style={{ marginTop: vw(32), gap: vw(12) }}
        >
          {heroData.tags.map((tag, i) => {
            const rotations = ['-1deg', '1deg', '-0.5deg'];
            const colors = [COLORS.purple, COLORS.orange, COLORS.purple];
            const widths = [120, 143, 188];
            return (
              <span
                key={tag}
                style={{
                  fontFamily: CAVEAT,
                  fontSize: vw(18),
                  lineHeight: vw(28),
                  color: COLORS.body,
                  border: `1.6px solid ${colors[i]}`,
                  borderRadius: vw(24),
                  width: vw(widths[i]),
                  height: vw(47),
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `rotate(${rotations[i]})`,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginTop: vw(56) }}
        >
          <svg
            viewBox="0 0 100 60"
            fill="none"
            style={{ width: vw(100), height: vw(60) }}
          >
            <circle cx="12" cy="32" r="4" fill={COLORS.purple} />
            <path d="M22 38 Q50 10 80 34" stroke={COLORS.orange} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="88" cy="32" r="3.5" fill={COLORS.orange} />
          </svg>
        </div>
      </motion.div>

      <motion.div
        style={{
          width: vw(911),
          margin: `${vw(50)} auto 0`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={`${IMG}/hero-overlay.png`}
          alt="Before and After comparison — 4 to 7 messages per session"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingBottom: vw(33),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1144) }}>
        <img
          src={`${IMG}/problem-content.png`}
          alt="The Problem: Students visiting the Break page often dropped off quickly due to overwhelming wellness tools, unclear navigation, and lack of emotionally safe support."
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function ResearchInsightsSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingTop: vw(50),
        paddingBottom: vw(48),
      }}
    >
      <img
        src={`${IMG}/research-content.png`}
        alt="Research Insights: Three student types identified — Students in Crisis, Routine Builders, and Curious Explorers. Key stats: 44.7% chatbot usage, 73.3% light users, 1.8% consistent engagement."
        style={{ width: vw(1024), margin: '0 auto' }}
      />
    </section>
  );
}

function DesignGoalStrategySection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingTop: vw(14),
        paddingBottom: vw(58),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1144) }}>
        <img
          src={`${IMG}/goal-strategy-content.png`}
          alt="Design Goal: Redesign the Break page into a low-stress, emotionally safe experience. Design Strategy: 5 key principles including crisis support, calm interface, personalization, progressive disclosure, and wellness integration."
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function WireframesSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1144) }}>
        <img
          src={`${IMG}/wireframes-section.png`}
          alt="Wireframe explorations for PeakMind break page redesign"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function KeyImprovementsSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingTop: vw(78),
        paddingBottom: vw(66),
      }}
    >
      <img
        src={`${IMG}/key-improvements-content.png`}
        alt="Key Improvements: Peakoo AI Support with 7 messages per session, and Mood Check-In with Streaks for building self-awareness"
        style={{ width: vw(1024), margin: '0 auto' }}
      />
    </section>
  );
}

function FinalExperienceSection() {
  return (
    <section className="relative w-full" style={{ ...notebookBg() }}>
      <div className="mx-auto" style={{ width: vw(1144) }}>
        <img
          src={`${IMG}/final-experience-section.png`}
          alt="Final Experience: Redesigned PeakMind break page with Mood Check-In, Peakoo AI Support, and Goals & Progress Tracking features"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function KeyLearningsSection() {
  return (
    <section className="relative w-full" style={{ ...notebookBg() }}>
      <div className="mx-auto" style={{ width: vw(1144) }}>
        <img
          src={`${IMG}/learnings-section.png`}
          alt="Key Learnings: This project taught me how emotionally-aware UX can make wellness tools feel approachable, supportive, and easy to engage with during stressful moments."
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
