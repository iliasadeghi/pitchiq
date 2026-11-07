/** Single place to rebrand the site: name, copy, navigation and CTA labels. */
export const site = {
  name: 'PitchIQ',
  tagline: 'Know the game inside out.',
  description:
    'Learn soccer rules, tactics, history, players and competitions through bite-sized lessons, daily quizzes and stats explainers.',
  social: 'Join 50,000+ fans',
  cta: {
    nav: 'Get started',
    primary: 'Start learning free',
    secondary: 'See how it works',
    waitlist: 'Join the waitlist',
  },
  nav: [
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How it works' },
    { id: 'topics', label: 'Topics' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
  ],
  footer: [
    { title: 'Product', links: ['Features', 'Topics', 'Pricing', 'Roadmap'] },
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Help centre', 'Community', 'Privacy'] },
  ],
  socials: ['X', 'Instagram', 'YouTube', 'Discord'],
} as const;

export type NavItem = (typeof site.nav)[number];
