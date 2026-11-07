export type FeatureIcon = 'book' | 'board' | 'users' | 'target' | 'clock' | 'flame';

export interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const features: readonly Feature[] = [
  {
    id: 'rules',
    icon: 'book',
    title: 'Rules Explained',
    description:
      'Every law of the game in plain English, with animated examples for the tricky ones.',
  },
  {
    id: 'tactics',
    icon: 'board',
    title: 'Tactics Board',
    description:
      'Drag players around an interactive board to see how shapes and pressing traps work.',
  },
  {
    id: 'profiles',
    icon: 'users',
    title: 'Player & Club Profiles',
    description: 'Roles, styles and stories for players and clubs, written for fans, not scouts.',
  },
  {
    id: 'quizzes',
    icon: 'target',
    title: 'Daily Quizzes',
    description: 'A fresh five-question challenge every day to lock in what you have learned.',
  },
  {
    id: 'history',
    icon: 'clock',
    title: 'Soccer History Timeline',
    description: 'Scroll through 150 years of milestones, rivalries and tactical shifts.',
  },
  {
    id: 'progress',
    icon: 'flame',
    title: 'Progress & Streaks',
    description: 'Earn XP, keep your streak alive and unlock new levels as your knowledge grows.',
  },
];
