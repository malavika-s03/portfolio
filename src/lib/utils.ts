// Delay utility for animations
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Clamp a number between min and max
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

// Linear interpolation
export const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

// Map a value from one range to another
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

// Check if device is touch-enabled
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Get random number in range
export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Debounce function
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Split text into spans for animation
export const splitText = (text: string): string[] => text.split('');

// Split text into words
export const splitWords = (text: string): string[] => text.split(' ');
