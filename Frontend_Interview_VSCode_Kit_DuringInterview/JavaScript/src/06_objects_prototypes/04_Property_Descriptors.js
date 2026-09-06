/**
 * INTERVIEW ONE-LINER:
 * Property descriptors control writable, enumerable, configurable, getter, and setter behavior beyond ordinary assignment.
 *
 * RUN:
 * node src/06_objects_prototypes/04_Property_Descriptors.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const user = {};

Object.defineProperty(user, "id", {
  value: 101,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(user, Object.getOwnPropertyDescriptor(user, "id"));
