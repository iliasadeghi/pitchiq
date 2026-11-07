import { Award, Medal, Shield, Star } from 'lucide-react';
import { levels } from '../../data/levels';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

const icons = [Shield, Star, Medal, Award];

export default function Levels() {
  return (
    <Section
      id="levels"
      eyebrow="Learning path"
      title="Climb from Rookie to Legend"
      subtitle="Earn XP with every lesson and quiz. Each level unlocks deeper topics."
    >
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-4">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-8 top-8 w-1 rounded-full bg-gradient-to-b from-accent via-accent to-ink/15 md:bottom-auto md:left-[12%] md:right-[12%] md:top-8 md:h-1 md:w-auto md:bg-gradient-to-r"
        />
        {levels.map((level, i) => {
          const Icon = icons[i] ?? Star;
          return (
            <li key={level.id} className="relative">
              <Reveal
                delay={i * 0.1}
                className="flex gap-5 md:flex-col md:items-center md:text-center"
              >
                <span className="relative z-10 inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-pitch text-accent shadow-glow ring-4 ring-bg">
                  <Icon className="size-8" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{level.name}</h3>
                  <p className="text-sm font-semibold text-amber-text">{level.xp}</p>
                  <p className="mt-2 text-sm text-muted">{level.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
