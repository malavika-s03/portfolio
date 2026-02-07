import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { profile } from '@/data/profile';

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

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
    <footer ref={ref} id="contact" className="bg-black text-white min-h-screen z-[1] relative flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-center px-5 md:px-10 lg:px-20 py-20">
        <div className="w-full max-w-content mx-auto">
          {/* CTA Text with gradient */}
          <motion.div
            className="mb-10"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={textVariants}
          >
            <h2
              className="text-[32px] md:text-[40px] lg:text-[50px] font-medium leading-[1.1] tracking-[-0.06em] gradient-text"
            >
              Curious about what we can create together?
              <br />
              Let's bring something extraordinary to life!
            </h2>
          </motion.div>

          {/* CTA Button & Status */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={textVariants}
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>

            {profile.available && (
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-base text-white">Available For Work</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom contact info */}
      <motion.div
        className="px-5 md:px-10 lg:px-20 pb-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={2}
        variants={textVariants}
      >
        <div className="w-full max-w-content mx-auto">
          <div className="space-y-1">
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="block text-base text-white hover:opacity-70 transition-opacity"
              >
                {profile.phone}
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="block text-base text-white hover:opacity-70 transition-opacity"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
