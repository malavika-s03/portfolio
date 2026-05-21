import { useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import {
  COLORS,
  districtInfo,
  bookMyShowInfo,
  districtSwot,
  bookMyShowSwot,
  segmentationData,
  classificationData,
  portersFiveForces,
  competitorAnalysisData,
  competitorStrategyTable1,
  competitorStrategyTable2,
  coreFeatureComparisonData,
  goalMetricData,
  productDescription,
  pricingStrategy,
  socialMediaContent,
  customerIncentives,
  marketingMessage,
  roadmapData,
  type SwotAnalysis,
} from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1280;
const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

export function DistrictCaseStudyPage() {
  useEffect(() => {
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.scrollbarWidth = 'none';
    const style = document.createElement('style');
    style.id = 'district-scrollbar-hide';
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
      const el = document.getElementById('district-scrollbar-hide');
      if (el) el.remove();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundColor: COLORS.background,
        maxWidth: '2560px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <HeroSection />
      <CompanyOverviewSection />
      <SwotAnalysisSection />
      {/* SegmentationClassificationSection removed - not in Figma design */}
      <PortersFiveForcesSection />
      <CompetitorAnalysisSection />
      <CoreFeatureComparisonSection />
      <GoalMetricSection />
      <ProductDescriptionSection />
      <PricingStrategySection />
      <SocialMediaSection />
      <CustomerIncentivesSection />
      <MarketingMessageSection />
      <RoadmapSection />
    </main>
  );
}

/* ── Shared primitives ─────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 800,
        fontSize: vw(42),
        color: COLORS.text,
        textTransform: 'uppercase',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children, size = 28 }: { children: React.ReactNode; size?: number }) {
  return (
    <h3
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(size),
        color: COLORS.text,
        textTransform: 'uppercase',
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
}

function BodyText({
  children,
  size = 15,
  lineHeight = 1.7,
  color,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  lineHeight?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: vw(size),
        lineHeight,
        color: color || COLORS.text,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ items, bulletColor }: { items: string[]; bulletColor?: string }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: vw(20) }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: vw(20),
            fontFamily: "'Inter', sans-serif",
            fontSize: vw(14),
            lineHeight: 1.6,
            color: COLORS.text,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: vw(7),
              height: vw(7),
              borderRadius: '50%',
              backgroundColor: bulletColor || COLORS.text,
              marginTop: vw(6),
              flexShrink: 0,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SparkleIcon({ size = 32 }: { size?: number }) {
  const id = useId();
  
  return (
    <svg width={vw(size)} height={vw(size)} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
      {/* Main large 4-point star */}
      <path 
        d="M32 0 L36 24 L64 32 L36 40 L32 64 L28 40 L0 32 L28 24 Z" 
        fill={`url(#main-${id})`}
      />
      {/* Small upper-right star */}
      <path 
        d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" 
        fill={`url(#small-${id})`}
        transform="translate(44 2) scale(0.7)"
        opacity="0.9"
      />
      {/* Small lower-left star */}
      <path 
        d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" 
        fill={`url(#small2-${id})`}
        transform="translate(4 44) scale(0.5)"
        opacity="0.7"
      />
      <defs>
        <linearGradient id={`main-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="25%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#e0e7ff" />
          <stop offset="75%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id={`small-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="50%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id={`small2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PhoneMockup({
  width = 265,
  height = 571,
  screenColor = '#0f0520',
  accentColor = COLORS.accent,
  imageSrc,
  children,
}: {
  width?: number;
  height?: number;
  screenColor?: string;
  accentColor?: string;
  imageSrc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: vw(width),
        height: vw(height),
        borderRadius: vw(28),
        backgroundColor: '#111',
        border: `${vw(3)} solid #333`,
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
        boxShadow: `0 0 ${vw(20)} rgba(124, 58, 237, 0.3)`,
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      ) : (
        <>
          {/* Status bar */}
          <div
            style={{
              height: vw(28),
              backgroundColor: screenColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: vw(4),
            }}
          >
            <div style={{ width: vw(60), height: vw(6), borderRadius: vw(3), backgroundColor: '#222' }} />
          </div>
          {/* Screen content */}
          <div
            style={{
              flex: 1,
              backgroundColor: screenColor,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: `calc(100% - ${vw(28)})`,
              padding: vw(12),
              gap: vw(10),
            }}
          >
            {children || (
              <>
                <div style={{ width: '60%', height: vw(8), backgroundColor: accentColor, borderRadius: vw(4), opacity: 0.6 }} />
                <div style={{ width: '80%', height: vw(6), backgroundColor: '#2a1845', borderRadius: vw(3) }} />
                <div style={{ width: '70%', height: vw(6), backgroundColor: '#2a1845', borderRadius: vw(3) }} />
                <div style={{ width: vw(50), height: vw(50), borderRadius: vw(12), backgroundColor: '#1a0e2e', marginTop: vw(8), border: `1px solid ${accentColor}30` }} />
                <div style={{ width: '90%', height: vw(6), backgroundColor: '#2a1845', borderRadius: vw(3), marginTop: vw(8) }} />
                <div style={{ width: '85%', height: vw(6), backgroundColor: '#2a1845', borderRadius: vw(3) }} />
                <div style={{ width: '60%', height: vw(6), backgroundColor: '#2a1845', borderRadius: vw(3) }} />
                <div style={{ display: 'flex', gap: vw(8), marginTop: vw(12), width: '90%' }}>
                  <div style={{ flex: 1, height: vw(30), borderRadius: vw(6), backgroundColor: '#1a0e2e', border: `1px solid ${accentColor}30` }} />
                  <div style={{ flex: 1, height: vw(30), borderRadius: vw(6), backgroundColor: '#1a0e2e', border: `1px solid ${accentColor}30` }} />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Section 1: Hero ───────────────────────── */

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'relative',
        width: '100%',
        height: vw(710),
        overflow: 'hidden',
        backgroundColor: COLORS.background,
      }}
    >
      {/* Left decorative purple bar - Figma: x:55, y:37, w:78, h:287 - bright magenta gradient */}
      <div
        style={{
          position: 'absolute',
          left: vw(55),
          top: vw(37),
          width: vw(78),
          height: vw(287),
          background: 'linear-gradient(180deg, #A020F0 0%, #C020E0 25%, #D946EF 50%, #C020E0 75%, #A020F0 100%)',
          borderRadius: vw(4),
        }}
      />

      {/* Right decorative magenta accent - Figma: x:1253, y:558, w:10, h:81 - gradient #D322FF to #63007C */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: vw(558),
          width: vw(10),
          height: vw(81),
          background: 'linear-gradient(135deg, #D322FF 0%, #9B11BE 50%, #63007C 100%)',
        }}
      />

      {/* Title - Figma: x:196, y:42, Oswald font */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'absolute',
          left: vw(196),
          top: vw(42),
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 400,
          fontSize: vw(64),
          color: '#FFFFFF',
          lineHeight: 1,
          margin: 0,
        }}
      >
        District- Product Management Case Study
      </motion.h1>

      {/* Left sparkle - Figma: x:291, y:217, size:71x111 */}
      <div
        style={{
          position: 'absolute',
          left: vw(291),
          top: vw(217),
          width: vw(71),
          height: vw(111),
        }}
      >
        <SparkleIcon size={71} />
      </div>

      {/* Problem Statement heading - Figma: starts at y:251, WHITE text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          position: 'absolute',
          left: vw(418),
          top: vw(251),
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 500,
          fontSize: vw(46),
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          whiteSpace: 'nowrap',
        }}
      >
        Problem Statement
      </motion.h2>

      {/* Right sparkle - Figma: x:901, y:217, size:71x110 */}
      <div
        style={{
          position: 'absolute',
          left: vw(901),
          top: vw(217),
          width: vw(71),
          height: vw(110),
        }}
      >
        <SparkleIcon size={71} />
      </div>

      {/* Problem statement body - Figma: exact line breaks as in design */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          position: 'absolute',
          left: vw(365),
          top: vw(358),
          width: vw(553),
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: vw(24),
          lineHeight: 1.5,
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
        }}
      >
        How can District penetrate the<br />
        existing &apos;going-out&apos; market in India<br />
        with an all inclusive &apos;going-out&apos; app
      </motion.p>
    </motion.section>
  );
}

