import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectSectionAppear, scrollAppear } from '@/lib/animations';
import { CmsSlider } from '@/components/shared/CmsSlider';

const BASE = import.meta.env.BASE_URL;

export function WorkExperience() {
  return (
    <section id="work-experience" className="w-full">
      {/* White separator */}
      <div className="bg-white w-full" style={{ height: '1.41vw' }} />

      {/* White title bar with underline */}
      <div className="bg-white w-full relative overflow-hidden" style={{ height: '12.19vw' }}>
        <motion.p
          className="absolute font-medium text-[#0e0e0e]"
          style={{ left: '3.67vw', top: '0vw', fontSize: '5.0vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
          {...scrollAppear.sectionHeader}
        >
          WORK EXPERIENCE
        </motion.p>
        <div
          className="absolute bg-[#0e0e0e]"
          style={{ left: '4.06vw', top: '10.16vw', width: '89.92vw', height: '1px' }}
        />
      </div>

      {/* White content area */}
      <div className="bg-white w-full relative overflow-hidden" style={{ height: '99.61vw' }}>
        {/* ── PEAKMIND STUDENT APP (image LEFT, text RIGHT) ── */}

        <motion.p
          className="absolute font-medium text-black"
          style={{ left: '3.98vw', top: '2.5vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
          {...projectSectionAppear.title}
        >
          PEAKMIND STUDENT APP
        </motion.p>

        {/* Fox mascot + annotation illustration */}
        <motion.img
          src={`${BASE}images/projects/peakmind-illustration.png`}
          alt="PeakMind Student App"
          width={480}
          height={288}
          decoding="async"
          className="absolute"
          style={{ left: '4.69vw', top: '12.19vw', width: '33.36vw', height: '20.0vw', maxWidth: 'none' }}
          loading="lazy"
          {...projectSectionAppear.image}
        />

        {/* Engagement badge */}
        <motion.img
          src={`${BASE}images/projects/peakmind-badge.png`}
          alt="4 → 7 messages per session"
          width={420}
          height={65}
          decoding="async"
          className="absolute"
          style={{ left: '6.56vw', top: '32.97vw', width: '29.14vw', height: '4.53vw', maxWidth: 'none' }}
          loading="lazy"
          {...projectSectionAppear.image}
        />

        {/* Student app description */}
        <motion.p
          className="absolute font-normal text-black"
          style={{ left: '55.31vw', top: '12.03vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
          {...projectSectionAppear.text}
        >
          The project focused on redesigning the Break page for PeakMind to create a calmer and more emotionally supportive experience for students. The solution addressed issues of overwhelming wellness tools, unclear navigation, and low engagement by simplifying the interface and making support resources easier to access during stressful moments.
        </motion.p>

        {/* Student app button */}
        <motion.div className="absolute" style={{ left: '55.31vw', top: '31.09vw' }} {...projectSectionAppear.button}>
          <Link
            to="/work/peakmind-student"
            className="inline-flex items-center justify-center bg-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
            style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw', color: '#ffffff' }}
          >
            VIew Project →
          </Link>
        </motion.div>

        {/* ── CMS PLATFORM FOR SCHOOLS (text LEFT, gallery RIGHT) ── */}

        <motion.p
          className="absolute font-medium text-black"
          style={{ left: '40.0vw', top: '46.25vw', fontSize: '3.75vw', lineHeight: '7.03vw', letterSpacing: '-0.142vw' }}
          {...projectSectionAppear.title}
        >
          CMS PLATFORM FOR SCHOOLS
        </motion.p>

        {/* CMS description */}
        <motion.p
          className="absolute font-normal text-black"
          style={{ left: '6.88vw', top: '59.77vw', width: '36.72vw', fontSize: '1.56vw', lineHeight: '1.90vw' }}
          {...projectSectionAppear.text}
        >
          A case management platform helping schools coordinate mental wellness programs, student support, and safety reporting.
        </motion.p>

        {/* CMS button */}
        <motion.div className="absolute" style={{ left: '6.88vw', top: '71.02vw' }} {...projectSectionAppear.button}>
          <Link
            to="/work/peakmind-cms"
            className="inline-flex items-center justify-center bg-black rounded-full font-medium hover:opacity-80 transition-opacity no-underline"
            style={{ width: '11.17vw', height: '3.75vw', fontSize: '1.09vw', lineHeight: '1.56vw', color: '#ffffff' }}
          >
            VIew Project →
          </Link>
        </motion.div>

        {/* CMS Slider — reused from case study page, scaled from 1144-base to 1280-base */}
        <motion.div
          className="absolute"
          style={{ left: '49.45vw', top: '57.03vw', width: '40.28vw', overflow: 'hidden' }}
          {...projectSectionAppear.image}
        >
          <div style={{ transform: 'scale(0.89375)', transformOrigin: '0 0', width: '45.07vw' }}>
            <CmsSlider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkExperience;
