/**
 * INTERVIEW ONE-LINER:
 * Tree shaking is a bundler optimization that removes statically unreachable module exports and works best with side-effect-aware ES modules.
 *
 * RUN:
 * node src/19_senior_interview/10_Tree_Shaking.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


// ESM static structure allows bundlers to analyze imports/exports.
// package.json "sideEffects" metadata can also influence bundler decisions.

export function used() {
  return "used";
}

export function potentiallyUnused() {
  return "unused if no importer references it";
}

console.log(used());
