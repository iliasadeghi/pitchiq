import { AnimatePresence, m } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { site } from '../../config/site';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Logo } from '../ui/Logo';

interface MobileMenuProps {
  open: boolean;
  active: string | null;
  onClose: () => void;
}

/** Slide-in navigation panel for small screens. Escape closes it; focus moves in and is restored. */
export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <m.div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] flex-col bg-bg p-5 shadow-card"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-line/20"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex-1">
              <ul className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      aria-current={active === item.id ? 'location' : undefined}
                      className={cn(
                        'flex min-h-12 items-center rounded-xl px-3 text-lg font-medium hover:bg-ink/10',
                        active === item.id && 'bg-accent-text/15 text-accent-text',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink href="#waitlist" onClick={onClose} size="lg" className="w-full">
              {site.cta.nav}
            </ButtonLink>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
