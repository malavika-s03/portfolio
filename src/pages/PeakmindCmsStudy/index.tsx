import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS, heroContent, heroGallery, projectOverview, designSystemCards, designSystemTabs, designPrinciples, keyFeatures, userRoles, featureDeepDiveIntro, plannerFeature, analyticsFeature, analyticsMetrics, caseManagementFeature, safetyFeature, incidentReport, bottomCards, heroSlides, classroomContent, colorPalette, typographyData, componentsData, patternsData } from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
export const BASE_WIDTH = 1144;
export const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

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
    `;
    document.head.appendChild(style);
    const link = document.createElement('link');
    link.id = 'peakmind-cms-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000&display=swap';
    document.head.appendChild(link);
    return () => {
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.scrollbarWidth = '';
      const el = document.getElementById('peakmind-cms-scrollbar-hide');
      if (el) el.remove();
      const fontEl = document.getElementById('peakmind-cms-font');
      if (fontEl) fontEl.remove();
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
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const directionRef = useRef(1);

  const slideVariants = {
    enter: (dir: number) => ({ x: `${dir * 18}%`, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: `${dir * -18}%`, opacity: 0 }),
  };

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      directionRef.current = 1;
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const goToSlide = (index: number) => {
    directionRef.current = index > activeSlide ? 1 : -1;
    setActiveSlide(index);
    resetTimer();
  };

  const slide = heroSlides[activeSlide];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: COLORS.heroBg,
        height: vw(550),
        overflow: 'visible',
        paddingLeft: vw(24),
        paddingTop: vw(40),
        boxSizing: 'border-box',
        position: 'relative',
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

        {/* Card slider area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: vw(556),
            top: vw(15),
            width: vw(515.6),
            height: vw(310),
          }}
          onMouseEnter={() => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } }}
          onMouseLeave={() => resetTimer()}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: vw(12) }}>
          <AnimatePresence mode="wait" custom={directionRef.current}>
            <motion.div
              key={activeSlide}
              custom={directionRef.current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: '100%', height: '100%' }}
            >
              <HeroSlideCard index={activeSlide} />
            </motion.div>
          </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Slide title, description, dots */}
      <div
        style={{
          width: vw(515.6),
          marginLeft: vw(543),
          marginTop: vw(40),
          textAlign: 'center',
        }}
        onMouseEnter={() => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } }}
        onMouseLeave={() => resetTimer()}
      >
        <div style={{ overflow: 'hidden' }}>
        <AnimatePresence mode="wait" custom={directionRef.current}>
          <motion.div
            key={activeSlide}
            custom={directionRef.current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: vw(28),
                lineHeight: vw(36),
                color: COLORS.orange,
              }}
            >
              {slide.title}
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(16),
                lineHeight: vw(24),
                color: COLORS.textSecondary,
              }}
            >
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: vw(8),
            marginTop: vw(8),
          }}
        >
          {heroSlides.map((_, i) => {
            const isActive = i === activeSlide;
            const isVisited = i < activeSlide;
            let bgColor = '#d9d9d9';
            if (isActive) bgColor = slide.dotColor;
            else if (isVisited) bgColor = heroSlides[i].dotColor;
            return (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  width: isActive ? vw(32) : vw(8),
                  height: vw(8),
                  borderRadius: vw(4),
                  backgroundColor: bgColor,
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Hero Slide Cards ─────────────────────────── */

export function HeroSlideCard({ index }: { index: number }) {
  switch (index) {
    case 0: return <HeroPlannerCard />;
    case 1: return <HeroClassroomCard />;
    case 2: return <HeroGalleryCard />;
    case 3: return <HeroSafetyCard />;
    case 4: return <HeroAnalyticsCard />;
    default: return null;
  }
}

export function HeroPlannerCard() {
  return (
    <img
      src={`${BASE_URL}images/peakmind-cms/planner-mockup.png`}
      alt="Planner calendar view"
      decoding="async"
      style={{
        width: '100%',
        height: vw(310),
        objectFit: 'cover',
        objectPosition: 'top center',
        borderRadius: vw(12),
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    />
  );
}

export function HeroClassroomCard() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: vw(12),
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #ff6d24, #ff8f4f)',
          padding: `${vw(20)} ${vw(24)}`,
        }}
      >
        <h4
          style={{
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: vw(18),
            lineHeight: vw(24),
            color: COLORS.white,
          }}
        >
          {classroomContent.title}
        </h4>
        <p
          style={{
            margin: 0,
            marginTop: vw(4),
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: vw(14),
            lineHeight: vw(20),
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          {classroomContent.subtitle}
        </p>
      </div>
      <div
        style={{
          padding: `${vw(20)} ${vw(24)}`,
          display: 'flex',
          flexDirection: 'column',
          gap: vw(16),
        }}
      >
        {classroomContent.steps.map((step) => (
          <div
            key={step.number}
            style={{ display: 'flex', alignItems: 'flex-start', gap: vw(12) }}
          >
            <div
              style={{
                width: vw(28),
                height: vw(28),
                borderRadius: '50%',
                backgroundColor: 'rgba(255,109,36,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(14),
                  color: COLORS.orange,
                }}
              >
                {step.number}
              </span>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: vw(14),
                  lineHeight: vw(20),
                  color: COLORS.text,
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  margin: 0,
                  marginTop: vw(2),
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(12),
                  lineHeight: vw(16),
                  color: COLORS.textSecondary,
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroGalleryCard() {
  return (
    <div>
      <div style={{ display: 'flex', gap: vw(16), width: vw(515.6) }}>
        {heroGallery.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: vw(161.2),
              backgroundColor: COLORS.white,
              borderRadius: vw(8),
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src={`${BASE_URL}images/peakmind-cms/${item.image}`}
              alt={item.title}
              decoding="async"
              style={{
                width: vw(159.6),
                height: vw(128),
                objectFit: 'cover',
                display: 'block',
                marginLeft: vw(0.8),
                marginTop: vw(0.8),
              }}
            />
            <div style={{ padding: `${vw(12)} ${vw(12)}` }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: vw(14),
                  lineHeight: vw(20),
                  color: COLORS.text,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: 0,
                  marginTop: vw(4),
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(12),
                  lineHeight: vw(16),
                  color: COLORS.textSecondary,
                }}
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: vw(32),
          marginTop: vw(24),
        }}
      >
        {heroGallery.stats.map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: vw(24),
                lineHeight: vw(32),
                color: COLORS.purple,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(12),
                lineHeight: vw(16),
                color: COLORS.textSecondary,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSafetyCard() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: vw(12),
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: vw(12),
          paddingTop: vw(20),
          paddingLeft: vw(20),
          paddingRight: vw(20),
        }}
      >
        <div
          style={{
            width: vw(36),
            height: vw(36),
            borderRadius: '50%',
            backgroundColor: 'rgba(245,158,11,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width={vw(18)} height={vw(18)} viewBox="0 0 20 20" fill="none">
            <path d="M10 2L2 18h16L10 2z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 8v4M10 14h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: vw(16),
              lineHeight: vw(24),
              color: COLORS.text,
            }}
          >
            {incidentReport.title}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: vw(12),
              lineHeight: vw(16),
              color: COLORS.textSecondary,
            }}
          >
            {incidentReport.subtitle}
          </p>
        </div>
      </div>
      <div
        style={{
          paddingTop: vw(16),
          paddingLeft: vw(20),
          paddingRight: vw(20),
          paddingBottom: vw(20),
          display: 'flex',
          flexDirection: 'column',
          gap: vw(12),
        }}
      >
        {incidentReport.entries.slice(0, 2).map((entry, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: COLORS.white,
              border: `1px solid ${entry.borderColor}`,
              borderRadius: vw(8),
              padding: vw(14),
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: vw(13),
                  lineHeight: vw(18),
                  color: COLORS.text,
                }}
              >
                Incident {entry.id}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: vw(11),
                  lineHeight: vw(14),
                  color: entry.statusColor,
                  backgroundColor: entry.statusBg,
                  paddingLeft: vw(6),
                  paddingRight: vw(6),
                  paddingTop: vw(3),
                  paddingBottom: vw(3),
                  borderRadius: vw(4),
                }}
              >
                {entry.status}
              </span>
            </div>
            <p
              style={{
                margin: 0,
                marginTop: vw(6),
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(13),
                lineHeight: vw(18),
                color: COLORS.text,
              }}
            >
              {entry.description}
            </p>
            <p
              style={{
                margin: 0,
                marginTop: vw(6),
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(11),
                lineHeight: vw(14),
                color: COLORS.textSecondary,
              }}
            >
              {entry.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroAnalyticsCard() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: vw(12),
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
        padding: vw(20),
      }}
    >
      <h4
        style={{
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: vw(18),
          lineHeight: vw(24),
          color: COLORS.text,
        }}
      >
        {analyticsMetrics.title}
      </h4>
      <div style={{ marginTop: vw(16) }}>
        {analyticsMetrics.bars.map((bar, idx) => (
          <div key={idx} style={{ marginTop: idx > 0 ? vw(14) : 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(13),
                  lineHeight: vw(18),
                  color: COLORS.text,
                }}
              >
                {bar.label}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: vw(13),
                  lineHeight: vw(18),
                  color: bar.color,
                }}
              >
                {bar.value}%
              </span>
            </div>
            <div
              style={{
                marginTop: vw(4),
                width: '100%',
                height: vw(7),
                backgroundColor: '#f0f0f0',
                borderRadius: vw(3.5),
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${bar.value}%`,
                  height: '100%',
                  backgroundColor: bar.color,
                  borderRadius: vw(3.5),
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: vw(16),
          display: 'flex',
          gap: vw(12),
        }}
      >
        {analyticsMetrics.stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: stat.bg,
              borderRadius: vw(8),
              paddingTop: vw(20),
              paddingBottom: vw(12),
              paddingLeft: vw(10),
              paddingRight: vw(10),
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: vw(22),
                lineHeight: vw(28),
                color: COLORS.text,
                textAlign: 'center',
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                margin: 0,
                marginTop: vw(4),
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: vw(11),
                lineHeight: vw(14),
                color: COLORS.textSecondary,
                textAlign: 'center',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
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
        paddingBottom: vw(96),
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
            height: vw(312),
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
                decoding="async"
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
                marginBottom: vw(24),
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
                decoding="async"
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
                marginBottom: vw(24),
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
                      decoding="async"
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
  const [activeTab, setActiveTab] = useState('overview');

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
        paddingTop: vw(56),
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
            marginTop: vw(64),
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
            const isActive = tab === activeTab;
            return (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
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
                  cursor: 'pointer',
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

        {activeTab === 'overview' && <TabOverviewContent />}
        {activeTab === 'colors' && <TabColorsContent />}
        {activeTab === 'typography' && <TabTypographyContent />}
        {activeTab === 'components' && <TabComponentsContent />}
        {activeTab === 'patterns' && <TabPatternsContent />}
      </div>
    </section>
  );
}

