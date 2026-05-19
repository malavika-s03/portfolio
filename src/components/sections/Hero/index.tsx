import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { heroNameAppear, heroPhotoAppear, heroBioAppear } from '@/lib/animations';

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full relative" style={{ height: '49.45vw' }}>
        <div className="absolute" style={{ left: '4.14vw', top: '9.84vw', width: '59.14vw', lineHeight: 0 }}>
          <div className="overflow-hidden">
            <motion.div
              initial={heroNameAppear.initial}
              animate={heroNameAppear.animate}
              transition={heroNameAppear.transition(0.3)}
            >
              <p
                className="font-medium text-[#0a0a0a] mb-0"
                style={{ fontSize: '10vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
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
                className="font-medium text-[#0a0a0a]"
                style={{ fontSize: '10vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
              >
                SURESH
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute"
          style={{ left: '82.03vw', top: '9.22vw', width: '11.64vw', height: '11.64vw', borderRadius: '5.78vw' }}
          initial={heroPhotoAppear.initial}
          animate={heroPhotoAppear.animate}
          transition={heroPhotoAppear.transition}
        >
          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '5.78vw' }}>
            <img
              src={`${BASE}images/profile-photo.jpg`}
              alt={profile.name}
              className="absolute"
              style={{ width: '177.85%', height: '100.09%', left: '-38.26%', top: '-0.04%', maxWidth: 'none' }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ left: '47.27vw', top: '34.61vw', width: '47.42vw' }}
          initial={heroBioAppear.initial}
          animate={heroBioAppear.animate}
          transition={heroBioAppear.transition}
        >
          <p className="font-normal text-[#0a0a0a]" style={{ fontSize: '1.875vw', lineHeight: '2.5vw' }}>
            {profile.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
