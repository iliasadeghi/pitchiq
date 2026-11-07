import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Fan voices"
      title="Fans are levelling up"
      subtitle="Illustrative quotes from fictional learners."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <li key={t.id}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <Card interactive className="h-full">
                <figure className="flex h-full flex-col">
                  <Quote className="size-7 text-accent-text" aria-hidden="true" />
                  <blockquote className="mt-3 flex-1 text-lg">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 items-center justify-center rounded-full bg-pitch font-display font-bold text-accent"
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-muted">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
