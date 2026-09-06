/**
 * INTERVIEW ONE-LINER:
 * async/await is syntax over Promises that makes sequential asynchronous control flow easier to read while preserving Promise semantics.
 *
 * RUN:
 * node src/09_async_event_loop/03_Async_Await.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


async function load() {
  try {
    const value = await Promise.resolve("data");
    return value.toUpperCase();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

console.log(await load());
