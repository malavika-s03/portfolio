import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS, heroContent, projectOverview } from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1144;
const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

export function PeakmindCmsStudyPage() {
  useEffect(() => {
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.scrollbarWidth = 'none';
    const style = document.createElement('style');
    style.id = 'peakmind-cms-scrollbar-hide';
    style.textContent = `
      html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    `;
    document.head.appendChild(style);
    return () => {
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.scrollbarWidth = '';
      const el = document.getElementById('peakmind-cms-scrollbar-hide');
      if (el) el.remove();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundColor: COLORS.white,
        maxWidth: '2560px',
        margin: '0 auto',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <HeaderSection />
      <HeroSection />
      <ProjectOverviewSection />
      <DesignSystemSection />
      <UsersWorkflowsSection />
      <FeatureDeepDiveSection />
    </main>
  );
}

/* ── Header ─────────────────────────────────── */

function HeaderSection() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderBottom: `0.8px solid ${COLORS.border}`,
        backdropFilter: 'blur(8px)',
        height: vw(68),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: vw(16),
        paddingBottom: vw(16),
        paddingLeft: vw(24),
        paddingRight: vw(24),
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: vw(24),
          lineHeight: 1,
        }}
      >
        <span style={{ color: COLORS.orange }}>Peak</span>
        <span style={{ color: COLORS.purple }}>mind</span>
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: vw(14),
          color: COLORS.textSecondary,
        }}
      >
        Case Study
      </span>
    </header>
  );
}

/* ── Hero ────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: COLORS.heroBg,
        height: vw(550),
        overflow: 'hidden',
        paddingLeft: vw(24),
        paddingTop: vw(40),
        boxSizing: 'border-box',
      }}
    >
      {/* Inner container: 896px wide, 340.4px tall */}
      <div
        style={{
          width: vw(896),
          height: vw(340.4),
          position: 'relative',
        }}
      >
        {/* Title at y=61.8px within container */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: vw(61.8),
            left: 0,
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: vw(60),
            lineHeight: 1,
          }}
        >
          {heroContent.title.map((part, i) => (
            <span key={i} style={{ color: part.color }}>
              {part.text}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle at y=145.6px within container */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: vw(145.6),
            left: 0,
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: vw(24),
            lineHeight: vw(39),
            maxWidth: vw(572),
            color: COLORS.text,
          }}
        >
          {heroContent.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

/* ── Stub sections ───────────────────────────── */

function ProjectOverviewSection() {
  const { problem, solution } = projectOverview;

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        paddingTop: vw(96),
        boxSizing: 'border-box',
      }}
    >
      {/* Container: 1144px wide with 60px horizontal padding */}
      <div
        style={{
          width: vw(1144),
          margin: '0 auto',
          paddingLeft: vw(60),
          paddingRight: vw(60),
          boxSizing: 'border-box',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: vw(36),
            lineHeight: vw(40),
            color: '#1a1a1a',
            textAlign: 'center',
            margin: 0,
            marginBottom: vw(64),
          }}
        >
          Project Overview
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: vw(440),
          }}
        >
          {/* Left column — The Problem */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: vw(480),
            }}
          >
            {/* Red badge pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(212,24,61,0.1)',
                borderRadius: vw(9999),
                height: vw(28),
                paddingLeft: vw(12),
                paddingRight: vw(12),
                gap: vw(8),
              }}
            >
              <img
                src={`${BASE_URL}images/peakmind-cms/problem-icon.svg`}
                alt=""
                style={{ width: vw(16), height: vw(16) }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: vw(14),
                  color: '#d4183d',
                }}
              >
                {problem.label}
              </span>
            </div>

            {/* Heading */}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: vw(24),
                color: '#1a1a1a',
                margin: 0,
                marginTop: vw(24),
                marginBottom: vw(32),
                lineHeight: 1.3,
              }}
            >
              {problem.heading}
            </h3>

            {/* Numbered list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: vw(16),
              }}
            >
              {problem.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: vw(12),
                  }}
                >
                  {/* Numbered circle */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: vw(24),
                      height: vw(24),
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: vw(14),
                        color: '#737373',
                        lineHeight: 1,
                      }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                  {/* Item text */}
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: vw(16),
                      lineHeight: vw(24),
                      color: '#1a1a1a',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — The Solution */}
          <div
            style={{
              position: 'absolute',
              left: vw(544),
              top: 0,
              width: vw(480),
            }}
          >
            {/* Green badge pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(16,185,129,0.1)',
                borderRadius: vw(9999),
                height: vw(28),
                paddingLeft: vw(12),
                paddingRight: vw(12),
                gap: vw(8),
              }}
            >
              <img
                src={`${BASE_URL}images/peakmind-cms/solution-icon.svg`}
                alt=""
                style={{ width: vw(16), height: vw(16) }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: vw(14),
                  color: '#10b981',
                }}
              >
                {solution.label}
              </span>
            </div>

            {/* Heading */}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: vw(24),
                color: '#1a1a1a',
                margin: 0,
                marginTop: vw(24),
                marginBottom: vw(24),
                lineHeight: 1.3,
              }}
            >
              {solution.heading}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(16),
                lineHeight: vw(24),
                color: '#737373',
                margin: 0,
                marginBottom: vw(28),
                width: vw(480),
              }}
            >
              {solution.description}
            </p>

            {/* Capability pills — 2×3 grid */}
            <div
              style={{
                position: 'relative',
                width: vw(480),
                height: vw(132),
              }}
            >
              {solution.capabilities.map((cap, idx) => {
                const col = idx % 2;
                const row = Math.floor(idx / 2);
                return (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: col === 0 ? 0 : vw(246),
                      top: vw(row * 48),
                      width: vw(234),
                      height: vw(36),
                      backgroundColor: '#f0e7fc',
                      borderRadius: vw(8),
                      paddingLeft: vw(12),
                      paddingRight: vw(12),
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      gap: vw(8),
                    }}
                  >
                    <img
                      src={`${BASE_URL}images/peakmind-cms/checkmark-purple.svg`}
                      alt=""
                      style={{ width: vw(16), height: vw(16), flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: vw(14),
                        color: '#1a1a1a',
                      }}
                    >
                      {cap}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function DesignSystemSection() { return null; }
function UsersWorkflowsSection() { return null; }
function FeatureDeepDiveSection() { return null; }
