/**
 * INTERVIEW ONE-LINER:
 * Retry logic should use bounded attempts, error propagation, optional backoff, and idempotency awareness for mutations.
 *
 * RUN:
 * node src/17_interview_coding/07_Retry.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


async function retry(operation, attempts, baseDelay = 10) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;

      if (attempt < attempts) {
        await new Promise((resolve) =>
          setTimeout(resolve, baseDelay * 2 ** (attempt - 1)),
        );
      }
    }
  }

  throw lastError;
}

let calls = 0;

console.log(
  await retry(async () => {
    calls += 1;
    if (calls < 2) throw new Error("temporary");
    return "success";
  }, 3),
);
