/**
 * INTERVIEW ONE-LINER:
 * Destructuring extracts properties/elements with defaults, aliases, nesting, and rest syntax.
 *
 * RUN:
 * node src/06_objects_prototypes/02_Destructuring.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const user = {
  id: 1,
  profile: { name: "Sujata", city: "Gurugram" },
};

const {
  id,
  profile: { name, city = "Unknown" },
} = user;

const [first, , third = "C"] = ["A", "B"];

console.log({ id, name, city, first, third });
