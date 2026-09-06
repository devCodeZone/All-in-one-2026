/**
 * INTERVIEW ONE-LINER:
 * A discriminated Result type models success/failure explicitly instead of relying only on thrown exceptions.
 *
 * RUN: npx tsx src/10_async_promises/03_Result_Pattern.ts
 * Important code lines are commented for interview revision.
 */

type Result<T,E=Error>={ok:true;value:T}|{ok:false;error:E}; function divide(a:number,b:number):Result<number,string>{return b===0?{ok:false,error:"Division by zero"}:{ok:true,value:a/b}} const r=divide(10,2); console.log(r.ok?r.value:r.error);
