import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { WaitlistForm } from './WaitlistForm';

export default function FinalCta() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          {/* Always dark and light-on-dark text, regardless of theme, so contrast holds in both. */}
          <div className="relative overflow-hidden rounded-3xl bg-pitch px-6 py-16 text-center text-white sm:px-12">
            <div
              aria-hidden="true"
              className="pitch-pattern absolute inset-0 !opacity-40 [--ink:255_255_255]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
            />
            <div className="relative">
              <h2 id="waitlist-title" className="mx-auto max-w-2xl text-3xl font-bold sm:text-5xl">
                Ready for kick-off?
              </h2>
              <p className="mx-auto mb-8 mt-4 max-w-xl text-lg text-white/80">
                Join the waitlist and be first in when PitchIQ opens. Free to start, always.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
