import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/projects';
import { scrollAppear } from '@/lib/animations';

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="work"
      className="w-full flex flex-col items-center px-5 md:px-[30px] lg:px-20 pt-[30px] pb-5 md:pb-20 lg:pb-20 overflow-hidden"
    >
      <div className="w-full max-w-[1600px] flex flex-col items-center gap-[30px] lg:gap-9">
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-between w-full"
          {...scrollAppear.sectionHeader}
        >
          <h2 className="text-[19px] md:text-[24px] lg:text-[30px] font-medium leading-[1.2em] tracking-[-0.03em]">
            work.
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="px-[26px] py-4 text-base font-medium tracking-[-0.04em] leading-[1.2em] bg-[#f5f5f5] hover:bg-foreground hover:text-background transition-colors cursor-pointer"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>

        {/* Projects Grid - 2 columns desktop, 1 column mobile, 20px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
