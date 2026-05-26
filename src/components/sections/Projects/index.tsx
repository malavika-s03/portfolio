import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { scrollAppear, projectSectionAppear, SCROLL_EASE } from '@/lib/animations';
import { useLenis } from '@/components/shared/SmoothScroll';

const BASE = import.meta.env.BASE_URL;

const ACCORDION_DURATION = 0.8;

function bezierEasing(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const solveCurveX = (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-6) return t;
      const d = (3 * ax * t + 2 * bx) * t + cx;
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    return t;
  };
  return (x: number) => x <= 0 ? 0 : x >= 1 ? 1 : sampleY(solveCurveX(x));
}

const accordionEasing = bezierEasing(...SCROLL_EASE);
const yulu = projects[0];
const vectorVault = projects[1];
const zoho = projects[3];
const district = projects[4];

function DarkProjectsSection() {
  const yuluLink = '/project/yulu';
  const vvLink = '/project/vector-vault';

  return (
    <div className="bg-black w-full relative overflow-hidden" style={{ height: '92.42vw' }}>
      {/* YULU title */}
      <motion.p
        className="absolute font-medium text-[#fffefe]"
        style={{ left: '3.98vw', top: '2.5vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw', width: '66.48vw' }}
        {...projectSectionAppear.title}
      >
        {yulu.title}
      </motion.p>

      {/* YULU image */}
      <motion.img
        src={yulu.thumbnail}
        alt={yulu.title}
        className="absolute object-cover"
        style={{ left: '4.41vw', top: '11.37vw', width: '45.39vw', height: '31.56vw', maxWidth: 'none' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* YULU description */}
      <motion.p
        className="absolute font-normal text-[#fffbfb]"
        style={{ left: '55.31vw', top: '15.94vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {yulu.description}
      </motion.p>

      {/* YULU button */}
      <motion.div className="absolute" style={{ left: '55.31vw', top: '29.53vw' }} {...projectSectionAppear.button}>
        <Link
          to={yuluLink}
          className="inline-flex items-center justify-center bg-white text-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw' }}
        >
          VIew Project →
        </Link>
      </motion.div>

      {/* VECTOR VAULT title */}
      <motion.p
        className="absolute font-medium text-[#fffefe]"
        style={{ left: '44.61vw', top: '46.25vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
        {...projectSectionAppear.title}
      >
        {vectorVault.title}
      </motion.p>

      {/* VECTOR VAULT main image */}
      <motion.img
        src={vectorVault.thumbnail}
        alt={vectorVault.title}
        className="absolute object-cover"
        style={{ left: '50.87vw', top: '55.39vw', width: '40.87vw', height: '25.16vw', maxWidth: 'none' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* VECTOR VAULT floating images */}
      {vectorVault.floatingImages && (
        <>
          <motion.img src={vectorVault.floatingImages[0]} alt="" loading="lazy" className="absolute object-contain" style={{ left: '83.24vw', top: '58.31vw', width: '8.76vw', height: '8.32vw', maxWidth: 'none' }} {...projectSectionAppear.floatingImage(0)} />
          <motion.img src={vectorVault.floatingImages[1]} alt="" loading="lazy" className="absolute object-contain" style={{ left: '50.00vw', top: '67.95vw', width: '8.37vw', height: '8.39vw', maxWidth: 'none' }} {...projectSectionAppear.floatingImage(1)} />
          <motion.img src={vectorVault.floatingImages[2]} alt="" loading="lazy" className="absolute object-contain" style={{ left: '65.84vw', top: '60.27vw', width: '4.20vw', height: '7.00vw', maxWidth: 'none' }} {...projectSectionAppear.floatingImage(2)} />
          <motion.img src={vectorVault.floatingImages[3]} alt="" loading="lazy" className="absolute object-contain" style={{ left: '78.78vw', top: '63.84vw', width: '6.31vw', height: '6.91vw', maxWidth: 'none' }} {...projectSectionAppear.floatingImage(3)} />
          <motion.img src={vectorVault.floatingImages[4]} alt="" loading="lazy" className="absolute object-contain" style={{ left: '58.50vw', top: '67.25vw', width: '6.95vw', height: '6.97vw', maxWidth: 'none' }} {...projectSectionAppear.floatingImage(4)} />
        </>
      )}

      {/* VECTOR VAULT description */}
      <motion.p
        className="absolute font-normal text-[#fffbfb]"
        style={{ left: '6.88vw', top: '59.77vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {vectorVault.description}
      </motion.p>

      {/* VECTOR VAULT button */}
      <motion.div className="absolute" style={{ left: '6.88vw', top: '78.05vw' }} {...projectSectionAppear.button}>
        <Link
          to={vvLink}
          className="inline-flex items-center justify-center bg-white text-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw' }}
        >
          VIew Project →
        </Link>
      </motion.div>

      {/* Video player widget */}
      <div className="absolute" style={{ left: '71.33vw', top: '80.55vw' }}>
        <div className="relative" style={{ width: '8.68vw', height: '4.11vw' }}>
          <img
            src={`${BASE}images/projects/video-frame.svg`}
            alt=""
            className="absolute"
            style={{ left: '0', top: '0.53vw', width: '8.68vw', height: '4.11vw' }}
          />
          <div
            className="absolute"
            style={{
              left: '0.64vw',
              top: '0',
              width: '7.33vw',
              height: '3.28vw',
              backgroundColor: '#4c4c4c',
              border: '0.47vw solid #666',
              borderRadius: '0.78vw',
            }}
          >
            <img
              src={`${BASE}images/projects/video-frame-overlay.svg`}
              alt=""
              className="absolute"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '1.09vw', height: '1.25vw' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandedProjectsContent() {
  const zohoLink = `/project/${zoho.slug}`;
  const districtLink = `/project/${district.slug}`;

  return (
    <div className="relative w-full" style={{ height: '92vw' }}>
      {/* ── ZOHO CARD (image LEFT, text RIGHT — matching Yulu pattern) ── */}

      {/* ZOHO title */}
      <motion.p
        className="absolute font-medium text-[#fffefe]"
        style={{ left: '3.98vw', top: '2.5vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw', width: '66.48vw' }}
        {...projectSectionAppear.title}
      >
        {zoho.title}
      </motion.p>

      {/* Smart Reconcile overlay text */}
      <motion.p
        className="absolute font-black text-center"
        style={{ left: '3.98vw', top: '13.19vw', width: '44.45vw', fontSize: '1.875vw', lineHeight: '2.11vw', color: '#dbbe27' }}
        {...projectSectionAppear.text}
      >
        {zoho.overlayText}
      </motion.p>

      {/* ZOHO image */}
      <motion.img
        src={zoho.thumbnail}
        alt={zoho.title}
        className="absolute"
        style={{ left: '3.98vw', top: '17.83vw', width: '44.45vw', height: '19.84vw', maxWidth: 'none' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* ZOHO description */}
      <motion.p
        className="absolute font-normal text-[#fffbfb]"
        style={{ left: '55.31vw', top: '12.03vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {zoho.description}
      </motion.p>

      {/* ZOHO button */}
      <motion.div className="absolute" style={{ left: '55.31vw', top: '31.09vw' }} {...projectSectionAppear.button}>
        <Link
          to={zohoLink}
          className="inline-flex items-center justify-center bg-white text-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw' }}
        >
          VIew Project →
        </Link>
      </motion.div>

      {/* ── DISTRICT CARD (text LEFT, image RIGHT — matching VV pattern) ── */}

      {/* DISTRICT title */}
      <motion.p
        className="absolute font-medium text-[#fffefe]"
        style={{ left: '50.08vw', top: '46.25vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
        {...projectSectionAppear.title}
      >
        {district.title}
      </motion.p>

      {/* DISTRICT image */}
      <motion.img
        src={district.thumbnail}
        alt={district.title}
        className="absolute object-cover"
        style={{ left: '50.70vw', top: '55.63vw', width: '42.73vw', height: '33.44vw', maxWidth: 'none', borderRadius: '0.78vw' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* DISTRICT description */}
      <motion.p
        className="absolute font-normal text-[#fffbfb]"
        style={{ left: '6.88vw', top: '59.77vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {district.description}
      </motion.p>

      {/* DISTRICT button */}
      <motion.div className="absolute" style={{ left: '6.88vw', top: '78.05vw' }} {...projectSectionAppear.button}>
        <Link
          to={districtLink}
          className="inline-flex items-center justify-center bg-white text-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw' }}
        >
          VIew Project →
        </Link>
      </motion.div>
    </div>
  );
}

function ViewMoreToggle({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <div
      className="bg-black w-full flex flex-col items-center"
      style={{ padding: '3vw 0 4vw' }}
    >
      <button
        onClick={onToggle}
        className="rounded-full flex items-center justify-center transition group"
        style={{
          width: '4.38vw',
          height: '4.38vw',
          borderWidth: '0.125vw',
          borderStyle: 'solid',
          borderColor: '#ffffff',
          background: 'transparent',
        }}
        aria-label={expanded ? 'Show fewer projects' : 'View more projects'}
      >
        <motion.svg
          style={{ width: '1.56vw', height: '1.56vw' }}
          viewBox="0 0 20 20"
          fill="none"
          className="text-white"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M10 4v12M16 10l-6 6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <span
        className="font-normal whitespace-nowrap"
        style={{
          fontSize: '0.94vw',
          lineHeight: '1.25vw',
          letterSpacing: '0.023vw',
          marginTop: '1.25vw',
          color: '#ffffff',
        }}
      >
        {expanded ? 'see less' : 'View more projects'}
      </span>
    </div>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleToggle = useCallback(() => {
    if (expanded) {
      if (lenis && toggleRef.current) {
        const rect = toggleRef.current.getBoundingClientRect();
        const toggleAbsTop = rect.top + window.scrollY;
        const expandedHeight = window.innerWidth * 0.92;
        const toggleFinalTop = toggleAbsTop - expandedHeight;
        const centerOffset = (window.innerHeight - rect.height) / 2;

        setExpanded(false);
        lenis.scrollTo(Math.max(0, toggleFinalTop - centerOffset), {
          duration: ACCORDION_DURATION,
          easing: accordionEasing,
        });
      } else {
        setExpanded(false);
      }
    } else {
      setExpanded(true);
    }
  }, [expanded, lenis]);

  return (
    <section id="projects" className="w-full">
      {/* PROJECTS header — white bg, same pattern as Work Experience bar but inverted */}
      <div className="bg-white w-full relative overflow-hidden" style={{ height: '7.5vw' }}>
        <motion.h2
          className="absolute font-medium text-[#0a0a0a]"
          style={{ left: '3.98vw', top: '-0.625vw', fontSize: '4.30vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw', margin: 0 }}
          {...scrollAppear.sectionHeader}
        >
          PROJECTS
        </motion.h2>
      </div>

      {/* Single bg-black wrapper eliminates sub-pixel gaps between sections */}
      <div className="bg-black">
        <DarkProjectsSection />

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded-projects"
              className="w-full overflow-hidden"
              style={{ willChange: 'height' }}
              initial={{ height: 0 }}
              animate={{ height: '92vw' }}
              exit={{ height: 0 }}
              transition={{ duration: ACCORDION_DURATION, ease: SCROLL_EASE }}
            >
              <ExpandedProjectsContent />
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={toggleRef}>
          <ViewMoreToggle expanded={expanded} onToggle={handleToggle} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
