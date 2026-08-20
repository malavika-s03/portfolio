import { motion } from 'framer-motion';
import { prototypeUrl } from './data';

const BASE_URL = import.meta.env.BASE_URL || '/';
const IMG = `${BASE_URL}images/artium`;
const BASE_WIDTH = 1280;

const vw = (px: number) => `${(px / BASE_WIDTH) * 100}vw`;

const CREAM = '#FDF9F0';
const NAVY = '#13123F';
const BODY = '#4B4964';
const CORAL = '#F08A76';
const SAND = '#F0C983';
const CARD_BORDER = '#F2EDE2';

const HEADING_FONT = "'Baloo 2', 'Comic Sans MS', cursive";
const BODY_FONT = "'Nunito', 'Segoe UI', sans-serif";

const appear = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const;

function SectionTag({ children }: { children: string }) {
  // a proper cloud, like the ones drifting over Melody Mountain
  return (
    <span style={{ position: 'relative', display: 'inline-block', marginBottom: vw(14) }}>
      <svg
        viewBox="0 0 220 84"
        preserveAspectRatio="none"
        aria-hidden
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <g fill={CORAL}>
          <ellipse cx="110" cy="52" rx="105" ry="30" />
          <ellipse cx="50" cy="36" rx="36" ry="23" />
          <ellipse cx="112" cy="25" rx="42" ry="25" />
          <ellipse cx="170" cy="38" rx="32" ry="21" />
        </g>
      </svg>
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          fontFamily: HEADING_FONT,
          fontWeight: 700,
          fontSize: vw(14),
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#ffffff',
          padding: `${vw(24)} ${vw(34)} ${vw(16)}`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

function SubSectionTitle({ children }: { children: string }) {
  return (
    <h3
      style={{
        fontFamily: HEADING_FONT,
        fontWeight: 600,
        fontSize: vw(30),
        lineHeight: 1.2,
        color: NAVY,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
}

function BodyText({ children, width }: { children: React.ReactNode; width?: number }) {
  return (
    <p
      style={{
        fontFamily: BODY_FONT,
        fontWeight: 500,
        fontSize: vw(19),
        lineHeight: 1.65,
        color: BODY,
        margin: `${vw(16)} auto 0`,
        maxWidth: width ? vw(width) : undefined,
        textAlign: 'center',
      }}
    >
      {children}
    </p>
  );
}

function ScreenCard({
  src,
  alt,
  caption,
  width,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}) {
  return (
    <figure style={{ margin: 0, width: width ?? '100%' }}>
      <img
        src={src}
        alt={alt}
        decoding="async"
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: vw(16),
          border: `1px solid ${CARD_BORDER}`,
          boxShadow: '0 18px 40px rgba(19, 18, 63, 0.10)',
        }}
      />
      {caption && (
        <figcaption
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 600,
            fontSize: vw(14),
            color: '#8A8798',
            textAlign: 'center',
            marginTop: vw(12),
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArtiumCaseStudyPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: CREAM, colorScheme: 'light', overflow: 'hidden' }}
    >
      <HeroSection />
      <ProcessSection />
      <MapSection />
      <TheorySection />
      <PracticeSection />
      <PrototypeVideoSection />
      <ArtiumFooter />
    </main>
  );
}

interface CollagePiece {
  src: string;
  alt: string;
  caption: string;
  width: number;
  left: number;
  top: number;
  rotate: number;
  z?: number;
}

const collagePieces: CollagePiece[] = [
  // left cluster — process
  { src: 'doodle-frog.png', alt: 'Sketch of the theory bridge task', caption: 'first scribbles', width: 252, left: 26, top: 96, rotate: -7 },
  { src: 'whiteboard.png', alt: 'Whiteboard user-journey session with sticky notes', caption: 'the whiteboard', width: 286, left: 4, top: 452, rotate: 5 },
  { src: 'practice-bars.png', alt: 'Final practice studio with falling bars', caption: '…became this', width: 210, left: 92, top: 288, rotate: 3, z: 1 },
  // right cluster — process → product
  { src: 'sketch-flow.png', alt: 'Hand-drawn flow chart of the whole experience', caption: 'the flow, v1', width: 250, left: 1010, top: 80, rotate: 8 },
  { src: 'levels-map.png', alt: 'Melody Mountain level map, final screen', caption: 'melody mountain', width: 236, left: 942, top: 332, rotate: -4, z: 1 },
  { src: 'doodle-victory.png', alt: 'Doodle of the level map with a new animal per level', caption: 'each level, new friend', width: 244, left: 1032, top: 548, rotate: -9 },
];

function Polaroid({ piece, delay }: { piece: CollagePiece; delay: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.75, rotate: piece.rotate * 2.4, y: 24 }}
      animate={{ opacity: 1, scale: 1, rotate: piece.rotate, y: 0 }}
      transition={{ duration: 0.55, delay, type: 'spring', bounce: 0.35 }}
      style={{
        position: 'absolute',
        left: vw(piece.left),
        top: vw(piece.top),
        width: vw(piece.width),
        margin: 0,
        padding: `${vw(10)} ${vw(10)} ${vw(6)}`,
        backgroundColor: '#ffffff',
        borderRadius: vw(6),
        border: `1px solid ${CARD_BORDER}`,
        boxShadow: '0 14px 30px rgba(19, 18, 63, 0.16)',
        zIndex: piece.z ?? 0,
      }}
    >
      <img
        src={`${IMG}/${piece.src}`}
        alt={piece.alt}
        decoding="async"
        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: vw(3) }}
      />
      <figcaption
        style={{
          fontFamily: HEADING_FONT,
          fontWeight: 700,
          fontSize: vw(13),
          color: '#A5A1B2',
          textAlign: 'center',
          padding: `${vw(6)} 0 ${vw(2)}`,
        }}
      >
        {piece.caption}
      </figcaption>
    </motion.figure>
  );
}

