/**
 * INTERVIEW ONE-LINER:
 * Discriminated unions model UI state so impossible loading/data/error combinations are excluded by construction.
 *
 * RUN: npx tsx src/14_patterns_system_design/02_UI_State_Machine.ts
 * Important code lines are commented for interview revision.
 */

type Search<T>={status:"idle"}|{status:"loading";query:string}|{status:"success";query:string;data:T[]}|{status:"error";query:string;message:string}; const s:Search<string>={status:"success",query:"ts",data:["TypeScript"]}; console.log(s);
