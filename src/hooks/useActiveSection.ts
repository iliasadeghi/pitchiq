import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in the reading zone (a band just below the
 * sticky navbar), so the matching nav link can be highlighted. Sections that mount
 * later (lazy-loaded) are picked up via a MutationObserver.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(',');

  useEffect(() => {
    const wanted = key.split(',');
    const visible = new Set<string>();
    const observed = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(wanted.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    const scan = () => {
      for (const id of wanted) {
        const el = document.getElementById(id);
        if (el && !observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      }
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [key]);

  return active;
}
