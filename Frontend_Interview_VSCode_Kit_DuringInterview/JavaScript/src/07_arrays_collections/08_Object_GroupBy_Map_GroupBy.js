/**
 * INTERVIEW ONE-LINER:
 * Object.groupBy and Map.groupBy group iterable items by a callback-produced key, reducing manual reduce boilerplate.
 *
 * RUN:
 * node src/07_arrays_collections/08_Object_GroupBy_Map_GroupBy.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const people = [
  { name: "A", team: "frontend" },
  { name: "B", team: "backend" },
  { name: "C", team: "frontend" },
];

if (typeof Object.groupBy === "function") {
  const grouped = Object.groupBy(people, (person) => person.team);
  console.log(grouped);
} else {
  console.log("Object.groupBy requires a modern ES2024+ runtime.");
}
