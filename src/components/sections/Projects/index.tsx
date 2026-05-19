import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { scrollAppear, FRAMER_EASE } from '@/lib/animations';

const darkProjects = projects.slice(0, 2);
const lightProjects = projects.slice(2, 4);

export function Projects() {
  return (
    <section id="projects" className="w-full">
      {/* PROJECTS heading — in white area above the black block */}
      <div className="bg-white w-full">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[30px] lg:px-[51px] pt-10 lg:pt-16">
          <motion.h2
            className="text-[36px] md:text-[48px] lg:text-[55px] font-medium leading-[118px] tracking-[-0.014em] text-[#0a0a0a]"
            {...scrollAppear.sectionHeader}
          >
            PROJECTS
          </motion.h2>
        </div>
      </div>

      {/* Black background block — first 2 projects (Yulu, Vector Vault) */}
      <div className="bg-black w-full">
        <div className="max-w-[1280px] mx-auto">
          {darkProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="dark"
            />
          ))}
        </div>
      </div>

      {/* White background block — last 2 projects (Peakmind, Zoho Books) */}
      <div className="bg-white w-full">
        <div className="max-w-[1280px] mx-auto">
          {lightProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="light"
            />
          ))}

          {/* View more projects button */}
          <motion.div
            className="flex flex-col items-center gap-3 pb-16 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: FRAMER_EASE }}
            viewport={{ once: true }}
          >
            <button
              className="w-[56px] h-[56px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition group"
              aria-label="View more projects"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-current"
              >
                <line
                  x1="10"
                  y1="0"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="10"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <span className="text-[12px] font-normal text-[#0a0a0a] tracking-[0.3px]">
              View more projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
