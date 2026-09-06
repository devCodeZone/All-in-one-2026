/**
 * INTERVIEW ONE-LINER:
 * TypeScript 6.0 modernizes defaults around strictness, ESM, target level, side-effect import checking, and rootDir behavior.
 *
 * RUN: npx tsx src/16_typescript_6_latest/04_Modern_Defaults.ts
 * Important code lines are commented for interview revision.
 */

console.table({strict:true,module:"esnext",target:"es2025",noUncheckedSideEffectImports:true,rootDir:"tsconfig directory"});
