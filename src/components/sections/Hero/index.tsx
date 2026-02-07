import { motion } from 'framer-motion';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { profile } from '@/data/profile';

export function Hero() {
  const { copied, copy } = useCopyToClipboard();

  const nameVariants = {
    hidden: { y: '100%' },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Main content wrapper with proper padding */}
      <div className="flex-1 flex flex-col justify-between px-5 md:px-10 lg:px-20 pt-[140px] pb-20">
        <div className="w-full max-w-content mx-auto">
          {/* Top section: Name + Photo */}
          <div className="flex items-start justify-between gap-2.5">
            {/* Name column */}
            <div className="flex-1 flex flex-col">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[76px] md:text-[116px] lg:text-[174px] font-semibold leading-none tracking-[-0.09em]"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={nameVariants}
                >
                  {profile.firstName}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[76px] md:text-[116px] lg:text-[174px] font-semibold leading-none tracking-[-0.09em]"
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={nameVariants}
                >
                  {profile.lastName}
                </motion.h1>
              </div>
            </div>

            {/* Profile Photo - circular, 168px on desktop */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-[100px] md:w-[140px] lg:w-[168px] h-[100px] md:h-[140px] lg:h-[168px] rounded-[140px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/j1OWdec3GtorzmtyEO583X355k.png"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section: Email + Intro */}
        <div className="w-full max-w-content mx-auto">
          <motion.div
            className="flex items-start justify-between gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {/* Email with copy */}
            <button
              onClick={() => copy(profile.email)}
              className="group flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
            >
              <span className="text-base md:text-lg">{profile.emailDisplay || profile.email}</span>
              <svg
                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
              </svg>
            </button>

            {/* Intro Text - justified, specific max-width */}
            <motion.p
              className="text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.06em] text-justify max-w-[643px] flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {profile.intro}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Divider line */}
      <div className="px-5 md:px-10 lg:px-20">
        <div className="w-full max-w-content mx-auto">
          <div className="h-px bg-framer-bg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
