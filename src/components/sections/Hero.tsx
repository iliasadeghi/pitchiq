import { m } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { site } from '../../config/site';
import { Ball } from '../illustrations/Ball';
import { PhoneMockup } from '../illustrations/PhoneMockup';
import { Badge } from '../ui/Badge';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-10 sm:pt-16"
    >
      {/* Animated gradient glow and pitch-line grid; both decorative. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="pitch-pattern absolute inset-0" />
        <div className="absolute -left-32 top-0 size-[28rem] animate-drift rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 top-40 size-[24rem] animate-drift rounded-full bg-amber/15 blur-3xl [animation-delay:-6s]" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Badge>New: tactics board is live</Badge>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Know the game <span className="text-gradient">inside out.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Learn the rules, tactics, history and stats behind soccer in bite-sized lessons and
            daily quizzes. Watch matches with a sharper eye.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#waitlist" size="lg">
              {site.cta.primary} <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">
              <Play className="size-5" aria-hidden="true" /> {site.cta.secondary}
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-3 text-sm text-muted">
            <span aria-hidden="true" className="flex -space-x-2">
              {['A', 'M', 'J', 'P'].map((l) => (
                <span
                  key={l}
                  className="inline-flex size-8 items-center justify-center rounded-full border-2 border-bg bg-pitch text-xs font-bold text-white"
                >
                  {l}
                </span>
              ))}
            </span>
            {site.social} learning every day
          </p>
        </div>

        <div className="relative">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup />
          </m.div>
          <Ball className="absolute -left-2 top-6 size-14 animate-float sm:left-6" />
          <Ball className="absolute bottom-10 right-0 size-10 animate-float [animation-delay:-3s] sm:right-8" />
        </div>
      </Container>
    </section>
  );
}
