import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { headerAppear, FRAMER_EASE } from '@/lib/animations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith('/project/') || location.pathname.startsWith('/work/');

  return (
    <>
      {/* Header stays mounted and is hidden via `display` on project pages, so its
          entrance animation plays only once on first load — not every time you
          return to the homepage (which would otherwise replay with a 1.2s delay). */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-50"
        style={{ display: isProjectPage ? 'none' : undefined }}
        initial={headerAppear.initial}
        animate={headerAppear.animate}
        transition={headerAppear.transition}
      >
        <div className="w-full relative" style={{ height: '4.69vw' }}>
            <Link
              to="/"
              className="absolute font-medium uppercase text-foreground hover:opacity-70 transition-opacity"
              style={{ left: '3.75vw', top: '0', fontSize: '2.5vw', lineHeight: '9.22vw', letterSpacing: '-0.142vw' }}
            >
              HOME
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute cursor-pointer hover:opacity-70 transition-opacity p-0 bg-transparent border-none"
              aria-label="Toggle menu"
              style={{ left: '91.02vw', top: '2.97vw' }}
            >
              <div className="grid grid-cols-2" style={{ gap: '0.39vw' }}>
                <span className="bg-foreground rounded-full" style={{ width: '0.625vw', height: '0.625vw' }} />
                <span className="bg-foreground rounded-full" style={{ width: '0.625vw', height: '0.625vw' }} />
                <span className="bg-foreground rounded-full" style={{ width: '0.625vw', height: '0.625vw' }} />
                <span className="bg-foreground rounded-full" style={{ width: '0.625vw', height: '0.625vw' }} />
              </div>
            </button>
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
                    { href: '#projects', label: 'Projects' },
                    { href: '#work-experience', label: 'Work Experience' },
                    { href: '#contact', label: 'Contact' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1, ease: FRAMER_EASE }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMenuOpen(false);
                          const el = document.querySelector(item.href);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-5xl md:text-7xl font-semibold uppercase tracking-tight hover:opacity-50 transition-opacity cursor-pointer"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
