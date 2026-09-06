/**
 * INTERVIEW ONE-LINER:
 * break exits a loop/switch, continue skips to the next iteration, and labels can target nested loops but should be used sparingly.
 *
 * RUN:
 * node src/03_control_flow/03_Break_Continue_Labels.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


outer:
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    if (row === 1 && col === 1) {
      break outer; // exits both loops through the label.
    }
    console.log(row, col);
  }
}
