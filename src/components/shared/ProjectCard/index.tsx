import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { setCursorText, resetCursor } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link
        to={`/project/${project.slug}`}
        onMouseEnter={() => setCursorText('View')}
        onMouseLeave={() => resetCursor()}
        className="group block relative overflow-hidden rounded-lg aspect-[4/3]"
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Title (hidden by default, shows on hover) */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <span className="text-white/70 text-sm uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-white text-xl font-medium mt-1">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
