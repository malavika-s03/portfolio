import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { headerAppear, FRAMER_EASE } from '@/lib/animations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-[30px] lg:px-20 py-6"
        initial={headerAppear.initial}
        animate={headerAppear.animate}
        transition={headerAppear.transition}
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <nav className="flex items-center justify-between">
            {/* HOME Link */}
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              HOME
            </Link>

            {/* Dots menu icon - 19x19px, 2x2 grid, 5px dots, gap 2px rows / 9px cols */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-[2px] w-[19px] h-[19px] items-center justify-center cursor-pointer hover:opacity-70 transition-opacity p-0"
              aria-label="Toggle menu"
            >
              <div className="flex gap-[9px]">
                <span className="w-[5px] h-[5px] bg-foreground" style={{ aspectRatio: 1 }} />
                <span className="w-[5px] h-[5px] bg-foreground" style={{ aspectRatio: 1 }} />
              </div>
              <div className="flex gap-[9px]">
                <span className="w-[5px] h-[5px] bg-foreground" style={{ aspectRatio: 1 }} />
                <span className="w-[5px] h-[5px] bg-foreground" style={{ aspectRatio: 1 }} />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Full screen menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: FRAMER_EASE }}
            className="fixed inset-0 z-[60] bg-background"
          >
            {/* Close button */}
            <div className="absolute top-6 right-5 md:right-[30px] lg:right-20 z-50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-full flex items-center justify-center px-5 md:px-[30px] lg:px-20">
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
                      transition={{ delay: index * 0.1, ease: FRAMER_EASE }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-5xl md:text-7xl font-semibold uppercase tracking-tight hover:opacity-50 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Theme toggle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, ease: FRAMER_EASE }}
                  className="mt-12"
                >
                  <button
                    onClick={toggleTheme}
                    className="text-sm uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity"
                  >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
