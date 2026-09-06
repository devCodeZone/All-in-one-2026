/**
 * INTERVIEW ONE-LINER:
 * Conditional types distribute over naked union parameters, applying the condition to each union member.
 *
 * RUN: npx tsx src/07_advanced_types/06_Distributive_Conditional.ts
 * Important code lines are commented for interview revision.
 */

type ToArray<T>=T extends unknown?T[]:never; type D=ToArray<string|number>; const v:D=["TS"]; console.log(v);
