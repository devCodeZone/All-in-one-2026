/**
 * INTERVIEW ONE-LINER:
 * Grouping with reduce tests object accumulation, dynamic keys, and immutable-vs-mutating accumulator trade-offs.
 *
 * RUN:
 * node src/17_interview_coding/02_GroupBy_Reduce.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {
    const key = keyFn(item);

    (groups[key] ??= []).push(item);

    return groups;
  }, {});
}

const users = [
  { name: "A", team: "FE" },
  { name: "B", team: "BE" },
  { name: "C", team: "FE" },
];

console.log(groupBy(users, (user) => user.team));
