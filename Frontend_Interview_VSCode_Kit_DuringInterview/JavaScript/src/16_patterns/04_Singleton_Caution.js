/**
 * INTERVIEW ONE-LINER:
 * A module export is naturally singleton-like per module instance, but global singletons can increase coupling and make testing/isolation harder.
 *
 * RUN:
 * node src/16_patterns/04_Singleton_Caution.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const state = {
  count: 0,
  increment() {
    this.count += 1;
  },
};

state.increment();
console.log(state.count);
