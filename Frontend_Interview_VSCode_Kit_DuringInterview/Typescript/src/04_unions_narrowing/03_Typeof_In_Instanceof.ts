/**
 * INTERVIEW ONE-LINER:
 * typeof, in, and instanceof are runtime checks TypeScript uses to narrow union types.
 *
 * RUN: npx tsx src/04_unions_narrowing/03_Typeof_In_Instanceof.ts
 * Important code lines are commented for interview revision.
 */

class ApiError extends Error{constructor(public status:number,msg:string){super(msg)}}
function handle(v:string|{id:number}|ApiError){if(typeof v==="string")return v.toUpperCase();if(v instanceof ApiError)return `HTTP ${v.status}`;if("id" in v)return `ID ${v.id}`;return"?";}
console.log(handle(new ApiError(404,"Not found")));
