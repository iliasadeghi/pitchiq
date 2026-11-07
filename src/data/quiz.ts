export interface QuizQuestion {
  id: string;
  question: string;
  options: readonly string[];
  /** Index into `options`. */
  answer: number;
  explanation: string;
}

export const quiz: readonly QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How many players does each team field at kick-off (including the goalkeeper)?',
    options: ['9', '10', '11', '12'],
    answer: 2,
    explanation: 'Each side starts with eleven players: ten outfield players plus a goalkeeper.',
  },
  {
    id: 'q2',
    question: 'When is a player in an offside position?',
    options: [
      'Nearer to the goal line than the ball and the second-last opponent',
      'Standing in their own half',
      'Receiving the ball from a throw-in',
      'Behind the goalkeeper only',
    ],
    answer: 0,
    explanation:
      'A player is offside if any scoring-relevant body part is nearer to the opponents’ goal line than both the ball and the second-last opponent when the ball is played. Throw-ins, goal kicks and corners are exempt.',
  },
  {
    id: 'q3',
    question: 'Which formation uses four defenders, four midfielders and two forwards?',
    options: ['3-5-2', '4-4-2', '4-3-3', '5-4-1'],
    answer: 1,
    explanation:
      'Formations are read from defence to attack, so 4-4-2 means four defenders, four midfielders and two strikers.',
  },
  {
    id: 'q4',
    question: 'In which year was the first men’s World Cup held?',
    options: ['1930', '1950', '1966', '1900'],
    answer: 0,
    explanation: 'Uruguay hosted and won the inaugural tournament in 1930, with 13 national teams.',
  },
  {
    id: 'q5',
    question: 'What does the "xG" statistic estimate?',
    options: [
      'How many corners a team wins',
      'The quality of a chance, as the probability it becomes a goal',
      'Distance covered by a player',
      'Pass accuracy under pressure',
    ],
    answer: 1,
    explanation:
      'Expected goals (xG) gives every shot a value between 0 and 1 based on factors like location and angle, showing how likely it was to score.',
  },
];
