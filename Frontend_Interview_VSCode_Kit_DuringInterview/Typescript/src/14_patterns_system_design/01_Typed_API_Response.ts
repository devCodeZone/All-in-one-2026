/**
 * INTERVIEW ONE-LINER:
 * A generic API envelope centralizes response metadata while preserving endpoint-specific payload types.
 *
 * RUN: npx tsx src/14_patterns_system_design/01_Typed_API_Response.ts
 * Important code lines are commented for interview revision.
 */

type ApiResponse<T>={data:T;status:number;requestId:string}; type User={id:number;name:string}; const r:ApiResponse<User>={data:{id:1,name:"Sujata"},status:200,requestId:"req-1"}; console.log(r.data.name);