function HeroSection() {
  return (
    <section style={{ position: 'relative', height: vw(770), overflow: 'visible' }}>
      {/* drifting pink clouds, straight out of the design's sky */}
      {[
        { left: 360, top: 40, w: 84 },
        { left: 858, top: 62, w: 110 },
        { left: 610, top: 130, w: 60 },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
          style={{ position: 'absolute', left: vw(c.left), top: vw(c.top) }}
        >
          <Cloud width={c.w} />
        </motion.div>
      ))}

      {/* the collage — scribbles and shipped screens shoulder to shoulder */}
      {collagePieces.map((p, i) => (
        <Polaroid key={p.src} piece={p} delay={0.35 + i * 0.12} />
      ))}

      {/* frog sits on the melody-mountain polaroid */}
      <motion.img
        src={`${IMG}/frog.svg`}
        alt=""
        decoding="async"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.15, type: 'spring', bounce: 0.5 }}
        style={{
          position: 'absolute',
          left: vw(1128),
          top: vw(296),
          width: vw(80),
          height: 'auto',
          zIndex: 2,
          transform: 'rotate(-4deg)',
        }}
      />

      {/* the heading — big but quiet, centered above the collage */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          paddingTop: vw(280),
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 600,
            fontSize: vw(76),
            lineHeight: 1.1,
            color: NAVY,
            margin: '0 auto',
          }}
        >
          Artium, for kids
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 500,
            fontSize: vw(19),
            lineHeight: 1.65,
            color: BODY,
            maxWidth: vw(520),
            margin: `${vw(20)} auto 0`,
          }}
        >
          What a kid sees after their piano class ends: a map, a small task, some
          practice. Built for Artium Academy, all in Figma.
        </motion.p>
      </div>
    </section>
  );
}

function Cloud({ width }: { width: number }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 100 46"
      style={{ width: vw(width), height: 'auto', display: 'block' }}
      aria-hidden
    >
      <g fill="#F9BAC2">
        <ellipse cx="30" cy="32" rx="26" ry="13" />
        <ellipse cx="58" cy="24" rx="22" ry="15" />
        <ellipse cx="78" cy="34" rx="20" ry="11" />
      </g>
    </svg>
  );
}

function ProcessCaption({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: BODY_FONT,
        fontWeight: 600,
        fontSize: vw(14),
        color: '#8A8798',
        textAlign: 'center',
        margin: `${vw(14)} 0 0`,
      }}
    >
      {children}
    </p>
  );
}

function ProcessSection() {
  const boardImgStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: vw(16),
    border: `1px solid ${CARD_BORDER}`,
  };

  return (
    <>
      {/* on the whiteboard */}
      <motion.section {...appear} style={{ padding: `${vw(60)} ${vw(120)} 0` }}>
        <div style={{ textAlign: 'center', marginBottom: vw(34) }}>
          <SectionTag>The process</SectionTag>
          <SubSectionTitle>On the whiteboard</SubSectionTitle>
        </div>
        <img
          src={`${IMG}/process-sketches.png`}
          alt="Flow sketches, frog and bunny doodles, and whiteboard photos with sticky notes"
          decoding="async"
          style={boardImgStyle}
        />
        <ProcessCaption>
          Rough flows, doodles of the frog and bunny, and a whiteboard where the
          journey got worked out
        </ProcessCaption>
      </motion.section>

      {/* the figjam */}
      <motion.section {...appear} style={{ padding: `${vw(90)} ${vw(120)} 0` }}>
        <div style={{ textAlign: 'center', marginBottom: vw(34) }}>
          <SubSectionTitle>The FigJam</SubSectionTitle>
        </div>
        <img
          src={`${IMG}/process-figjam.png`}
          alt="The Potato persona beside the planning board with user intent, references and ideas mapped stage by stage"
          decoding="async"
          style={boardImgStyle}
        />
        
      </motion.section>

      {/* the brand */}
      <motion.section {...appear} style={{ padding: `${vw(90)} ${vw(120)} 0` }}>
        <div style={{ textAlign: 'center', marginBottom: vw(34) }}>
          <SubSectionTitle>The brand</SubSectionTitle>
        </div>
        <img
          src={`${IMG}/brand-board.png`}
          alt="Typography specs in Baloo 2, the colour palette with hex codes, and the round control icons"
          decoding="async"
          style={boardImgStyle}
        />
        
      </motion.section>
    </>
  );
}

