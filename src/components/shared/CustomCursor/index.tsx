import { useEffect, useCallback, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Custom cursor matching the Framer template's cursor behavior.
 *
 * From Framer source: framer-lib-cursors-host provides a spring-animated dot that:
 * - Follows the mouse with smooth spring physics
 * - Default: ~10px filled circle (black on light, white on dark sections)
 * - On interactive elements (links, buttons, cards): scales up to ~40px
 * - Hides native cursor via CSS
 * - Only on non-touch devices
 */
export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);

    // Check if cursor is over a dark section (footer)
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el) {
      const footer = el.closest('footer');
      setIsOverDark(!!footer);
    }
  }, [cursorX, cursorY, isVisible]);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Don't render on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Add cursor:none to body
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Listen for hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"], [role="button"]');
      setIsHovering(!!interactive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [onMouseMove, onMouseLeave, onMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== 'undefined') {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  const size = isHovering ? 40 : 12;
  const bgColor = isOverDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-normal"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
          backgroundColor: bgColor,
        }}
        transition={{
          width: { type: 'spring', damping: 25, stiffness: 400 },
          height: { type: 'spring', damping: 25, stiffness: 400 },
          opacity: { duration: 0.15 },
          backgroundColor: { duration: 0.2 },
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}

export default CustomCursor;
