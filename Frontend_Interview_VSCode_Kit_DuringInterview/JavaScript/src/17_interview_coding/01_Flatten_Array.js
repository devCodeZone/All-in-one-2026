/**
 * INTERVIEW ONE-LINER:
 * Array flattening tests recursion/iteration, accumulator handling, and awareness of built-in flat().
 *
 * RUN:
 * node src/17_interview_coding/01_Flatten_Array.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function flatten(input) {
  const output = [];

  for (const value of input) {
    if (Array.isArray(value)) {
      output.push(...flatten(value));
    } else {
      output.push(value);
    }
  }

  return output;
}

console.log(flatten([1, [2, [3, 4]], 5]));
