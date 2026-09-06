/**
 * INTERVIEW ONE-LINER:
 * Map stores key-value pairs with keys of any type, preserves insertion order, and is often preferable to plain objects for dynamic keyed collections.
 *
 * RUN:
 * node src/07_arrays_collections/06_Map.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const metadata = new Map();

const objectKey = { id: 1 };

metadata.set("framework", "JavaScript");
metadata.set(objectKey, { selected: true });

console.log(metadata.get("framework"));
console.log(metadata.get(objectKey));
console.log(metadata.size);