function MapArrow({ from: p0, to: p2, bend = 30 }: { from: [number, number]; to: [number, number]; bend?: number }) {
  const [x0, y0] = p0;
  const [x2, y2] = p2;
  const dx = x2 - x0;
  const dy = y2 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const cx = (x0 + x2) / 2 + (-dy / len) * bend;
  const cy = (y0 + y2) / 2 + (dx / len) * bend;
  const adx = x2 - cx;
  const ady = y2 - cy;
  const alen = Math.hypot(adx, ady) || 1;
  const ux = adx / alen;
  const uy = ady / alen;
  const hs = 12;
  const ca = Math.cos(0.5);
  const sa = Math.sin(0.5);
  const h1x = x2 - hs * (ux * ca - uy * sa);
  const h1y = y2 - hs * (uy * ca + ux * sa);
  const h2x = x2 - hs * (ux * ca + uy * sa);
  const h2y = y2 - hs * (uy * ca - ux * sa);
  return (
    <g fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x0} ${y0} Q ${cx} ${cy} ${x2} ${y2}`} />
      <path d={`M ${h1x} ${h1y} L ${x2} ${y2} L ${h2x} ${h2y}`} />
    </g>
  );
}

interface MapNote {
  text: string;
  x: number;
  y: number;
  rot: number;
  from: [number, number];
  to: [number, number];
  bend?: number;
}

const NOTE_NL = String.fromCharCode(10);

const mapNotes: MapNote[] = [
  { text: 'finished levels' + NOTE_NL + 'go green', x: 15, y: 490, rot: -3, from: [145, 538], to: [192, 512], bend: 16 },
  { text: 'level 4 glows,' + NOTE_NL + 'START keeps bobbing', x: 85, y: 135, rot: -2, from: [330, 190], to: [497, 272], bend: -46 },
  { text: 'locked till' + NOTE_NL + 'you get here', x: 880, y: 25, rot: 2, from: [888, 80], to: [806, 128], bend: -20 },
  { text: 'the frog waits' + NOTE_NL + 'with you', x: 845, y: 455, rot: 3, from: [850, 462], to: [645, 382], bend: 42 },
];

function MapSection() {
  return (
    <motion.section {...appear} style={{ padding: `${vw(120)} ${vw(120)} 0` }}>
      <div style={{ textAlign: 'center' }}>
        <SectionTag>The world</SectionTag>
      </div>

      <div style={{ position: 'relative', width: vw(1040), margin: `${vw(10)} auto 0` }}>
        {/* the map's cream sky matches the page, so the island just floats here */}
        <img
          src={`${IMG}/levels-map.png`}
          alt="The Melody Mountain level map with annotations"
          decoding="async"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />

        {/* all arrows share one overlay, drawn from each label to its target */}
        <svg
          viewBox="0 0 1040 676"
          aria-hidden
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          {mapNotes.map((n) => (
            <MapArrow key={n.text} from={n.from} to={n.to} bend={n.bend} />
          ))}
        </svg>

        {mapNotes.map((n) => (
          <span
            key={n.text}
            style={{
              position: 'absolute',
              left: vw(n.x),
              top: vw(n.y),
              fontFamily: HEADING_FONT,
              fontWeight: 500,
              fontSize: vw(15),
              lineHeight: 1.35,
              color: NAVY,
              whiteSpace: 'pre',
              transform: `rotate(${n.rot}deg)`,
              textAlign: 'center',
            }}
          >
            {n.text}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

function TheorySection() {
  return (
    <motion.section {...appear} style={{ padding: `${vw(120)} ${vw(120)} 0`, textAlign: 'center' }}>
      <SectionTag>Theory, but make it a story</SectionTag>
      <SubSectionTitle>Help Bunny cross the bridge</SubSectionTitle>
      <BodyText width={760}>
        The theory task is a little rescue mission. The bridge is a keyboard with
        its keys jumbled, and the kid drags them back in order so Bunny can cross.
      </BodyText>
      <div style={{ display: 'flex', gap: vw(28), marginTop: vw(34) }}>
        <ScreenCard
          src={`${IMG}/theory-1.png`}
          alt="Theory task, Bunny stuck on the jumbled keyboard bridge"
          caption="Keys out of order, Bunny can't cross"
          width="50%"
        />
        <ScreenCard
          src={`${IMG}/theory-2.png`}
          alt="Theory task solved, Bunny crosses and says thank you"
          caption="Keys back in order. “Yayy! good job”"
          width="50%"
        />
      </div>
    </motion.section>
  );
}

function PracticeSection() {
  return (
    <motion.section {...appear} style={{ padding: `${vw(120)} ${vw(120)} 0`, textAlign: 'center' }}>
      <SectionTag>The practice studio</SectionTag>
      <SubSectionTitle>3, 2, 1, GO</SubSectionTitle>
      <BodyText width={700}>
        The countdown presses the piano keys itself. Then bars fall onto the
        keyboard, coloured to match their keys, and the mic listens while the kid
        plays along.
      </BodyText>

      <div style={{ display: 'flex', gap: vw(28), marginTop: vw(34) }}>
        <ScreenCard
          src={`${IMG}/countdown-3.png`}
          alt="Countdown screen showing 3 with a piano key pressed"
          caption="On “3”, the right key presses itself"
          width="50%"
        />
        <ScreenCard
          src={`${IMG}/countdown-go.png`}
          alt="Countdown GO screen"
          caption="On GO, all three keys down"
          width="50%"
        />
      </div>

      <div style={{ marginTop: vw(28) }}>
        <ScreenCard
          src={`${IMG}/practice-bars.png`}
          alt="Practice studio with falling note bars synced to lit piano keys"
          caption="Falling bars sync with the key presses while the mic listens"
        />
      </div>

      <div style={{ marginTop: vw(28) }}>
        <ScreenCard
          src={`${IMG}/practice-intro.png`}
          alt="Practice intro screen with the frog and a START button"
          caption="Before the run: the frog sets the scene, START pulses gently for attention"
        />
      </div>
    </motion.section>
  );
}

function PrototypeVideoSection() {
  return (
    <motion.section {...appear} style={{ padding: `${vw(120)} ${vw(120)} 0` }}>
      <div style={{ textAlign: 'center', marginBottom: vw(34) }}>
        <SectionTag>The prototype, playing</SectionTag>
        <SubSectionTitle>How it all came together</SubSectionTitle>
      </div>
      <div style={{ width: vw(1000), margin: '0 auto' }}>
        <video
          ref={(el) => {
            if (el) el.muted = true;
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${IMG}/levels-map.png`}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: vw(16),
            border: `1px solid ${CARD_BORDER}`,
            boxShadow: '0 18px 40px rgba(19, 18, 63, 0.10)',
          }}
        >
          <source src={`${BASE_URL}videos/artium-proto.mp4`} type="video/mp4" />
        </video>
        
      </div>
    </motion.section>
  );
}

