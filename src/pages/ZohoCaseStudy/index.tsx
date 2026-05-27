import { useEffect, useRef, useState, useCallback } from 'react';
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
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          background: 'linear-gradient(105.49deg, #f9fafb 0%, #f3f4f6 100%)',
          overflow: 'hidden',
        }}
      >
        <DSDocHeader title="Zoho Books" subtitle="Design System Documentation" />
        <ColorPaletteSection />
        <TypographySection />
        <ContainersAndButtonsSection />
        <IllustrationsSection />
        <IconographySection />
        <PitchDeckSection />
      </motion.section>
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
      {/* White title card with shadow */}
      <div style={{
        position: 'absolute',
        left: vw(3),
        top: 0,
        width: vw(1277),
        height: vw(192),
        backgroundColor: COLORS.white,
        borderBottom: `0.8px solid ${COLORS.border}`,
        boxShadow: '0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.1)',
      }} />

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
        decoding="async"
        style={{
          position: 'absolute',
          left: vw(1062),
          top: vw(82),
          width: vw(130),
          height: vw(65),
        }}
      />

      {/* Introduction heading on gray bg */}
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

      {/* Body text on gray bg */}
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
    <div style={{ marginBottom: vw(32), display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: vw(30),
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
      height: vw(117),
      boxSizing: 'border-box',
      position: 'relative' as const,
      zIndex: 1,
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
              borderRadius: vw(16),
              border: `1px solid #f3f4f6`,
              boxShadow: '0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)',
            }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: vw(14),
              lineHeight: vw(20),
              color: '#1e2939',
              margin: 0,
              marginTop: vw(12),
              textAlign: 'center',
            }}>
              {swatch.name}
            </p>
            <p style={{
              fontFamily: "'Consolas', monospace",
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
                  fontFamily: "'Consolas', monospace",
                  fontWeight: 400,
                  fontSize: vw(12),
                  lineHeight: vw(16),
                  color: COLORS.textMuted,
                  margin: 0,
                }}>
                  {example.size}
                </p>
                <p style={{
                  fontFamily: "'Consolas', monospace",
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
              color: '#99a1af',
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
      <div style={{ display: 'flex', gap: 0 }}>
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

        {/* Vertical Divider */}
        <div style={{
          width: '1px',
          backgroundColor: COLORS.border,
          alignSelf: 'stretch',
          marginLeft: vw(22),
          marginRight: vw(22),
          marginTop: vw(68),
        }} />

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
      <div style={{ display: 'flex', gap: vw(27), maxWidth: vw(1195) }}>
        {illustrationCards.map((card) => (
          <div key={card.title} style={{
            flex: 1,
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img
                src={`${BASE_URL}images/zoho/${card.image}`}
                alt={card.title}
                decoding="async"
                style={{
                  maxWidth: '80%',
                  maxHeight: '90%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{
              position: 'absolute',
              left: vw(24),
              top: vw(232),
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
              position: 'absolute',
              left: vw(24),
              top: vw(263),
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
        decoding="async"
        style={{
          width: vw(1231),
          height: 'auto',
          display: 'block',
        }}
      />
      <img
        src={`${BASE_URL}images/zoho/icon-states.png`}
        alt="Icon States & Usage"
        decoding="async"
        style={{
          width: vw(1231),
          height: 'auto',
          display: 'block',
          marginTop: vw(32),
        }}
      />
    </div>
  );
}

function PitchDeckSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current.startX = e.pageX - el.offsetLeft;
    dragState.current.scrollLeft = el.scrollLeft;
    el.style.scrollSnapType = 'none';
    el.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (!el) return;
    el.style.scrollSnapType = 'x mandatory';
    el.style.cursor = 'grab';
  }, []);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        const el = scrollRef.current;
        if (el) {
          el.style.scrollSnapType = 'x mandatory';
          el.style.cursor = 'grab';
        }
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const slideWidth = el.scrollWidth / 6;
      const idx = Math.round(el.scrollLeft / slideWidth);
      setActiveSlide(Math.min(idx, 5));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section>
      <DSDocHeader title="Pitch Deck for feature" subtitle="Explainer for the function" />
      <div style={{
        padding: `${vw(50)} 0 ${vw(47)}`,
        overflow: 'hidden',
      }}>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            display: 'flex',
            gap: vw(41),
            overflowX: 'auto',
            paddingLeft: vw(83),
            paddingRight: vw(83),
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory',
            scrollPaddingLeft: vw(83),
            scrollPaddingRight: vw(83),
            scrollBehavior: 'smooth',
            cursor: 'grab',
            userSelect: isDragging ? 'none' : 'auto',
            WebkitUserSelect: isDragging ? 'none' : 'auto',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`${BASE_URL}images/zoho/deck-slide-${num}.jpg`}
              alt={`Deck Slide ${num}`}
              decoding="async"
              draggable={false}
              style={{
                width: vw(1060),
                height: vw(596),
                borderRadius: vw(8),
                flexShrink: 0,
                objectFit: 'cover',
                scrollSnapAlign: 'start',
              }}
            />
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: vw(4),
          marginTop: vw(37),
          paddingBottom: vw(50),
        }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: vw(10),
                height: vw(10),
                borderRadius: '50%',
                backgroundColor: i === activeSlide ? COLORS.secondaryYellow : 'rgba(0,0,0,0.15)',
                transition: 'background-color 0.3s',
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
    <section>
      <DSDocHeader title="LinkedIn Tiles" subtitle="Explainer for the function" />
      <div style={{
        padding: `${vw(40)} ${vw(32)} ${vw(134)}`,
        display: 'flex',
        gap: vw(13),
      }}>
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`${BASE_URL}images/zoho/linkedin-tile-${num}.jpg`}
            alt={`LinkedIn Tile ${num}`}
            decoding="async"
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
