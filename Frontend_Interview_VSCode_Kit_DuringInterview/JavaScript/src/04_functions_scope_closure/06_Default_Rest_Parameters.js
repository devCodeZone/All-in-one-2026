/**
 * INTERVIEW ONE-LINER:
 * Default parameters provide fallback values and rest parameters gather remaining arguments into a real array.
 *
 * RUN:
 * node src/04_functions_scope_closure/06_Default_Rest_Parameters.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function greet(name = "Guest", ...titles) {
  return `${titles.join(" ")} ${name}`.trim();
}

console.log(greet("Sujata", "Senior", "Frontend", "Developer"));
