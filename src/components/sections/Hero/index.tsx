import { motion } from 'framer-motion';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear, FRAMER_EASE } from '@/lib/animations';

export function Hero() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section className="w-full flex flex-col items-center px-5 md:px-[30px] lg:px-20 overflow-hidden">
      {/* Container: 100vh on desktop, min-content on tablet/mobile */}
      <div className="w-full max-w-[1600px] flex flex-col justify-center gap-[34px] lg:justify-between lg:gap-0 min-h-0 lg:min-h-[800px] lg:h-screen pt-[140px] pb-10 lg:pb-20 relative overflow-visible">
        {/* Profile Section: row on desktop, column on mobile */}
        <div className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[10px] w-full overflow-hidden">
          {/* Name Column */}
          <div className="flex flex-col flex-none lg:flex-1 w-full lg:w-[1px] overflow-hidden order-1 lg:order-none">
            {/* First Name */}
            <div className="overflow-hidden">
              <motion.div
                initial={heroNameAppear.initial}
                animate={heroNameAppear.animate}
                transition={heroNameAppear.transition(0.3)}
              >
                <h1 className="text-[76px] md:text-[116px] lg:text-[174px] font-semibold leading-[1em] tracking-[-0.09em]">
                  {profile.firstName}
                </h1>
              </motion.div>
            </div>
            {/* Last Name */}
            <div className="overflow-hidden">
              <motion.div
                initial={heroNameAppear.initial}
                animate={heroNameAppear.animate}
                transition={heroNameAppear.transition(0.4)}
              >
                <h1 className="text-[76px] md:text-[116px] lg:text-[174px] font-semibold leading-[1em] tracking-[-0.09em]">
                  {profile.lastName}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Profile Photo - circular, border-radius: 140px */}
          <motion.div
            className="flex-shrink-0 rounded-[140px] overflow-hidden"
            initial={heroPhotoAppear.initial}
            animate={heroPhotoAppear.animate}
            transition={heroPhotoAppear.transition}
          >
            <div className="w-[100px] md:w-[140px] lg:w-[168px] h-[100px] md:h-[140px] lg:h-[168px]">
              <img
                src="https://framerusercontent.com/images/j1OWdec3GtorzmtyEO583X355k.png"
                alt={profile.name}
                className="w-full h-full object-cover rounded-[140px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bio Section: Email + Intro */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-[10px] w-full overflow-hidden"
          initial={heroBioAppear.initial}
          animate={heroBioAppear.animate}
          transition={heroBioAppear.transition}
        >
          {/* Email with copy - 26px text */}
          <button
            onClick={() => copy(profile.email)}
            className="group flex items-center gap-3 text-foreground hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <span className="text-[26px] font-medium tracking-[-0.06em] leading-[1.3em]">
              {profile.emailDisplay || profile.email}
            </span>
            {/* Copy icon - 20x20 SVG matching Framer's exact icon */}
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="none"
            >
              {copied ? (
                <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <>
                  <rect x="1.668" y="1.668" width="12.222" height="12.222" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
                  <path d="M17 6.11L18.332 6.11L18.332 18.332L6.109 18.332L6.109 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
                </>
              )}
            </svg>
          </button>

          {/* Intro Text - justified, max-width 643px */}
          <p className="text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1em] tracking-[-0.06em] text-justify max-w-[643px]">
            {profile.intro}
          </p>
        </motion.div>
      </div>

      {/* Divider line - exactly matches Framer */}
      <motion.div
        className="w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: FRAMER_EASE }}
      >
        <div className="w-full max-w-[1600px]">
          <div className="h-px w-full bg-[#f5f5f5]" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
