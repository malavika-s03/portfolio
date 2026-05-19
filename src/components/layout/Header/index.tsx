import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { headerAppear, FRAMER_EASE } from '@/lib/animations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isYuluPage = location.pathname === '/project/yulu';

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={headerAppear.initial}
        animate={headerAppear.animate}
        transition={headerAppear.transition}
      >
        <div className="w-full max-w-[1280px] mx-auto relative" style={{ height: '60px' }}>
          <nav className="absolute inset-0 flex items-start justify-between px-[48px]">
            {!isYuluPage && (
              <Link
                to="/"
                className="text-[32px] font-medium uppercase text-foreground hover:opacity-70 transition-opacity"
                style={{ lineHeight: '118px', letterSpacing: '-1.815px' }}
              >
                HOME
              </Link>
            )}
            {isYuluPage && <div />}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer hover:opacity-70 transition-opacity p-0 bg-transparent border-none"
              aria-label="Toggle menu"
              style={{ marginTop: '38px' }}
            >
              <div className="grid grid-cols-2 gap-[5px]">
                <span className="w-[8px] h-[8px] bg-foreground rounded-full" />
                <span className="w-[8px] h-[8px] bg-foreground rounded-full" />
                <span className="w-[8px] h-[8px] bg-foreground rounded-full" />
                <span className="w-[8px] h-[8px] bg-foreground rounded-full" />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: FRAMER_EASE }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="absolute top-[38px] right-[48px] z-50">
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

            <div className="h-full flex items-center justify-center px-[48px]">
              <nav className="text-center">
                <ul className="space-y-6">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/#projects', label: 'Projects' },
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

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, ease: FRAMER_EASE }}
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
