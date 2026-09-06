/**
 * INTERVIEW ONE-LINER:
 * for, while, for...of, and array iteration methods serve different needs; avoid for...in for array values because it enumerates property keys.
 *
 * RUN:
 * node src/03_control_flow/02_Loops.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const items = ["A", "B", "C"];

for (let index = 0; index < items.length; index++) {
  console.log("classic:", index, items[index]);
}

for (const item of items) {
  console.log("value:", item);
}

for (const index in items) {
  console.log("property key:", index);
}
