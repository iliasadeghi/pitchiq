# PitchIQ landing page

A frontend-only landing page for **PitchIQ**, a (placeholder) soccer knowledge app. All content is static mock data;
forms are simulated in the browser and nothing is sent anywhere. No backend, API, database or auth.

## Tech stack

React 18, Vite, TypeScript (strict), Tailwind CSS 3, Framer Motion, lucide-react, `@fontsource` (Space Grotesk and
Inter, self-hosted, no CDN). ESLint (with jsx-a11y) and Prettier.

## Setup

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
npm run format
```

## Customizing

- **Brand name, tagline, nav links, CTA text, footer links:** `src/config/site.ts`.
  The page `<title>` and meta tags live in `index.html`.
- **Colors:** design tokens are CSS variables in `src/styles/index.css` (`:root` for light, `.dark` for dark),
  stored as space-separated RGB channels and mapped to Tailwind names in `tailwind.config.ts`
  (`bg`, `surface`, `ink`, `muted`, `pitch`, `accent`, `amber`, ...). `accent` is a fill color (always paired with
  `accent-ink` text); `accent-text` is the AA-safe variant for accent-colored text on the page background.
- **Content:** edit the typed files in `src/data/` (`quiz`, `topics`, `features`, `testimonials`, `pricing`, `faq`,
  `levels` which also holds the how-it-works steps and stats).
- **Theme:** dark by default; first visit follows the system preference; the toggle persists to `localStorage`
  (`pitchiq-theme`).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds with `BASE_PATH=/<repo-name>/` and
publishes `dist/` to GitHub Pages. To build for a sub-path locally: `BASE_PATH=/pitchiq/ npm run build`.

## Demo behaviour

- The waitlist form validates the email, shows a loading state and then success. To preview the error state, submit an
  address ending in `@fail.test`. See `src/lib/submitWaitlist.ts`.
- The quiz, topic filter, pricing toggle, FAQ accordion and mobile menu are all client-side only.

## Structure

```
src/
  config/site.ts          brand and navigation config
  components/ui/          Button, Card, Badge, Section, Container, Accordion, Toggle, Reveal, Logo
  components/layout/      Navbar, MobileMenu, ThemeToggle, Footer, BackToTop, SkipLink
  components/sections/    page sections (below-the-fold ones are lazy-loaded)
  components/illustrations/  inline SVG art (tactics board, ball, phone mockup)
  data/  hooks/  lib/  styles/
```

All artwork is original inline SVG: no club crests, league logos or player photos.
