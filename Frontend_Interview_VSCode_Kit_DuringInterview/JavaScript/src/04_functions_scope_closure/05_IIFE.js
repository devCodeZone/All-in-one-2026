/**
 * INTERVIEW ONE-LINER:
 * An IIFE runs immediately and historically created private scope before block scope and ES modules became standard.
 *
 * RUN:
 * node src/04_functions_scope_closure/05_IIFE.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


(function () {
  const privateValue = "not leaked globally";
  console.log(privateValue);
})();

// Modern code usually prefers blocks or modules for isolation.
