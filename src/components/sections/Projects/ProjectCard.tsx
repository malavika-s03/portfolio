import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { projectSectionAppear } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: 'dark' | 'light';
}

const FLOATING_POSITIONS = [
  { top: '10%', right: '-5%', width: '21%' },
  { bottom: '5%', left: '-3%', width: '20%' },
  { top: '20%', left: '35%', width: '10%' },
  { top: '35%', right: '15%', width: '15%' },
  { bottom: '15%', left: '20%', width: '17%' },
] as const;

export function ProjectCard({ project, index, variant }: ProjectCardProps) {
  const isOdd = index === 1;
  const isDark = variant === 'dark';

  const titleColor = isDark ? 'text-[#fffefe]' : 'text-black';
  const descColor = isDark ? 'text-[#fffbfb]' : 'text-black';
  const btnBg = isDark ? 'bg-white text-black' : 'bg-black text-white';

  const projectLink =
    project.slug === 'yulu' ? '/project/yulu' : `/project/${project.slug}`;

  return (
    <div
      className={`flex flex-col ${
        isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 lg:gap-12 items-center py-12 lg:py-20 px-5 lg:px-[51px]`}
    >
      {/* Title — sits above the two-column layout on mobile, inline on desktop */}
      <div className="w-full lg:hidden">
        <motion.h3
          className={`text-[32px] md:text-[40px] font-medium tracking-[-0.014em] leading-[1.875em] ${titleColor}`}
          {...projectSectionAppear.title}
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Image area */}
      <motion.div
        className={`relative w-full lg:w-[55%] ${
          project.slug === 'peakmind' ? 'lg:-ml-[52px]' : ''
        }`}
        {...projectSectionAppear.image}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-auto object-cover"
        />

        {/* Floating images (Vector Vault) */}
        {project.floatingImages?.map((src, i) => {
          const pos = FLOATING_POSITIONS[i];
          if (!pos) return null;
          const animProps = projectSectionAppear.floatingImage(i);
          return (
            <motion.img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="absolute"
              style={{
                ...pos,
              }}
              {...animProps}
            />
          );
        })}

        {/* Overlay text (Zoho) */}
        {project.overlayText && (
          <div
            className="absolute bottom-4 right-4 text-center"
            style={{ color: project.overlayTextColor }}
          >
            <span className="text-[24px] font-black">{project.overlayText}</span>
          </div>
        )}
      </motion.div>

      {/* Text area */}
      <div className="w-full lg:w-[45%] flex flex-col gap-6">
        {/* Desktop title */}
        <motion.h3
          className={`hidden lg:block text-[48px] font-medium tracking-[-0.014em] leading-[1.875em] ${titleColor} ${
            isOdd ? 'text-right' : 'text-left'
          }`}
          {...projectSectionAppear.title}
        >
          {project.title}
        </motion.h3>

        {project.description && (
          <motion.p
            className={`text-[16px] lg:text-[20px] font-normal leading-[1.22em] max-w-[470px] ${descColor} ${
              isOdd ? 'lg:ml-auto' : ''
            }`}
            {...projectSectionAppear.text}
          >
            {project.description}
          </motion.p>
        )}

        <motion.div
          className={isOdd ? 'lg:flex lg:justify-end' : ''}
          {...projectSectionAppear.button}
        >
          <Link
            to={projectLink}
            className={`inline-block text-[14px] font-medium leading-[20px] rounded-full px-[19px] py-[13px] ${btnBg} hover:opacity-80 transition no-underline`}
          >
            VIew Project →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCard;
