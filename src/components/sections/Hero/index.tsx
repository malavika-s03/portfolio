import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear, FRAMER_EASE } from '@/lib/animations';

export function Hero() {

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

          {/*
            Profile Photo - circular, 168px desktop / 110px tablet+mobile
            Framer source: .framer-aqkbdw { width:168px; height:168px; border-radius:140px; overflow:hidden; position:relative }
            Contains avatar background + DSC01458 overlay positioned absolute
          */}
          <motion.div
            className="flex-shrink-0 w-[110px] lg:w-[168px] h-[110px] lg:h-[168px] rounded-[140px] overflow-hidden relative"
            initial={heroPhotoAppear.initial}
            animate={heroPhotoAppear.animate}
            transition={heroPhotoAppear.transition}
          >
            {/* Background avatar image */}
            <img
              src="https://framerusercontent.com/images/j1OWdec3GtorzmtyEO583X355k.png"
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/*
              DSC01458 overlay - Malavika's actual photo cropped within the circle
              Framer CSS: .framer-5hdyvd { position:absolute; bottom:-13px; left:-61px; right:-60px;
                           aspect-ratio:1.49702; height:193px (desktop) / 154px (tablet/mobile) }
            */}
            <div
              className="absolute overflow-visible"
              style={{
                bottom: '-13px',
                left: '-61px',
                right: '-60px',
                aspectRatio: '1.49702',
                height: '193px',
              }}
            >
              <img
                src="https://framerusercontent.com/images/dzn3ZiFmKa9VjNJZAibN7th28k.jpg"
                alt=""
                className="w-full h-full object-cover"
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
          {/* Intro Text - justified, max-width 643px */}
          <p className="text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1em] tracking-[-0.06em] text-justify max-w-[643px] ml-auto">
            {profile.intro}
          </p>
        </motion.div>
      </div>

      {/* Divider line */}
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
