/**
 * INTERVIEW ONE-LINER:
 * Regular expressions match text patterns; know flags, groups, lookarounds, replace callbacks, and the cost of pathological backtracking.
 *
 * RUN:
 * node src/12_regex_json_date/01_Regular_Expressions.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const input = "Order-123 and Order-456";
const pattern = /Order-(\d+)/g;

for (const match of input.matchAll(pattern)) {
  console.log("full:", match[0], "id:", match[1]);
}
