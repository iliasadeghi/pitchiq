import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink shadow-glow hover:brightness-110',
  secondary:
    'border border-line/25 bg-surface/60 text-ink hover:border-accent-text hover:bg-surface',
  ghost: 'text-ink hover:bg-ink/10',
};

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-7 text-base',
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

const classes = ({ variant = 'primary', size = 'md' }: StyleProps, extra?: string) =>
  cn(base, variants[variant], sizes[size], extra);

export const Button = forwardRef<
  HTMLButtonElement,
  StyleProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ variant, size, className, type = 'button', ...rest }, ref) {
  return (
    <button ref={ref} type={type} className={classes({ variant, size }, className)} {...rest} />
  );
});

export function ButtonLink({
  variant,
  size,
  className,
  ...rest
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content -- content arrives through `rest.children`
  return <a className={classes({ variant, size }, className)} {...rest} />;
}
