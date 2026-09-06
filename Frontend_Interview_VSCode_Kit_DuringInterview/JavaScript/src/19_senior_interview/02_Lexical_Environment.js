/**
 * INTERVIEW ONE-LINER:
 * A lexical environment pairs identifier bindings with a reference to an outer environment, which is the conceptual basis of lexical scope and closures.
 *
 * RUN:
 * node src/19_senior_interview/02_Lexical_Environment.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const outer = "outer";

function create() {
  const inner = "inner";

  return () => {
    console.log(inner, outer);
  };
}

create()();
