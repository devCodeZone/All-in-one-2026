/**
 * INTERVIEW ONE-LINER:
 * dynamic import() loads a module asynchronously at runtime and is the foundation of route/feature code splitting.
 *
 * RUN:
 * node src/11_modules/02_Dynamic_Import.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const module = await import("./01_ES_Modules.js");

console.log(module.framework, module.greet("Dynamic import"));
