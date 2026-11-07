import { Check } from 'lucide-react';
import { useState } from 'react';
import { plans, yearlySavingPercent } from '../../data/pricing';
import { cn } from '../../lib/cn';
import { Badge } from '../ui/Badge';
import { ButtonLink } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { Toggle } from '../ui/Toggle';

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Free to start. Pro when you are ready."
      subtitle="Cancel anytime. No credit card needed for Free."
    >
      <div className="mb-10 flex items-center justify-center gap-3 text-sm font-semibold">
        <span className={cn(!yearly ? 'text-ink' : 'text-muted')}>Monthly</span>
        <Toggle checked={yearly} onChange={setYearly} label="Bill yearly" />
        <span className={cn(yearly ? 'text-ink' : 'text-muted')}>Yearly</span>
        <Badge tone="amber">Save {yearlySavingPercent}%</Badge>
      </div>

      <ul className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <li key={plan.id}>
              <Reveal delay={i * 0.1} className="h-full">
                <Card
                  className={cn(
                    'relative flex h-full flex-col p-8',
                    plan.recommended && 'border-accent-text/60 shadow-glow',
                  )}
                >
                  {plan.recommended && (
                    <Badge
                      tone="accent"
                      className="absolute -top-3 left-8 !bg-accent !text-accent-ink"
                    >
                      Recommended
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">{plan.blurb}</p>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold tabular-nums">${price}</span>
                    <span className="text-muted">/ month</span>
                  </p>
                  <p className="mt-1 min-h-5 text-xs text-muted">
                    {plan.monthly > 0 && yearly ? `Billed yearly at $${plan.yearly * 12}` : ' '}
                  </p>
                  <ul className="my-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          className="mt-0.5 size-5 shrink-0 text-accent-text"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="#waitlist"
                    variant={plan.recommended ? 'primary' : 'secondary'}
                    size="lg"
                  >
                    {plan.cta}
                  </ButtonLink>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
