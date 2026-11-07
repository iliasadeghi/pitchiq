export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: readonly FaqItem[] = [
  {
    id: 'f1',
    question: 'Is PitchIQ really free to start?',
    answer:
      'Yes. The Free plan includes core rules lessons and a daily quiz, with no credit card needed.',
  },
  {
    id: 'f2',
    question: 'Do I need to know anything about soccer already?',
    answer:
      'Not at all. Lessons start from the basics and every term is explained the first time it appears.',
  },
  {
    id: 'f3',
    question: 'How long is each lesson?',
    answer:
      'Most lessons take three to five minutes, so you can learn on a commute or at half-time.',
  },
  {
    id: 'f4',
    question: 'Which leagues and teams are covered?',
    answer:
      'PitchIQ teaches the game itself, with examples from competitions around the world. It is independent and not affiliated with any club or league.',
  },
  {
    id: 'f5',
    question: 'Can I cancel Pro whenever I want?',
    answer: 'Yes. You can cancel at any time and keep Pro until the end of your billing period.',
  },
  {
    id: 'f6',
    question: 'When does PitchIQ launch?',
    answer:
      'We are opening access in waves. Join the waitlist and we will email you when your spot is ready.',
  },
];
