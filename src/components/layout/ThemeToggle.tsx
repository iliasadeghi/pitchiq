import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: (origin: { x: number; y: number }) => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onToggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={`Switch to ${next} mode`}
      className="inline-flex size-11 items-center justify-center rounded-xl border border-line/20 transition hover:border-accent-text active:scale-95"
    >
      {theme === 'dark' ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}
