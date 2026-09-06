/**
 * INTERVIEW ONE-LINER:
 * ES modules use static import/export, have their own scope, are strict by default, and enable tree-shaking-friendly dependency graphs.
 *
 * RUN:
 * node src/11_modules/01_ES_Modules.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


export const framework = "JavaScript";

export function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Sujata"), framework);
