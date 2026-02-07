import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { profile } from '@/data/profile';

export function About() {
  const [expanded, setExpanded] = useState(false);
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <section ref={ref} id="about" className="bg-white z-[2] relative px-5 md:px-10 lg:px-20 py-20 pb-40">
      <div className="w-full max-w-content mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-20">
          <motion.h2
            className="text-xl font-medium"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={textVariants}
          >
            about.
          </motion.h2>

          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="px-5 py-2 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={textVariants}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>

        {/* Main About Text - Large, justified */}
        <motion.p
          className="text-[32px] md:text-[40px] lg:text-[50px] font-medium leading-[1.1] tracking-[-0.06em] text-justify max-w-[728px]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          variants={textVariants}
        >
          {profile.about}
        </motion.p>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
              className="overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-20 mt-20 pl-0 md:pl-[100px]">
                {/* Portrait - Left side, aspect ratio 1.3825 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-[553px] flex-shrink-0"
                >
                  <div className="aspect-[1.3825] overflow-hidden">
                    <img
                      src="https://framerusercontent.com/images/7hMiTdrGlu2C0xyOGVzHXNKngfU.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Philosophy Text - Right side */}
                <div className="flex flex-col justify-end flex-1">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl leading-relaxed max-w-[311px] text-foreground"
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
