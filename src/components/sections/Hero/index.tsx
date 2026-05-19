import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear } from '@/lib/animations';

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto relative" style={{ height: '633px' }}>
        {/* Name — exact Figma: left:53, top:126, 128px Medium, leading 118px, tracking -1.815px */}
        <div className="absolute left-[53px] top-[126px] w-[757px]" style={{ lineHeight: 0 }}>
          <div className="overflow-hidden">
            <motion.div
              initial={heroNameAppear.initial}
              animate={heroNameAppear.animate}
              transition={heroNameAppear.transition(0.3)}
            >
              <p
                className="font-medium text-[#0a0a0a] text-[128px] mb-0"
                style={{ lineHeight: '118px', letterSpacing: '-1.815px' }}
              >
                MALAVIKA
              </p>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={heroNameAppear.initial}
              animate={heroNameAppear.animate}
              transition={heroNameAppear.transition(0.4)}
            >
              <p
                className="font-medium text-[#0a0a0a] text-[128px]"
                style={{ lineHeight: '118px', letterSpacing: '-1.815px' }}
              >
                SURESH
              </p>
            </motion.div>
          </div>
        </div>

        {/* Profile photo — exact Figma: left:1050, top:118, 149x149, rounded-74px */}
        <motion.div
          className="absolute left-[1050px] top-[118px] w-[149px] h-[149px] rounded-[74px] overflow-hidden"
          initial={heroPhotoAppear.initial}
          animate={heroPhotoAppear.animate}
          transition={heroPhotoAppear.transition}
        >
          <img
            src={`${BASE}images/profile-photo.jpg`}
            alt={profile.name}
            className="absolute max-w-none object-cover pointer-events-none"
            style={{ height: '100.09%', left: '-38.26%', top: '-0.04%', width: '177.85%' }}
          />
        </motion.div>

        {/* Bio — exact Figma: left:605, top:443, 24px Regular, leading 32px, w:607 */}
        <motion.div
          className="absolute left-[605px] top-[443px] w-[607px]"
          initial={heroBioAppear.initial}
          animate={heroBioAppear.animate}
          transition={heroBioAppear.transition}
        >
          <p className="font-normal text-[#0a0a0a] text-[24px]" style={{ lineHeight: '32px' }}>
            {profile.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
