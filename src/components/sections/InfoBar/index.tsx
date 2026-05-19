import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { infoBarAppear } from '@/lib/animations';

export function InfoBar() {
  return (
    <motion.div
      className="w-full bg-black overflow-hidden"
      style={{ height: '31px' }}
      {...infoBarAppear}
    >
      {/* Figma: Container at x:46, y:15, w:1216, h:16, flex justify-between */}
      <div
        className="max-w-[1280px] mx-auto relative"
        style={{ height: '31px' }}
      >
        <div
          className="absolute flex items-center justify-between"
          style={{ left: '46px', top: '15px', width: '1216px', height: '16px' }}
        >
          <span className="text-[12px] font-normal text-white/60 tracking-[0.3px]" style={{ lineHeight: '16px' }}>
            Portfolio 2024
          </span>
          <div className="flex items-start" style={{ gap: '40px' }}>
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
                style={{ lineHeight: '16px' }}
              >
                LinkedIn
              </a>
            )}
            {profile.social.behance && (
              <a
                href={profile.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
                style={{ lineHeight: '16px' }}
              >
                Behance
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-[12px] font-normal text-white/60 hover:text-white transition-colors tracking-[0.3px]"
              style={{ lineHeight: '16px' }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InfoBar;
