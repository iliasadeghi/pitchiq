import { useCountUp } from '../../hooks/useCountUp';
import { stats, type Stat } from '../../data/levels';
import { Container } from '../ui/Container';

function Counter({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="text-center">
      <dd className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
        <span ref={ref}>{value.toLocaleString('en-US')}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="PitchIQ in numbers" className="py-10">
      <Container>
        <dl className="glass grid grid-cols-2 gap-8 rounded-3xl px-6 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.id} stat={stat} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
