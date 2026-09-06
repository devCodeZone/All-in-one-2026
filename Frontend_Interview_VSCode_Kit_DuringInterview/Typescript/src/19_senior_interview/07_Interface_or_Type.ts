/**
 * INTERVIEW ONE-LINER:
 * Choose interface for naturally extensible object contracts and type for unions/composition; consistency matters more than dogma.
 *
 * RUN: npx tsx src/19_senior_interview/07_Interface_or_Type.ts
 * Important code lines are commented for interview revision.
 */

interface Contract{id:string} type Async<T>={status:"loading"}|{status:"success";data:T}; const c:Contract={id:"profile"}; const s:Async<string>={status:"success",data:"done"}; console.log(c,s);
