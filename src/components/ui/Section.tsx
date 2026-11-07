import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Left-align the heading block instead of centering it. */
  alignStart?: boolean;
}

/** Page section with a consistent heading block; the id doubles as the anchor target. */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  alignStart,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative py-20 sm:py-24', className)}
    >
      <Container>
        <Reveal className={cn('mb-12 max-w-2xl', !alignStart && 'mx-auto text-center')}>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-text">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-title`} className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
