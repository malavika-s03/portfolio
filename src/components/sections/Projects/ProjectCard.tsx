import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { projectSectionAppear } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: 'dark' | 'light';
}

const FLOATING_POSITIONS: React.CSSProperties[] = [
  { top: '10%', right: '-5%', width: '21%' },
  { bottom: '5%', left: '-3%', width: '20%' },
  { top: '20%', left: '35%', width: '10%' },
  { top: '35%', right: '15%', width: '15%' },
  { bottom: '15%', left: '20%', width: '17%' },
];

export function ProjectCard({ project, index, variant }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;
  const isDark = variant === 'dark';
  const titleColor = isDark ? 'text-[#fffefe]' : 'text-black';
  const descColor = isDark ? 'text-[#fffbfb]' : 'text-black';
  const btnBg = isDark ? 'bg-white text-black' : 'bg-black text-white';
  const projectLink = project.slug === 'yulu' ? '/project/yulu' : `/project/${project.slug}`;

  return (
    <div className="relative w-full" style={{ minHeight: '43.75vw' }}>
      <motion.h3
        className={`font-medium tracking-[-0.014em] ${titleColor} ${isReversed ? 'text-right' : 'text-left'}`}
        style={{ fontSize: '3.75vw', lineHeight: '7.03vw', padding: `2.5vw 3.98vw 0` }}
        {...projectSectionAppear.title}
      >
        {project.title}
      </motion.h3>

      <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'}`} style={{ padding: `1.875vw 3.98vw 0` }}>
        <motion.div
          className="relative w-[50%]"
          style={project.slug === 'peakmind' ? { marginLeft: '-8.05vw' } : undefined}
          {...projectSectionAppear.image}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto object-cover"
            style={project.slug === 'yulu' ? { maxHeight: '31.56vw' } : project.slug === 'peakmind' ? { maxHeight: '39.06vw' } : undefined}
          />
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
                className="absolute object-contain"
                style={pos}
                {...animProps}
              />
            );
          })}
        </motion.div>

        <div className="w-[50%] flex flex-col" style={{ padding: isReversed ? `1.56vw 1.56vw 0 0` : `1.56vw 0 0 4.69vw` }}>
          <motion.p
            className={`font-normal ${descColor}`}
            style={{ fontSize: '1.56vw', lineHeight: '1.90vw', maxWidth: '36.72vw' }}
            {...projectSectionAppear.text}
          >
            {project.description}
          </motion.p>

          {project.overlayText && (
            <p
              className="font-black text-center"
              style={{ fontSize: '1.875vw', marginTop: '3.125vw', color: project.overlayTextColor || '#006fda' }}
            >
              {project.overlayText}
            </p>
          )}

          <motion.div style={{ marginTop: '1.875vw' }} {...projectSectionAppear.button}>
            <Link
              to={projectLink}
              className={`inline-flex items-center justify-center ${btnBg} rounded-full font-medium hover:opacity-80 transition-opacity no-underline`}
              style={{ padding: '1.02vw 1.48vw', fontSize: '1.09vw', lineHeight: '1.56vw' }}
            >
              VIew Project →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
