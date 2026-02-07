import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { profile } from '@/data/profile';
import { FRAMER_EASE, APPEAR_DURATION } from '@/lib/animations';

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: APPEAR_DURATION,
        ease: FRAMER_EASE,
      },
    }),
  };

  return (
    <footer
      ref={ref}
      id="contact"
      className="bg-black text-white z-[1] relative w-full flex flex-col items-center px-5 md:px-[30px] lg:px-20 overflow-hidden"
    >
      {/* Container: 100vh, max-width 1600px, space-between */}
      <div className="w-full max-w-[1600px] min-h-screen flex flex-col justify-between py-[60px] md:py-[60px]">
        {/* Social media links - right-aligned */}
        <motion.div
          className="flex justify-end items-end gap-[26px] w-full"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={staggerVariants}
        >
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-[-0.04em] text-white hover:text-[#b3b3b3] transition-colors duration-400"
              style={{ transitionTimingFunction: 'cubic-bezier(0.44, 0, 0.56, 1)' }}
            >
              Linkedin
            </a>
          )}
          {profile.social.behance && (
            <a
              href={profile.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-[-0.04em] text-white hover:text-[#b3b3b3] transition-colors duration-400"
              style={{ transitionTimingFunction: 'cubic-bezier(0.44, 0, 0.56, 1)' }}
            >
              Behance
            </a>
          )}
        </motion.div>

        {/* CTA Section */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full">
          {/* CTA Text with gradient */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={staggerVariants}
          >
            <h4 className="text-[38px] md:text-[32px] lg:text-[48px] font-medium leading-[1.2em] tracking-[-0.05em]">
              <span
                className="gradient-text"
                style={{
                  backgroundImage: 'linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%)',
                }}
              >
                Curious about what we can create together?
                <br />
                Let's bring something extraordinary to life!
              </span>
            </h4>
          </motion.div>

          {/* CTA Button & Status */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-10"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            variants={staggerVariants}
          >
            {/* Get in Touch - rectangular, white bg, padding 20px 36px */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center px-9 py-5 bg-white text-black font-medium text-base tracking-[-0.04em] leading-[1.2em] hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>

            {/* Available For Work */}
            {profile.available && (
              <div className="flex items-center gap-4">
                {/* Pulse dot - 10px with animated overlay */}
                <div className="relative flex items-center justify-center w-[10px] h-[10px]">
                  <span className="absolute inline-flex rounded-full h-[10px] w-[10px] bg-white" />
                  <motion.span
                    className="absolute inline-flex rounded-full h-[10px] w-[10px] bg-white"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
                <span className="text-base text-white">Available For Work</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom: Footer detail - phone + email */}
        <motion.div
          className="flex justify-between items-end w-full"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          variants={staggerVariants}
        >
          <div className="flex flex-col gap-0">
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="text-base text-white hover:text-[#b3b3b3] transition-colors"
                style={{ transitionTimingFunction: 'cubic-bezier(0.44, 0, 0.56, 1)', transitionDuration: '0.4s' }}
              >
                {profile.phone}
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-base text-white hover:text-[#b3b3b3] transition-colors"
              style={{ transitionTimingFunction: 'cubic-bezier(0.44, 0, 0.56, 1)', transitionDuration: '0.4s' }}
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
