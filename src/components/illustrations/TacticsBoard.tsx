import { cn } from '../../lib/cn';

interface Dot {
  x: number;
  y: number;
  team: 'home' | 'away';
}

// A 4-3-3 (home, attacking upward) against a 4-4-2 (away). Purely illustrative.
const dots: readonly Dot[] = [
  { x: 50, y: 88, team: 'home' },
  { x: 18, y: 74, team: 'home' },
  { x: 40, y: 76, team: 'home' },
  { x: 60, y: 76, team: 'home' },
  { x: 82, y: 74, team: 'home' },
  { x: 30, y: 58, team: 'home' },
  { x: 50, y: 62, team: 'home' },
  { x: 70, y: 58, team: 'home' },
  { x: 22, y: 38, team: 'home' },
  { x: 50, y: 34, team: 'home' },
  { x: 78, y: 38, team: 'home' },
  { x: 36, y: 20, team: 'away' },
  { x: 64, y: 20, team: 'away' },
  { x: 16, y: 30, team: 'away' },
  { x: 38, y: 32, team: 'away' },
  { x: 62, y: 32, team: 'away' },
  { x: 84, y: 30, team: 'away' },
];

/** Mini tactics board drawn in SVG: pitch markings, two formations and a pass arrow. */
export function TacticsBoard({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={cn('h-full w-full', className)}
    >
      <rect width="100" height="100" className="fill-pitch" />
      <g fill="none" strokeWidth="0.6" className="stroke-white/40">
        <rect x="4" y="4" width="92" height="92" rx="1" />
        <path d="M4 50h92" />
        <circle cx="50" cy="50" r="10" />
        <rect x="26" y="4" width="48" height="16" />
        <rect x="26" y="80" width="48" height="16" />
      </g>
      <path
        d="M50 62 Q 56 48 50 36"
        fill="none"
        strokeWidth="0.9"
        strokeDasharray="2 1.6"
        className="stroke-amber"
      />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r="3"
          className={d.team === 'home' ? 'fill-accent' : 'fill-white/70'}
        />
      ))}
    </svg>
  );
}
