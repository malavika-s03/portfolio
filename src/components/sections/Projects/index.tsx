import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { scrollAppear, projectSectionAppear, FRAMER_EASE } from '@/lib/animations';

const BASE = import.meta.env.BASE_URL;
const yulu = projects[0];
const vectorVault = projects[1];

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

function LightProjectsSection() {
  const peakmind = projects[2];
  const zoho = projects[3];
  const peakmindLink = '/work/peakmind-student';
  const zohoLink = `/project/${zoho.slug}`;

  return (
    <div className="bg-white w-full relative overflow-hidden" style={{ height: '99.61vw' }}>
      {/* PEAKMIND title */}
      <motion.p
        className="absolute font-medium text-black"
        style={{ left: '3.98vw', top: '2.5vw', width: '66.48vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
        {...projectSectionAppear.title}
      >
        {peakmind.title}
      </motion.p>

      {/* PEAKMIND image — negative left, extends past container edge */}
      <motion.img
        src={peakmind.thumbnail}
        alt={peakmind.title}
        className="absolute"
        style={{ left: '-4.06vw', top: '8.52vw', width: '58.59vw', height: '39.06vw', maxWidth: 'none' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* PEAKMIND description */}
      <motion.p
        className="absolute font-normal text-black"
        style={{ left: '55.31vw', top: '15.94vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {peakmind.description}
      </motion.p>

      {/* PEAKMIND button */}
      <motion.div className="absolute" style={{ left: '55.31vw', top: '27.19vw' }} {...projectSectionAppear.button}>
        <Link
          to={peakmindLink}
          className="inline-flex items-center justify-center rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw', backgroundColor: '#000000', color: '#ffffff' }}
        >
          VIew Project →
        </Link>
      </motion.div>

      {/* ZOHO title */}
      <motion.p
        className="absolute font-medium text-black"
        style={{ left: '51.48vw', top: '46.25vw', width: '66.48vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
        {...projectSectionAppear.title}
      >
        {zoho.title}
      </motion.p>

      {/* ZOHO "Smart Reconcile" text */}
      <motion.p
        className="absolute font-black text-center"
        style={{ left: '51.72vw', top: '55.47vw', width: '38.52vw', height: '11.48vw', fontSize: '1.875vw', lineHeight: '2.11vw', color: '#006fda' }}
        {...projectSectionAppear.text}
      >
        {zoho.overlayText}
      </motion.p>

      {/* ZOHO image */}
      <motion.img
        src={zoho.thumbnail}
        alt={zoho.title}
        className="absolute"
        style={{ left: '46.64vw', top: '60.55vw', width: '48.67vw', height: '21.72vw', maxWidth: 'none' }}
        loading="lazy"
        {...projectSectionAppear.image}
      />

      {/* ZOHO description */}
      <motion.p
        className="absolute font-normal text-black"
        style={{ left: '6.88vw', top: '59.77vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
        {...projectSectionAppear.text}
      >
        {zoho.description}
      </motion.p>

      {/* ZOHO button */}
      <motion.div className="absolute" style={{ left: '6.88vw', top: '71.02vw' }} {...projectSectionAppear.button}>
        <Link
          to={zohoLink}
          className="inline-flex items-center justify-center rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
          style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw', backgroundColor: '#000000', color: '#ffffff' }}
        >
          VIew Project →
        </Link>
      </motion.div>

      {/* View More Projects CTA — large rounded gradient, clipped at bottom by section overflow:hidden */}
      <motion.div
        className="absolute"
        style={{
          left: '-2.66vw',
          top: '77.34vw',
          width: '105.31vw',
          height: '30.63vw',
          background: 'linear-gradient(180deg, #ffffff 0%, #c8c8c9 100%)',
          borderRadius: '1.25vw',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: FRAMER_EASE }}
        viewport={{ once: true }}
      >
        <div
          className="absolute flex flex-col items-center"
          style={{ left: '50%', transform: 'translateX(-50%)', top: '9.92vw' }}
        >
          <button
            className="rounded-full flex items-center justify-center hover:bg-black hover:text-white transition group"
            style={{ width: '4.38vw', height: '4.38vw', borderWidth: '0.125vw', borderStyle: 'solid', borderColor: '#000000', background: 'transparent' }}
            aria-label="View more projects"
          >
            <svg style={{ width: '1.56vw', height: '1.56vw' }} viewBox="0 0 20 20" fill="none" className="text-current">
              <path d="M10 4v12M16 10l-6 6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span
            className="font-normal whitespace-nowrap"
            style={{ fontSize: '0.94vw', lineHeight: '1.25vw', letterSpacing: '0.023vw', marginTop: '1.25vw', color: '#0a0a0a' }}
          >
            View more projects
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="w-full">
      {/* PROJECTS header — white bg */}
      <div className="bg-white w-full">
        <div style={{ padding: '1.17vw 3.98vw' }}>
          <motion.h2
            className="font-medium tracking-[-0.014em] text-[#0a0a0a]"
            style={{ fontSize: '4.30vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
            {...scrollAppear.sectionHeader}
          >
            PROJECTS
          </motion.h2>
        </div>
      </div>

      {/* Dark section — Yulu + Vector Vault (absolute positioning from Figma) */}
      <DarkProjectsSection />

      {/* Light section — Peakmind + Zoho (absolute positioning from Figma) */}
      <LightProjectsSection />
    </section>
  );
}

export default Projects;
