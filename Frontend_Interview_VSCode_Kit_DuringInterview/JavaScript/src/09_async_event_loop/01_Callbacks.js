/**
 * INTERVIEW ONE-LINER:
 * Callbacks are functions supplied for later execution; nested callback-style async code can become difficult to compose and error-handle.
 *
 * RUN:
 * node src/09_async_event_loop/01_Callbacks.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function loadUser(callback) {
  setTimeout(() => {
    callback(null, { id: 1, name: "Sujata" });
  }, 50);
}

loadUser((error, user) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(user);
});

await new Promise((resolve) => setTimeout(resolve, 80));
