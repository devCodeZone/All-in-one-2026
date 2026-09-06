/**
 * INTERVIEW ONE-LINER:
 * A frontend error strategy separates validation errors, recoverable API failures, unexpected programming errors, logging, and user-facing fallbacks.
 *
 * RUN:
 * node src/20_security_architecture/05_Frontend_Error_Strategy.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function classify(error) {
  if (error?.status === 400) return "validation / request issue";
  if (error?.status === 401) return "authentication flow";
  if (error?.status >= 500) return "server failure / retry or fallback";
  return "unexpected error / log diagnostics";
}

console.log(classify({ status: 500 }));
