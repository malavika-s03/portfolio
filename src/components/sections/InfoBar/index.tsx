import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { infoBarAppear } from '@/lib/animations';

export function InfoBar() {
  return (
    <motion.div className="bg-black w-full" {...infoBarAppear}>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center px-[46px] py-[8px]">
        <span className="text-[12px] font-normal text-white/60 tracking-[0.3px]">
          Portfolio 2024
        </span>
        <div className="flex gap-[40px]">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-normal text-white/60 tracking-[0.3px] hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-normal text-white/60 tracking-[0.3px] hover:text-white transition"
          >
            Behance
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[12px] font-normal text-white/60 tracking-[0.3px] hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </motion.div>
  );
}
