/**
 * INTERVIEW ONE-LINER:
 * A Promise represents eventual fulfillment or rejection and supports chaining through then, catch, and finally.
 *
 * RUN:
 * node src/09_async_event_loop/02_Promise.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const request = new Promise((resolve) => {
  setTimeout(() => resolve({ id: 1 }), 50);
});

request
  .then((value) => {
    console.log("success:", value);
    return value.id;
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("completed"));

await request;
