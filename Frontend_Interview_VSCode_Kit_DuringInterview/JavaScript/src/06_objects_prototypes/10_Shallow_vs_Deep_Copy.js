/**
 * INTERVIEW ONE-LINER:
 * Spread and Object.assign are shallow copies; structuredClone performs a deep clone for many structured-clone-compatible values.
 *
 * RUN:
 * node src/06_objects_prototypes/10_Shallow_vs_Deep_Copy.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const original = {
  name: "Sujata",
  settings: { theme: "dark" },
};

const shallow = { ...original };
shallow.settings.theme = "light";

// Because settings was shared, original changed too.
console.log("original after shallow change:", original.settings.theme);

const deep = structuredClone(original);
deep.settings.theme = "dark";

console.log("deep:", deep.settings.theme, "original:", original.settings.theme);
