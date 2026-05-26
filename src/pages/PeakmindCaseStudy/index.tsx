import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  COLORS,
  designGoalText,
  finalExperienceCallouts,
  heroData,
  keyLearningsText,
  problemText,
  researchData,
  strategyItems,
  wireframeCallouts,
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
          position: 'relative',
          width: vw(911),
          height: vw(886),
          margin: `${vw(50)} auto 0`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span
          style={{
            position: 'absolute',
            left: vw(67),
            top: vw(2),
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(64),
            lineHeight: vw(81),
            color: COLORS.heading,
          }}
        >
          Before
        </span>
        <svg
          viewBox="0 0 160 2"
          fill="none"
          style={{ position: 'absolute', left: vw(52), top: vw(75), width: vw(160), height: vw(2) }}
        >
          <path d="M 0 1 C 26.67 -0.33 53.33 -0.33 80 1 C 106.67 2.33 133.33 2.33 160 1" stroke={COLORS.orange} strokeWidth="2.7" fill="none" />
        </svg>
        <span
          style={{
            position: 'absolute',
            left: vw(670),
            top: 0,
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(64),
            lineHeight: vw(86),
            color: COLORS.heading,
          }}
        >
          After
        </span>
        <svg
          viewBox="0 0 160 2"
          fill="none"
          style={{ position: 'absolute', left: vw(653), top: vw(75), width: vw(160), height: vw(2) }}
        >
          <path d="M 0 1 C 26.67 -0.33 53.33 -0.33 80 1 C 106.67 2.33 133.33 2.33 160 1" stroke={COLORS.orange} strokeWidth="2.7" fill="none" />
        </svg>
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: vw(30),
            transform: 'translateX(-50%)',
            display: 'inline-block',
            padding: `${vw(2)} ${vw(14)}`,
            fontFamily: CAVEAT,
            fontWeight: 700,
            fontSize: vw(24),
            lineHeight: vw(30),
            color: COLORS.purple,
            border: `${vw(2)} solid ${COLORS.purple}`,
            borderRadius: '50%',
            whiteSpace: 'nowrap',
          }}
        >
          4 → 7 messages per session
        </span>
        <img src={`${IMG}/hero-before.png`} alt="Before — original PeakMind home screen" decoding="async" style={{ position: 'absolute', left: 0, top: vw(117), width: vw(360), height: vw(769), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
        <img src={`${IMG}/hero-after.png`} alt="After — redesigned PeakMind home screen" decoding="async" style={{ position: 'absolute', left: vw(551), top: vw(115), width: vw(360), height: vw(768), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
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
      <div className="relative mx-auto" style={{ width: vw(1144), height: vw(370) }}>
        <h2
          className="absolute text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            left: vw(124 + 322),
            top: vw(81),
            width: vw(253),
          }}
        >
          The Problem
        </h2>

        <div
          className="absolute"
          style={{
            left: vw(124),
            top: vw(81 + 92),
            width: vw(896),
            height: vw(165),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
              position: 'absolute',
              left: vw(24),
              top: vw(24),
              width: vw(848),
              margin: 0,
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
        ...notebookBg(),
        paddingTop: vw(50),
        paddingBottom: vw(33),
      }}
    >
      <div
        style={{
          position: 'relative',
          width: vw(1024),
          height: vw(560),
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            left: vw(325),
            top: 0,
            width: vw(374),
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            textAlign: 'center',
            margin: 0,
          }}
        >
          Research Insights
        </h2>

        <p
          style={{
            position: 'absolute',
            left: vw(253),
            top: vw(108),
            width: vw(518),
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(24),
            lineHeight: vw(39),
            color: COLORS.body,
            textAlign: 'center',
            margin: 0,
          }}
        >
          {researchData.intro}
        </p>

        <div
          style={{
            position: 'absolute',
            top: vw(179),
            left: 0,
            display: 'flex',
            gap: vw(32),
          }}
        >
          {researchData.personas.map((persona) => (
            <div
              key={persona.title}
              style={{
                width: vw(320),
                height: vw(120),
                backgroundColor: COLORS.cardBg,
                borderRadius: vw(16),
                padding: vw(24),
                boxSizing: 'border-box',
              }}
            >
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontWeight: 400,
                  fontSize: vw(24),
                  lineHeight: vw(32),
                  color: persona.titleColor,
                  margin: 0,
                }}
              >
                {persona.title}
              </p>
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontWeight: 400,
                  fontSize: vw(18),
                  lineHeight: vw(28),
                  color: COLORS.body,
                  margin: 0,
                }}
              >
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            position: 'absolute',
            left: vw(113),
            top: vw(355),
            width: vw(798),
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(24),
            lineHeight: vw(39),
            color: COLORS.body,
            textAlign: 'center',
            margin: 0,
          }}
        >
          {researchData.findingsText}
        </p>

        <div
          style={{
            position: 'absolute',
            top: vw(434),
            left: 0,
            width: '100%',
            display: 'flex',
          }}
        >
          {researchData.stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                position: 'absolute',
                left: vw([0, 349, 699][i]),
                width: vw(325),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <svg
                width={vw(90)}
                height={vw(90)}
                viewBox="0 0 90 90"
                style={{ overflow: 'visible' }}
              >
                <circle
                  cx="45"
                  cy="45"
                  r="44"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="2"
                />
                <text
                  x="45"
                  y="45"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={stat.color}
                  fontFamily={CAVEAT}
                  fontWeight={700}
                  fontSize="30"
                >
                  {stat.value}
                </text>
              </svg>
              <p
                style={{
                  fontFamily: CAVEAT,
                  fontWeight: 400,
                  fontSize: vw(18),
                  lineHeight: vw(28),
                  color: COLORS.body,
                  textAlign: 'center',
                  margin: 0,
                  marginTop: vw(8),
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignGoalStrategySection() {
  const gridItems = [
    [strategyItems[0], strategyItems[1]],
    [strategyItems[2], strategyItems[3]],
    [strategyItems[4], undefined],
  ];

  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingTop: vw(14),
        paddingBottom: vw(58),
      }}
    >
      <div
        className="relative mx-auto"
        style={{ width: vw(1144), height: vw(881) }}
      >
        <h2
          className="absolute text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            left: vw(124 + 330),
            top: vw(80),
            width: vw(237),
            margin: 0,
          }}
        >
          Design Goal
        </h2>

        <div
          className="absolute"
          style={{
            left: vw(124),
            top: vw(80 + 92),
            width: vw(896),
            height: vw(126),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
              position: 'absolute',
              left: vw(24),
              top: vw(24),
              width: vw(848),
              margin: 0,
            }}
          >
            {designGoalText}
          </p>
        </div>

        <h2
          className="absolute text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            left: vw(124 + 284),
            top: vw(437),
            width: vw(329),
            margin: 0,
          }}
        >
          Design Strategy
        </h2>

        <div
          className="absolute"
          style={{
            left: vw(124),
            top: vw(437 + 108),
            width: vw(896),
            height: vw(336),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          {gridItems.map((row, rowIdx) => (
            <div key={rowIdx}>
              {row.map((item, colIdx) => {
                if (!item) return null;
                return (
                  <div
                    key={item.number}
                    className="absolute flex items-center"
                    style={{
                      left: vw(48 + colIdx * 400),
                      top: vw(48 + rowIdx * 96),
                    }}
                  >
                    <svg
                      width={vw(40)}
                      height={vw(40)}
                      viewBox="0 0 40 40"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="19"
                        stroke={item.color}
                        strokeWidth="2"
                      />
                      <text
                        x="20"
                        y="20"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={item.color}
                        fontFamily={CAVEAT}
                        fontWeight={700}
                        fontSize="24"
                      >
                        {item.number}
                      </text>
                    </svg>
                    <span
                      style={{
                        fontFamily: CAVEAT,
                        fontWeight: 400,
                        fontSize: vw(20),
                        lineHeight: vw(28),
                        color: COLORS.body,
                        marginLeft: vw(16),
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WireframesSection() {
  const calloutStyle: React.CSSProperties = {
    fontFamily: CAVEAT,
    fontSize: vw(24),
    lineHeight: vw(39),
    color: COLORS.body,
    position: 'absolute',
  };

  return (
    <section
      className="relative w-full"
      style={{
        ...notebookBg(),
        paddingTop: vw(8),
      }}
    >
      <div className="relative mx-auto" style={{ width: vw(1144), height: vw(1999) }}>
        <h2
          className="absolute text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            left: vw(455),
            top: vw(61),
            width: vw(235),
          }}
        >
          Wireframes
        </h2>

        <div
          className="absolute"
          style={{
            left: vw(124),
            top: vw(176),
            width: vw(896),
            height: vw(1774),
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: vw(16),
          }}
        >
          <img src={`${IMG}/wireframe-1.png`} alt="Wireframe: pop-up feature exploration" decoding="async" className="absolute" style={{ left: vw(48), top: vw(48), width: vw(223), height: vw(459) }} />
          <p style={{ ...calloutStyle, left: vw(288), top: vw(54), width: vw(307) }}>
            {wireframeCallouts[0]}
          </p>
          <img src={`${IMG}/wireframe-2.png`} alt="Wireframe: problem statements with Peakoo" decoding="async" className="absolute" style={{ left: vw(624), top: vw(48), width: vw(223), height: vw(458) }} />

          <p style={{ ...calloutStyle, left: vw(386), top: vw(327), width: vw(260) }}>
            {wireframeCallouts[1]}
          </p>

          <img src={`${IMG}/wireframe-3.png`} alt="Wireframe: customisable floating features" decoding="async" className="absolute" style={{ left: vw(46), top: vw(559), width: vw(450), height: vw(460) }} />
          <p style={{ ...calloutStyle, left: vw(540), top: vw(575), width: vw(307) }}>
            {wireframeCallouts[2]}
          </p>
          <p style={{ ...calloutStyle, left: vw(540), top: vw(761), width: vw(307) }}>
            {wireframeCallouts[3]}
          </p>

          <img src={`${IMG}/wireframe-4.png`} alt="Wireframe: mood tracking" decoding="async" className="absolute" style={{ left: vw(48), top: vw(1097), width: vw(216), height: vw(437) }} />
          <img src={`${IMG}/wireframe-5.png`} alt="Wireframe: streak tracking" decoding="async" className="absolute" style={{ left: vw(334), top: vw(1097), width: vw(216), height: vw(431) }} />
          <img src={`${IMG}/wireframe-6.png`} alt="Wireframe: feature zones" decoding="async" className="absolute" style={{ left: vw(616), top: vw(1097), width: vw(217), height: vw(431) }} />

          <p style={{ ...calloutStyle, left: vw(48), top: vw(1586), width: vw(800), textAlign: 'center' }}>
            {wireframeCallouts[4]}
          </p>
        </div>
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
      <div
        style={{
          position: 'relative',
          width: vw(1024),
          height: vw(1792),
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            left: vw(328),
            top: 0,
            width: vw(368),
            fontFamily: CAVEAT,
            fontWeight: 400,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            textAlign: 'center',
            margin: 0,
          }}
        >
          <span className="relative inline-block">
            Key Improvements
            <svg
              viewBox="0 0 370 8"
              fill="none"
              className="absolute left-0 pointer-events-none"
              style={{ bottom: vw(-2), width: '100%', height: vw(8), zIndex: 0 }}
              preserveAspectRatio="none"
            >
              <path d="M2 6 C60 2, 130 2, 185 4 S310 6, 368 3" stroke={COLORS.orange} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h2>

        <div
          style={{
            position: 'absolute',
            left: 0,
            top: vw(124),
            width: vw(1024),
            height: vw(820),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          <h3
            style={{
              position: 'absolute',
              left: vw(24),
              top: vw(24),
              fontFamily: CAVEAT,
              fontWeight: 400,
              fontSize: vw(48),
              lineHeight: vw(48),
              color: COLORS.purple,
              margin: 0,
            }}
          >
            Peakoo AI Support
          </h3>
          <span
            style={{
              position: 'absolute',
              left: vw(24),
              top: vw(96),
              display: 'inline-block',
              padding: `${vw(2)} ${vw(14)}`,
              fontFamily: CAVEAT,
              fontWeight: 700,
              fontSize: vw(24),
              lineHeight: vw(30),
              color: COLORS.purple,
              border: `${vw(2)} solid ${COLORS.purple}`,
              borderRadius: '50%',
              whiteSpace: 'nowrap',
            }}
          >
            4 → 7 messages per session
          </span>
          <p
            style={{
              position: 'absolute',
              left: vw(24),
              top: vw(198),
              width: vw(976),
              fontFamily: CAVEAT,
              fontWeight: 400,
              fontSize: vw(20),
              lineHeight: vw(32.5),
              color: COLORS.body,
              margin: 0,
            }}
          >
            Leading question prompts and a friendly AI companion reduce the pressure of expressing emotional concerns and guide students toward relevant support. Strategic improvements increased engagement from 4 messages per session to 7 messages per session.
          </p>
          <img src={`${IMG}/key-imp-phone-1.png`} alt="Peakoo AI conversation screen" decoding="async" style={{ position: 'absolute', left: vw(66), top: vw(305), width: vw(360), height: vw(458), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
          <img src={`${IMG}/key-imp-phone-2.png`} alt="Peakoo AI response screen" decoding="async" style={{ position: 'absolute', left: vw(485), top: vw(305), width: vw(360), height: vw(458), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0,
            top: vw(992),
            width: vw(1024),
            height: vw(800),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          <h3
            style={{
              position: 'absolute',
              left: vw(24),
              top: vw(24),
              fontFamily: CAVEAT,
              fontWeight: 400,
              fontSize: vw(48),
              lineHeight: vw(48),
              color: COLORS.orange,
              margin: 0,
            }}
          >
            Mood Check-In with Streaks
          </h3>
          <p
            style={{
              position: 'absolute',
              left: vw(508),
              top: vw(33),
              width: vw(432),
              fontFamily: CAVEAT,
              fontWeight: 400,
              fontSize: vw(20),
              lineHeight: vw(32.5),
              color: COLORS.body,
              margin: 0,
            }}
          >
            A simple emoji-based check-in helps students quickly express emotions while building consistent self-awareness through streaks and rewards. Users can now track their mood throughout the week or month, creating accountability and patterns recognition.
          </p>
          <img src={`${IMG}/key-imp-phone-3.png`} alt="Mood streak tracking screen" decoding="async" style={{ position: 'absolute', left: vw(55), top: vw(112), width: vw(360), height: vw(626), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
          <img src={`${IMG}/key-imp-phone-4.png`} alt="Mood emoji check-in screen" decoding="async" style={{ position: 'absolute', left: vw(532), top: vw(316), width: vw(360), height: vw(434), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />
        </div>
      </div>
    </section>
  );
}

function FinalExperienceSection() {
  const calloutColors = [COLORS.orange, COLORS.purple, COLORS.orange];
  const calloutPositions = [
    { left: 26, top: 121, width: 286, height: 235, descTop: 80 },
    { left: 786, top: 310, width: 284, height: 258, descTop: 80 },
    { left: 38, top: 618, width: 284, height: 264, descTop: 128 },
  ];
  const descWidths = [244, 233, 238];

  return (
    <section className="relative w-full" style={{ ...notebookBg() }}>
      <div className="relative mx-auto" style={{ width: vw(1144), height: vw(997) }}>
        <div className="absolute" style={{ left: vw(24), top: vw(61), width: vw(1096), height: vw(889) }}>
          <h2
            className="absolute"
            style={{
              left: vw(383),
              top: 0,
              width: vw(330),
              fontFamily: CAVEAT,
              fontWeight: 400,
              fontSize: vw(60),
              lineHeight: vw(60),
              color: COLORS.heading,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Final Experience
          </h2>

          <img src={`${IMG}/final-phone.png`} alt="Final PeakMind break page design" decoding="async" className="absolute" style={{ left: vw(368), top: vw(121), width: vw(360), height: vw(768), clipPath: `inset(${vw(3)} round ${vw(30)})` }} />

          {finalExperienceCallouts.map((callout, i) => (
            <div
              key={callout.title}
              className="absolute"
              style={{
                left: vw(calloutPositions[i].left),
                top: vw(calloutPositions[i].top),
                width: vw(calloutPositions[i].width),
                height: vw(calloutPositions[i].height),
                backgroundColor: COLORS.cardBg,
                borderRadius: vw(16),
              }}
            >
              <p
                style={{
                  position: 'absolute',
                  left: vw(24),
                  top: vw(24),
                  fontFamily: CAVEAT,
                  fontWeight: 400,
                  fontSize: vw(36),
                  lineHeight: vw(40),
                  color: calloutColors[i],
                  margin: 0,
                }}
              >
                {callout.title}
              </p>
              <p
                style={{
                  position: 'absolute',
                  left: vw(24),
                  top: vw(calloutPositions[i].descTop),
                  width: vw(descWidths[i]),
                  fontFamily: CAVEAT,
                  fontWeight: 400,
                  fontSize: vw(18),
                  lineHeight: vw(29.25),
                  color: COLORS.body,
                  margin: 0,
                }}
              >
                {callout.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyLearningsSection() {
  return (
    <section className="relative w-full" style={{ ...notebookBg() }}>
      <div className="relative mx-auto" style={{ width: vw(1144), height: vw(530) }}>
        <h2
          className="absolute text-center"
          style={{
            fontFamily: CAVEAT,
            fontSize: vw(60),
            lineHeight: vw(60),
            color: COLORS.heading,
            left: vw(432),
            top: vw(80),
            width: vw(281),
          }}
        >
          Key Learnings
        </h2>

        <div
          className="absolute"
          style={{
            left: vw(124),
            top: vw(172),
            width: vw(896),
            height: vw(218),
            backgroundColor: COLORS.cardBg,
            borderRadius: vw(16),
          }}
        >
          <p
            style={{
              fontFamily: CAVEAT,
              fontSize: vw(24),
              lineHeight: vw(39),
              color: COLORS.body,
              position: 'absolute',
              left: vw(24),
              top: vw(24),
              width: vw(848),
              margin: 0,
              textAlign: 'center',
            }}
          >
            {keyLearningsText}
          </p>

          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: vw(24),
              display: 'flex',
              gap: vw(24),
              alignItems: 'center',
            }}
          >
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke={COLORS.purple} strokeWidth="2" />
              <circle cx="14" cy="16" r="2" fill={COLORS.purple} />
              <circle cx="26" cy="16" r="2" fill={COLORS.purple} />
              <path d="M13 25 Q20 31 27 25" stroke={COLORS.purple} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none">
              <path d="M20 4 L24.5 14.5 L36 16 L27.5 24 L30 36 L20 30 L10 36 L12.5 24 L4 16 L15.5 14.5 Z" stroke={COLORS.orange} strokeWidth="2" fill="none" strokeLinejoin="round" />
            </svg>
            <svg width={vw(40)} height={vw(40)} viewBox="0 0 40 40" fill="none">
              <path d="M20 6 L34 34 L6 34 Z" stroke={COLORS.purple} strokeWidth="2" fill="none" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
