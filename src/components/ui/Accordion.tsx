import { AnimatePresence, m } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { cn } from '../../lib/cn';

export interface AccordionEntry {
  id: string;
  title: string;
  content: string;
}

/**
 * Disclosure accordion: one panel open at a time. Buttons are native (Enter/Space toggle);
 * Arrow Up/Down, Home and End move focus between headers.
 */
export function Accordion({ items }: { items: readonly AccordionEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const target =
      e.key === 'ArrowDown'
        ? index === last
          ? 0
          : index + 1
        : e.key === 'ArrowUp'
          ? index === 0
            ? last
            : index - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : null;
    if (target === null) return;
    e.preventDefault();
    buttons.current[target]?.focus();
  };

  return (
    <div className="glass divide-y divide-line/15 rounded-2xl">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-btn-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;
        return (
          <div key={item.id}>
            <h3 className="text-base">
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-display font-semibold hover:text-accent-text sm:px-6"
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'size-5 shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180 text-accent-text',
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{item.content}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
