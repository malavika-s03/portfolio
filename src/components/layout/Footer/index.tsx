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
      className="bg-black text-white z-[1] relative w-full"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[51px] py-[52px] min-h-[400px] lg:min-h-[515px]">
        {/* Heading */}
        <motion.h2
          className="text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[90px] tracking-[-0.014em] text-[#fffefe]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={staggerVariants}
        >
          GET IN TOUCH
        </motion.h2>

        {/* Links */}
        <div className="flex flex-col gap-[10px] mt-[24px]">
          <motion.a
            href={`mailto:${profile.email}`}
            className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
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
              className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              variants={staggerVariants}
            >
              LinkedIn
            </motion.a>
          )}

          {profile.social.behance && (
            <motion.a
              href={profile.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-normal leading-[24px] text-[#99a1af] hover:text-white transition-colors"
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
