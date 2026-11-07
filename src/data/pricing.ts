export interface Plan {
  id: 'free' | 'pro';
  name: string;
  blurb: string;
  /** Price per month, in dollars. */
  monthly: number;
  /** Price per month when billed yearly. */
  yearly: number;
  features: readonly string[];
  cta: string;
  recommended: boolean;
}

export const plans: readonly Plan[] = [
  {
    id: 'free',
    name: 'Free',
    blurb: 'Everything you need to start learning the game.',
    monthly: 0,
    yearly: 0,
    features: ['Core rules lessons', 'One daily quiz', 'Basic streak tracking', 'Community access'],
    cta: 'Start free',
    recommended: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    blurb: 'Go deep with every topic, board and stat explainer.',
    monthly: 9,
    yearly: 6,
    features: [
      'All topics and learning paths',
      'Interactive tactics board',
      'Unlimited quizzes & review mode',
      'Advanced stats explainers',
      'Ad-free, offline lessons',
    ],
    cta: 'Go Pro',
    recommended: true,
  },
];

/** Yearly saving as a whole percentage, derived from the Pro plan. */
export const yearlySavingPercent = Math.round(
  (1 - (plans[1]?.yearly ?? 0) / (plans[1]?.monthly || 1)) * 100,
);
