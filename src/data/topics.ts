export const topicCategories = [
  'Rules',
  'Tactics',
  'History',
  'Competitions',
  'Legends',
  'Stats',
] as const;

export type TopicCategory = (typeof topicCategories)[number];

export interface Topic {
  id: string;
  title: string;
  category: TopicCategory;
  summary: string;
  lessons: number;
  minutes: number;
}

export const topics: readonly Topic[] = [
  {
    id: 't1',
    title: 'Offside, finally explained',
    category: 'Rules',
    summary: 'Lines, timing and the "active play" test in plain language.',
    lessons: 8,
    minutes: 24,
  },
  {
    id: 't2',
    title: 'Fouls, cards & advantage',
    category: 'Rules',
    summary: 'What separates a yellow from a red, and when the ref plays on.',
    lessons: 6,
    minutes: 18,
  },
  {
    id: 't3',
    title: 'Pressing & the high line',
    category: 'Tactics',
    summary: 'Triggers, traps and how teams win the ball back high.',
    lessons: 10,
    minutes: 35,
  },
  {
    id: 't4',
    title: 'Formations decoded',
    category: 'Tactics',
    summary: 'From 4-4-2 to back threes: who does what and why.',
    lessons: 12,
    minutes: 40,
  },
  {
    id: 't5',
    title: 'Set-piece playbook',
    category: 'Tactics',
    summary: 'Corners, free kicks and the routines behind them.',
    lessons: 7,
    minutes: 22,
  },
  {
    id: 't6',
    title: 'The birth of the game',
    category: 'History',
    summary: 'How codified rules turned street play into a sport.',
    lessons: 5,
    minutes: 16,
  },
  {
    id: 't7',
    title: 'Tactical revolutions',
    category: 'History',
    summary: 'Total football, catenaccio and the ideas that changed everything.',
    lessons: 9,
    minutes: 30,
  },
  {
    id: 't8',
    title: 'World Cup chronicles',
    category: 'Competitions',
    summary: 'Every tournament, host and turning point since 1930.',
    lessons: 14,
    minutes: 48,
  },
  {
    id: 't9',
    title: 'How leagues & cups work',
    category: 'Competitions',
    summary: 'Promotion, relegation, knockouts and qualification paths.',
    lessons: 6,
    minutes: 20,
  },
  {
    id: 't10',
    title: 'Playmakers through time',
    category: 'Legends',
    summary: 'The creators who shaped how midfields think.',
    lessons: 8,
    minutes: 26,
  },
  {
    id: 't11',
    title: 'Goalkeeping greats',
    category: 'Legends',
    summary: 'Shot-stoppers and sweepers who redefined the position.',
    lessons: 6,
    minutes: 19,
  },
  {
    id: 't12',
    title: 'xG & modern analytics',
    category: 'Stats',
    summary: 'Expected goals, progressive passes and what numbers really say.',
    lessons: 9,
    minutes: 33,
  },
  {
    id: 't13',
    title: 'Reading a heatmap',
    category: 'Stats',
    summary: 'Spot roles and tactics from where players actually operate.',
    lessons: 4,
    minutes: 12,
  },
];
