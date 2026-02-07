import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { useInView } from '@/hooks/useInView';
import { Container } from '@/components/layout/Container';
import { profile } from '@/data/profile';

export function About() {
  const [expanded, setExpanded] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();
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
    <section ref={ref} id="about" className="py-20 md:py-32 border-t border-border">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-medium"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={textVariants}
          >
            about.
          </motion.h2>

          <motion.button
            onClick={() => setExpanded(!expanded)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => resetCursor()}
            className="px-6 py-2 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={textVariants}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>

        {/* Main About Text */}
        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-5xl"
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
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-border">
                {/* Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-[3/4] bg-muted rounded-lg overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Philosophy & Details */}
                <div className="flex flex-col justify-center space-y-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    {profile.philosophy}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">Location</span>
                      <p className="text-lg font-medium">{profile.location}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">Role</span>
                      <p className="text-lg font-medium">{profile.title}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

export default About;
