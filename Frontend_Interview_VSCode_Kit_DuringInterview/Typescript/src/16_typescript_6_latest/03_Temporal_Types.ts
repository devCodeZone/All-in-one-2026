/**
 * INTERVIEW ONE-LINER:
 * TypeScript 6.0 includes Temporal API types under esnext/esnext.temporal, while runtime availability still depends on the environment.
 *
 * RUN: npx tsx src/16_typescript_6_latest/03_Temporal_Types.ts
 * Important code lines are commented for interview revision.
 */

type TemporalNote={support:string}; const note:TemporalNote={support:"Compile with esnext.temporal when needed; runtime must support Temporal"}; console.log(note);
