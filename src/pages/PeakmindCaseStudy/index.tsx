import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  COLORS,
  heroData,
  problemText,
  researchData,
  designGoalText,
  strategyItems,
  finalExperienceCallouts,
  keyLearningsText,
} from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1144;
const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

const CAVEAT = "'Caveat', cursive";
const IMG = `${BASE_URL}images/peakmind`;

const notebookBg = (lineSpacing = 9.25) => ({
  backgroundColor: COLORS.pageBg,
  backgroundImage: `repeating-linear-gradient(
    to bottom,
    transparent,
    transparent ${lineSpacing - 0.5}px,
    ${COLORS.lineColor} ${lineSpacing - 0.5}px,
    ${COLORS.lineColor} ${lineSpacing + 0.5}px
  )`,
  backgroundSize: `100% ${lineSpacing}px`,
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
        ...notebookBg(9.25),
        paddingTop: vw(80),
        paddingBottom: vw(40),
      }}
    >
      <motion.div
        className="mx-auto text-center"
        style={{ width: vw(775) }}
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
            <img
              src={`${IMG}/hero-underline.png`}
              alt=""
              className="absolute left-0 bottom-0 w-full"
              style={{ height: vw(16), zIndex: 0 }}
            />
          </span>{' '}
          Break Page Redesign
        </h1>
        <p
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(30),
            lineHeight: vw(36),
            color: COLORS.body,
            marginTop: vw(8),
          }}
        >
          {heroData.subtitle}
        </p>

        <div
          className="flex justify-center gap-4"
          style={{ marginTop: vw(24), gap: vw(16) }}
        >
          {heroData.tags.map((tag, i) => {
            const rotations = ['-1deg', '1deg', '-0.5deg'];
            const colors = [COLORS.purple, COLORS.orange, COLORS.purple];
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
                  padding: `${vw(8)} ${vw(20)}`,
                  transform: `rotate(${rotations[i]})`,
                  display: 'inline-block',
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginTop: vw(32), gap: vw(8) }}
        >
          <img
            src={`${IMG}/hero-divider.png`}
            alt=""
            style={{ width: vw(100), height: vw(60) }}
          />
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto"
        style={{
          width: vw(813),
          marginTop: vw(20),
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-between" style={{ marginBottom: vw(16) }}>
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(36),
              color: COLORS.heading,
            }}
          >
            Before
          </p>
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              color: COLORS.body,
              alignSelf: 'center',
            }}
          >
            {heroData.badgeText}
          </p>
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(36),
              color: COLORS.heading,
            }}
          >
            After
          </p>
        </div>

        <div className="flex justify-between" style={{ gap: vw(40) }}>
          <img
            src={`${IMG}/hero-before.png`}
            alt="Before redesign"
            style={{ width: vw(360), borderRadius: vw(24), boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />
          <img
            src={`${IMG}/hero-after.png`}
            alt="After redesign"
            style={{ width: vw(360), borderRadius: vw(24), boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(5),
        paddingTop: vw(60),
        paddingBottom: vw(60),
      }}
    >
      <div className="mx-auto" style={{ width: vw(896) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
          }}
        >
          The Problem
        </h2>
        <div
          style={{
            backgroundColor: COLORS.cardBg,
            padding: `${vw(24)} ${vw(24)}`,
            marginTop: vw(32),
            borderRadius: vw(4),
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
            }}
          >
            {problemText}
          </p>
        </div>
      </div>
    </section>
  );
}

function ResearchInsightsSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(9.25),
        paddingTop: vw(40),
        paddingBottom: vw(60),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1024) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
          }}
        >
          Research Insights
        </h2>

        <p
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(22),
            lineHeight: vw(32),
            color: COLORS.body,
            marginTop: vw(24),
          }}
        >
          {researchData.intro}
        </p>

        <div className="flex" style={{ marginTop: vw(24), gap: vw(16) }}>
          {researchData.personas.map((p) => (
            <div
              key={p.title}
              className="flex-1"
              style={{
                backgroundColor: COLORS.cardBg,
                padding: `${vw(24)} ${vw(24)}`,
                borderRadius: vw(4),
              }}
            >
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontSize: vw(22),
                  lineHeight: vw(32),
                  color: COLORS.orange,
                }}
              >
                {p.title}
              </p>
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontSize: vw(18),
                  lineHeight: vw(28),
                  color: COLORS.body,
                  marginTop: vw(8),
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(22),
            lineHeight: vw(32),
            color: COLORS.body,
            marginTop: vw(40),
          }}
        >
          {researchData.findingsText}
        </p>

        <div className="flex justify-around" style={{ marginTop: vw(32) }}>
          {researchData.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center"
                style={{
                  width: vw(112),
                  height: vw(112),
                  borderRadius: '50%',
                  border: `3px solid ${s.color}`,
                }}
              >
                <span
                  style={{
                    fontFamily: CAVEAT,
                    fontSize: vw(26),
                    fontWeight: 700,
                    color: s.color,
                  }}
                >
                  {s.value}
                </span>
              </div>
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontSize: vw(18),
                  lineHeight: vw(28),
                  color: COLORS.body,
                  marginTop: vw(8),
                  textAlign: 'center',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignGoalStrategySection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(9.25),
        paddingTop: vw(60),
        paddingBottom: vw(80),
      }}
    >
      <div className="mx-auto" style={{ width: vw(896) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
          }}
        >
          Design Goal
        </h2>
        <div
          style={{
            backgroundColor: COLORS.cardBg,
            padding: `${vw(24)} ${vw(24)}`,
            marginTop: vw(32),
            borderRadius: vw(4),
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
            }}
          >
            {designGoalText}
          </p>
        </div>

        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            marginTop: vw(100),
          }}
        >
          Design Strategy
        </h2>
        <div
          style={{
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
            padding: `${vw(48)} ${vw(48)}`,
            marginTop: vw(48),
          }}
        >
          <div
            className="grid grid-cols-2"
            style={{ gap: `${vw(32)} ${vw(32)}` }}
          >
            {strategyItems.map((item) => (
              <div
                key={item.number}
                className="flex items-start"
                style={{ gap: vw(16) }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: vw(48),
                    height: vw(48),
                    borderRadius: '50%',
                    border: `2px solid ${item.color}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: CAVEAT,
                      fontSize: vw(22),
                      fontWeight: 700,
                      color: item.color,
                    }}
                  >
                    {item.number}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: CAVEAT,
                    fontSize: vw(20),
                    lineHeight: vw(28),
                    color: COLORS.body,
                    marginTop: vw(14),
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WireframesSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(9.25),
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
        backgroundColor: '#3a3a3a',
        paddingTop: vw(60),
        paddingBottom: vw(60),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1024) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: '#d4d4d4',
            marginBottom: vw(40),
          }}
        >
          Key Improvements
        </h2>
        <img
          src={`${IMG}/key-improvements-content.png`}
          alt="Key improvements: Peakoo AI Support and Mind Check-In with Onoko features"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function FinalExperienceSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(9.25),
        paddingTop: vw(40),
        paddingBottom: vw(80),
      }}
    >
      <div className="mx-auto" style={{ width: vw(1024) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
          }}
        >
          Final Experience
        </h2>

        <div
          className="relative"
          style={{ marginTop: vw(32), height: vw(900) }}
        >
          <img
            src={`${IMG}/hero-after.png`}
            alt="Final redesigned PeakMind break page"
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: 0,
              width: vw(320),
              borderRadius: vw(24),
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}
          />

          {finalExperienceCallouts.map((callout, i) => {
            const positions = [
              { left: 0, top: vw(40) },
              { right: 0, top: vw(240) },
              { left: 0, top: vw(520) },
            ];
            const pos = positions[i];
            return (
              <div
                key={callout.title}
                className="absolute"
                style={{
                  ...pos,
                  width: vw(260),
                  backgroundColor: COLORS.cardBg,
                  padding: `${vw(20)} ${vw(20)}`,
                  borderRadius: vw(8),
                }}
              >
                <p
                  style={{
                    fontFamily: CAVEAT,
                    fontSize: vw(24),
                    lineHeight: vw(32),
                    color: COLORS.orange,
                    fontWeight: 700,
                  }}
                >
                  {callout.title}
                </p>
                <p
                  style={{
                    fontFamily: CAVEAT,
                    fontSize: vw(16),
                    lineHeight: vw(24),
                    color: COLORS.body,
                    marginTop: vw(8),
                  }}
                >
                  {callout.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KeyLearningsSection() {
  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(5),
        paddingTop: vw(60),
        paddingBottom: vw(80),
      }}
    >
      <div className="mx-auto" style={{ width: vw(896) }}>
        <h2
          className="text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
          }}
        >
          Key Learnings
        </h2>
        <div
          style={{
            backgroundColor: COLORS.cardBg,
            padding: `${vw(24)} ${vw(24)}`,
            marginTop: vw(32),
            borderRadius: vw(4),
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
            }}
          >
            {keyLearningsText}
          </p>
          <div
            className="flex justify-center"
            style={{ marginTop: vw(24), gap: vw(32) }}
          >
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none" style={{ width: vw(40), height: vw(40) }}>
              <circle cx="20" cy="20" r="18" stroke={COLORS.purple} strokeWidth="2" fill="none" />
              <circle cx="14" cy="16" r="2" fill={COLORS.purple} />
              <circle cx="26" cy="16" r="2" fill={COLORS.purple} />
              <path d="M12 26 C16 30, 24 30, 28 26" stroke={COLORS.purple} strokeWidth="2" fill="none" />
            </svg>
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none" style={{ width: vw(40), height: vw(40) }}>
              <path d="M20 2 L24 14 L38 14 L27 22 L31 34 L20 26 L9 34 L13 22 L2 14 L16 14 Z" stroke={COLORS.orange} strokeWidth="2" fill="none" />
            </svg>
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none" style={{ width: vw(40), height: vw(40) }}>
              <path d="M20 4 L36 36 L4 36 Z" stroke={COLORS.purple} strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
