/**
 * INTERVIEW ONE-LINER:
 * Object.create chooses a prototype explicitly, while Object.assign performs a shallow enumerable-property copy into a target.
 *
 * RUN:
 * node src/06_objects_prototypes/08_Object_Create_Assign.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const prototype = { type: "base" };
const item = Object.create(prototype);

Object.assign(item, { id: 1, name: "Record" });

console.log(item.id, item.type);
