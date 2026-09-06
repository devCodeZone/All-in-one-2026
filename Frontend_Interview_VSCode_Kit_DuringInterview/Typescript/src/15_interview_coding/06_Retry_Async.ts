/**
 * INTERVIEW ONE-LINER:
 * A typed retry helper repeats failing async work with bounded attempts while preserving the resolved result type.
 *
 * RUN: npx tsx src/15_interview_coding/06_Retry_Async.ts
 * Important code lines are commented for interview revision.
 */

async function retry<T>(op:()=>Promise<T>,attempts:number):Promise<T>{let last:unknown;for(let i=0;i<attempts;i++){try{return await op()}catch(e:unknown){last=e}}throw last} let n=0; console.log(await retry(async()=>{n++;if(n<2)throw new Error("temporary");return"Success"},3));
