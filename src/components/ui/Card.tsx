import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a lift-on-hover effect for cards that behave as tiles. */
  interactive?: boolean;
}

export function Card({ interactive, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        interactive &&
          'transition duration-300 hover:-translate-y-1 hover:border-accent-text/50 hover:shadow-glow',
        className,
      )}
      {...rest}
    />
  );
}
