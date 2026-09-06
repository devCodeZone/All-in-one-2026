/**
 * INTERVIEW ONE-LINER:
 * For typeahead and similar UIs, combine cancellation or request IDs with debounce so older async responses cannot overwrite newer state.
 *
 * RUN:
 * node src/09_async_event_loop/10_Async_Race_Latest_Wins.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


let latestRequestId = 0;

async function search(query) {
  const requestId = ++latestRequestId;

  // Random latency simulates out-of-order network responses.
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));

  if (requestId !== latestRequestId) {
    return `${query}: ignored stale response`;
  }

  return `${query}: applied latest response`;
}

const first = search("rea");
const second = search("react");

console.log(await Promise.all([first, second]));