/* ── Section 2: Company Overview ───────────── */

function CompanyOverviewSection() {
  // ═══════════════════════════════════════════════════════════════════════════
  // FIGMA COORDINATES (absolute positions on canvas):
  // ═══════════════════════════════════════════════════════════════════════════
  // Design width: 1280px
  // Hero ends at: y=710
  //
  // DISTRICT PHONE:    x=121,  y=629,  w=265,  h=571  (ends x=386, y=1200)
  // DISTRICT TEXT:     x=489,  y=738,  w=277,  h=270  (Figma text group width)
  // BMS PHONE:         x=886,  y=842,  w=299,  h=646  (ends x=1185, y=1488)
  // BOOKMYSHOW TEXT:   x=501,  y=1117, w=288,  h=285  (Figma text group width)
  //
  // SECTION HEIGHT: y=1488 (BMS phone end) - y=710 (hero end) + padding = 850px
  // ═══════════════════════════════════════════════════════════════════════════
  
  const sectionStartY = 710;
  const districtTextWidth = 277;
  const bmsTextWidth = 288;
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        height: vw(850),
        backgroundColor: COLORS.background,
        overflow: 'visible',
      }}
    >
      {/* District phone - Figma: x=121, y=629, w=265, h=571 */}
      <div
        style={{
          position: 'absolute',
          left: vw(121),
          top: vw(629 - sectionStartY), // = -81px (overlaps into hero)
          width: vw(265),
          height: vw(571),
        }}
      >
        <PhoneMockup width={265} height={571} imageSrc={`${BASE_URL}images/district/phones/district-app.jpg`} />
      </div>

      {/* DISTRICT heading and bullets - Figma: x=489, y=738, w=277 */}
      <div
        style={{
          position: 'absolute',
          left: vw(489),
          top: vw(738 - sectionStartY), // = 28px
          width: vw(districtTextWidth),
        }}
      >
        <SubHeading size={40}>{districtInfo.heading}</SubHeading>
        <div style={{ marginTop: vw(49) }}>
          <BulletList items={districtInfo.bullets} />
        </div>
      </div>

      {/* BMS phone - Figma: x=886, y=842, w=299, h=646 */}
      <div
        style={{
          position: 'absolute',
          left: vw(886),
          top: vw(842 - sectionStartY), // = 132px
          width: vw(299),
          height: vw(646),
        }}
      >
        <PhoneMockup width={299} height={646} imageSrc={`${BASE_URL}images/district/phones/bookmyshow-app.jpg`} />
      </div>

      {/* BOOKMYSHOW heading and bullets - Figma: x=501, y=1117, w=288 */}
      <div
        style={{
          position: 'absolute',
          left: vw(501),
          top: vw(1117 - sectionStartY), // = 407px
          width: vw(bmsTextWidth),
        }}
      >
        <SubHeading size={40}>{bookMyShowInfo.heading}</SubHeading>
        <div style={{ marginTop: vw(38) }}>
          <BulletList items={bookMyShowInfo.bullets} />
        </div>
      </div>
    </motion.section>
  );
}

