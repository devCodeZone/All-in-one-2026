/**
 * INTERVIEW ONE-LINER:
 * Async generators combine async/await with yield and are consumed through for await...of.
 *
 * RUN:
 * node src/08_iterators_generators/03_Async_Generator.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


async function* stream() {
  for (let i = 1; i <= 3; i++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    yield i;
  }
}

for await (const value of stream()) {
  console.log(value);
}
