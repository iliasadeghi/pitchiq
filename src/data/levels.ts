export interface Level {
  id: string;
  name: string;
  xp: string;
  description: string;
}

export const levels: readonly Level[] = [
  {
    id: 'rookie',
    name: 'Rookie',
    xp: '0 XP',
    description: 'Learn the laws, positions and the language of the game.',
  },
  {
    id: 'academy',
    name: 'Academy',
    xp: '1,000 XP',
    description: 'Understand formations, pressing and how teams build play.',
  },
  {
    id: 'pro',
    name: 'Pro',
    xp: '5,000 XP',
    description: 'Read matches like an analyst with stats and advanced tactics.',
  },
  {
    id: 'legend',
    name: 'Legend',
    xp: '15,000 XP',
    description: 'Master history, competitions and the finest details.',
  },
];

export interface Step {
  id: string;
  title: string;
  description: string;
}

export const steps: readonly Step[] = [
  {
    id: 's1',
    title: 'Pick a topic',
    description: 'Choose rules, tactics, history or stats, or let PitchIQ suggest a path.',
  },
  {
    id: 's2',
    title: 'Learn in bite-sized lessons',
    description: 'Short, visual lessons you can finish in the time it takes to boil a kettle.',
  },
  {
    id: 's3',
    title: 'Test yourself and level up',
    description: 'Quizzes lock it in. Earn XP, build streaks and climb from Rookie to Legend.',
  },
];

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export const stats: readonly Stat[] = [
  { id: 'lessons', label: 'Bite-sized lessons', value: 1200, suffix: '+' },
  { id: 'quizzes', label: 'Quiz questions', value: 5000, suffix: '+' },
  { id: 'topics', label: 'Topics covered', value: 85, suffix: '' },
  { id: 'learners', label: 'Fans learning', value: 50000, suffix: '+' },
];
