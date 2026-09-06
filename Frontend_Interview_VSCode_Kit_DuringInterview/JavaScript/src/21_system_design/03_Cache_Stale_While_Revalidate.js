/**
 * INTERVIEW ONE-LINER:
 * Stale-while-revalidate returns cached data immediately when available and refreshes it in the background to balance latency with freshness.
 *
 * RUN:
 * node src/21_system_design/03_Cache_Stale_While_Revalidate.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const cache = new Map();

async function swr(key, fetcher) {
  const cached = cache.get(key);

  const freshPromise = fetcher().then((fresh) => {
    cache.set(key, fresh);
    return fresh;
  });

  if (cached !== undefined) {
    freshPromise.catch(() => {});
    return { value: cached, source: "cache" };
  }

  return { value: await freshPromise, source: "network" };
}

console.log(
  await swr("profile", async () => ({ name: "Sujata" })),
);
