import { BookOpen, Clock, Flame, LayoutGrid, Target, Users, type LucideIcon } from 'lucide-react';
import { features, type FeatureIcon } from '../../data/features';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

const icons: Record<FeatureIcon, LucideIcon> = {
  book: BookOpen,
  board: LayoutGrid,
  users: Users,
  target: Target,
  clock: Clock,
  flame: Flame,
};

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Everything you need to understand the game"
      subtitle="Six tools that turn casual viewing into real football knowledge."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <li key={f.id}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <Card interactive className="group h-full">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.description}</p>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
