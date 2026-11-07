import { site } from '../../config/site';

/** Brand mark: a simplified centre circle on a pitch, plus the site name. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display text-xl font-bold ${className ?? ''}`}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
        <rect width="32" height="32" rx="9" className="fill-pitch" />
        <circle cx="16" cy="16" r="9" fill="none" strokeWidth="2.2" className="stroke-accent" />
        <path d="M16 5v22M5 16h22" strokeWidth="1.4" className="stroke-accent/50" />
        <circle cx="16" cy="16" r="3" className="fill-amber" />
      </svg>
      {site.name}
    </span>
  );
}