/* ── Section 3: SWOT Analysis ────────────────── */
// ═══════════════════════════════════════════════════════════════════════════
// FIGMA SOURCE OF TRUTH (file 53fS8w3jMxFC6GfgllEvwo, node 1:2):
// Frame: 1253px × 705px
// Titles: y=46, h=35px (Oswald bold uppercase white)
// Labels: y=128, h=12px (Inter regular white)
// Boxes: y=160, w=239, h=238 (purple solid bg #5B2877, no border)
// Box gap horizontal: 34px | Column gap: 92px | Row gap: 42px
// Left padding: 45px | Top padding: 46px
// Decorative line: top-right corner pink/magenta
// ═══════════════════════════════════════════════════════════════════════════

function SwotBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Label */}
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: vw(14),
          color: '#FFFFFF',
          marginBottom: vw(8),
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      {/* Box */}
      <div
        style={{
          backgroundColor: '#5B2877',
          padding: `${vw(16)} ${vw(14)}`,
          minHeight: vw(220),
          display: 'flex',
          flexDirection: 'column',
          gap: vw(16),
          textAlign: 'center',
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: vw(12),
              color: '#E8E8E8',
              lineHeight: 1.55,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SwotColumn({ data }: { data: SwotAnalysis }) {
  const strengthsData = data.swot.find((s) => s.title === 'Strengths');
  const weaknessesData = data.swot.find((s) => s.title === 'Weaknesses');
  const opportunitiesData = data.swot.find((s) => s.title === 'Opportunities');
  const threatData = data.swot.find((s) => s.title === 'Threat');

  return (
    <div>
      {/* Column sub-title - smaller than main section heading */}
      <div style={{ marginBottom: vw(24) }}>
        <SubHeading size={28}>{data.heading}</SubHeading>
      </div>
      {/* Grid - Figma: 239px boxes, 34px gap, 42px row gap (includes label) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `${vw(239)} ${vw(239)}`,
          columnGap: vw(34),
          rowGap: vw(30),
        }}
      >
        {strengthsData && <SwotBox title="Strengths" items={strengthsData.items} />}
        {weaknessesData && <SwotBox title="Weaknesses" items={weaknessesData.items} />}
        {opportunitiesData && <SwotBox title="Opportunities" items={opportunitiesData.items} />}
        {threatData && <SwotBox title="Threat" items={threatData.items} />}
      </div>
    </div>
  );
}

function SwotAnalysisSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(45),
        paddingRight: vw(45),
        paddingTop: vw(46),
        paddingBottom: vw(40),
        position: 'relative',
      }}
    >
      {/* Decorative line - Figma: top-right corner pink/magenta */}
      <div
        style={{
          position: 'absolute',
          top: vw(38),
          right: vw(14),
          width: vw(27),
          height: vw(2),
          backgroundColor: '#D322FF',
        }}
      />
      {/* Main section title */}
      <div style={{ marginBottom: vw(30) }}>
        <SectionHeading>SWOT Analysis</SectionHeading>
      </div>
      {/* Two columns - Figma: District left, BMS right, 92px gap */}
      <div style={{ display: 'flex', gap: vw(92) }}>
        <SwotColumn data={districtSwot} />
        <SwotColumn data={bookMyShowSwot} />
      </div>
    </motion.section>
  );
}

/* ── Section 4: Segmentation & Classification ── */

function SegmentationClassificationSection() {
  const thStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableHeader,
    color: COLORS.text,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: vw(11),
    padding: `${vw(12)} ${vw(14)}`,
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    border: `1px solid ${COLORS.tableBorder}`,
    verticalAlign: 'middle',
  };

  const tdStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableRowDark,
    color: COLORS.textSecondary,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: vw(11),
    padding: `${vw(10)} ${vw(14)}`,
    textAlign: 'left',
    border: `1px solid ${COLORS.tableBorder}`,
    lineHeight: 1.6,
    verticalAlign: 'top',
  };

  const renderTable = (title: string, data: { variable: string; district: string; bookMyShow: string }[]) => (
    <div style={{ marginBottom: vw(50) }}>
      <div
        style={{
          backgroundColor: COLORS.accent,
          padding: `${vw(12)} ${vw(18)}`,
          borderRadius: `${vw(4)} ${vw(4)} 0 0`,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: vw(14),
            color: COLORS.text,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {title}
        </span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: `1px solid ${COLORS.tableBorder}` }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '18%' }}>Variable</th>
            <th style={{ ...thStyle, width: '41%' }}>District</th>
            <th style={{ ...thStyle, width: '41%' }}>BookMyShow</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 600, color: COLORS.text }}>{row.variable}</td>
              <td style={tdStyle}>{row.district}</td>
              <td style={tdStyle}>{row.bookMyShow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(30), paddingBottom: vw(30) }}
    >
      {renderTable('SEGMENTATION', segmentationData)}
      {renderTable('CLASSIFICATION', classificationData)}
    </motion.section>
  );
}

