import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
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
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Title Overlay - appears on hover, positioned bottom-right */}
        <div className="absolute inset-0 flex items-end justify-end p-6">
          <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
            {project.title}
          </h4>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
