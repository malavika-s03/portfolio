import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Container } from '@/components/layout/Container';
import { projects } from '@/data/projects';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { setCursorVariant, resetCursor } = useCursor();

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link
              to="/"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => resetCursor()}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Container>
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => resetCursor()}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-muted-foreground text-sm uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-border"
        >
          {project.year && (
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-wider block mb-1">Year</span>
              <span className="text-lg font-medium">{project.year}</span>
            </div>
          )}
          {project.client && (
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-wider block mb-1">Client</span>
              <span className="text-lg font-medium">{project.client}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-wider block mb-1">Role</span>
              <span className="text-lg font-medium">{project.role}</span>
            </div>
          )}
          <div>
            <span className="text-muted-foreground text-sm uppercase tracking-wider block mb-1">Category</span>
            <span className="text-lg font-medium">{project.category}</span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="aspect-video bg-muted rounded-lg overflow-hidden mb-16"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Content Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-2xl font-medium">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project showcases the design process and final deliverables for {project.client || 'the client'}.
            The goal was to create a {project.category.toLowerCase()} that would effectively communicate
            the brand's values while providing an exceptional user experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Working as the {project.role || 'designer'}, I led the project from concept to completion,
            ensuring every detail aligned with the project objectives and user needs.
          </p>
        </motion.div>

        {/* Additional Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          {[1, 2].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1550745165 + i * 1000}-9bc0b252726f?w=800&h=600&fit=crop`}
                alt={`${project.title} detail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Next Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-border"
        >
          {(() => {
            const currentIndex = projects.findIndex(p => p.slug === slug);
            const nextProject = projects[(currentIndex + 1) % projects.length];
            return (
              <Link
                to={`/project/${nextProject.slug}`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => resetCursor()}
                className="group block"
              >
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  Next Project
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 group-hover:opacity-60 transition-opacity">
                  {nextProject.title} →
                </h3>
              </Link>
            );
          })()}
        </motion.div>
      </Container>
    </main>
  );
}

export default ProjectPage;
