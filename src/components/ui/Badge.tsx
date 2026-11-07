import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Tone = 'accent' | 'amber' | 'neutral';

const tones: Record<Tone, string> = {
  accent: 'bg-accent-text/15 text-accent-text',
  amber: 'bg-amber/20 text-amber-text',
  neutral: 'bg-ink/10 text-muted',
};

export function Badge({
  children,
  tone = 'accent',
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
