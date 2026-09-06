/**
 * INTERVIEW ONE-LINER:
 * Object.freeze prevents adding/removing/reassigning own properties and Object.seal prevents adding/removing, but both are shallow.
 *
 * RUN:
 * node src/06_objects_prototypes/09_Freeze_Seal.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const frozen = Object.freeze({
  name: "Sujata",
  nested: { value: 1 },
});

// frozen.name = "Changed"; // throws in strict-mode ESM.
frozen.nested.value = 2; // nested object itself is not frozen.

console.log(frozen);
