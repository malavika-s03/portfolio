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

            {/* Right side - Theme toggle & Menu */}
            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <motion.span
                  className="block w-6 h-0.5 bg-foreground origin-center"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-foreground"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-foreground origin-center"
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                />
              </button>
            </div>
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
            <Container className="h-full flex items-center justify-center">
              <nav className="text-center">
                <ul className="space-y-8">
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
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
