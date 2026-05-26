import { useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import {
  COLORS,
  districtInfo,
  bookMyShowInfo,
  districtSwot,
  bookMyShowSwot,
  portersFiveForces,
  competitorStrategyTable1,
  competitorStrategyTable2,
  coreFeatureComparisonData,
  goalMetricData,
  productDescriptionTagline,
  productDescription,
  positionStatement,
  socialMediaItems,
  socialMediaConstraint,
  socialMediaNote,
  socialMediaFollowUpHeading,
  socialMediaFollowUpSubheading,
  socialMediaFollowUpItems,
  riceData,
  customerIncentives,
  addressingConstraintText,
  marketingMessageHeadline,
  marketingMessageBody,
  marketingMessagePoints,
  marketingMessageSubpoints,
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
      <PortersFiveForcesSection />
      <CompetitorAnalysisSection />
      <CoreFeatureComparisonSection />
      <GoalMetricSection />
      <ProductDescriptionSection />
      <SocialMediaSection />
      <SocialMediaFollowUpSection />
      <RiceSection />
      <CustomerIncentivesSection />
      <AddressingConstraintSection />
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

function NumberBadge({ number }: { number: string }) {
  return (
    <div
      style={{
        width: vw(55),
        height: vw(55),
        background: 'linear-gradient(135deg, #C026D3 0%, #6D28D9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(18),
        color: '#FFFFFF',
      }}
    >
      {number}
    </div>
  );
}

function SparkleIcon({ size = 32 }: { size?: number }) {
  const id = useId();

  return (
    <svg width={vw(size)} height={vw(size)} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M32 0 L36 24 L64 32 L36 40 L32 64 L28 40 L0 32 L28 24 Z"
        fill={`url(#main-${id})`}
      />
      <path
        d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z"
        fill={`url(#small-${id})`}
        transform="translate(44 2) scale(0.7)"
        opacity="0.9"
      />
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
  imageSrc,
}: {
  width?: number;
  height?: number;
  imageSrc?: string;
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
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
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
      <div
        style={{
          position: 'absolute',
          left: vw(121),
          top: vw(629 - sectionStartY),
          width: vw(265),
          height: vw(571),
        }}
      >
        <PhoneMockup width={265} height={571} imageSrc={`${BASE_URL}images/district/phones/district-app.jpg`} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: vw(489),
          top: vw(738 - sectionStartY),
          width: vw(districtTextWidth),
        }}
      >
        <SubHeading size={40}>{districtInfo.heading}</SubHeading>
        <div style={{ marginTop: vw(49) }}>
          <BulletList items={districtInfo.bullets} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: vw(886),
          top: vw(842 - sectionStartY),
          width: vw(299),
          height: vw(646),
        }}
      >
        <PhoneMockup width={299} height={646} imageSrc={`${BASE_URL}images/district/phones/bookmyshow-app.jpg`} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: vw(501),
          top: vw(1117 - sectionStartY),
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

function SwotBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      <div style={{ marginBottom: vw(24) }}>
        <SubHeading size={28}>{data.heading}</SubHeading>
      </div>
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
      <div style={{ marginBottom: vw(30) }}>
        <SectionHeading>SWOT Analysis</SectionHeading>
      </div>
      <div style={{ display: 'flex', gap: vw(92) }}>
        <SwotColumn data={districtSwot} />
        <SwotColumn data={bookMyShowSwot} />
      </div>
    </motion.section>
  );
}

/* ── Section 4: Porter's Five Forces ────────── */

function PortersFiveForcesSection() {
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

      <div style={{ marginBottom: vw(24) }}>
        <SectionHeading>Porter&apos;s Five Forces</SectionHeading>
      </div>

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

            <div
              style={{
                backgroundColor: '#5B2877',
                padding: `${vw(16)} ${vw(14)}`,
                minHeight: vw(400),
                display: 'flex',
                flexDirection: 'column',
              }}
            >
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

/* ── Section 5: Competitor Analysis ──────────── */

function CompetitorAnalysisSection() {
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

      <SectionHeading>Competitor Analysis</SectionHeading>

      <div style={{ marginTop: vw(35) }}>
        {renderTable(competitorStrategyTable1, true)}
        {renderTable(competitorStrategyTable2, false)}
      </div>
    </motion.section>
  );
}

/* ── Section 6: Core Feature Comparison ──────── */

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

/* ── Section 7: Goal/Metric ──────────────────── */

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

/* ── Section 8: Product Description + Position Statement ── */

function ProductDescriptionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(87),
        paddingRight: vw(87),
        paddingTop: vw(50),
        paddingBottom: vw(30),
        position: 'relative',
      }}
    >
      <SectionHeading>Product Description</SectionHeading>
      <div style={{ marginTop: vw(10) }}>
        <BodyText size={16} lineHeight={1.6} color={COLORS.text} style={{ fontStyle: 'italic' }}>
          {productDescriptionTagline}
        </BodyText>
      </div>
      <div style={{ marginTop: vw(25), maxWidth: vw(1000) }}>
        <BodyText size={13} lineHeight={1.8} color={COLORS.textSecondary}>
          {productDescription}
        </BodyText>
      </div>

      <div style={{ marginTop: vw(50) }}>
        <SectionHeading>Position Statement</SectionHeading>
      </div>
      <div style={{ marginTop: vw(20), maxWidth: vw(1000) }}>
        <BodyText size={13} lineHeight={1.8} color={COLORS.textSecondary}>
          {positionStatement}
        </BodyText>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: vw(10),
          height: vw(81),
          background: 'linear-gradient(180deg, #D322FF 0%, #9B11BE 100%)',
        }}
      />
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
      style={{
        paddingLeft: vw(87),
        paddingRight: vw(87),
        paddingTop: vw(50),
        paddingBottom: vw(30),
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: vw(60),
          width: vw(10),
          height: vw(81),
          background: 'linear-gradient(180deg, #D322FF 0%, #9B11BE 100%)',
        }}
      />

      <SectionHeading>Social Media</SectionHeading>

      <div style={{ display: 'flex', gap: vw(40), marginTop: vw(35) }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(24) }}>
            {socialMediaItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: vw(16) }}>
                <NumberBadge number={item.number} />
                <BodyText size={14} lineHeight={1.6} color={COLORS.text}>
                  {item.heading}
                </BodyText>
              </div>
            ))}
          </div>

          <div style={{ marginTop: vw(30) }}>
            <BodyText size={13} lineHeight={1.6} color={COLORS.accent} style={{ fontWeight: 600 }}>
              {socialMediaConstraint}
            </BodyText>
          </div>

          <div style={{ marginTop: vw(16) }}>
            <BodyText size={12} lineHeight={1.7} color={COLORS.textSecondary}>
              {socialMediaNote}
            </BodyText>
          </div>
        </div>

        <div style={{ display: 'flex', gap: vw(16), alignItems: 'flex-start', flexShrink: 0 }}>
          <PhoneMockup width={314} height={456} imageSrc={`${BASE_URL}images/district/phones/social-media-phone.png`} />
          <PhoneMockup width={76} height={281} imageSrc={`${BASE_URL}images/district/phones/social-media-phone-small.png`} />
        </div>
      </div>
    </motion.section>
  );
}

/* ── Section 10: Social Media Follow-up ─────── */

function SocialMediaFollowUpSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(87),
        paddingRight: vw(87),
        paddingTop: vw(30),
        paddingBottom: vw(30),
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: vw(60),
          width: vw(10),
          height: vw(81),
          background: 'linear-gradient(180deg, #D322FF 0%, #9B11BE 100%)',
        }}
      />

      <div style={{ display: 'flex', gap: vw(40) }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: vw(32),
              color: COLORS.text,
              lineHeight: 1.3,
              margin: 0,
              whiteSpace: 'pre-line',
            }}
          >
            {socialMediaFollowUpHeading}
          </h2>
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: vw(28),
              color: COLORS.text,
              margin: 0,
              marginTop: vw(20),
            }}
          >
            {socialMediaFollowUpSubheading}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(20), marginTop: vw(30) }}>
            {socialMediaFollowUpItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: vw(16) }}>
                <NumberBadge number={item.number} />
                <BodyText size={13} lineHeight={1.6} color={COLORS.textSecondary}>
                  {item.body}
                </BodyText>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          <PhoneMockup width={298} height={644} imageSrc={`${BASE_URL}images/district/phones/event-details-phone.png`} />
        </div>
      </div>
    </motion.section>
  );
}

/* ── Section 11: RICE ────────────────────────── */

function RiceSection() {
  const thStyle: React.CSSProperties = {
    backgroundColor: COLORS.tableHeader,
    color: COLORS.text,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: vw(14),
    padding: `${vw(16)} ${vw(16)}`,
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
    padding: `${vw(16)} ${vw(16)}`,
    textAlign: 'center',
    border: `1px solid ${COLORS.tableBorder}`,
    verticalAlign: 'middle',
    lineHeight: 1.55,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(50) }}
    >
      <div style={{ textAlign: 'center', marginBottom: vw(30) }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: vw(42), color: COLORS.text, margin: 0 }}>
          RICE
        </h2>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', border: `1px solid ${COLORS.tableBorder}` }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '18%', textAlign: 'left' }}>Feature</th>
            <th style={{ ...thStyle, width: '18%' }}>Reach (per month)</th>
            <th style={{ ...thStyle, width: '13%' }}>Impact</th>
            <th style={{ ...thStyle, width: '15%' }}>Confidence</th>
            <th style={{ ...thStyle, width: '13%' }}>Effort</th>
            <th style={{ ...thStyle, width: '15%' }}>RICE Score</th>
          </tr>
        </thead>
        <tbody>
          {riceData.map((row, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, textAlign: 'left', color: COLORS.text, fontWeight: 500 }}>{row.feature}</td>
              <td style={tdStyle}>{row.reach}</td>
              <td style={tdStyle}>{row.impact}</td>
              <td style={tdStyle}>{row.confidence}</td>
              <td style={tdStyle}>{row.effort}</td>
              <td style={tdStyle}>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.section>
  );
}

