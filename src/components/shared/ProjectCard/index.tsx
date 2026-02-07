import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FRAMER_EASE, APPEAR_DURATION, STAGGER_DELAY } from '@/lib/animations';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Project card matching Framer source exactly:
 * - 1:1 aspect ratio
 * - Hover: image zooms to 110% (CSS: width:110%; height:110%; top:-5.09%; left:-5.09%)
 * - Hover: gradient backdrop fades in (180deg, transparent → rgba(0,0,0,0.4))
 * - Hover: title text fades in at bottom-left, padding 50px (desktop) / 34px (tablet)
 * - Title: white text, pre-wrap
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: APPEAR_DURATION,
        delay: index * STAGGER_DELAY,
        ease: FRAMER_EASE,
      }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden aspect-square cursor-pointer"
        data-cursor="pointer"
      >
        {/* Image - zooms to 110% on hover */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out group-hover:inset-[-5.1%]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.44, 0, 0.56, 1)' }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Gradient backdrop - fades in on hover */}
        <div
          className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />

        {/* Title Overlay - bottom-left, padding 50px desktop / 34px tablet */}
        <div className="absolute inset-0 z-[2] flex items-end justify-start p-[34px] lg:p-[50px]">
          <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 break-words">
            {project.title}
          </h4>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
