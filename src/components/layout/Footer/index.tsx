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
    <footer ref={ref} id="contact" className="bg-foreground text-background py-20 md:py-32">
      <Container>
        <div className="space-y-12">
          {/* CTA Text */}
          <div className="max-w-4xl">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0}
              variants={textVariants}
            >
              Curious about what we can create together?
            </motion.h2>
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight opacity-60 mt-2"
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
              className="inline-flex items-center px-8 py-4 bg-background text-foreground font-medium rounded-full hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>

            {profile.available && (
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm opacity-80">Available For Work</span>
              </div>
            )}
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div
            className="flex flex-wrap items-center justify-between pt-12 border-t border-background/20"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            variants={textVariants}
          >
            <div className="flex gap-6">
              {Object.entries(profile.social).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="text-sm capitalize opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {platform}
                  </a>
                )
              ))}
            </div>

            <p className="text-sm opacity-60 mt-4 md:mt-0">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
