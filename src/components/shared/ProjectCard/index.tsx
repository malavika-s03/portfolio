import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FRAMER_EASE, APPEAR_DURATION, STAGGER_DELAY } from '@/lib/animations';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

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
        className="group block relative overflow-hidden aspect-square"
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: FRAMER_EASE }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Title Overlay - appears on hover, positioned bottom-LEFT (matching Framer) */}
        <div className="absolute inset-0 flex items-end justify-start p-6">
          <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
            {project.title}
          </h4>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
