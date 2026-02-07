import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 lg:px-20 py-6">
        <div className="w-full max-w-content mx-auto">
          <nav className="flex items-center justify-between">
            {/* Logo / Home Link */}
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              HOME
            </Link>

            {/* Right side - Menu dots (2x2 grid) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex gap-[3px] p-2 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[3px]">
                <div className="flex gap-[3px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-foreground" />
                  <span className="w-[5px] h-[5px] rounded-full bg-foreground" />
                </div>
                <div className="flex gap-[3px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-foreground" />
                  <span className="w-[5px] h-[5px] rounded-full bg-foreground" />
                </div>
              </div>
            </button>
          </nav>
        </div>
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
            <div className="absolute top-6 right-5 md:right-10 lg:right-20 z-50">
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

            <div className="h-full flex items-center justify-center px-5 md:px-10 lg:px-20">
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
                        className="text-5xl md:text-7xl font-semibold uppercase tracking-tight hover:opacity-50 transition-opacity"
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
