/**
 * INTERVIEW ONE-LINER:
 * TypeScript types do not validate network JSON at runtime, so external unknown data should be parsed before trusting it.
 *
 * RUN: npx tsx src/10_async_promises/02_Validate_External_Data.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string}; function isUser(v:unknown):v is User{return typeof v==="object"&&v!==null&&"id" in v&&"name" in v} const raw:unknown={id:1,name:"Sujata"}; if(isUser(raw))console.log(raw.name);
