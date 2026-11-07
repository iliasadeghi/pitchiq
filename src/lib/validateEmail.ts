const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an error message, or null when the email is valid. */
export function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return 'Please enter your email address.';
  if (!EMAIL_PATTERN.test(email))
    return 'That doesn’t look like a valid email. Try name@example.com.';
  return null;
}
