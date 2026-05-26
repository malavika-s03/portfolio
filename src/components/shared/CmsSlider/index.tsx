import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSlideCard, vw } from '@/pages/PeakmindCmsStudy';
import { heroSlides, COLORS } from '@/pages/PeakmindCmsStudy/data';

const slideVariants = {
  enter: (dir: number) => ({ x: `${dir * 18}%`, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: `${dir * -18}%`, opacity: 0 }),
};

export function CmsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const directionRef = useRef(1);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      directionRef.current = 1;
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  useEffect(() => {
    const link = document.createElement('link');
    link.id = 'cms-slider-font';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000&display=swap';
    document.head.appendChild(link);
    return () => {
      const el = document.getElementById('cms-slider-font');
      if (el) el.remove();
    };
  }, []);

  const goToSlide = (index: number) => {
    directionRef.current = index > activeSlide ? 1 : -1;
    setActiveSlide(index);
    resetTimer();
  };

  const slide = heroSlides[activeSlide];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Card area */}
      <div
        style={{
          width: vw(515.6),
          height: vw(310),
          overflow: 'hidden',
          borderRadius: vw(12),
        }}
        onMouseEnter={() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }}
        onMouseLeave={() => resetTimer()}
      >
        <AnimatePresence mode="wait" custom={directionRef.current}>
          <motion.div
            key={activeSlide}
            custom={directionRef.current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            style={{ width: '100%', height: '100%' }}
          >
            <HeroSlideCard index={activeSlide} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Title, description, dots */}
      <div
        style={{
          width: vw(515.6),
          marginTop: vw(20),
          textAlign: 'center',
        }}
        onMouseEnter={() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }}
        onMouseLeave={() => resetTimer()}
      >
        <div style={{ overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={directionRef.current}>
            <motion.div
              key={activeSlide}
              custom={directionRef.current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: vw(28),
                  lineHeight: vw(36),
                  color: COLORS.orange,
                }}
              >
                {slide.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: vw(16),
                  lineHeight: vw(24),
                  color: COLORS.textSecondary,
                }}
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: vw(8),
            marginTop: vw(8),
          }}
        >
          {heroSlides.map((_, i) => {
            const isActive = i === activeSlide;
            const isVisited = i < activeSlide;
            let bgColor = '#d9d9d9';
            if (isActive) bgColor = slide.dotColor;
            else if (isVisited) bgColor = heroSlides[i].dotColor;
            return (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  width: isActive ? vw(32) : vw(8),
                  height: vw(8),
                  borderRadius: vw(4),
                  backgroundColor: bgColor,
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CmsSlider;