/* ── Section 5: Porter's Five Forces ────────── */
// ═══════════════════════════════════════════════════════════════════════════
// FIGMA SOURCE OF TRUTH (file 53fS8w3jMxFC6GfgllEvwo, node 2:2):
// Frame: 1258px × 708px
// 5 cards: w=203, h=448, y=203
// Card x positions: 48, 289, 530, 766, 1007
// Gap between cards: ~38px | Left/right padding: 48px
// Headers above cards at y~150
// ═══════════════════════════════════════════════════════════════════════════

function PortersFiveForcesSection() {
  // ═══════════════════════════════════════════════════════════════════════════
  // FIGMA SOURCE OF TRUTH (file 7qsPBSvlpw8Xr9NX010w2t):
  // Main frame: 1280px × 11727px (EXACTLY matches BASE_WIDTH = 1280)
  // Cards: w=203, h=448 | x positions: 48, 289, 530, 766, 1007
  // Gap between cards: ~38px | Left/right padding: ~48px
  // Pink bar: w=10, h=81 at right edge
  // Text glyph heights: 9-14px range → use directly as font sizes
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(48),
        paddingRight: vw(48),
        paddingTop: vw(46),
        paddingBottom: vw(46),
        position: 'relative',
      }}
    >
      {/* Decorative pink bar - Figma: w=10, h=81 */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: vw(60),
          width: vw(10),
          height: vw(81),
          backgroundColor: '#D322FF',
        }}
      />

      {/* Title - using SectionHeading for consistency */}
      <div style={{ marginBottom: vw(24) }}>
        <SectionHeading>Porter&apos;s Five Forces</SectionHeading>
      </div>

      {/* 5 columns - Figma: cards w=203, gap=38 */}
      <div style={{ display: 'flex', gap: vw(38) }}>
        {portersFiveForces.map((force, i) => (
          <div
            key={i}
            style={{
              width: vw(203),
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Column header */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: vw(14),
                color: '#FFFFFF',
                textAlign: 'center',
                lineHeight: 1.4,
                marginBottom: vw(16),
                minHeight: vw(38),
              }}
            >
              {force.title}
            </div>

            {/* Purple card */}
            <div
              style={{
                backgroundColor: '#5B2877',
                padding: `${vw(16)} ${vw(14)}`,
                minHeight: vw(400),
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Level rating */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(14),
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  letterSpacing: '0.02em',
                  marginBottom: vw(18),
                }}
              >
                {force.level}
              </div>

              {/* District section */}
              <div style={{ marginBottom: vw(18), textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: vw(13),
                    color: '#FFFFFF',
                    marginBottom: vw(6),
                  }}
                >
                  District
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: vw(12),
                    color: '#E8E8E8',
                    lineHeight: 1.5,
                  }}
                >
                  {force.district}
                </div>
              </div>

              {/* BookMyShow section */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: vw(13),
                    color: '#FFFFFF',
                    marginBottom: vw(6),
                  }}
                >
                  BookMyShow
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: vw(12),
                    color: '#E8E8E8',
                    lineHeight: 1.5,
                  }}
                >
                  {force.bookMyShow}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 6: Competitor Analysis ──────────── */
