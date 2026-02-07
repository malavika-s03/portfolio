import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/projects';

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section ref={ref} id="work" className="px-5 md:px-10 lg:px-20 py-[30px] pb-20">
      <div className="w-full max-w-content mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-9">
          <motion.h2
            className="text-xl font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            work.
          </motion.h2>

          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>

        {/* Projects Grid - 2x2, gap 20px, 1:1 aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
