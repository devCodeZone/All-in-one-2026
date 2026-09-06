/**
 * INTERVIEW ONE-LINER:
 * const type parameters preserve literal information during generic inference and reduce extra as const usage.
 *
 * RUN: npx tsx src/05_generics/06_Const_Type_Parameters.ts
 * Important code lines are commented for interview revision.
 */

function tuple<const T extends readonly unknown[]>(v:T):T{return v;}
const routes=tuple(["home","profile","settings"]); console.log(routes);
