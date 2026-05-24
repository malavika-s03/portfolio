import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS, heroContent, projectOverview, designSystemCards, designSystemTabs, designPrinciples, keyFeatures, userRoles, featureDeepDiveIntro, plannerFeature, analyticsFeature, caseManagementFeature, safetyFeature, bottomCards } from './data';

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
function DesignSystemSection() {
  // Section padding-left: 24px, content width: 1096px
  // Section starts at y=1283 of page (after HeroSection + ProjectOverviewSection)

  // Tab widths from Figma specs
  const tabWidths: Record<string, number> = {
    overview: 86,
    colors: 65,
    typography: 105,
    components: 114,
    patterns: 79,
  };
  const tabPositions: Record<string, number> = {
    overview: 0,
    colors: 118,
    typography: 215,
    components: 352,
    patterns: 498,
  };

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        paddingLeft: vw(24),
        paddingTop: vw(96),
        paddingBottom: vw(96),
        boxSizing: 'border-box',
      }}
    >
      {/* Content container: 1096px wide */}
      <div
        style={{
          width: vw(1096),
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        {/* ── A) "Design System Evolution" header ── */}
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: vw(36),
            lineHeight: vw(40),
            color: '#1a1a1a',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Design System Evolution
        </h2>

        {/* Subtitle: 56px below heading top → marginTop = 56 - 40 = 16px after heading */}
        <div
          style={{
            width: vw(768),
            marginLeft: vw(164),
            marginTop: vw(16),
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: vw(20),
              lineHeight: vw(28),
              color: '#737373',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Transforming a student-focused wellness brand into a scalable professional platform for schools
          </p>
        </div>

        {/* ── B) 6 evolution cards in 3×2 grid ── */}
        {/* Starts 176px below section top. Section top = heading y=0. So marginTop from subtitle = 176 - 40 - 16 - 28 = 92px */}
        <div
          style={{
            position: 'relative',
            width: vw(1096),
            height: vw(313.2), // 2 rows: 144.6 + 24 + 144.6
            marginTop: vw(92),
          }}
        >
          {designSystemCards.map((card, idx) => {
            const col = idx % 3;
            const row = Math.floor(idx / 3);
            const colPositions = [0, 373.33, 746.66];
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: vw(colPositions[col]),
                  top: vw(row === 0 ? 0 : 168.6),
                  width: vw(349.325),
                  height: vw(144.6),
                  backgroundColor: COLORS.white,
                  border: `0.8px solid #e5e5e5`,
                  borderRadius: vw(8),
                  paddingTop: vw(24.8),
                  paddingLeft: vw(24.8),
                  paddingRight: vw(24.8),
                  paddingBottom: vw(0.8),
                  boxSizing: 'border-box',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: vw(18),
                    lineHeight: vw(27),
                    color: '#1a1a1a',
                    margin: 0,
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: vw(14),
                    lineHeight: vw(20),
                    color: '#737373',
                    margin: 0,
                    marginTop: vw(8),
                    maxWidth: vw(300),
                  }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── C) Tab bar (starts at y=553.2 within section) ── */}
        {/* After header (40px) + subtitle offset (16px) + subtitle (28px) + gap (92px) + cards (313.2px) = 489.2px
            553.2 - 489.2 = 64px gap before tab bar */}
        <div
          style={{
            position: 'relative',
            width: vw(1096),
            height: vw(40.8),
            borderBottom: `0.8px solid #e5e5e5`,
            marginTop: vw(64),
          }}
        >
          {designSystemTabs.map((tab) => {
            const isActive = tab === 'overview';
            return (
              <div
                key={tab}
                style={{
                  position: 'absolute',
                  left: vw(tabPositions[tab]),
                  top: 0,
                  width: vw(tabWidths[tab]),
                  height: vw(40.8),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: isActive ? `2px solid #5f21b7` : 'none',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: vw(16),
                    lineHeight: vw(24),
                    color: isActive ? '#5f21b7' : '#737373',
                    textTransform: 'capitalize',
                  }}
                >
                  {tab}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── D) Design Principles (starts at y=642 within section) ── */}
        {/* 642 - (553.2 + 40.8) = 48px gap */}
        <div
          style={{
            marginTop: vw(48),
          }}
        >
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: vw(30),
              lineHeight: vw(36),
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            Design Principles
          </h3>

          {/* 3 cards row */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(221.6),
              marginTop: vw(24),
            }}
          >
            {designPrinciples.map((principle, idx) => {
              const cardPositions = [0, 373.33, 746.66];
              const cardWidths = [349.325, 349.337, 349.325];
              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: vw(cardPositions[idx]),
                    top: 0,
                    width: vw(cardWidths[idx]),
                    height: vw(221.6),
                    backgroundColor: COLORS.white,
                    border: `0.8px solid #e5e5e5`,
                    borderRadius: vw(8),
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Icon box at (24px, 24px) */}
                  <div
                    style={{
                      position: 'absolute',
                      left: vw(24),
                      top: vw(24),
                      width: vw(48),
                      height: vw(48),
                      backgroundColor: '#f0e7fc',
                      borderRadius: vw(8),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={`${BASE_URL}images/peakmind-cms/${principle.icon}`}
                      alt=""
                      style={{ width: vw(24), height: vw(24) }}
                    />
                  </div>

                  {/* Title at (24px, 88.4px) */}
                  <p
                    style={{
                      position: 'absolute',
                      left: vw(24),
                      top: vw(88.4),
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: vw(18),
                      lineHeight: vw(28),
                      color: '#1a1a1a',
                    }}
                  >
                    {principle.title}
                  </p>

                  {/* Description at (24px, 124px) */}
                  <p
                    style={{
                      position: 'absolute',
                      left: vw(24),
                      top: vw(124),
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: vw(16),
                      lineHeight: vw(24),
                      color: '#737373',
                      maxWidth: vw(300),
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── E) Key Features (starts 48px after Design Principles) ── */}
        <div
          style={{
            marginTop: vw(48),
          }}
        >
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: vw(30),
              lineHeight: vw(36),
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            Key Features
          </h3>

          {/* 6 items in 2 columns, 3 rows */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(104), // 3 rows × 40px = 120, but rows at 0, 40, 80 with 24px text height
              marginTop: vw(24),
            }}
          >
            {keyFeatures.map((feature, idx) => {
              const col = idx % 2;
              const row = Math.floor(idx / 2);
              const colX = col === 0 ? 0 : 556;
              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: vw(colX),
                    top: vw(row * 40),
                    display: 'flex',
                    alignItems: 'center',
                    gap: vw(12),
                  }}
                >
                  {/* Orange circle with check */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: vw(20),
                      height: vw(20),
                      borderRadius: '50%',
                      backgroundColor: '#ff6d24',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={`${BASE_URL}images/peakmind-cms/feature-check-orange.svg`}
                      alt=""
                      style={{ width: vw(12), height: vw(12) }}
                    />
                  </div>
                  {/* Feature text */}
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: vw(16),
                      lineHeight: vw(24),
                      color: '#1a1a1a',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
function UsersWorkflowsSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '0.8px solid #e5e5e5',
        borderBottom: '0.8px solid #e5e5e5',
        paddingTop: vw(96),
        paddingBottom: vw(96),
        paddingLeft: vw(24),
        paddingRight: vw(24),
        boxSizing: 'border-box',
      }}
    >
      {/* Content container: 1096px wide */}
      <div
        style={{
          width: vw(1096),
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Header group: 84px tall ── */}
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
          }}
        >
          Understanding Users &amp; Workflows
        </h2>

        {/* Subtitle: 56px below heading top → after 40px line-height, marginTop = 16px */}
        <div
          style={{
            width: vw(768),
            marginLeft: vw(164),
            marginTop: vw(16),
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: vw(20),
              lineHeight: vw(28),
              color: '#737373',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Designing for multiple user roles with different needs and access levels
          </p>
        </div>

        {/* 64px gap below header group */}
        {/* ── 3 user role cards ── */}
        <div
          style={{
            position: 'relative',
            width: vw(1096),
            height: vw(341.6),
            marginTop: vw(64),
          }}
        >
          {userRoles.map((role, idx) => {
            const cardX = [0, 376, 752];
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: vw(cardX[idx]),
                  top: 0,
                  width: vw(344),
                  height: vw(341.6),
                  backgroundColor: '#fafafa',
                  border: '0.8px solid #e5e5e5',
                  borderRadius: vw(8),
                  boxSizing: 'border-box',
                }}
              >
                {/* Icon container at (32px, 32px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(32),
                    width: vw(64),
                    height: vw(64),
                    borderRadius: vw(8),
                    backgroundColor: role.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={`${BASE_URL}images/peakmind-cms/${role.icon}`}
                    alt=""
                    style={{ width: vw(32), height: vw(32) }}
                  />
                </div>

                {/* Title at (32px, 120px) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(120),
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: vw(20),
                    lineHeight: vw(28),
                    color: '#1a1a1a',
                  }}
                >
                  {role.title}
                </p>

                {/* Bullet list starting at (32px, 172px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(172),
                    width: vw(278.4),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: vw(12),
                  }}
                >
                  {role.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        position: 'relative',
                        paddingLeft: vw(18),
                      }}
                    >
                      {/* Colored dot at (0, 8px relative to item top) */}
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: vw(8),
                          width: vw(6),
                          height: vw(6),
                          borderRadius: '50%',
                          backgroundColor: role.color,
                        }}
                      />
                      {/* Text */}
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: '#737373',
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ── FeatureDeepDive — helper ─────────────────── */

function FeatureImageCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      style={{
        width: vw(524),
        backgroundColor: '#fafafa',
        border: '0.8px solid #e5e5e5',
        borderRadius: vw(8),
        paddingTop: vw(24.8),
        paddingLeft: vw(24.8),
        paddingRight: vw(24.8),
        paddingBottom: vw(0.8),
        boxSizing: 'border-box',
      }}
    >
      {/* Inner purple box */}
      <div
        style={{
          backgroundColor: '#f0e7fc',
          borderRadius: vw(8),
          height: vw(266.85),
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`${BASE_URL}images/peakmind-cms/${icon}`}
          alt=""
          style={{ width: vw(64), height: vw(64) }}
        />
      </div>
      {/* Label below inner box */}
      <p
        style={{
          marginTop: vw(16),
          marginBottom: 0,
          textAlign: 'center',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: vw(14),
          lineHeight: vw(20),
          color: '#737373',
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── FeatureDeepDive ─────────────────────────── */

function FeatureDeepDiveSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '0.8px solid #e5e5e5',
        borderBottom: '0.8px solid #e5e5e5',
        paddingTop: vw(96),
        paddingLeft: vw(24),
        paddingRight: vw(24),
        paddingBottom: vw(96),
        boxSizing: 'border-box',
      }}
    >
      {/* Content container: 1096px wide */}
      <div
        style={{
          width: vw(1096),
          boxSizing: 'border-box',
        }}
      >
        {/* ── Header (84px tall) ── */}
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: vw(36),
            lineHeight: vw(40),
            color: '#1a1a1a',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {featureDeepDiveIntro.heading}
        </h2>
        {/* Subtitle at 56px from heading top → 16px margin after 40px line-height */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: vw(20),
            lineHeight: vw(28),
            color: '#737373',
            textAlign: 'center',
            margin: 0,
            marginTop: vw(16),
          }}
        >
          {featureDeepDiveIntro.subtitle}
        </p>

        {/* 64px gap then features container */}
        <div
          style={{
            marginTop: vw(64),
            display: 'flex',
            flexDirection: 'column',
            gap: vw(96),
          }}
        >
          {/* ── Planner Feature ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(404),
            }}
          >
            {/* Left side: text content at x=0 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: vw(524),
              }}
            >
              {/* Heading at y=44.4 */}
              <h3
                style={{
                  position: 'absolute',
                  top: vw(44.4),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(30),
                  lineHeight: vw(36),
                  color: '#1a1a1a',
                  width: vw(524),
                }}
              >
                {plannerFeature.heading}
              </h3>

              {/* Description at y=140.6 */}
              <p
                style={{
                  position: 'absolute',
                  top: vw(140.6),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(16),
                  lineHeight: vw(24),
                  color: '#737373',
                  width: vw(524),
                }}
              >
                {plannerFeature.description}
              </p>

              {/* List starting at y=236, gap 12px between items */}
              <div
                style={{
                  position: 'absolute',
                  top: vw(236),
                  left: 0,
                  width: vw(524),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: vw(12),
                }}
              >
                {plannerFeature.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 0,
                    }}
                  >
                    {/* Green check icon at (0, 2px) */}
                    <img
                      src={`${BASE_URL}images/peakmind-cms/feature-check-green.svg`}
                      alt=""
                      style={{
                        width: vw(20),
                        height: vw(20),
                        flexShrink: 0,
                        marginTop: vw(2),
                      }}
                    />
                    {/* Text at 32px offset */}
                    <span
                      style={{
                        marginLeft: vw(12),
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

            {/* Right side: image card at x=572, y=25.77 */}
            <div
              style={{
                position: 'absolute',
                left: vw(572),
                top: vw(25.77),
              }}
            >
              <FeatureImageCard
                icon={plannerFeature.imageIcon}
                label={plannerFeature.imageLabel}
              />
            </div>
          </div>

          {/* ── Analytics Feature ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(369.6),
            }}
          >
            {/* Left side: image card at x=0, y=8.57 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: vw(8.57),
              }}
            >
              <FeatureImageCard
                icon={analyticsFeature.imageIcon}
                label={analyticsFeature.imageLabel}
              />
            </div>

            {/* Right side: text content at x=572 */}
            <div
              style={{
                position: 'absolute',
                left: vw(572),
                top: 0,
                width: vw(524),
              }}
            >
              {/* Heading at y=44.4 */}
              <h3
                style={{
                  position: 'absolute',
                  top: vw(44.4),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(30),
                  lineHeight: vw(36),
                  color: '#1a1a1a',
                  width: vw(524),
                }}
              >
                {analyticsFeature.heading}
              </h3>

              {/* Description at y=104.6 */}
              <p
                style={{
                  position: 'absolute',
                  top: vw(104.6),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(16),
                  lineHeight: vw(24),
                  color: '#737373',
                  width: vw(524),
                }}
              >
                {analyticsFeature.description}
              </p>

              {/* UX Challenges sub-card at y=200 */}
              <div
                style={{
                  position: 'absolute',
                  top: vw(200),
                  left: 0,
                  width: vw(524),
                  height: vw(169.6),
                  backgroundColor: '#fafafa',
                  border: '0.8px solid #e5e5e5',
                  borderRadius: vw(8),
                  padding: vw(16.8),
                  boxSizing: 'border-box',
                }}
              >
                {/* Sub-card heading */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: vw(16),
                    lineHeight: vw(24),
                    color: '#1a1a1a',
                  }}
                >
                  UX Challenges
                </p>
                {/* 8px gap then bullet list */}
                <div
                  style={{
                    marginTop: vw(8),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: vw(8),
                  }}
                >
                  {analyticsFeature.challenges.map((challenge, idx) => (
                    <p
                      key={idx}
                      style={{
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: vw(14),
                        lineHeight: vw(20),
                        color: '#737373',
                      }}
                    >
                      {`• ${challenge}`}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CaseManagement Feature ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(408),
            }}
          >
            {/* Left side: text content at x=0 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: vw(524),
              }}
            >
              {/* Heading at y=44.4 */}
              <h3
                style={{
                  position: 'absolute',
                  top: vw(44.4),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(30),
                  lineHeight: vw(36),
                  color: '#1a1a1a',
                  width: vw(524),
                }}
              >
                {caseManagementFeature.heading}
              </h3>

              {/* Description at y=104.6 */}
              <p
                style={{
                  position: 'absolute',
                  top: vw(104.6),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(16),
                  lineHeight: vw(24),
                  color: '#737373',
                  width: vw(524),
                }}
              >
                {caseManagementFeature.description}
              </p>

              {/* 6 purple pills in 2×3 grid starting at y=200 */}
              {caseManagementFeature.pills.map((pill, idx) => {
                const col = idx % 2;
                const row = Math.floor(idx / 2);
                return (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: vw(200 + row * 48),
                      left: vw(col === 0 ? 0 : 268),
                      width: vw(256),
                      height: vw(36),
                      backgroundColor: '#f0e7fc',
                      borderRadius: vw(8),
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
                        lineHeight: vw(20),
                        color: '#1a1a1a',
                        textAlign: 'center',
                      }}
                    >
                      {pill}
                    </span>
                  </div>
                );
              })}

              {/* Callout box at y=356 */}
              <div
                style={{
                  position: 'absolute',
                  top: vw(356),
                  left: 0,
                  width: vw(524),
                  height: vw(52),
                  backgroundColor: 'rgba(240,231,252,0.5)',
                  borderLeft: `${vw(4)} solid #5f21b7`,
                  borderRadius: vw(8),
                  paddingTop: vw(16),
                  paddingBottom: vw(16),
                  paddingLeft: vw(20),
                  paddingRight: vw(16),
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: vw(14),
                    lineHeight: vw(20),
                    color: '#1a1a1a',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{caseManagementFeature.callout.bold}</span>
                  <span style={{ fontWeight: 400 }}>{caseManagementFeature.callout.text}</span>
                </p>
              </div>
            </div>

            {/* Right side: image card at x=572, y=27.77 */}
            <div
              style={{
                position: 'absolute',
                left: vw(572),
                top: vw(27.77),
              }}
            >
              <FeatureImageCard
                icon={caseManagementFeature.imageIcon}
                label={caseManagementFeature.imageLabel}
              />
            </div>
          </div>

          {/* ── Safety Feature ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(475.95),
            }}
          >
            {/* Left side: image card at x=0, y=61.75 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: vw(61.75),
              }}
            >
              <FeatureImageCard
                icon={safetyFeature.imageIcon}
                label={safetyFeature.imageLabel}
              />
            </div>

            {/* Right side: text content at x=572 */}
            <div
              style={{
                position: 'absolute',
                left: vw(572),
                top: 0,
                width: vw(524),
              }}
            >
              {/* Heading at y=44.4 */}
              <h3
                style={{
                  position: 'absolute',
                  top: vw(44.4),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(30),
                  lineHeight: vw(36),
                  color: '#1a1a1a',
                  width: vw(524),
                }}
              >
                {safetyFeature.heading}
              </h3>

              {/* Description at y=104.6 */}
              <p
                style={{
                  position: 'absolute',
                  top: vw(104.6),
                  left: 0,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(16),
                  lineHeight: vw(24),
                  color: '#737373',
                  width: vw(524),
                }}
              >
                {safetyFeature.description}
              </p>

              {/* 4 numbered step cards starting at y=200, gap 12px */}
              <div
                style={{
                  position: 'absolute',
                  top: vw(200),
                  left: 0,
                  width: vw(524),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: vw(12),
                }}
              >
                {safetyFeature.steps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#fafafa',
                      borderRadius: vw(8),
                      padding: vw(12),
                      width: vw(524),
                      minHeight: vw(60),
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: vw(12),
                    }}
                  >
                    {/* Number circle */}
                    <div
                      style={{
                        width: vw(32),
                        height: vw(32),
                        borderRadius: '50%',
                        backgroundColor: 'rgba(245,158,11,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: vw(14),
                          color: '#f59e0b',
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    {/* Text column */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: '#1a1a1a',
                        }}
                      >
                        {step.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: vw(12),
                          lineHeight: vw(16),
                          color: '#737373',
                        }}
                      >
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom Cards ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(349.587),
              display: 'flex',
              gap: vw(32),
            }}
          >
            {bottomCards.map((card, cardIdx) => (
              <div
                key={cardIdx}
                style={{
                  position: 'absolute',
                  left: vw(cardIdx === 0 ? 0 : 564),
                  top: 0,
                  width: vw(532),
                  height: vw(349.587),
                  backgroundColor: '#fafafa',
                  border: '0.8px solid #e5e5e5',
                  borderRadius: vw(8),
                  boxSizing: 'border-box',
                }}
              >
                {/* Icon box at (32, 32) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(32),
                    width: vw(48),
                    height: vw(48),
                    borderRadius: vw(8),
                    backgroundColor: card.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={`${BASE_URL}images/peakmind-cms/${card.icon}`}
                    alt=""
                    style={{ width: vw(24), height: vw(24) }}
                  />
                </div>

                {/* Title at (32, 96) */}
                <h3
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(96),
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: vw(24),
                    lineHeight: vw(32),
                    color: '#1a1a1a',
                  }}
                >
                  {card.title}
                </h3>

                {/* Description at (32, 143.99) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(143.99),
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: vw(16),
                    lineHeight: vw(24),
                    color: '#737373',
                    maxWidth: vw(467),
                  }}
                >
                  {card.description}
                </p>

                {/* Check list */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32),
                    top: vw(cardIdx === 0 ? 239.99 : 215.99),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: vw(8),
                  }}
                >
                  {card.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0,
                      }}
                    >
                      <img
                        src={`${BASE_URL}images/peakmind-cms/${card.checkIcon}`}
                        alt=""
                        style={{
                          width: vw(16),
                          height: vw(16),
                          flexShrink: 0,
                          marginTop: vw(2),
                        }}
                      />
                      <span
                        style={{
                          marginLeft: vw(8),
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: '#1a1a1a',
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
