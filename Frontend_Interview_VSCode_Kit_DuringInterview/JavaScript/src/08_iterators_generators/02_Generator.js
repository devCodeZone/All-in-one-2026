/**
 * INTERVIEW ONE-LINER:
 * Generator functions pause with yield and return iterators, making lazy sequences easy to express.
 *
 * RUN:
 * node src/08_iterators_generators/02_Generator.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function* ids() {
  yield 101;
  yield 102;
  yield 103;
}

const iterator = ids();

console.log(iterator.next());
console.log(iterator.next());
console.log([...iterator]);