/* ── Section 12: Customer Incentives ────────── */

function CustomerIncentivesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(87),
        paddingRight: vw(87),
        paddingTop: vw(50),
        paddingBottom: vw(30),
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: vw(10),
          height: vw(81),
          background: 'linear-gradient(180deg, #D322FF 0%, #9B11BE 100%)',
        }}
      />

      <SectionHeading>Customer Incentives</SectionHeading>

      <div style={{ display: 'flex', flexDirection: 'column', gap: vw(30), marginTop: vw(35) }}>
        {customerIncentives.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: vw(20) }}>
            <NumberBadge number={item.number} />
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(16),
                  color: COLORS.text,
                  marginBottom: vw(8),
                }}
              >
                {item.title}
              </div>
              {item.lines.map((line, j) => (
                <BodyText key={j} size={14} lineHeight={1.6} color={COLORS.textSecondary}>
                  {line}
                </BodyText>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 13: Addressing Constraint ─────── */

function AddressingConstraintSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        paddingLeft: vw(87),
        paddingRight: vw(87),
        paddingTop: vw(30),
        paddingBottom: vw(30),
      }}
    >
      <div style={{ marginBottom: vw(20) }}>
        <BodyText size={14} lineHeight={1.6} color={COLORS.text} style={{ fontWeight: 600 }}>
          {addressingConstraintText}
        </BodyText>
      </div>
      <img
        src={`${BASE_URL}images/district/addressing-constraint.png`}
        alt="Social media posts showing user frustration with competitor ticket booking"
        decoding="async"
        style={{
          width: '100%',
          maxWidth: vw(1132),
          height: 'auto',
          borderRadius: vw(8),
        }}
      />
    </motion.section>
  );
}

/* ── Section 14: Marketing Message ──────────── */

function MarketingMessageSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(87), paddingRight: vw(87), paddingTop: vw(50), paddingBottom: vw(30) }}
    >
      <SectionHeading>Example Marketing Message:</SectionHeading>

      <div style={{ marginTop: vw(20) }}>
        <BodyText size={18} lineHeight={1.5} color={COLORS.text} style={{ fontWeight: 700 }}>
          {marketingMessageHeadline}
        </BodyText>
      </div>

      <div style={{ marginTop: vw(16), maxWidth: vw(1000) }}>
        <BodyText size={13} lineHeight={1.8} color={COLORS.textSecondary}>
          {marketingMessageBody}
        </BodyText>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: vw(28), marginTop: vw(30) }}>
        {marketingMessagePoints.map((point, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: vw(20) }}>
            <NumberBadge number={point.number} />
            <div style={{ maxWidth: vw(900) }}>
              <BodyText size={14} lineHeight={1.7} color={COLORS.textSecondary}>
                <span style={{ fontWeight: 700, color: COLORS.text }}>{point.heading}</span>{' '}
                {point.body}
              </BodyText>

              {i === 1 && (
                <div style={{ marginTop: vw(16), display: 'flex', flexDirection: 'column', gap: vw(8) }}>
                  {marketingMessageSubpoints.map((sub, j) => (
                    <BodyText key={j} size={13} lineHeight={1.7} color={COLORS.textSecondary}>
                      <span style={{ fontWeight: 700, color: COLORS.text }}>{sub.label}</span>{' '}
                      {sub.text}
                    </BodyText>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Section 15: Road Map ─────────────────── */

function RoadmapSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingLeft: vw(65), paddingRight: vw(64), paddingTop: vw(50), paddingBottom: vw(80) }}
    >
      <div style={{ textAlign: 'center', marginBottom: vw(35) }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: vw(42), color: COLORS.text, margin: 0, letterSpacing: '-0.01em' }}>
          Six month Road map
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, auto)',
          gridAutoFlow: 'column',
          columnGap: vw(38),
          rowGap: vw(22),
        }}
      >
        {roadmapData.map((phase, i) => (
          <div
            key={i}
            style={{
              border: `${vw(2)} solid #9333EA`,
              borderRadius: vw(12),
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                backgroundColor: '#5B2877',
                padding: `${vw(12)} ${vw(18)}`,
              }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: vw(13), color: COLORS.text }}>
                {phase.title}
              </span>
            </div>
            <div style={{ backgroundColor: '#1E0A35', padding: `${vw(16)} ${vw(18)}`, minHeight: vw(120) }}>
              {phase.lines.map((line, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: vw(11),
                    color: COLORS.textSecondary,
                    lineHeight: 1.55,
                    marginBottom: j < phase.lines.length - 1 ? vw(8) : 0,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default DistrictCaseStudyPage;