// ═══════════════════════════════════════════════════════════════════════════
// FIGMA SOURCE OF TRUTH (file 53fS8w3jMxFC6OfgllEvwo):
// Frame: 1309×736px (scaled to 1280 base width)
// Scale factor: 1280/1309 = 0.978
// 
// LAYOUT FROM FIGMA:
// - Title at top: "COMPETITOR ANALYSIS" - Inter/Oswald Bold, white
// - Table below with 4 columns
// - Column widths (from Figma): Label=~211px, BMS=~300px, District=~300px, Notes=~301px
//   Scaled percentages: 16%, 27%, 27%, 27% (with some flex for borders)
// - Pink bar: x=1262, y=599.5, w=10.26, h=84.41 (right edge decoration)
// 
// COLORS FROM FIGMA:
// - Background: #1E1E1E (dark)
// - Table header bg: Deep purple (#2A0E45)
// - Label column bg: Same as header (#2A0E45) for consistency
// - Content cell bg: Very dark purple (#1A0830)
// - Borders: Purple tint (#4A1870)
// - All text: White (#FFFFFF)
// ═══════════════════════════════════════════════════════════════════════════

function CompetitorAnalysisSection() {
  // Table header cells - purple background, centered uppercase white text
  const thStyle: React.CSSProperties = {
    backgroundColor: '#2A0E45',
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: vw(12),
    padding: `${vw(16)} ${vw(18)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    border: `1px solid #4A1870`,
    verticalAlign: 'middle',
  };

  // Content cells - dark purple background, white text, left-aligned
  const tdStyle: React.CSSProperties = {
    backgroundColor: '#1A0830',
    color: '#E8E8E8',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: vw(11),
    padding: `${vw(16)} ${vw(18)}`,
    textAlign: 'left',
    border: `1px solid #4A1870`,
    verticalAlign: 'top',
    lineHeight: 1.55,
  };

  // Label column cells - purple background matching header, bolder text
  const labelCellStyle: React.CSSProperties = {
    backgroundColor: '#2A0E45',
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: vw(12),
    padding: `${vw(16)} ${vw(18)}`,
    textAlign: 'left',
    border: `1px solid #4A1870`,
    verticalAlign: 'top',
    lineHeight: 1.55,
  };

  // Figma column widths scaled: Label=16%, BMS=27%, District=27%, Notes=27%
  // These match the visual proportions from the Figma screenshot
  // Both tables in Figma have their own header row
  const renderTable = (data: typeof competitorStrategyTable1, isFirstTable: boolean = false) => (
    <table 
      style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        border: `1px solid #4A1870`, 
        marginTop: isFirstTable ? 0 : vw(30),
        tableLayout: 'fixed',
      }}
    >
      <thead>
        <tr>
          <th style={{ ...thStyle, width: '16%' }}></th>
          <th style={{ ...thStyle, width: '27%' }}>BOOKMYSHOW</th>
          <th style={{ ...thStyle, width: '27%' }}>DISTRICT</th>
          <th style={{ ...thStyle, width: '27%' }}>NOTES</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td style={{ ...labelCellStyle, width: '16%' }}>{row.label}</td>
            <td style={{ ...tdStyle, width: '27%' }}>{row.bookMyShow}</td>
            <td style={{ ...tdStyle, width: '27%' }}>{row.district}</td>
            <td style={{ ...tdStyle, width: '27%' }}>{row.notes || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ 
        paddingLeft: vw(70), 
        paddingRight: vw(47), 
        paddingTop: vw(50), 
        paddingBottom: vw(30), 
        position: 'relative',
      }}
    >
      {/* Pink decorative bar - Figma: x=1262 (right edge), y=599.5, w=10.26, h=84.41 */}
      {/* Scaled to 1280 base: right=0, top=585, w=10, h=82 */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: vw(585),
          width: vw(10),
          height: vw(82),
          background: 'linear-gradient(180deg, #D322FF 0%, #9B11BE 100%)',
        }}
      />
      
      {/* Section title - Figma: Inter Bold, 42px, white, uppercase */}
      <SectionHeading>Competitor Analysis</SectionHeading>
      
      {/* Tables container - Figma shows continuous table with no gap between sections */}
      <div style={{ marginTop: vw(35) }}>
        {renderTable(competitorStrategyTable1, true)}
        {renderTable(competitorStrategyTable2, false)}
      </div>
    </motion.section>
  );
}

