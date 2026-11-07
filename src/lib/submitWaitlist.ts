export interface WaitlistResult {
  ok: boolean;
  message: string;
}

/** Address suffix that forces the error state, so it can be previewed. */
export const DEMO_FAIL_DOMAIN = '@fail.test';

/**
 * Client-side stand-in for a waitlist signup. Nothing leaves the browser:
 * it only waits briefly and returns a canned result.
 */
export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email.trim().toLowerCase().endsWith(DEMO_FAIL_DOMAIN)) {
    return { ok: false, message: 'We couldn’t add that address. Please try another one.' };
  }
  return { ok: true, message: 'You’re on the list!' };
}
