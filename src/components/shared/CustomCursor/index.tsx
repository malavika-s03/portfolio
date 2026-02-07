import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const { cursorState } = useCursor();
  const isTouchDevice = useIsTouchDevice();
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  const getSize = () => {
    switch (cursorState.variant) {
      case 'hover':
        return 40;
      case 'text':
        return 80;
      case 'click':
        return 8;
      case 'hidden':
        return 0;
      default:
        return 12;
    }
  };

  const size = getSize();

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center rounded-full bg-white"
          animate={{
            width: size,
            height: size,
            opacity: cursorState.variant === 'hidden' ? 0 : 1,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          {cursorState.variant === 'text' && cursorState.text && (
            <motion.span
              className="text-xs font-medium text-black whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {cursorState.text}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default CustomCursor;
