import { CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react';
import { useId, useRef, useState, type FormEvent } from 'react';
import { site } from '../../config/site';
import { submitWaitlist } from '../../lib/submitWaitlist';
import { validateEmail } from '../../lib/validateEmail';
import { Button } from '../ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

/** Email waitlist form. Validation and the result are simulated client-side; no request is sent. */
export function WaitlistForm() {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateEmail(email);
    setFieldError(error);
    if (error) {
      inputRef.current?.focus();
      return;
    }
    setStatus('loading');
    const result = await submitWaitlist(email);
    setStatus(result.ok ? 'success' : 'error');
    setMessage(result.message);
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-md items-start gap-3 rounded-2xl bg-white/10 p-5 text-left"
      >
        <CircleCheck className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <p className="font-semibold">{message}</p>
          <p className="mt-1 text-sm text-white/75">
            We will email <strong>{email.trim()}</strong> when your spot opens.
          </p>
        </div>
      </div>
    );
  }

  const errorId = `${id}-error`;
  const loading = status === 'loading';

  return (
    <form noValidate onSubmit={onSubmit} className="mx-auto max-w-md text-left">
      <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-semibold">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          ref={inputRef}
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          disabled={loading}
          aria-invalid={fieldError ? true : undefined}
          aria-describedby={fieldError ? errorId : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (fieldError) setFieldError(validateEmail(e.target.value));
            if (status === 'error') setStatus('idle');
          }}
          className="min-h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-white placeholder:text-white/60 disabled:opacity-60"
        />
        <Button type="submit" size="lg" disabled={loading} aria-busy={loading} className="shrink-0">
          {loading ? (
            <>
              <LoaderCircle className="size-5 animate-spin" aria-hidden="true" /> Joining…
            </>
          ) : (
            site.cta.waitlist
          )}
        </Button>
      </div>
      {fieldError && (
        <p id={errorId} className="mt-2 flex items-start gap-2 text-sm font-medium text-amber">
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {fieldError}
        </p>
      )}
      <div aria-live="polite">
        {status === 'error' && (
          <p role="alert" className="mt-2 flex items-start gap-2 text-sm font-medium text-amber">
            <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>
      <p className="mt-3 text-xs text-white/70">No spam. Demo only: nothing is sent or stored.</p>
    </form>
  );
}
