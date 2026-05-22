import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { COLORS, introductionText, colorSwatches, typographyExamples, illustrationCards } from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_WIDTH = 1280;
const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

export function ZohoCaseStudyPage() {
  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.overflow = 'visible';
    document.body.style.scrollbarWidth = 'none';
    const style = document.createElement('style');
    style.id = 'zoho-scrollbar-hide';
    style.textContent = `
      html, body { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      html::-webkit-scrollbar, body::-webkit-scrollbar { display: none !important; width: 0 !important; }
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Metrophobic&display=swap');
    `;
    document.head.appendChild(style);
    return () => {
      document.documentElement.style.overflow = originalOverflow;
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.scrollbarWidth = '';
      const el = document.getElementById('zoho-scrollbar-hide');
      if (el) el.remove();
    };
  }, []);

  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: COLORS.pageBg }}>
      <HeroSection />
      <DesignSystemSection />
      <PitchDeckSection />
      <LinkedInTilesSection />
    </main>
  );
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        width: '100%',
        height: vw(460),
        backgroundColor: COLORS.pageBg,
        overflow: 'hidden',
      }}
    >
      <h1 style={{
        position: 'absolute',
        left: vw(41),
        top: vw(44),
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(96),
        lineHeight: '1',
        margin: 0,
      }}>
        <span style={{ color: COLORS.titleYellow }}>Zo</span>
        <span style={{ color: COLORS.titleBlue }}>ho</span>
        <span> </span>
        <span style={{ color: COLORS.titleBlue }}>books</span>
      </h1>

      <img
        src={`${BASE_URL}images/zoho/zoho-logo-full.png`}
        alt="Zoho Logo"
        style={{
          position: 'absolute',
          left: vw(1062),
          top: vw(82),
          width: vw(130),
          height: vw(65),
        }}
      />

      <h2 style={{
        position: 'absolute',
        left: vw(41),
        top: vw(219),
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(36),
        lineHeight: vw(40),
        color: COLORS.textDark,
        margin: 0,
      }}>
        Introduction
      </h2>

      <p style={{
        position: 'absolute',
        left: vw(41),
        top: vw(297),
        width: vw(1151),
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: vw(20),
        lineHeight: 'normal',
        color: COLORS.textBody,
        margin: 0,
      }}>
        {introductionText}
      </p>
    </motion.section>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ marginBottom: vw(32) }}>
      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(28),
        lineHeight: vw(36),
        color: COLORS.textDark,
        margin: 0,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: vw(16),
        lineHeight: vw(24),
        color: COLORS.textGray,
        margin: 0,
        marginTop: vw(8),
      }}>
        {description}
      </p>
    </div>
  );
}

function DSDocHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{
      backgroundColor: COLORS.white,
      borderBottom: `0.8px solid ${COLORS.border}`,
      boxShadow: '0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.1)',
      padding: `${vw(24)} ${vw(32)} ${vw(0)}`,
      height: vw(116),
      boxSizing: 'border-box',
    }}>
      <h2 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(36),
        lineHeight: vw(40),
        color: COLORS.textDark,
        margin: 0,
      }}>
        {title}
      </h2>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: vw(16),
        lineHeight: vw(24),
        color: COLORS.textGray,
        margin: 0,
        marginTop: vw(4),
      }}>
        {subtitle}
      </p>
    </div>
  );
}

