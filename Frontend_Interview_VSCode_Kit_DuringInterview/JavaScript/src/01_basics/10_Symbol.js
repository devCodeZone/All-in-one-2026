/**
 * INTERVIEW ONE-LINER:
 * Symbol creates unique primitive keys useful for collision-resistant object properties and well-known language protocols.
 *
 * RUN:
 * node src/01_basics/10_Symbol.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const id = Symbol("id");
const anotherId = Symbol("id");

console.log(id === anotherId); // false: every Symbol() call is unique.

const user = {
  name: "Sujata",
  [id]: 101,
};

console.log(user[id]);
