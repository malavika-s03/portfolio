import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { useInView } from '@/hooks/useInView';
import { Container } from '../Container';
import { profile } from '@/data/profile';

export function Footer() {
  const { setCursorVariant, resetCursor } = useCursor();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => resetCursor();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <footer ref={ref} id="contact" className="bg-black text-white min-h-screen flex flex-col">
      {/* Top spacer with curved edge from content above */}
      <div className="h-32 md:h-48" />

      <Container className="flex-1 flex flex-col justify-center">
        <div className="space-y-10">
          {/* CTA Text with gradient opacity */}
          <div className="max-w-5xl">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0}
              variants={textVariants}
            >
              Curious about what we can create together?
            </motion.h2>
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white/50 mt-1"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={1}
              variants={textVariants}
            >
              Let's bring something extraordinary to life!
            </motion.p>
          </div>

          {/* CTA Button & Status */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            variants={textVariants}
          >
            <a
              href={`mailto:${profile.email}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>

            {profile.available && (
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <span className="text-sm text-white/80">Available For Work</span>
              </div>
            )}
          </motion.div>
        </div>
      </Container>

      {/* Bottom contact info */}
      <motion.div
        className="pb-8 md:pb-12"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={3}
        variants={textVariants}
      >
        <Container>
          <div className="space-y-1">
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {profile.phone}
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="block text-sm text-white/80 hover:text-white transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </Container>
      </motion.div>
    </footer>
  );
}

export default Footer;
