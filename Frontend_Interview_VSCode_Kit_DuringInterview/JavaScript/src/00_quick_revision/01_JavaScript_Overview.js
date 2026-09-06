/**
 * INTERVIEW ONE-LINER:
 * JavaScript is a dynamically typed, prototype-based, garbage-collected language with first-class functions and an event-loop concurrency model.
 *
 * RUN:
 * node src/00_quick_revision/01_JavaScript_Overview.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


// JavaScript values have runtime types; variables themselves are not statically typed.
let value = "frontend";
value = 10;

// Functions are first-class values: they can be stored, passed, and returned.
const greet = (name) => `Hello ${name}`;

// Objects inherit through prototypes.
const person = { name: "Sujata" };

console.log(greet(person.name), value);
