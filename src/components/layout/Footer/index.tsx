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
      className="w-full z-[1] relative"
      style={{ backgroundColor: '#000000' }}
    >
      <div style={{ padding: '4.06vw 3.98vw', minHeight: '40.23vw' }}>
        <motion.h2
          className="font-medium tracking-[-0.014em] text-[#fffefe]"
          style={{ fontSize: '3.75vw', lineHeight: '7.03vw' }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={staggerVariants}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="flex flex-col" style={{ gap: '1.25vw', marginTop: '1.875vw' }}>
          <motion.a
            href={`mailto:${profile.email}`}
            className="font-normal text-[#99a1af] hover:text-white transition-colors"
            style={{ fontSize: '1.17vw', lineHeight: '1.90vw' }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={staggerVariants}
          >
            {profile.email}
          </motion.a>

          {profile.social.linkedin && (
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-[#99a1af] hover:text-white transition-colors"
              style={{ fontSize: '1.17vw', lineHeight: '1.90vw' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              variants={staggerVariants}
            >
              LInkedIn
            </motion.a>
          )}

          {profile.social.behance && (
            <motion.a
              href={profile.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-[#99a1af] hover:text-white transition-colors"
              style={{ fontSize: '1.17vw', lineHeight: '1.90vw' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              variants={staggerVariants}
            >
              Behance
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
