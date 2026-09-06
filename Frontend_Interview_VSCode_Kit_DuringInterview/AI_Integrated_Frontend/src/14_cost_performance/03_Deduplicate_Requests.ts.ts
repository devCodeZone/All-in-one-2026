/**
 * INTERVIEW ONE-LINER:
 * Deduplicate identical in-flight AI requests so repeated renders/clicks do not create duplicate inference cost.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const inflight = new Map<string, Promise<string>>();

function runOnce(key: string, task: () => Promise<string>) {
  const existing = inflight.get(key);

  if (existing) return existing;

  const promise = task().finally(() => inflight.delete(key));
  inflight.set(key, promise);

  return promise;
}

console.log(await runOnce("same-prompt", async () => "answer"));
