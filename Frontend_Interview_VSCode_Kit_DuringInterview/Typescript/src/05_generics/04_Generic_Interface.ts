/**
 * INTERVIEW ONE-LINER:
 * Generic interfaces create reusable contracts whose payload type is chosen by the consumer.
 *
 * RUN: npx tsx src/05_generics/04_Generic_Interface.ts
 * Important code lines are commented for interview revision.
 */

interface ApiResponse<T>{data:T;success:boolean;message?:string}
const r:ApiResponse<{id:number;name:string}>={data:{id:1,name:"Sujata"},success:true}; console.log(r);