function CoreFeatureComparisonSection() {
  const thStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableHeader,
    color: COLORS.text,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: vw(12),
    padding: `${vw(14)} ${vw(16)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    border: `1px solid ${COLORS.tableBorder}`,
  };

  const tdStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableRowDark,
    color: COLORS.textSecondary,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: vw(11),
    padding: `${vw(12)} ${vw(16)}`,
    textAlign: 'left',
    border: `1px solid ${COLORS.tableBorder}`,
    verticalAlign: 'middle',
  };

  const CheckIcon = () => (
    <svg width={vw(18)} height={vw(18)} viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', marginRight: vw(8), flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" fill="#22c55e" />
      <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const XIcon = () => (
    <svg width={vw(18)} height={vw(18)} viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', marginRight: vw(8), flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" fill="#ef4444" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(70), paddingRight: vw(48), paddingTop: vw(30), paddingBottom: vw(50) }}
    >
      <SectionHeading>Core Feature Comparison</SectionHeading>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: `1px solid ${COLORS.tableBorder}`, marginTop: vw(35) }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '15%', textAlign: 'left' }}></th>
            <th style={{ ...thStyle, width: '42.5%' }}></th>
            <th style={{ ...thStyle, width: '42.5%' }}></th>
          </tr>
        </thead>
        <tbody>
          {coreFeatureComparisonData.map((row, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 600, color: COLORS.text }}>{row.feature}</td>
              <td style={tdStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {row.col1 ? <CheckIcon /> : <XIcon />}
                  <span>{row.col1Text}</span>
                </div>
              </td>
              <td style={tdStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {row.col2 ? <CheckIcon /> : <XIcon />}
                  <span>{row.col2Text}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.section>
  );
}

function GoalMetricSection() {
  const thStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableHeader,
    color: COLORS.text,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: vw(14),
    padding: `${vw(16)} ${vw(20)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    border: `1px solid ${COLORS.tableBorder}`,
  };

  const tdStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableRowDark,
    color: COLORS.textSecondary,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: vw(12),
    padding: `${vw(16)} ${vw(20)}`,
    textAlign: 'left',
    border: `1px solid ${COLORS.tableBorder}`,
    verticalAlign: 'top',
    lineHeight: 1.55,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(70), paddingRight: vw(48), paddingTop: vw(30), paddingBottom: vw(50) }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', border: `1px solid ${COLORS.tableBorder}` }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '30%' }}>Goal</th>
            <th style={{ ...thStyle, width: '70%' }}>Metric</th>
          </tr>
        </thead>
        <tbody>
          {goalMetricData.map((row, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 500, color: COLORS.text }}>{row.goal}</td>
              <td style={tdStyle}>{row.metric}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.section>
  );
}

