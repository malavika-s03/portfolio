import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
    >
      <Link
        to={`/project/${project.slug}`}
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => resetCursor()}
        className="group block relative overflow-hidden aspect-[4/3]"
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Title Overlay - appears on hover at bottom right */}
        <div className="absolute bottom-0 right-0 p-6">
          <motion.h3
            className="text-white text-2xl md:text-3xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {project.title}
          </motion.h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
