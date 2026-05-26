import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS, introductionText, jtbdData, jtbdHeaders, arunPersonaDetail } from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1280;

const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

const GreenArrowBullet = () => (
  <img
    src={`${BASE_URL}images/vectorvault/arrow_grreen.png`}
    alt=""
    style={{
      width: vw(13),
      height: vw(13),
      marginRight: vw(8),
      marginTop: vw(2),
      flexShrink: 0,
      imageRendering: 'pixelated'
    }}
  />
);

const WhiteArrowBullet = () => (
  <img
    src={`${BASE_URL}images/vectorvault/arrow_white.png`}
    alt=""
    style={{
      width: vw(13),
      height: vw(13),
      marginRight: vw(8),
      marginTop: vw(2),
      flexShrink: 0,
      imageRendering: 'pixelated'
    }}
  />
);

const PIXEL_TEXT_STYLE = {
  fontFamily: "'Press Start 2P', monospace",
  color: '#FF69B4',
  textShadow: `
    3px 0 0 #00FF00,
    -3px 0 0 #00FF00,
    0 3px 0 #00FF00,
    0 -3px 0 #00FF00,
    2px 2px 0 #00FF00,
    -2px -2px 0 #00FF00,
    2px -2px 0 #00FF00,
    -2px 2px 0 #00FF00,
    3px 1px 0 #00FF00,
    -3px 1px 0 #00FF00,
    3px -1px 0 #00FF00,
    -3px -1px 0 #00FF00,
    1px 3px 0 #00FF00,
    -1px 3px 0 #00FF00,
    1px -3px 0 #00FF00,
    -1px -3px 0 #00FF00
  `,
  WebkitFontSmoothing: 'none' as const,
  MozOsxFontSmoothing: 'grayscale' as const,
  textRendering: 'optimizeSpeed' as const,
  imageRendering: 'pixelated' as const
};

const HEADING_IMAGES: Record<string, { path: string; nativeHeight: number; nativeWidth?: number }> = {
  'VECTORVAULT': { path: 'headings/vectorvault-title.png', nativeHeight: 60 },
  'WHY VECTORVAULT ?': { path: 'headings/why-vectorvault.png', nativeHeight: 53 },
  'SOFTWARE PROVIDERS': { path: 'headings/software-providers.png', nativeHeight: 39 },
  'CREATIVE SOFTWARE SPEND': { path: 'headings/creative-software-spend.png', nativeHeight: 39 },
  'JOBS TO BE DONE': { path: 'headings/jobs-to-be-done.png', nativeHeight: 37 },
  'USER PERSONA': { path: 'headings/user-persona.png', nativeHeight: 37 },
  'HOW THIS WORKS': { path: 'headings/how-this-works.png', nativeHeight: 37 },
  'GAME OVER': { path: 'headings/game-over.png', nativeHeight: 58 }
};

const PixelArtHeading = ({ text, marginBottom = '0' }: { text: string; marginBottom?: string }) => {
  const imageData = HEADING_IMAGES[text];

  if (imageData) {
    const sizeStyle = imageData.nativeWidth
      ? { width: vw(imageData.nativeWidth), height: 'auto' as const }
      : { height: vw(imageData.nativeHeight), width: 'auto' as const };

    return (
      <img
        src={`${BASE_URL}images/vectorvault/${imageData.path}`}
        alt={text}
        style={{
          ...sizeStyle,
          marginBottom,
          imageRendering: 'pixelated'
        }}
      />
    );
  }
  
  return (
    <h2
      style={{
        ...PIXEL_TEXT_STYLE,
        fontSize: vw(40),
        textTransform: 'uppercase',
        letterSpacing: '-0.02em',
        marginBottom,
        lineHeight: 1.2
      }}
    >
      {text}
    </h2>
  );
};

