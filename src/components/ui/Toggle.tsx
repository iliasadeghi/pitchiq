import { cn } from '../../lib/cn';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Accessible name for the switch. */
  label: string;
  className?: string;
}

/** Accessible on/off switch (role="switch"). The visual labels live next to it in the parent. */
export function Toggle({ checked, onChange, label, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn('relative inline-flex h-11 w-16 shrink-0 items-center rounded-full', className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 rounded-full border border-line/25 transition-colors',
          checked ? 'bg-accent' : 'bg-ink/15',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-1/2 size-6 -translate-y-1/2 rounded-full bg-white shadow transition-all duration-200',
          checked ? 'left-[calc(100%-1.75rem)]' : 'left-1',
        )}
      />
    </button>
  );
}
