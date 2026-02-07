import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Container } from '@/components/layout/Container';

export function NotFoundPage() {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[20vw] font-bold leading-none">404</h1>
          <p className="text-xl text-muted-foreground mt-4 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => resetCursor()}
            className="inline-flex items-center px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </motion.div>
      </Container>
    </main>
  );
}

export default NotFoundPage;
