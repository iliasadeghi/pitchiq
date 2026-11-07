export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

/** All names and quotes are fictional. */
export const testimonials: readonly Testimonial[] = [
  {
    id: 'a',
    name: 'Alex Rivera',
    role: 'Weekend fan (fictional)',
    quote:
      'I finally understand offside well enough to argue about it with my dad. The animated examples did it.',
  },
  {
    id: 'b',
    name: 'Priya Nair',
    role: 'Youth coach (fictional)',
    quote:
      'I use the tactics lessons to explain pressing to my under-12s. Clear, visual and never condescending.',
  },
  {
    id: 'c',
    name: 'Jonas Becker',
    role: 'Fantasy league regular (fictional)',
    quote:
      'The stats explainers changed how I pick my squad. xG finally clicked after one ten-minute lesson.',
  },
  {
    id: 'd',
    name: 'Mei Tanaka',
    role: 'New to the sport (fictional)',
    quote:
      'Streaks keep me coming back every day. I went from clueless to hosting match nights in two months.',
  },
];
