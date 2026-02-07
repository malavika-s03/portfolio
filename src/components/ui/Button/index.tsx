import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { useCursor } from '@/context/CursorContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-foreground text-background hover:opacity-90',
  secondary: 'bg-muted text-foreground hover:bg-muted/80',
  outline: 'border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background',
  ghost: 'bg-transparent hover:bg-muted',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const { setCursorVariant, resetCursor } = useCursor();

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => resetCursor()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
