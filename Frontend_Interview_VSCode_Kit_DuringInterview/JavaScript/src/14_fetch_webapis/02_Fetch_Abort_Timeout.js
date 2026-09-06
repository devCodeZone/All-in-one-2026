/**
 * INTERVIEW ONE-LINER:
 * Combine fetch with AbortController or AbortSignal.timeout where supported to cancel stale requests and enforce time limits.
 *
 * RUN:
 * node src/14_fetch_webapis/02_Fetch_Abort_Timeout.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const controller = new AbortController();

const timer = setTimeout(() => {
  controller.abort("Interview demo timeout");
}, 100);

try {
  const response = await fetch("data:text/plain,fast", {
    signal: controller.signal,
  });

  console.log(await response.text());
} finally {
  clearTimeout(timer);
}
