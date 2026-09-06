/**
 * INTERVIEW ONE-LINER:
 * Memoization caches deterministic results by key to avoid repeating expensive work.
 *
 * RUN: npx tsx src/15_interview_coding/05_Memoize_Generic.ts
 * Important code lines are commented for interview revision.
 */

function memoize<A,R>(fn:(a:A)=>R,key:(a:A)=>string=JSON.stringify){const c=new Map<string,R>();return(a:A)=>{const k=key(a);if(c.has(k))return c.get(k)!;const r=fn(a);c.set(k,r);return r}} const square=memoize((n:number)=>n*n,String);console.log(square(5),square(5));
