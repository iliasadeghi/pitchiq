import { CircleCheck, CircleX, RotateCcw, Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { quiz } from '../../data/quiz';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

const LETTERS = ['A', 'B', 'C', 'D'];

function verdict(score: number): string {
  if (score === quiz.length) return 'Perfect score. You are Legend material.';
  if (score >= 3) return 'Solid knowledge. A few lessons will sharpen it.';
  return 'Good start. Every lesson makes the game clearer.';
}

export default function QuizDemo() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const question = quiz[index];
  const answered = selected !== null;

  // Move focus to the next action once feedback appears, and to the result when finished.
  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);
  useEffect(() => {
    if (finished) resultRef.current?.focus();
  }, [finished]);

  if (!question && !finished) return null;

  const choose = (i: number) => {
    if (answered || !question) return;
    setSelected(i);
    if (i === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index === quiz.length - 1) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <Section
      id="demo"
      eyebrow="Try it now"
      title="Test your soccer IQ"
      subtitle="Five quick questions. No sign-up, nothing is saved."
    >
      <div className="glass mx-auto min-h-[30rem] max-w-2xl rounded-3xl p-5 sm:p-8">
        {finished ? (
          <div className="text-center" aria-live="polite">
            <Trophy className="mx-auto size-12 text-amber-text" aria-hidden="true" />
            <h3 ref={resultRef} tabIndex={-1} className="mt-4 text-3xl font-bold outline-none">
              You scored {score} / {quiz.length}
            </h3>
            <p className="mt-2 text-muted">{verdict(score)}</p>
            <Button onClick={restart} size="lg" className="mt-8">
              <RotateCcw className="size-5" aria-hidden="true" /> Try again
            </Button>
          </div>
        ) : (
          question && (
            <>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>
                  Question {index + 1} of {quiz.length}
                </span>
                <span className="text-accent-text">Score: {score}</span>
              </div>
              <div
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuemin={0}
                aria-valuemax={quiz.length}
                aria-valuenow={index + (answered ? 1 : 0)}
                className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10"
              >
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${((index + (answered ? 1 : 0)) / quiz.length) * 100}%` }}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{question.question}</h3>

              <ul className="mt-5 space-y-3">
                {question.options.map((option, i) => {
                  const isAnswer = i === question.answer;
                  const isChosen = i === selected;
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => choose(i)}
                        aria-disabled={answered}
                        className={cn(
                          'flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition',
                          !answered &&
                            'border-line/20 hover:border-accent-text hover:bg-accent-text/10',
                          answered && isAnswer && 'border-accent-text bg-accent-text/15',
                          answered && isChosen && !isAnswer && 'border-red-500 bg-red-500/10',
                          answered && !isAnswer && !isChosen && 'border-line/15 opacity-60',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-ink/10 text-xs font-bold"
                        >
                          {LETTERS[i]}
                        </span>
                        <span className="flex-1">{option}</span>
                        {answered && isAnswer && (
                          <>
                            <CircleCheck className="size-5 text-accent-text" aria-hidden="true" />
                            <span className="sr-only">Correct answer</span>
                          </>
                        )}
                        {answered && isChosen && !isAnswer && (
                          <>
                            <CircleX className="size-5 text-red-500" aria-hidden="true" />
                            <span className="sr-only">Your answer, incorrect</span>
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div aria-live="polite" className="mt-5 min-h-[6.5rem]">
                {answered && (
                  <div className="rounded-xl bg-ink/5 p-4">
                    <p className="font-semibold">
                      {selected === question.answer ? 'Correct!' : 'Not quite.'}
                    </p>
                    <p className="mt-1 text-sm text-muted">{question.explanation}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-end">
                <Button ref={nextRef} onClick={next} disabled={!answered}>
                  {index === quiz.length - 1 ? 'See results' : 'Next question'}
                </Button>
              </div>
            </>
          )
        )}
      </div>
    </Section>
  );
}
