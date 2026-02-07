import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { scrollAppear, FRAMER_EASE } from '@/lib/animations';

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="bg-white z-[2] relative w-full flex flex-col items-center px-5 md:px-[30px] lg:px-20 pt-[30px] md:pt-20 lg:pt-20 pb-[70px] md:pb-[110px] lg:pb-[160px] overflow-hidden"
    >
      <div className="w-full max-w-[1600px] flex flex-col items-center gap-10 lg:gap-20">
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-between w-full"
          {...scrollAppear.sectionHeader}
        >
          <h2 className="text-[19px] md:text-[24px] lg:text-[30px] font-medium leading-[1.2em] tracking-[-0.03em]">
            about.
          </h2>

          <button
            onClick={() => setExpanded(!expanded)}
            className="px-[26px] py-4 text-base font-medium tracking-[-0.04em] leading-[1.2em] bg-[#f5f5f5] hover:bg-foreground hover:text-background transition-colors cursor-pointer"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>

        {/* Main About Text - Large, justified */}
        <motion.div
          className="w-full"
          {...scrollAppear.textBlock}
        >
          <p className="text-[28px] md:text-[40px] lg:text-[50px] font-medium leading-[1.1em] tracking-[-0.06em] text-justify max-w-[728px]">
            {profile.about}
          </p>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: FRAMER_EASE }}
              className="overflow-hidden w-full"
            >
              <div className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full">
                {/* Portrait - aspect ratio 1.3825 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: FRAMER_EASE }}
                  className="w-full md:w-[350px] lg:w-[553px] flex-shrink-0"
                >
                  <div style={{ aspectRatio: '1.3825' }} className="overflow-hidden">
                    <img
                      src="https://framerusercontent.com/images/7hMiTdrGlu2C0xyOGVzHXNKngfU.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Philosophy Text - Right side, bottom-aligned */}
                <div className="flex flex-col justify-end flex-1">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: FRAMER_EASE }}
                    className="text-base lg:text-xl font-medium leading-[1.2em] tracking-[-0.04em] text-justify max-w-[311px] text-foreground"
                  >
                    {profile.philosophy}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default About;
