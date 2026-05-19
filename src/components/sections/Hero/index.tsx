import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear } from '@/lib/animations';

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center bg-white px-5 md:px-[30px] lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col justify-between min-h-0 lg:min-h-[633px] pt-[120px] md:pt-[126px] pb-10 lg:pb-[50px] relative">
        {/* Name + Photo area */}
        <div className="flex items-start w-full">
          {/* Name Column */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* First Name */}
            <div className="overflow-hidden">
              <motion.div
                initial={heroNameAppear.initial}
                animate={heroNameAppear.animate}
                transition={heroNameAppear.transition(0.3)}
              >
                <h1 className="text-[60px] md:text-[90px] lg:text-[128px] font-medium leading-[1em] tracking-[-0.014em] text-[#0a0a0a]">
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
                <h1 className="text-[60px] md:text-[90px] lg:text-[128px] font-medium leading-[1em] tracking-[-0.014em] text-[#0a0a0a]">
                  {profile.lastName}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="flex-shrink-0 w-[149px] h-[149px] rounded-[74px] overflow-hidden relative"
            initial={heroPhotoAppear.initial}
            animate={heroPhotoAppear.animate}
            transition={heroPhotoAppear.transition}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/profile-photo.jpg`}
              alt={profile.name}
              className="h-full left-[-38%] max-w-none top-0 w-[178%] object-cover absolute"
            />
          </motion.div>
        </div>

        {/* Bio Section */}
        <div className="flex justify-end w-full overflow-hidden">
          <motion.p
            className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.33em] text-[#0a0a0a] max-w-[607px]"
            initial={heroBioAppear.initial}
            animate={heroBioAppear.animate}
            transition={heroBioAppear.transition}
          >
            {profile.intro}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
