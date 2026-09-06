/**
 * INTERVIEW ONE-LINER:
 * For external data, parse/validate unknown into trusted domain types instead of directly casting JSON.
 *
 * RUN: npx tsx src/14_patterns_system_design/06_Parse_Dont_Cast.ts
 * Important code lines are commented for interview revision.
 */

type Product={id:number;title:string}; function parse(v:unknown):Product{if(typeof v==="object"&&v!==null&&"id" in v&&typeof v.id==="number"&&"title" in v&&typeof v.title==="string")return{id:v.id,title:v.title};throw new Error("Invalid")}; console.log(parse({id:1,title:"Laptop"}));
