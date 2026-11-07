import { steps } from '../../data/levels';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="From curious to confident in three steps"
      subtitle="No jargon walls. Just a clear path from your first lesson to your first debate."
    >
      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
        {/* Connector line: vertical on mobile, horizontal from md up. */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-accent-text/60 to-amber/60 md:bottom-auto md:left-[16%] md:right-[16%] md:top-6 md:h-px md:w-auto md:bg-gradient-to-r"
        />
        {steps.map((step, i) => (
          <li key={step.id} className="relative">
            <Reveal
              delay={i * 0.1}
              className="flex gap-5 md:flex-col md:items-center md:text-center"
            >
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-accent-ink shadow-glow">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