export function VectorVaultCaseStudyPage() {
  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.overflow = 'visible';
    document.body.style.scrollbarWidth = 'none';
    
    const style = document.createElement('style');
    style.id = 'vectorvault-scrollbar-hide';
    style.textContent = `
      html, body { 
        scrollbar-width: none !important; 
        -ms-overflow-style: none !important;
      }
      html::-webkit-scrollbar, body::-webkit-scrollbar { 
        display: none !important; 
        width: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.overflow = originalOverflow;
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.scrollbarWidth = '';
      const styleEl = document.getElementById('vectorvault-scrollbar-hide');
      if (styleEl) styleEl.remove();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full vectorvault-page"
      style={{ 
        backgroundColor: COLORS.background
      }}
    >
      <HeroAndIntroSection />
      <WhyVectorVaultSection />
      <SoftwareProvidersSection />
      <CreativeSoftwareSpendSection />
      <JobsToBeDonesection />
      <UserPersonasSection />
      <DetailedPersonaCard />
      <HowThisWorksSection />
      <GameOverFooter />
    </main>
  );
}

function HeroAndIntroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: vw(604),
        overflow: 'visible',
        backgroundColor: COLORS.background
      }}
    >
      {/* Hero illustration — Figma: x=579, y=17, visible 701x618 within 1280 frame */}
      <motion.img
        src={`${BASE_URL}images/vectorvault/hero-illustration.png`}
        alt="VectorVault Hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'absolute',
          left: vw(579),
          top: vw(17),
          width: vw(701),
          height: vw(618),
          imageRendering: 'pixelated'
        }}
      />

      {/* Vault icon - Figma: x=85, y=48, w=96, h=93 */}
      <motion.img
        src={`${BASE_URL}images/vectorvault/vault-icon.png`}
        alt="Vault Icon"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: vw(85),
          top: vw(48),
          width: vw(96),
          height: vw(93),
          imageRendering: 'pixelated'
        }}
      />

      {/* VECTORVAULT title - Figma: x=206, y=63, w=734, h=60 */}
      <motion.img
        src={`${BASE_URL}images/vectorvault/headings/vectorvault-title.png`}
        alt="VECTORVAULT"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: vw(206),
          top: vw(63),
          height: vw(60),
          width: 'auto',
          imageRendering: 'pixelated'
        }}
      />

      {/* Introduction label - Figma: x=87, y=240, Inter Bold 24px */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute',
          left: vw(87),
          top: vw(240),
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: vw(24),
          lineHeight: 'normal',
          color: COLORS.text,
          margin: 0
        }}
      >
        Introduction
      </motion.h2>

      {/* Body text - Figma: x=87, y=313, w=776, Press Start 2P 16px/31px */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          position: 'absolute',
          left: vw(87),
          top: vw(313),
          width: vw(776),
          fontFamily: "'Press Start 2P', monospace",
          fontWeight: 400,
          fontSize: vw(16),
          lineHeight: vw(31),
          color: COLORS.text,
          margin: 0,
          WebkitFontSmoothing: 'none',
          textRendering: 'optimizeSpeed' as const
        }}
      >
        {introductionText}
      </motion.p>
    </section>
  );
}

function WhyVectorVaultSection() {
  const bulletStyle: React.CSSProperties = {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: vw(11),
    color: COLORS.text,
    lineHeight: vw(22),
    WebkitFontSmoothing: 'none',
    textRendering: 'optimizeSpeed'
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        width: '100%',
        marginTop: vw(9),
        minHeight: vw(498)
      }}
    >
      {/* Heading - Figma: x=87, y=598 */}
      <div style={{ position: 'absolute', left: vw(87), top: 0 }}>
        <PixelArtHeading text="WHY VECTORVAULT ?" marginBottom="0" />
      </div>
      
      {/* First bullet - Figma: x=835, y=598 (far right) */}
      <div style={{ 
        position: 'absolute',
        left: vw(835),
        top: vw(10),
        display: 'flex', 
        alignItems: 'flex-start'
      }}>
        <GreenArrowBullet />
        <p style={bulletStyle}>
          VECTORVAULT WAS BORN<br />
          OUT OF CARPEL TUNNEL<br />
          FROM THE <span style={{ color: '#00E676' }}>ALT + TAB</span><br />
          TUTORIAL DOOM
        </p>
      </div>

      {/* YouTube screenshot - Figma: x=640, y=787 → section-relative top=174 */}
      <img
        src={`${BASE_URL}images/vectorvault/youtube-screenshot.png`}
        alt="YouTube tutorial search screenshot"
        style={{
          position: 'absolute',
          left: vw(640),
          top: vw(174),
          width: vw(595),
          height: vw(324),
          objectFit: 'cover'
        }}
      />

      {/* Bullet points below heading - Figma: x=87, y=833 → section-relative top=220 */}
      <div style={{ position: 'absolute', left: vw(87), top: vw(220) }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: vw(30) }}>
          <GreenArrowBullet />
          <p style={bulletStyle}>
            INCREASING COMPLEXITY IN TECHNICAL<br />
            SOFTWARE(S) HAS LENGTHENED THE<br />
            LEARNING CURVE
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <GreenArrowBullet />
          <p style={bulletStyle}>
            IT IS TOUGH TO FIT TUTORIALS &<br />
            SOFTWARE WINDOWS INTO A SINGLE<br />
            SCREEN, THUS PROMPTING AN ENDLESS<br />
            LOOP OF <span style={{ color: '#00E676' }}>ALT + TAB</span>.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function SoftwareProvidersSection() {
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: vw(11),
    color: COLORS.text,
    lineHeight: '2',
    WebkitFontSmoothing: 'none',
    textRendering: 'optimizeSpeed'
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        marginLeft: vw(85),
        marginTop: vw(89),
        minHeight: vw(450)
      }}
    >
      <PixelArtHeading text="SOFTWARE PROVIDERS" marginBottom={vw(40)} />
      {/* Left: bullet points - Figma: x=23, y=126 (relative to section) */}
      <div style={{ 
        position: 'absolute',
        left: vw(23), 
        top: vw(126),
        width: vw(420)
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: vw(26) }}>
          <WhiteArrowBullet />
          <p style={labelStyle}>THE LARGEST PLAYER IS ADOBECC.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <WhiteArrowBullet />
          <p style={labelStyle}>THE MARKET REMAINS LARGELY<br />CONSOLIDATED. (HHI&gt;2600)</p>
        </div>
      </div>
      {/* Right: pie chart with labels - Figma: x=570, y=126, width=558, height=385 */}
      <img
        src={`${BASE_URL}images/vectorvault/software-providers-pie.png`}
        alt="Software Providers Market Share"
        style={{
          position: 'absolute',
          left: vw(570),
          top: vw(126),
          width: vw(558),
          height: vw(385),
          imageRendering: 'auto'
        }}
      />
    </motion.section>
  );
}

function CreativeSoftwareSpendSection() {
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: vw(11),
    color: COLORS.text,
    lineHeight: '2',
    WebkitFontSmoothing: 'none',
    textRendering: 'optimizeSpeed'
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        marginLeft: vw(87),
        marginTop: vw(171),
        minHeight: vw(540)
      }}
    >
      <PixelArtHeading text="CREATIVE SOFTWARE SPEND" marginBottom={vw(50)} />
      {/* Left: pie chart with labels - Figma: x=89, y=2147 → relative: left=2, top=123, width=525, height=416 */}
      <img
        src={`${BASE_URL}images/vectorvault/creative-software-spend.png`}
        alt="Creative Software Spend by Country"
        style={{
          position: 'absolute',
          left: vw(2),
          top: vw(123),
          width: vw(525),
          height: vw(416),
          imageRendering: 'auto'
        }}
      />
      {/* Right: bullet text - Figma: x=644, y=2411 → relative: left=557, top=387 */}
      <div style={{
        position: 'absolute',
        left: vw(557),
        top: vw(387),
        width: vw(514)
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <WhiteArrowBullet />
          <p style={labelStyle}>
            THE USA SPENDS MORE ON<br />
            CREATIVE SOFTWARE(S)! THAN THE<br />
            REST OF THE WORLD COMBINED!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function JobsToBeDonesection() {
  // Figma exact colors from MCP:
  // - Stroke: #8488F4, Weight: 10, Corner radius: 5%
  // - Fill: #000000
  // - Header: #5B5FC7 (blue)
  // - Cell: #1A1D23 (dark)
  const JTBD_COLORS = {
    border: '#8488F4',
    headerBg: '#5B5FC7',
    cellBg: '#1A1D23',
    tableBg: '#000000'
  };

  const cellStyle: React.CSSProperties = {
    backgroundColor: JTBD_COLORS.cellBg,
    color: COLORS.text,
    fontFamily: "'Press Start 2P', sans-serif",
    fontSize: vw(9),
    padding: `${vw(20)} ${vw(16)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRight: `2px solid ${JTBD_COLORS.border}`,
    borderBottom: `2px solid ${JTBD_COLORS.border}`,
    verticalAlign: 'middle',
    lineHeight: '1.8'
  };

  // Lighter text style for columns 3, 4, 5 (situation, motivation, outcome)
  const lightCellStyle: React.CSSProperties = {
    ...cellStyle,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 400
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: JTBD_COLORS.headerBg,
    color: COLORS.text,
    fontFamily: "'Press Start 2P', sans-serif",
    fontSize: vw(9),
    padding: `${vw(20)} ${vw(16)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRight: `2px solid ${JTBD_COLORS.border}`,
    borderBottom: `2px solid ${JTBD_COLORS.border}`,
    verticalAlign: 'middle',
    lineHeight: '1.6'
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        marginLeft: vw(62),
        marginTop: vw(192),
        position: 'relative'
      }}
    >
      {/* Heading - Figma: x=14, y=0 */}
      <div style={{ marginLeft: vw(14) }}>
        <PixelArtHeading text="JOBS TO BE DONE" marginBottom={vw(61)} />
      </div>
      {/* Table container - Figma: Stroke #8488F4, Fill #000000 */}
      <div
        style={{
          width: vw(1156),
          backgroundColor: JTBD_COLORS.tableBg,
          border: `${vw(3)} solid ${JTBD_COLORS.border}`,
          borderRadius: vw(12),
          padding: vw(11),
          boxSizing: 'border-box'
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            borderLeft: `2px solid ${JTBD_COLORS.border}`,
            borderTop: `2px solid ${JTBD_COLORS.border}`
          }}
        >
          <thead>
            <tr>
              {jtbdHeaders.map((header, index) => (
                <th key={index} style={headerStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jtbdData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* First column - entire cell is colored based on stakeholder */}
                <td style={{
                  ...cellStyle,
                  backgroundColor: row.stakeholderColor,
                  color: COLORS.text
                }}>
                  {row.stakeholder}
                </td>
                <td style={cellStyle}>{row.caption}</td>
                <td style={lightCellStyle}>{row.situation}</td>
                <td style={lightCellStyle}>{row.motivation}</td>
                <td style={lightCellStyle}>{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}

function UserPersonasSection() {
  // Figma positions: Card at x=81/658, y=3651, width=543, height=225
  // Avatar frame: x=18, y=35 relative to card, width=184, height=157 (ARUN) / width=147, height=144 (SANA)
  // Progress bar area: x=223, y=42 relative to card
  // Name: y=113, Role: y=156
  const personaData = [
    { name: 'ARUN', role: 'ASPIRING ANIMATOR', imgUrl: `${BASE_URL}images/vectorvault/personas/arun-profile.png`, avatarWidth: 184, avatarHeight: 157, avatarX: 18, avatarY: 35, healthBarX: 223, healthBarY: 42, nameX: 223, nameY: 100, roleX: 223, roleY: 145 },
    { name: 'SANA', role: 'FREELANCER', imgUrl: `${BASE_URL}images/vectorvault/personas/sana-profile.png`, avatarWidth: 147, avatarHeight: 144, avatarX: 30, avatarY: 45, healthBarX: 210, healthBarY: 45, nameX: 225, nameY: 113, roleX: 223, roleY: 155 }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        marginLeft: vw(71),
        marginTop: vw(150),
        position: 'relative'
      }}
    >
      {/* Figma: Heading at x=71, y=3521, marginBottom to cards = 93px */}
      <PixelArtHeading text="USER PERSONA" marginBottom={vw(93)} />
      
      {/* Figma: Cards container at x=81 (relative 10px from section), gap=34px */}
      <div
        style={{
          display: 'flex',
          gap: vw(34),
          marginLeft: vw(10)
        }}
      >
        {personaData.map((persona, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: vw(543),
              height: vw(225),
              border: '1px solid white',
              borderRadius: vw(12),
              backgroundColor: '#000',
              boxSizing: 'border-box'
            }}
          >
            {/* Avatar frame */}
            <div
              style={{
                position: 'absolute',
                left: vw(persona.avatarX),
                top: vw(persona.avatarY),
                width: vw(persona.avatarWidth),
                height: vw(persona.avatarHeight),
                borderRadius: vw(12),
                border: `${vw(3)} solid ${COLORS.cyan}`,
                overflow: 'hidden'
              }}
            >
              <img
                src={persona.imgUrl}
                alt={persona.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Health bar - pixel art asset */}
            <img
              src={`${BASE_URL}images/vectorvault/health-bar.png`}
              alt="Health"
              style={{
                position: 'absolute',
                left: vw(persona.healthBarX),
                top: vw(persona.healthBarY),
                width: vw(161),
                height: vw(41),
                imageRendering: 'pixelated'
              }}
            />

            {/* Name */}
            <h3
              style={{
                position: 'absolute',
                left: vw(persona.nameX),
                top: vw(persona.nameY),
                fontFamily: "'Press Start 2P', sans-serif",
                fontSize: vw(30),
                color: COLORS.text,
                margin: 0,
                letterSpacing: vw(2)
              }}
            >
              {persona.name}
            </h3>

            {/* Role */}
            <p
              style={{
                position: 'absolute',
                left: vw(persona.roleX),
                top: vw(persona.roleY),
                fontFamily: "'Press Start 2P', sans-serif",
                fontSize: vw(14),
                color: COLORS.roleGray,
                margin: 0,
                letterSpacing: vw(1)
              }}
            >
              {persona.role}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function DetailedPersonaCard() {
  // Figma: x=73, y=3911, width=1149, height=647
  // Colors from Figma:
  // - Green headers (A SHORT DESCRIPTION, KEY ATTRIBUTES, OPPORTUNITIES): #00E676
  // - Cyan header (NEEDS): #00BCD4
  // - Magenta header (CHALLENGES): #E040E0
  
  const HEADER_COLORS = {
    green: '#00E676',
    cyan: '#00BCD4',
    magenta: '#E040E0'
  };

  const sectionHeaderStyle = (bgColor: string): React.CSSProperties => ({
    backgroundColor: bgColor,
    padding: `${vw(12)} ${vw(20)}`,
    fontFamily: "'Press Start 2P', monospace",
    fontSize: vw(10),
    color: COLORS.text,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: vw(2)
  });

  const bulletTextStyle: React.CSSProperties = {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: vw(9),
    color: COLORS.text,
    lineHeight: '2.2',
    margin: 0
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        marginLeft: vw(73),
        marginTop: vw(35),
        width: vw(1149),
        minHeight: vw(647),
        backgroundColor: COLORS.background,
        border: `${vw(2)} solid white`,
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Row 1: Avatar Card | Short Description */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        {/* Left: Avatar + Name + Role - smaller box */}
        <div
          style={{
            width: '35%',
            padding: `${vw(20)} ${vw(24)}`,
            borderRight: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: vw(16)
          }}
        >
          <div
            style={{
              width: vw(90),
              height: vw(90),
              borderRadius: vw(8),
              border: `${vw(3)} solid ${COLORS.cyan}`,
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            <img
              src={`${BASE_URL}images/vectorvault/personas/arun-profile.png`}
              alt="ARUN"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(6) }}>
            <img
              src={`${BASE_URL}images/vectorvault/health-bar.png`}
              alt="Health"
              style={{
                width: vw(96),
                height: vw(29),
                imageRendering: 'pixelated'
              }}
            />
            <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: vw(16), color: COLORS.text, margin: 0 }}>
              ARUN
            </h3>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: vw(8), color: COLORS.roleGray, margin: 0 }}>
              ASPIRING ANIMATOR
            </p>
            <div style={{ display: 'flex', gap: vw(6), marginTop: vw(2) }}>
              <span style={{ fontSize: vw(18) }}>🎮</span>
              <span style={{ fontSize: vw(18) }}>💊</span>
              <span style={{ fontSize: vw(18) }}>🎵</span>
            </div>
          </div>
        </div>

        {/* Right: Short Description */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={sectionHeaderStyle(HEADER_COLORS.green)}>A SHORT DESCRIPTION</div>
          <div style={{ padding: `${vw(16)} ${vw(20)}`, flex: 1 }}>
            <p style={bulletTextStyle}>• {arunPersonaDetail.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Row 2: Key Attributes - Full Width */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={sectionHeaderStyle(HEADER_COLORS.green)}>KEY ATTRIBUTES</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: `${vw(16)} ${vw(20)}`, gap: vw(8) }}>
          {arunPersonaDetail.keyAttributes.map((attr, index) => (
            <p key={index} style={bulletTextStyle}>• {attr.label}: {attr.value}</p>
          ))}
        </div>
      </div>

      {/* Row 3: Needs (CYAN) | Challenges (MAGENTA) - Side by Side 50/50 */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={{ width: '50%', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={sectionHeaderStyle(HEADER_COLORS.cyan)}>NEEDS</div>
          <div style={{ padding: `${vw(16)} ${vw(20)}` }}>
            {arunPersonaDetail.needs.map((need, index) => (
              <p key={index} style={{ ...bulletTextStyle, marginBottom: vw(6) }}>○ {need}</p>
            ))}
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <div style={sectionHeaderStyle(HEADER_COLORS.magenta)}>CHALLENGES</div>
          <div style={{ padding: `${vw(16)} ${vw(20)}` }}>
            {arunPersonaDetail.challenges.map((challenge, index) => (
              <p key={index} style={{ ...bulletTextStyle, marginBottom: vw(6) }}>• {challenge}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Opportunities - Full Width */}
      <div>
        <div style={sectionHeaderStyle(HEADER_COLORS.green)}>OPPORTUNITIES</div>
        <div style={{ padding: `${vw(16)} ${vw(20)}` }}>
          {arunPersonaDetail.opportunities.map((opp, index) => (
            <p key={index} style={{ ...bulletTextStyle, marginBottom: vw(6) }}>• {opp}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function HowThisWorksSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        marginTop: vw(97),
        marginLeft: vw(87)
      }}
    >
      <PixelArtHeading text="HOW THIS WORKS" marginBottom={vw(119)} />

      <img
        src={`${BASE_URL}images/vectorvault/how-this-works-cityscape.png`}
        alt="VectorVault Isometric Cityscape"
        style={{
          width: vw(963),
          height: vw(607),
          marginLeft: vw(72),
          imageRendering: 'pixelated',
          objectFit: 'contain'
        }}
      />

      <div
        style={{
          width: vw(963),
          marginLeft: vw(72),
          marginTop: vw(14),
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <a href="https://www.figma.com/proto/zJ9oe4R34H9dibPpHLiug9/SPM_VectorVault?node-id=1-3" target="_blank" rel="noopener noreferrer">
          <img
            src={`${BASE_URL}images/vectorvault/view-prototype-btn.png`}
            alt="View Prototype"
            style={{
              width: vw(243),
              height: vw(142),
              imageRendering: 'pixelated',
              cursor: 'pointer'
            }}
          />
        </a>
      </div>
    </motion.section>
  );
}

function GameOverFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: vw(208),
        paddingBottom: vw(26),
        backgroundColor: COLORS.background
      }}
    >
      <img
        src={`${BASE_URL}images/vectorvault/headings/game-over.png`}
        alt="GAME OVER"
        style={{
          height: vw(58),
          width: 'auto',
          marginBottom: vw(26),
          imageRendering: 'pixelated'
        }}
      />
      
      <p
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: vw(16),
          color: COLORS.text,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginBottom: vw(90),
          WebkitFontSmoothing: 'none' as const,
          textRendering: 'optimizeSpeed' as const
        }}
      >
        THANK YOU FOR PLAYING!
      </p>
      
      <div
        style={{
          width: vw(1428),
          height: vw(155),
          marginLeft: vw(-65),
          overflow: 'hidden'
        }}
      >
        <img
          src={`${BASE_URL}images/vectorvault/footer_landscape.png`}
          alt="Pixel art landscape with treasure chest"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            imageRendering: 'pixelated'
          }}
        />
      </div>
    </motion.footer>
  );
}

export default VectorVaultCaseStudyPage;
