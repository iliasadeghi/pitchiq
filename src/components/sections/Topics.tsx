import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';
import { topicCategories, topics, type TopicCategory } from '../../data/topics';
import { cn } from '../../lib/cn';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

type Filter = TopicCategory | 'All';
const filters: readonly Filter[] = ['All', ...topicCategories];

export default function Topics() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = topics.filter((t) => filter === 'All' || t.category === filter);

  return (
    <Section
      id="topics"
      eyebrow="Topics"
      title="Pick what you want to master"
      subtitle="Filter by category and dive into the part of the game you are most curious about."
    >
      <div
        role="group"
        aria-label="Filter topics by category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              'min-h-11 rounded-full border px-5 text-sm font-semibold transition',
              filter === f
                ? 'border-transparent bg-accent text-accent-ink shadow-glow'
                : 'border-line/20 hover:border-accent-text',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} topics
      </p>
      <m.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((topic) => (
            <m.li
              key={topic.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <Card interactive className="h-full">
                <Badge tone="amber">{topic.category}</Badge>
                <h3 className="mt-4 text-lg font-semibold">{topic.title}</h3>
                <p className="mt-2 text-sm text-muted">{topic.summary}</p>
                <p className="mt-4 text-xs font-medium text-muted">
                  {topic.lessons} lessons · {topic.minutes} min
                </p>
              </Card>
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>
    </Section>
  );
}
