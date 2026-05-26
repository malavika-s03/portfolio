import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectSectionAppear, scrollAppear } from '@/lib/animations';

const BASE = import.meta.env.BASE_URL;

const galleryCards = [
  { image: 'gallery-gratitude.png', title: 'Gratitude Wall', subtitle: 'Year 5 Project' },
  { image: 'gallery-kindness.png', title: 'Kindness Week', subtitle: 'School-wide' },
  { image: 'gallery-mindfulness.png', title: 'Mindfulness Art', subtitle: 'Year 3 Activity' },
];

export function WorkExperience() {
  return (
    <section className="w-full">
      {/* White separator bar — inverted pattern: mirrors InfoBar above PROJECTS */}
      <div className="bg-white w-full" style={{ height: '2.19vw' }} />

      {/* Dark title bar */}
      <div className="bg-black w-full relative overflow-hidden" style={{ height: '7.5vw' }}>
        <motion.p
          className="absolute font-medium text-white"
          style={{ left: '3.59vw', top: '-0.625vw', fontSize: '4.30vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
          {...scrollAppear.sectionHeader}
        >
          WORK EXPERIENCE : PEAKMIND
        </motion.p>
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
          className="absolute"
          style={{ left: '8.44vw', top: '11.88vw', width: '38.05vw', height: '23.36vw', maxWidth: 'none' }}
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

        {/* Gallery cards */}
        <motion.div
          className="absolute flex"
          style={{ left: '49.45vw', top: '57.03vw', gap: '1.25vw' }}
          {...projectSectionAppear.image}
        >
          {galleryCards.map((card) => (
            <div
              key={card.title}
              style={{
                width: '12.59vw',
                borderRadius: '1.09vw',
                border: '0.8px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
              }}
            >
              <img
                src={`${BASE}images/peakmind-cms/${card.image}`}
                alt={card.title}
                loading="lazy"
                className="object-cover w-full"
                style={{ height: '10vw', display: 'block' }}
              />
              <div style={{ padding: '0.94vw 0.94vw 0.94vw' }}>
                <p className="font-semibold" style={{ fontSize: '1.09vw', lineHeight: '1.56vw', color: '#101828', margin: 0 }}>
                  {card.title}
                </p>
                <p className="font-normal" style={{ fontSize: '0.94vw', lineHeight: '1.25vw', color: '#6a7282', margin: '0.31vw 0 0' }}>
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="absolute flex justify-center"
          style={{ left: '49.45vw', top: '74.03vw', width: '40.28vw', gap: '2.5vw' }}
          {...projectSectionAppear.text}
        >
          <div className="text-center">
            <p className="font-bold" style={{ fontSize: '1.875vw', lineHeight: '2.5vw', color: '#9810fa', margin: 0 }}>124</p>
            <p className="font-normal" style={{ fontSize: '0.94vw', lineHeight: '1.25vw', color: '#6a7282', margin: 0 }}>Total Entries</p>
          </div>
          <div className="text-center">
            <p className="font-bold" style={{ fontSize: '1.875vw', lineHeight: '2.5vw', color: '#9810fa', margin: 0 }}>8</p>
            <p className="font-normal" style={{ fontSize: '0.94vw', lineHeight: '1.25vw', color: '#6a7282', margin: 0 }}>Collections</p>
          </div>
          <div className="text-center">
            <p className="font-bold" style={{ fontSize: '1.875vw', lineHeight: '2.5vw', color: '#9810fa', margin: 0 }}>15</p>
            <p className="font-normal" style={{ fontSize: '0.94vw', lineHeight: '1.25vw', color: '#6a7282', margin: 0 }}>Classes</p>
          </div>
        </motion.div>

        {/* Gallery heading */}
        <motion.div
          className="absolute text-center"
          style={{ left: '50.0vw', top: '83.28vw', width: '40.28vw' }}
          {...projectSectionAppear.text}
        >
          <p className="font-bold" style={{ fontSize: '2.34vw', lineHeight: '2.81vw', color: '#5f21b7', margin: 0 }}>
            Gallery
          </p>
          <p className="font-normal" style={{ fontSize: '1.25vw', lineHeight: '1.875vw', color: '#4a5565', margin: '0.31vw 0 0' }}>
            Curated wellbeing activity documentation
          </p>
        </motion.div>

        {/* Dot navigation */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: '50.0vw', top: '87.97vw', width: '40.28vw', gap: '0.625vw' }}
        >
          <div style={{ width: '0.625vw', height: '0.625vw', borderRadius: '9999px', backgroundColor: '#d1d5db' }} />
          <div style={{ width: '0.625vw', height: '0.625vw', borderRadius: '9999px', backgroundColor: '#d1d5db' }} />
          <div style={{ width: '2.5vw', height: '0.625vw', borderRadius: '9999px', backgroundColor: '#5f21b7' }} />
          <div style={{ width: '0.625vw', height: '0.625vw', borderRadius: '9999px', backgroundColor: '#d1d5db' }} />
          <div style={{ width: '0.625vw', height: '0.625vw', borderRadius: '9999px', backgroundColor: '#d1d5db' }} />
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
