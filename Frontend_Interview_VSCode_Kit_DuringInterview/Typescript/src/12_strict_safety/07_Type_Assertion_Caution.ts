/**
 * INTERVIEW ONE-LINER:
 * A type assertion performs no runtime validation, so prefer narrowing/parsing when data is uncertain.
 *
 * RUN: npx tsx src/12_strict_safety/07_Type_Assertion_Caution.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string}; const raw:unknown={id:1,name:"Sujata"}; function isUser(v:unknown):v is User{return typeof v==="object"&&v!==null&&"id" in v&&"name" in v} if(isUser(raw))console.log(raw.name);