/* ── Section 7: Product Description ──────────── */

function ProductDescriptionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(30) }}
    >
      <SectionHeading>Product Description</SectionHeading>
      <div style={{ marginTop: vw(25), maxWidth: vw(1000) }}>
        {productDescription.split('\n\n').map((para, i) => (
          <div key={i} style={{ marginBottom: vw(20) }}>
            <BodyText size={13} lineHeight={1.8} color={COLORS.textSecondary}>
              {para}
            </BodyText>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 8: Pricing Strategy ──────────────── */

function PricingStrategySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(30), paddingBottom: vw(30) }}
    >
      <SectionHeading>Pricing Strategy</SectionHeading>
      <div style={{ marginTop: vw(25), maxWidth: vw(1000) }}>
        {pricingStrategy.split('\n\n').map((para, i) => (
          <div key={i} style={{ marginBottom: vw(20) }}>
            <BodyText size={13} lineHeight={1.8} color={COLORS.textSecondary}>
              {para.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  {j < para.split('\n').length - 1 && <br />}
                </span>
              ))}
            </BodyText>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 9: Social Media ──────────────────── */

function SocialMediaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(30) }}
    >
      <SectionHeading>Social Media</SectionHeading>
      <div style={{ display: 'flex', gap: vw(35), marginTop: vw(35) }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: vw(18) }}>
          {socialMediaContent.map((post, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${COLORS.tableBorder}`,
                padding: vw(20),
                backgroundColor: COLORS.tableRowDark,
                borderRadius: vw(6),
              }}
            >
              <SubHeading size={14}>{post.heading}</SubHeading>
              <div style={{ marginTop: vw(10) }}>
                <BodyText size={12} lineHeight={1.65} color={COLORS.textSecondary}>
                  {post.body}
                </BodyText>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flexShrink: 0 }}>
          <PhoneMockup width={200} height={430} imageSrc={`${BASE_URL}images/district/phones/district-app.jpg`} />
        </div>
      </div>
    </motion.section>
  );
}

/* ── Section 10: Customer Incentives ────────── */

function CustomerIncentivesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(30) }}
    >
      <SectionHeading>Customer Incentives</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: vw(14), marginTop: vw(35) }}>
        {customerIncentives.map((item, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${COLORS.tableBorder}`,
              overflow: 'hidden',
              borderRadius: vw(4),
              gridColumn: i === customerIncentives.length - 1 && i % 2 === 0 ? '1 / -1' : undefined,
            }}
          >
            <div style={{ backgroundColor: COLORS.tableHeader, padding: `${vw(10)} ${vw(14)}` }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: vw(12), color: COLORS.text, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                {item.title}
              </span>
            </div>
            <div style={{ backgroundColor: COLORS.tableRowDark, padding: `${vw(12)} ${vw(14)}` }}>
              <BodyText size={11} lineHeight={1.65} color={COLORS.textSecondary}>
                {item.description}
              </BodyText>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 11: Marketing Message ──────────── */

function MarketingMessageSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(30) }}
    >
      <SectionHeading>Example Marketing Message</SectionHeading>
      <div
        style={{
          marginTop: vw(25),
          padding: vw(24),
          border: `1px solid ${COLORS.tableBorder}`,
          backgroundColor: COLORS.tableRowDark,
          borderLeft: `${vw(4)} solid ${COLORS.accent}`,
          maxWidth: vw(1000),
          borderRadius: `0 ${vw(6)} ${vw(6)} 0`,
        }}
      >
        <BodyText size={13} lineHeight={1.85} color={COLORS.textSecondary} style={{ fontStyle: 'italic' }}>
          {marketingMessage.split('\n\n').map((para, i) => (
            <span key={i}>
              {i > 0 && <><br /><br /></>}
              {para}
            </span>
          ))}
        </BodyText>
      </div>
    </motion.section>
  );
}