function TabOverviewContent() {
  return (
    <>
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
                {/* Icon box at (24.8px, 24.8px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(24.8),
                    top: vw(24.8),
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
                    decoding="async"
                    style={{ width: vw(24), height: vw(24) }}
                  />
                </div>

                {/* Title at (24.8px, 89.2px) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(24.8),
                    top: vw(89.2),
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

                {/* Description at (24.8px, 124.8px) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(24.8),
                    top: vw(124.8),
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
                    decoding="async"
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
    </>
  );
}

function TabColorsContent() {
  return (
    <div style={{ marginTop: vw(48) }}>
      {/* Section 1: Color Palette */}
      <div>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: vw(30),
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          Color Palette
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: vw(16),
            fontWeight: 400,
            color: '#737373',
            margin: 0,
            marginTop: vw(12),
            lineHeight: 1.5,
          }}
        >
          {colorPalette.description}
        </p>

        {/* 3x2 Color Cards Grid */}
        <div
          style={{
            position: 'relative',
            marginTop: vw(24),
            width: vw(1096),
            height: vw(120 + 16 + 16 + 20 + 18 + 24 + 120 + 16 + 16 + 20 + 18),
          }}
        >
          {colorPalette.colors.map((c, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const colOffsets = [0, 373.33, 746.66];
            const cardWidth = 349;
            const colorBlockH = 120;
            const bottomPadding = 16;
            const nameH = 20;
            const descH = 18;
            const cardH = colorBlockH + bottomPadding + nameH + 8 + descH + bottomPadding;
            const rowGap = 24;
            return (
              <div
                key={c.name}
                style={{
                  position: 'absolute',
                  left: vw(colOffsets[col]),
                  top: vw(row * (cardH + rowGap)),
                  width: vw(cardWidth),
                  border: '0.8px solid #e5e5e5',
                  borderRadius: vw(8),
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                }}
              >
                {/* Color block */}
                <div
                  style={{
                    backgroundColor: c.color,
                    height: vw(colorBlockH),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: vw(16),
                      fontWeight: 500,
                      color: c.textDark ? '#1a1a1a' : '#ffffff',
                    }}
                  >
                    {c.hex}
                  </span>
                </div>
                {/* Info block */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: vw(16),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: vw(16),
                      fontWeight: 600,
                      color: '#1a1a1a',
                      margin: 0,
                    }}
                  >
                    {c.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: vw(14),
                      fontWeight: 400,
                      color: '#737373',
                      margin: 0,
                      marginTop: vw(4),
                    }}
                  >
                    {c.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Neutral Colors */}
      <div style={{ marginTop: vw(48) }}>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: vw(30),
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          Neutral Colors
        </h3>

        {/* 4-card row */}
        <div
          style={{
            display: 'flex',
            gap: vw(16),
            marginTop: vw(24),
          }}
        >
          {colorPalette.neutrals.map((n) => (
            <div
              key={n.name}
              style={{
                flex: 1,
                border: '0.8px solid #e5e5e5',
                borderRadius: vw(8),
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              {/* Color block */}
              <div
                style={{
                  backgroundColor: n.color,
                  height: vw(72),
                }}
              />
              {/* Info block */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: vw(12),
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: vw(14),
                    fontWeight: 500,
                    color: '#1a1a1a',
                    margin: 0,
                  }}
                >
                  {n.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: vw(12),
                    fontWeight: 400,
                    color: '#737373',
                    margin: 0,
                    marginTop: vw(4),
                  }}
                >
                  {n.hex}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function TabTypographyContent() {
  const weightMap: Record<string, number> = { Regular: 400, Medium: 500, Semibold: 600, Bold: 700 };
  return (
    <div style={{ marginTop: vw(48) }}>
      {/* Font Family Section */}
      <div>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: vw(30),
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          Font Family
        </h3>
        <div
          style={{
            marginTop: vw(24),
            background: '#ffffff',
            border: '0.8px solid #e5e5e5',
            borderRadius: vw(8),
            padding: vw(32),
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: vw(48),
              fontWeight: 700,
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            DM Sans
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: vw(16),
              fontWeight: 400,
              color: '#737373',
              marginTop: vw(16),
              marginBottom: 0,
              lineHeight: 1.5,
            }}
          >
            {typographyData.fontDescription}
          </p>
          <div style={{ display: 'flex', gap: vw(24), marginTop: vw(24) }}>
            {typographyData.weights.map((w) => (
              <span
                key={w}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: vw(20),
                  fontWeight: weightMap[w],
                  color: '#1a1a1a',
                }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Type Scale Section */}
      <div style={{ marginTop: vw(48) }}>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: vw(30),
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          Type Scale
        </h3>
        <div style={{ marginTop: vw(24), display: 'flex', flexDirection: 'column' as const, gap: vw(12) }}>
          {typographyData.typeScale.map((item) => (
            <div
              key={item.name}
              style={{
                background: '#fafafa',
                border: '0.8px solid #e5e5e5',
                borderRadius: vw(8),
                padding: vw(24),
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: vw(item.fontSize),
                  fontWeight: weightMap[item.weight] || 400,
                  color: '#1a1a1a',
                  margin: 0,
                }}
              >
                {item.name}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: vw(14),
                  fontWeight: 400,
                  color: '#737373',
                  marginTop: vw(8),
                  marginBottom: 0,
                }}
              >
                {item.size} · {item.weight} · {item.lineHeight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function TabComponentsContent() {
  const font = "'DM Sans', sans-serif";
  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: font,
    fontSize: vw(30),
    fontWeight: 600,
    color: '#1a1a1a',
    margin: 0,
  };
  const cardContainerStyle: React.CSSProperties = {
    width: '100%',
    background: '#fafafa',
    border: '0.8px solid #e5e5e5',
    borderRadius: vw(8),
    padding: vw(24),
    boxSizing: 'border-box' as const,
  };
  const cardLabelStyle: React.CSSProperties = {
    fontFamily: font,
    fontSize: vw(16),
    fontWeight: 600,
    color: '#1a1a1a',
    margin: 0,
  };

  const navIcons: Record<string, React.ReactNode> = {
    Home: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <path d="M2 8l6-6 6 6" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 9v4.5a1 1 0 001 1h7a1 1 0 001-1V9" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Planner: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#737373" strokeWidth="1.5"/>
        <path d="M2 6.5h12" stroke="#737373" strokeWidth="1.5"/>
        <path d="M5.5 1.5v3M10.5 1.5v3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    Analytics: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <rect x="2" y="9" width="3" height="5" rx="0.5" stroke="#737373" strokeWidth="1.5"/>
        <rect x="6.5" y="5" width="3" height="9" rx="0.5" stroke="#737373" strokeWidth="1.5"/>
        <rect x="11" y="2" width="3" height="12" rx="0.5" stroke="#737373" strokeWidth="1.5"/>
      </svg>
    ),
    Support: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <path d="M2.5 11.5v2l2.5-2h6.5a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0011.5 2.5h-7A1.5 1.5 0 003 4v6" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Safety: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5l5 2.5v4c0 3-2.5 5.5-5 6.5-2.5-1-5-3.5-5-6.5V4l5-2.5z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'Self-care': (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <path d="M8 13.5s-5.5-3.5-5.5-7a3 3 0 015.5-1.5 3 3 0 015.5 1.5c0 3.5-5.5 7-5.5 7z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Gallery: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#737373" strokeWidth="1.5"/>
        <circle cx="5.5" cy="6.5" r="1.5" stroke="#737373" strokeWidth="1.2"/>
        <path d="M2 11l3-3 2 2 3-3 4 4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Classroom: (
      <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L1.5 5 8 8.5 14.5 5 8 1.5z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 6.5v4L8 13l4.5-2.5v-4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <div style={{ marginTop: vw(48) }}>
      {/* 1. Buttons Section */}
      <p style={sectionHeadingStyle}>Buttons</p>

      {/* Card A — Button Variants */}
      <div style={{ ...cardContainerStyle, marginTop: vw(24) }}>
        <p style={cardLabelStyle}>Button Variants</p>
        <div style={{ display: 'flex', gap: vw(12), marginTop: vw(16) }}>
          {componentsData.buttonVariants.map((btn) => (
            <button
              key={btn.label}
              style={{
                fontFamily: font,
                fontSize: vw(14),
                fontWeight: 500,
                color: btn.color,
                background: btn.bg,
                border: btn.border ? `1.5px solid ${btn.border}` : 'none',
                borderRadius: '9999px',
                paddingTop: vw(10),
                paddingBottom: vw(10),
                paddingLeft: vw(20),
                paddingRight: vw(20),
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Card B — Button Sizes */}
      <div style={{ ...cardContainerStyle, marginTop: vw(16) }}>
        <p style={cardLabelStyle}>Button Sizes</p>
        <div style={{ display: 'flex', gap: vw(12), alignItems: 'center', marginTop: vw(16) }}>
          {componentsData.buttonSizes.map((btn) => (
            <button
              key={btn.label}
              style={{
                fontFamily: font,
                fontSize: vw(btn.fontSize),
                fontWeight: 500,
                color: '#ffffff',
                background: btn.label === 'Large' ? '#FF6D24' : '#5F21B7',
                border: 'none',
                borderRadius: '9999px',
                height: vw(btn.height),
                paddingLeft: vw(btn.px),
                paddingRight: vw(btn.px),
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Badges & Tags Section */}
      <div style={{ marginTop: vw(48) }}>
        <p style={sectionHeadingStyle}>Badges &amp; Tags</p>
        <div style={{ ...cardContainerStyle, marginTop: vw(24) }}>
          <div style={{ display: 'flex', gap: vw(8), flexWrap: 'wrap' }}>
            {componentsData.badges.map((badge) => (
              <span
                key={badge.label}
                style={{
                  fontFamily: font,
                  fontSize: vw(12),
                  fontWeight: 500,
                  color: badge.color,
                  background: badge.bg,
                  border: badge.border ? `1px solid ${badge.border}` : 'none',
                  borderRadius: '9999px',
                  paddingTop: vw(4),
                  paddingBottom: vw(4),
                  paddingLeft: vw(12),
                  paddingRight: vw(12),
                  whiteSpace: 'nowrap',
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Progress Bars Section */}
      <div style={{ marginTop: vw(48) }}>
        <p style={sectionHeadingStyle}>Progress Bars</p>
        <div style={{ ...cardContainerStyle, marginTop: vw(24) }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(16) }}>
            {componentsData.progressBars.map((bar) => (
              <div key={bar.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: font, fontSize: vw(14), fontWeight: 600, color: '#1a1a1a' }}>
                    {bar.label}
                  </span>
                  <span style={{ fontFamily: font, fontSize: vw(14), fontWeight: 600, color: '#1a1a1a' }}>
                    {bar.value}%
                  </span>
                </div>
                <div
                  style={{
                    marginTop: vw(4),
                    width: '100%',
                    height: vw(8),
                    background: '#f0f0f0',
                    borderRadius: vw(4),
                  }}
                >
                  <div
                    style={{
                      width: `${bar.value}%`,
                      height: '100%',
                      background: bar.color,
                      borderRadius: vw(4),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Cards Section */}
      <div style={{ marginTop: vw(48) }}>
        <p style={sectionHeadingStyle}>Cards</p>
        <div style={{ display: 'flex', gap: vw(24), marginTop: vw(24) }}>
          {componentsData.sampleCards.map((card) => (
            <div
              key={card.title}
              style={{
                flex: 1,
                background: '#ffffff',
                border: '0.8px solid #e5e5e5',
                borderRadius: vw(8),
                padding: vw(20),
                boxSizing: 'border-box' as const,
              }}
            >
              {/* Top row: icon + badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: vw(32),
                    height: vw(32),
                    borderRadius: '50%',
                    background: card.iconType === 'calendar' ? '#5F21B7' : '#FF6D24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.iconType === 'calendar' ? (
                    <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.5"/>
                      <path d="M2 6.5h12" stroke="white" strokeWidth="1.5"/>
                      <path d="M5.5 1.5v3M10.5 1.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width={vw(16)} height={vw(16)} viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="8" width="3" height="6" rx="0.5" fill="white"/>
                      <rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="white"/>
                      <rect x="11" y="2" width="3" height="12" rx="0.5" fill="white"/>
                    </svg>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: font,
                    fontSize: vw(10),
                    fontWeight: 500,
                    color: '#ffffff',
                    background: card.badge.bg,
                    borderRadius: '9999px',
                    paddingTop: vw(3),
                    paddingBottom: vw(3),
                    paddingLeft: vw(8),
                    paddingRight: vw(8),
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.badge.label}
                </span>
              </div>

              {/* Title */}
              <p
                style={{
                  fontFamily: font,
                  fontSize: vw(16),
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0,
                  marginTop: vw(12),
                }}
              >
                {card.title}
              </p>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: font,
                  fontSize: vw(14),
                  fontWeight: 400,
                  color: '#737373',
                  margin: 0,
                  marginTop: vw(4),
                }}
              >
                {card.subtitle}
              </p>

              {/* Meta (calendar card) */}
              {card.meta && (
                <p
                  style={{
                    fontFamily: font,
                    fontSize: vw(12),
                    fontWeight: 400,
                    color: '#737373',
                    margin: 0,
                    marginTop: vw(12),
                    display: 'flex',
                    alignItems: 'center',
                    gap: vw(4),
                  }}
                >
                  <svg width={vw(12)} height={vw(12)} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#737373" strokeWidth="1.5"/>
                    <path d="M2 6.5h12" stroke="#737373" strokeWidth="1.5"/>
                    <path d="M5.5 1.5v3M10.5 1.5v3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {card.meta}
                </p>
              )}

              {/* Progress bar (chart card) */}
              {card.progressBar && (
                <div style={{ marginTop: vw(12) }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: font, fontSize: vw(14), fontWeight: 600, color: '#1a1a1a' }}>
                      {card.progressBar.label}
                    </span>
                    <span style={{ fontFamily: font, fontSize: vw(14), fontWeight: 600, color: '#1a1a1a' }}>
                      {card.progressBar.value}%
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: vw(4),
                      width: '100%',
                      height: vw(8),
                      background: '#f0f0f0',
                      borderRadius: vw(4),
                    }}
                  >
                    <div
                      style={{
                        width: `${card.progressBar.value}%`,
                        height: '100%',
                        background: card.progressBar.color,
                        borderRadius: vw(4),
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 5. Navigation Items Section */}
      <div style={{ marginTop: vw(48) }}>
        <p style={sectionHeadingStyle}>Navigation Items</p>
        <div style={{ ...cardContainerStyle, marginTop: vw(24) }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(12) }}>
            {componentsData.navItems.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: vw(12) }}>
                <div style={{ width: vw(20), height: vw(20), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {navIcons[item]}
                </div>
                <span
                  style={{
                    fontFamily: font,
                    fontSize: vw(14),
                    fontWeight: 400,
                    color: '#737373',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function TabPatternsContent() {
  const dayRows = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4],
  ];
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{ marginTop: vw(48) }}>
      {/* Layout Patterns heading */}
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(30), fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
        Layout Patterns
      </h3>

      {/* Calendar View Card */}
      <div style={{
        marginTop: vw(24),
        background: '#ffffff',
        border: '0.8px solid #e5e5e5',
        borderRadius: vw(8),
        padding: vw(24),
        boxSizing: 'border-box' as const,
      }}>
        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(18), fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
          Calendar View
        </h4>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 400, color: '#737373', margin: 0, marginTop: vw(8) }}>
          {patternsData.calendarDescription}
        </p>
        <div style={{ marginTop: vw(24) }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {weekdays.map((day) => (
              <div key={day} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(12), fontWeight: 500, color: '#737373', textAlign: 'center' as const, paddingBottom: vw(8) }}>
                {day}
              </div>
            ))}
          </div>
          {/* Day grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {dayRows.map((row, rowIdx) =>
              row.map((day, colIdx) => {
                const isNextMonth = rowIdx === 4 && day <= 4;
                return (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    style={{
                      border: '0.8px solid #e5e5e5',
                      borderRadius: vw(4),
                      height: vw(100),
                      padding: vw(8),
                      boxSizing: 'border-box' as const,
                    }}
                  >
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: vw(12),
                      fontWeight: 500,
                      color: isNextMonth ? '#d4d4d4' : '#1a1a1a',
                    }}>
                      {day}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Class Grid Card */}
      <div style={{
        marginTop: vw(24),
        background: '#ffffff',
        border: '0.8px solid #e5e5e5',
        borderRadius: vw(8),
        padding: vw(24),
        boxSizing: 'border-box' as const,
      }}>
        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(18), fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
          Class Grid
        </h4>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 400, color: '#737373', margin: 0, marginTop: vw(8) }}>
          {patternsData.classGridDescription}
        </p>
        <div style={{ display: 'flex', gap: vw(16), marginTop: vw(24) }}>
          {patternsData.classCards.map((card) => (
            <div key={card.name} style={{
              flex: 1,
              background: '#fafafa',
              border: '0.8px solid #e5e5e5',
              borderRadius: vw(8),
              padding: vw(16),
              boxSizing: 'border-box' as const,
            }}>
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: vw(12) }}>
                <div style={{
                  width: vw(32),
                  height: vw(32),
                  borderRadius: '50%',
                  background: 'rgba(95,33,183,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 16 16" fill="none" style={{ width: vw(16), height: vw(16) }}>
                    <path d="M8 2L2 5.5L8 9L14 5.5L8 2Z" stroke="#5F21B7" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M4 7v3.5c0 1 1.8 2 4 2s4-1 4-2V7" stroke="#5F21B7" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 600, color: '#1a1a1a' }}>
                    {card.name}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(12), fontWeight: 400, color: '#737373' }}>
                    {card.grade}
                  </div>
                </div>
              </div>
              {/* Progress bar */}
              <div style={{ marginTop: vw(12) }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(12), fontWeight: 400, color: '#737373' }}>Wellbeing</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(12), fontWeight: 600, color: '#1a1a1a' }}>{card.wellbeing}%</span>
                </div>
                <div style={{
                  marginTop: vw(4),
                  width: '100%',
                  height: vw(6),
                  background: '#f0f0f0',
                  borderRadius: vw(3),
                }}>
                  <div style={{
                    width: `${card.wellbeing}%`,
                    height: vw(6),
                    background: '#FF6D24',
                    borderRadius: vw(3),
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing System */}
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(30), fontWeight: 600, color: '#1a1a1a', margin: 0, marginTop: vw(48) }}>
        Spacing System
      </h3>
      <div style={{
        marginTop: vw(24),
        background: '#ffffff',
        border: '0.8px solid #e5e5e5',
        borderRadius: vw(8),
        padding: vw(24),
        boxSizing: 'border-box' as const,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: vw(16) }}>
          {patternsData.spacingScale.map((item) => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: vw(16) }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 500, color: '#1a1a1a', width: vw(40), flexShrink: 0 }}>
                {item.name}
              </span>
              <div style={{
                height: vw(16),
                background: '#5F21B7',
                borderRadius: vw(2),
                width: vw(item.px * 4),
                flexShrink: 0,
              }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 400, color: '#737373' }}>
                {item.rem} ({item.px}px)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(30), fontWeight: 600, color: '#1a1a1a', margin: 0, marginTop: vw(48) }}>
        Border Radius
      </h3>
      <div style={{
        marginTop: vw(24),
        background: '#ffffff',
        border: '0.8px solid #e5e5e5',
        borderRadius: vw(8),
        padding: vw(24),
        boxSizing: 'border-box' as const,
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        {patternsData.borderRadii.map((item) => (
          <div key={item.name} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center' }}>
            <div style={{
              width: vw(80),
              height: vw(80),
              background: '#5F21B7',
              borderRadius: item.value,
            }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(14), fontWeight: 500, color: '#1a1a1a', marginTop: vw(12) }}>
              {item.name}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: vw(12), fontWeight: 400, color: '#737373', marginTop: vw(4) }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
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
                {/* Icon container at (32.8px, 32.8px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(32.8),
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
                    decoding="async"
                    style={{ width: vw(32), height: vw(32) }}
                  />
                </div>

                {/* Title at (32.8px, 120.8px) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(120.8),
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

                {/* Bullet list starting at (32.8px, 172.8px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(172.8),
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
                      decoding="async"
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

            {/* Right side: planner mockup at x=560, y=0, w=538, h=450 */}
            <div
              style={{
                position: 'absolute',
                left: vw(560),
                top: 0,
                width: vw(538),
                height: vw(450),
              }}
            >
              <img
                src={`${BASE_URL}images/peakmind-cms/planner-mockup.png`}
                alt="Planner calendar view"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: vw(12),
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                }}
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
            {/* Left side: Student Wellbeing Metrics card at x=0, y=0, w=512 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: vw(512),
                height: vw(346.375),
                backgroundColor: COLORS.white,
                borderRadius: vw(12),
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                boxSizing: 'border-box',
              }}
            >
              <h4
                style={{
                  position: 'absolute',
                  left: vw(24.8),
                  top: vw(24.8),
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(20),
                  lineHeight: vw(28),
                  color: COLORS.text,
                }}
              >
                {analyticsMetrics.title}
              </h4>

              {/* Progress bars */}
              <div
                style={{
                  position: 'absolute',
                  left: vw(24.8),
                  top: vw(76.8),
                  width: vw(462.4),
                }}
              >
                {analyticsMetrics.bars.map((bar, idx) => (
                  <div
                    key={idx}
                    style={{
                      marginTop: idx > 0 ? vw(16) : 0,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: COLORS.text,
                        }}
                      >
                        {bar.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: bar.color,
                        }}
                      >
                        {bar.value}%
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: vw(4),
                        width: '100%',
                        height: vw(8),
                        backgroundColor: '#f0f0f0',
                        borderRadius: vw(4),
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${bar.value}%`,
                          height: '100%',
                          backgroundColor: bar.color,
                          borderRadius: vw(4),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stat boxes */}
              <div
                style={{
                  position: 'absolute',
                  left: vw(24.8),
                  top: vw(228.8),
                  width: vw(462.4),
                  display: 'flex',
                  gap: vw(16),
                }}
              >
                {analyticsMetrics.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      backgroundColor: stat.bg,
                      borderRadius: vw(8),
                      paddingTop: vw(28.8),
                      paddingBottom: vw(16),
                      paddingLeft: vw(12),
                      paddingRight: vw(12),
                      boxSizing: 'border-box',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: vw(24),
                        lineHeight: vw(32),
                        color: COLORS.text,
                        textAlign: 'center',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        marginTop: vw(4),
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: vw(12),
                        lineHeight: vw(16),
                        color: COLORS.textSecondary,
                        textAlign: 'center',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
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

            {/* Right side: Case Management screenshot at x=731, y=18.6, w=297, h=397 */}
            <div
              style={{
                position: 'absolute',
                left: vw(731),
                top: vw(18.6),
                width: vw(297),
                height: vw(397),
              }}
            >
              <img
                src={`${BASE_URL}images/peakmind-cms/case-mgmt-mockup.png`}
                alt="Case management mobile view"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: vw(12),
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                }}
              />
            </div>
          </div>

          {/* ── Safety Feature ── */}
          <div
            style={{
              position: 'relative',
              width: vw(1096),
              height: vw(482.325),
            }}
          >
            {/* Left side: Incident Report card at x=0, w=512, h=482.325 */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: vw(512),
                backgroundColor: '#ffffff',
                borderRadius: vw(12),
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                boxSizing: 'border-box',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: vw(12),
                  paddingTop: vw(24.8),
                  paddingLeft: vw(24.8),
                  paddingRight: vw(24.8),
                }}
              >
                <div
                  style={{
                    width: vw(40),
                    height: vw(40),
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width={vw(20)} height={vw(20)} viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 18h16L10 2z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M10 8v4M10 14h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: vw(18),
                      lineHeight: vw(28),
                      color: '#1a1a1a',
                    }}
                  >
                    {incidentReport.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: vw(14),
                      lineHeight: vw(20),
                      color: '#737373',
                    }}
                  >
                    {incidentReport.subtitle}
                  </p>
                </div>
              </div>

              {/* Incident entries */}
              <div
                style={{
                  paddingTop: vw(24),
                  paddingLeft: vw(24.8),
                  paddingRight: vw(24.8),
                  paddingBottom: vw(24.8),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: vw(16),
                }}
              >
                {incidentReport.entries.map((entry, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: entry.statusBg,
                      border: `1px solid ${entry.borderColor}`,
                      borderRadius: vw(8),
                      padding: vw(16.8),
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: vw(14),
                          lineHeight: vw(20),
                          color: '#1a1a1a',
                        }}
                      >
                        Incident {entry.id}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: vw(12),
                          lineHeight: vw(16),
                          color: entry.statusColor,
                          backgroundColor: 'rgba(255,255,255,0.7)',
                          paddingLeft: vw(8),
                          paddingRight: vw(8),
                          paddingTop: vw(4),
                          paddingBottom: vw(4),
                          borderRadius: vw(4),
                        }}
                      >
                        {entry.status}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        marginTop: vw(8),
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: vw(14),
                        lineHeight: vw(20),
                        color: '#1a1a1a',
                      }}
                    >
                      {entry.description}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        marginTop: vw(8),
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: vw(12),
                        lineHeight: vw(16),
                        color: '#737373',
                      }}
                    >
                      {entry.time}
                    </p>
                  </div>
                ))}
              </div>
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
                {/* Icon box at (32.8, 32.8) */}
                <div
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(32.8),
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
                    decoding="async"
                    style={{ width: vw(24), height: vw(24) }}
                  />
                </div>

                {/* Title at (32.8, 96.8) */}
                <h3
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(96.8),
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

                {/* Description at (32.8, 144.79) */}
                <p
                  style={{
                    position: 'absolute',
                    left: vw(32.8),
                    top: vw(144.79),
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
                    left: vw(32.8),
                    top: vw(cardIdx === 0 ? 240.79 : 216.79),
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
                        decoding="async"
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