function ColorPaletteSection() {
  return (
    <div style={{ padding: `${vw(48)} ${vw(32)} 0` }}>
      <SectionHeader title="Color Palette" description="Primary colors used throughout the Zoho Books application" />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: vw(28),
      }}>
        {colorSwatches.map((swatch) => (
          <div key={swatch.hex} style={{ width: vw(128) }}>
            <div style={{
              width: vw(128),
              height: vw(128),
              backgroundColor: swatch.color,
              borderRadius: vw(10),
              border: swatch.hex === '#ffffff' ? `1px solid ${COLORS.border}` : 'none',
            }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: vw(14),
              lineHeight: vw(20),
              color: COLORS.textLabel,
              margin: 0,
              marginTop: vw(12),
              textAlign: 'center',
            }}>
              {swatch.name}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: vw(12),
              lineHeight: vw(16),
              color: COLORS.textMuted,
              margin: 0,
              textAlign: 'center',
            }}>
              {swatch.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <div style={{ padding: `${vw(80)} ${vw(32)} 0` }}>
      <SectionHeader title="Typography" description="Font styles and text hierarchies" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: vw(24) }}>
        {typographyExamples.map((example) => (
          <div key={example.label} style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: vw(10),
            padding: vw(17),
            minHeight: vw(example.height),
            boxSizing: 'border-box',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: vw(30),
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: vw(14),
                lineHeight: vw(20),
                color: COLORS.textDark,
              }}>
                {example.label}
              </span>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(12),
                  lineHeight: vw(16),
                  color: COLORS.textMuted,
                  margin: 0,
                }}>
                  {example.size}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(12),
                  lineHeight: vw(16),
                  color: COLORS.textMuted,
                  margin: 0,
                }}>
                  {example.weight}
                </p>
              </div>
            </div>
            <p style={{
              fontFamily: example.font === 'Metrophobic' ? "'Metrophobic', sans-serif" : "'Inter', sans-serif",
              fontWeight: parseInt(example.weight),
              fontSize: vw(parseFloat(example.size)),
              lineHeight: '1.2',
              color: COLORS.textDark,
              margin: 0,
              marginBottom: vw(12),
            }}>
              {example.sample}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: vw(12),
              lineHeight: vw(16),
              color: COLORS.textMuted,
              margin: 0,
            }}>
              {example.font}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContainersAndButtonsSection() {
  return (
    <div style={{ padding: `${vw(80)} ${vw(32)} 0` }}>
      <div style={{ display: 'flex', gap: vw(60) }}>
        {/* Containers & Backgrounds */}
        <div style={{ flex: '0 0 auto', width: vw(769) }}>
          <SectionHeader title="Containers & Backgrounds" description="Reusable container components with various styles" />
          <div style={{ display: 'flex', gap: vw(19) }}>
            {/* Container 1 */}
            <div style={{
              width: vw(241),
              border: `1.6px solid ${COLORS.border}`,
              borderRadius: vw(10),
              backgroundColor: COLORS.white,
              padding: vw(25),
              boxSizing: 'border-box',
            }}>
              <div style={{
                width: vw(189),
                height: vw(160),
                backgroundColor: '#015ab2',
                opacity: 0.6,
                borderRadius: vw(16),
                marginBottom: vw(16),
              }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: vw(14), lineHeight: vw(20), color: COLORS.textLabel, margin: 0 }}>
                Background
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: vw(12), lineHeight: vw(16), color: COLORS.textMuted, margin: 0 }}>
                #015ab2 &bull; 60% opacity
              </p>
            </div>
            {/* Container 2 */}
            <div style={{
              width: vw(240),
              border: `1.6px solid ${COLORS.border}`,
              borderRadius: vw(10),
              backgroundColor: COLORS.white,
              padding: vw(25),
              boxSizing: 'border-box',
            }}>
              <div style={{
                width: vw(189),
                height: vw(160),
                backgroundColor: '#1682e9',
                opacity: 0.6,
                borderRadius: vw(16),
                border: '0.8px solid rgba(255,255,255,0.33)',
                marginBottom: vw(16),
              }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: vw(14), lineHeight: vw(20), color: COLORS.textLabel, margin: 0 }}>
                Background + Border
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: vw(12), lineHeight: vw(16), color: COLORS.textMuted, margin: 0 }}>
                #1682e9 &bull; White border
              </p>
            </div>
            {/* Container 3 */}
            <div style={{
              width: vw(240),
              border: `1.6px solid ${COLORS.border}`,
              borderRadius: vw(10),
              backgroundColor: COLORS.white,
              padding: vw(25),
              boxSizing: 'border-box',
            }}>
              <div style={{
                width: vw(189),
                height: vw(160),
                backgroundColor: '#21263c',
                borderRadius: `0 0 ${vw(10)} ${vw(10)}`,
                marginBottom: vw(16),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: COLORS.white, fontSize: vw(24) }}>Aa</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: vw(14), lineHeight: vw(20), color: COLORS.textLabel, margin: 0 }}>
                Dark Container
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: vw(12), lineHeight: vw(16), color: COLORS.textMuted, margin: 0 }}>
                #21263c &bull; Bottom rounded
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ flex: 1 }}>
          <SectionHeader title="Buttons" description="Primary and secondary button styles" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: vw(34) }}>
            <div style={{ display: 'flex', gap: vw(16) }}>
              <button style={{
                backgroundColor: COLORS.primaryBlue,
                color: COLORS.white,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: vw(16),
                lineHeight: vw(24),
                padding: `${vw(13.6)} ${vw(22)}`,
                borderRadius: vw(10),
                border: 'none',
                cursor: 'pointer',
              }}>
                Primary Button
              </button>
              <button style={{
                backgroundColor: COLORS.secondaryYellow,
                color: COLORS.textDark,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: vw(16),
                lineHeight: vw(24),
                padding: `${vw(13.6)} ${vw(20)}`,
                borderRadius: vw(10),
                border: 'none',
                cursor: 'pointer',
              }}>
                Secondary Button
              </button>
            </div>
            <div style={{ display: 'flex', gap: vw(16) }}>
              <button style={{
                backgroundColor: COLORS.white,
                color: COLORS.textDark,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: vw(16),
                lineHeight: vw(24),
                padding: `${vw(12)} ${vw(24.6)}`,
                borderRadius: vw(10),
                border: `1.6px solid ${COLORS.borderOutline}`,
                cursor: 'pointer',
              }}>
                Outline Button
              </button>
              <button style={{
                backgroundColor: COLORS.darkButton,
                color: COLORS.white,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: vw(16),
                lineHeight: vw(24),
                padding: `${vw(13.6)} ${vw(23)}`,
                borderRadius: vw(10),
                border: 'none',
                cursor: 'pointer',
              }}>
                Dark Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustrationsSection() {
  return (
    <div style={{ padding: `${vw(80)} ${vw(32)} 0` }}>
      <SectionHeader title="Illustrations" description="Custom illustrations for various business scenarios" />
      <div style={{ display: 'flex', gap: vw(27) }}>
        {illustrationCards.map((card) => (
          <div key={card.title} style={{
            width: vw(380),
            height: vw(310),
            border: `1.6px solid ${COLORS.border}`,
            borderRadius: vw(14),
            backgroundColor: COLORS.white,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              width: '100%',
              height: vw(220),
              backgroundColor: '#e8f4fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img
                src={`${BASE_URL}images/zoho/${card.image}`}
                alt={card.title}
                style={{
                  maxWidth: '70%',
                  maxHeight: '80%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div style={{ padding: `${vw(12)} ${vw(25.6)}` }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: vw(18),
                lineHeight: vw(27),
                color: COLORS.textDark,
                margin: 0,
              }}>
                {card.title}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: vw(14),
                lineHeight: vw(20),
                color: COLORS.textGray,
                margin: 0,
              }}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconographySection() {
  return (
    <div style={{ padding: `${vw(80)} ${vw(32)} ${vw(48)}` }}>
      <SectionHeader title="Iconography" description="Icon set for navigation, actions, and UI elements" />
      <img
        src={`${BASE_URL}images/zoho/icons-grid.png`}
        alt="Icon Grid"
        style={{
          width: vw(1231),
          height: 'auto',
          display: 'block',
        }}
      />
      <div style={{ marginTop: vw(32) }}>
        <h4 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: vw(18),
          lineHeight: vw(27),
          color: COLORS.textDark,
          margin: 0,
          marginBottom: vw(16),
        }}>
          Icon States & Usage
        </h4>
        <img
          src={`${BASE_URL}images/zoho/icon-states.png`}
          alt="Icon States"
          style={{
            width: vw(1180),
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}

function DesignSystemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        overflow: 'hidden',
      }}
    >
      <DSDocHeader title="Zoho Books" subtitle="Design System Documentation" />
      <ColorPaletteSection />
      <TypographySection />
      <ContainersAndButtonsSection />
      <IllustrationsSection />
      <IconographySection />
    </motion.section>
  );
}

function PitchDeckSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ backgroundColor: COLORS.white }}>
      <DSDocHeader title="Pitch Deck for feature" subtitle="Explainer for the function" />
      <div style={{
        backgroundColor: COLORS.blueBg,
        padding: `${vw(40)} 0`,
        overflow: 'hidden',
      }}>
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: vw(41),
            overflowX: 'auto',
            paddingLeft: vw(83),
            paddingRight: vw(83),
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`${BASE_URL}images/zoho/deck-slide-${num}.jpg`}
              alt={`Deck Slide ${num}`}
              style={{
                width: vw(1060),
                height: vw(596),
                borderRadius: vw(8),
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInTilesSection() {
  return (
    <section style={{ backgroundColor: COLORS.white }}>
      <DSDocHeader title="LinkedIn Tiles" subtitle="Explainer for the function" />
      <div style={{
        backgroundColor: COLORS.blueBg,
        padding: `${vw(40)} ${vw(32)} ${vw(60)}`,
        display: 'flex',
        gap: vw(13),
      }}>
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`${BASE_URL}images/zoho/linkedin-tile-${num}.jpg`}
            alt={`LinkedIn Tile ${num}`}
            style={{
              width: vw(396),
              height: vw(396),
              borderRadius: vw(8),
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default ZohoCaseStudyPage;