/* ── Section 12: Road Map ─────────────────── */

function RoadmapSection() {
  const phaseColors = [
    'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)',
    'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  ];
  const dotColors = ['#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#a78bfa', '#c4b5fd'];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(60), paddingBottom: vw(80) }}
    >
      <div style={{ textAlign: 'center', marginBottom: vw(40) }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: vw(42), color: COLORS.text, margin: 0, letterSpacing: '-0.01em' }}>
          Six month Road map
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: vw(14) }}>
        {roadmapData.map((phase, i) => (
          <div key={i} style={{ border: `1px solid ${COLORS.tableBorder}`, overflow: 'hidden', borderRadius: vw(4) }}>
            <div
              style={{
                background: phaseColors[i] || COLORS.tableHeader,
                padding: `${vw(12)} ${vw(14)}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: vw(11), color: COLORS.text, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {phase.month}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: vw(9), color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>
                {phase.title}
              </span>
            </div>
            <div style={{ backgroundColor: COLORS.tableRowDark, padding: `${vw(14)} ${vw(14)}`, minHeight: vw(140) }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: vw(8) }}>
                {phase.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: vw(7),
                      fontFamily: "'Inter', sans-serif",
                      fontSize: vw(10),
                      color: COLORS.textSecondary,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: vw(4),
                        height: vw(4),
                        borderRadius: '50%',
                        backgroundColor: dotColors[i] || COLORS.accentLight,
                        marginTop: vw(4),
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default DistrictCaseStudyPage;
