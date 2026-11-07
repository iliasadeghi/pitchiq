/** Generic stylised ball: pentagon-and-seam motif, not any branded design. */
export function Ball({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="32" r="29" className="fill-white stroke-ink/40" strokeWidth="2" />
      <path d="M32 20l11 8-4 13H25l-4-13z" className="fill-ink/80" />
      <path
        d="M32 20V6M43 28l14-5M39 41l8 12M25 41l-8 12M21 28L7 23"
        fill="none"
        strokeWidth="2"
        className="stroke-ink/50"
      />
    </svg>
  );
}
