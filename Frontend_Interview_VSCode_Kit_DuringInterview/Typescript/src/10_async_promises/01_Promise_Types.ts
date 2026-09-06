/**
 * INTERVIEW ONE-LINER:
 * Promise<T> represents an eventual T, and async functions automatically return Promise-wrapped results.
 *
 * RUN: npx tsx src/10_async_promises/01_Promise_Types.ts
 * Important code lines are commented for interview revision.
 */

async function fetchName():Promise<string>{await new Promise(r=>setTimeout(r,50));return"Sujata"} console.log(await fetchName());
