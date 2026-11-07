import { Flame, Trophy } from 'lucide-react';
import { site } from '../../config/site';
import { TacticsBoard } from './TacticsBoard';

/** Decorative phone showing a quiz card and a mini tactics board. Built from HTML/CSS/SVG only. */
export function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-[17rem] sm:w-[19rem]">
      <div className="absolute -inset-8 -z-10 rounded-full bg-accent/20 blur-3xl" />
      <div className="rounded-[2.5rem] border border-line/30 bg-surface p-3 shadow-card">
        <div className="space-y-3 rounded-[2rem] bg-bg p-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="font-display">{site.name}</span>
            <span className="flex items-center gap-1 text-amber-text">
              <Flame className="size-4" /> 12 day streak
            </span>
          </div>

          <div className="rounded-2xl border border-line/15 bg-surface p-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-accent-text">
              Daily quiz · 2/5
            </p>
            <p className="mt-1 font-display text-sm font-semibold">
              Which formation has four defenders, four midfielders and two strikers?
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              {['3-5-2', '4-4-2', '4-3-3'].map((o) => (
                <li
                  key={o}
                  className={
                    o === '4-4-2'
                      ? 'rounded-lg border border-accent-text bg-accent-text/15 px-3 py-2 font-semibold'
                      : 'rounded-lg border border-line/15 px-3 py-2 text-muted'
                  }
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-32 overflow-hidden rounded-2xl border border-line/15">
            <TacticsBoard />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-accent px-3 py-2 text-xs font-bold text-accent-ink">
            <span>+40 XP</span>
            <span className="flex items-center gap-1">
              <Trophy className="size-4" /> Academy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