function ArtiumFooter() {
  return (
    <footer style={{ position: 'relative', marginTop: vw(120) }}>
      <div style={{ textAlign: 'center', paddingBottom: vw(150) }}>
        <motion.div {...appear}>
          <h2
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 800,
              fontSize: vw(44),
              color: NAVY,
              margin: 0,
            }}
          >
            Want to press START yourself?
          </h2>
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: HEADING_FONT,
              fontWeight: 700,
              fontSize: vw(17),
              letterSpacing: '0.08em',
              color: '#ffffff',
              backgroundColor: CORAL,
              borderRadius: vw(999),
              padding: `${vw(15)} ${vw(38)}`,
              marginTop: vw(26),
              textDecoration: 'none',
              boxShadow: '0 10px 24px rgba(240, 138, 118, 0.35)',
            }}
          >
            Try the prototype
          </a>
        </motion.div>
      </div>

      {/* sandy ground with the celebrating frog, like the bottom of every screen */}
      <div style={{ position: 'relative', height: vw(120), overflow: 'visible' }}>
        <svg
          width="100%"
          viewBox="0 0 1280 120"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, display: 'block' }}
          aria-hidden
        >
          <path d="M0 46 Q 320 8 640 40 T 1280 30 L1280 120 L0 120 Z" fill={SAND} />
          <path d="M0 66 Q 360 30 720 58 T 1280 52 L1280 120 L0 120 Z" fill="#E4B569" opacity="0.55" />
        </svg>
        <img
          src={`${IMG}/frog.svg`}
          alt=""
          decoding="async"
          style={{
            position: 'absolute',
            left: vw(120),
            bottom: vw(28),
            width: vw(140),
            height: 'auto',
          }}
        />
      </div>
    </footer>
  );
}

export default ArtiumCaseStudyPage;
