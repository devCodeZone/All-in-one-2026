/**
 * INTERVIEW ONE-LINER:
 * From JavaScript's perspective, CSR builds UI in the browser, SSR sends HTML from the server, and hydration attaches client behavior to existing server-rendered markup.
 *
 * RUN:
 * node src/19_senior_interview/09_CSR_SSR_Hydration_JS_View.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const renderingModels = {
  CSR: "Browser JavaScript creates the initial UI",
  SSR: "Server generates initial HTML",
  hydration: "Browser JavaScript attaches interactivity to server HTML",
};

console.log(renderingModels);
