import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { useInView } from '@/hooks/useInView';
import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/projects';

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section ref={ref} id="work" className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <motion.h2
            className="text-xl md:text-2xl font-normal"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            work.
          </motion.h2>

          <motion.button
            onClick={() => setShowAll(!showAll)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => resetCursor()}
            className="px-5 py-2 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Work;
