import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Container } from '@/components/layout/Container';
import { profile } from '@/data/profile';

export function Hero() {
  const { setCursorVariant, resetCursor } = useCursor();
  const { copied, copy } = useCopyToClipboard();

  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => resetCursor();

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
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <Container>
        {/* Name Row with Profile Image */}
        <div className="flex items-start justify-between gap-8">
          {/* Name - Large Typography */}
          <div className="flex-1">
            <div className="overflow-hidden">
              <motion.h1
                className="text-[15vw] md:text-[12vw] lg:text-[9vw] font-black leading-[0.85] tracking-[-0.02em] uppercase"
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
                className="text-[15vw] md:text-[12vw] lg:text-[9vw] font-black leading-[0.85] tracking-[-0.02em] uppercase"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={nameVariants}
              >
                {profile.lastName}
              </motion.h1>
            </div>
          </div>

          {/* Profile Image - positioned to the right of name */}
          <motion.div
            className="flex-shrink-0 mt-4 md:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - Email & Intro */}
        <div className="grid md:grid-cols-2 gap-8 items-start mt-16 md:mt-20">
          {/* Email with copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <button
              onClick={() => copy(profile.email)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">{profile.email}</span>
              <svg
                className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity"
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
              {copied && <span className="text-xs text-green-500">Copied!</span>}
            </button>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {profile.intro}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
