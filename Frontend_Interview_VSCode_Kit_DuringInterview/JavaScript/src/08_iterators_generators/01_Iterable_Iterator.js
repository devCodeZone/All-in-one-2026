/**
 * INTERVIEW ONE-LINER:
 * An iterable exposes Symbol.iterator and produces an iterator whose next() returns {value, done}.
 *
 * RUN:
 * node src/08_iterators_generators/01_Iterable_Iterator.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const range = {
  from: 1,
  to: 3,

  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;

    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      },
    };
  },
};

console.log([...range]);
