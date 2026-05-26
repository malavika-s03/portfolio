import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const rafId = useRef<number>(0);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  useEffect(() => {
    if (!lenisInstance) return;

    const prev = prevPathname.current;
    prevPathname.current = location.pathname;

    if (prev === location.pathname) return;

    if (prev === '/') {
      sessionStorage.setItem('homeScrollY', String(lenisInstance.scroll));
    }

    if (location.pathname === '/') {
      const saved = sessionStorage.getItem('homeScrollY');
      if (saved !== null) {
        requestAnimationFrame(() => {
          lenisInstance.scrollTo(Number(saved), { immediate: true });
        });
      }
    } else {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenisInstance]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}

export default SmoothScroll;
