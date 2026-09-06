/**
 * INTERVIEW ONE-LINER:
 * import.meta exposes module-specific metadata such as import.meta.url, which can resolve resources relative to the current module.
 *
 * RUN:
 * node src/11_modules/03_Import_Meta.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log("module URL:", import.meta.url);

const sibling = new URL("./01_ES_Modules.js", import.meta.url);
console.log("sibling URL:", sibling.href);
