import { AnimatePresence, m } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';

export function BackToTop() {
  const visible = useScrolled(800);
  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0 })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-ink shadow-glow active:scale-95"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
