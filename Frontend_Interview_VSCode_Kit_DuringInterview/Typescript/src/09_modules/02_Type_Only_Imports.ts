/**
 * INTERVIEW ONE-LINER:
 * import type and export type make type-only dependencies explicit and erase them from emitted JavaScript.
 *
 * RUN: npx tsx src/09_modules/02_Type_Only_Imports.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string}; const u:User={id:1,name:"Sujata"}; console.log(u); // Cross-file: import type { User } from "./model";
