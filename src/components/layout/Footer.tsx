import { AtSign, Camera, Globe, MessageCircle, Play } from 'lucide-react';
import { site } from '../../config/site';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

// Generic glyphs stand in for brand logos (no third-party marks).
const socialIcons = {
  X: AtSign,
  Instagram: Camera,
  YouTube: Play,
  Discord: MessageCircle,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-line/15 bg-surface/40 py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              {site.tagline} {site.description}
            </p>
            <ul className="mt-5 flex gap-2">
              {site.socials.map((name) => {
                const Icon = socialIcons[name];
                return (
                  <li key={name}>
                    <a
                      href="#top"
                      aria-label={`${name} (placeholder)`}
                      className="inline-flex size-11 items-center justify-center rounded-xl border border-line/20 transition hover:border-accent-text hover:text-accent-text"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {site.footer.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="inline-flex min-h-11 items-center text-sm text-muted hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line/15 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Independent and not affiliated with any club
            or league.
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-line/20 px-3 hover:text-ink"
          >
            <Globe className="size-4" aria-hidden="true" />
            English · Global
          </button>
        </div>
      </Container>
    </footer>
  );
}
