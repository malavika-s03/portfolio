import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useCursor } from '@/context/CursorContext';
import { Container } from '../Container';
import { cn } from '@/lib/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { setCursorVariant, resetCursor } = useCursor();

  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => resetCursor();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-6">
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo / Home Link */}
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-wider"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              HOME
            </Link>

            {/* Right side - Menu dots */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex gap-1 p-2"
              aria-label="Toggle menu"
            >
              {/* 2x2 grid of dots */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                </div>
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Full screen menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            {/* Close button */}
            <div className="fixed top-6 right-6 z-50">
              <Container>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="p-2 text-foreground"
                    aria-label="Close menu"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </Container>
            </div>

            <Container className="h-full flex items-center justify-center">
              <nav className="text-center">
                <ul className="space-y-6">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/#work', label: 'Work' },
                    { to: '/#about', label: 'About' },
                    { to: '/#contact', label: 'Contact' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={cn(
                          'text-5xl md:text-7xl font-bold uppercase tracking-tight',
                          'hover:opacity-50 transition-opacity'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Theme toggle in menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12"
                >
                  <button
                    onClick={toggleTheme}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="text-sm uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity"
                  >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
