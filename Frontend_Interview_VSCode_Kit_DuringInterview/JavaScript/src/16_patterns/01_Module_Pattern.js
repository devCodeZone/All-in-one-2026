/**
 * INTERVIEW ONE-LINER:
 * The module pattern uses closure to expose a public API while keeping internal state private; ES modules now provide a cleaner language-level module boundary.
 *
 * RUN:
 * node src/16_patterns/01_Module_Pattern.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function createStore() {
  let value = 0;

  return {
    get() {
      return value;
    },

    increment() {
      value += 1;
    },
  };
}

const store = createStore();
store.increment();
console.log(store.get());
