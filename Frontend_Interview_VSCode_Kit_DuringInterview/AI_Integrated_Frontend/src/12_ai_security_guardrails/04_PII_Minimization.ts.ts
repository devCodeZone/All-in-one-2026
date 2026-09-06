/**
 * INTERVIEW ONE-LINER:
 * Send only the user data needed for the AI task, redact unnecessary PII, define retention, and separate authorization from model prompting.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


function redactEmail(text: string) {
  return text.replace(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
    "[REDACTED_EMAIL]"
  );
}

console.log(redactEmail("Contact user@example.com about the issue."));
