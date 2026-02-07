import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  animation?: 'fade' | 'slide' | 'word' | 'char';
  delay?: number;
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className,
  as: Tag = 'p',
  animation = 'fade',
  delay = 0,
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  // Word-by-word animation
  if (animation === 'word') {
    const words = text.split(' ');

    return (
      <Tag ref={ref} className={cn('overflow-hidden', className)}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : { y: '100%' }}
              transition={{
                duration: 0.5,
                delay: delay + i * staggerDelay,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // Character-by-character animation
  if (animation === 'char') {
    const chars = text.split('');

    return (
      <Tag ref={ref} className={cn('overflow-hidden', className)}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              delay: delay + i * (staggerDelay / 2),
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // Slide animation
  if (animation === 'slide') {
    return (
      <div ref={ref} className="overflow-hidden">
        <motion.div
          initial={{ y: '100%' }}
          animate={isInView ? { y: 0 } : { y: '100%' }}
          transition={{
            duration: 0.6,
            delay,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Tag className={className}>{text}</Tag>
        </motion.div>
      </div>
    );
  }

  // Default fade animation
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}

export default AnimatedText;
