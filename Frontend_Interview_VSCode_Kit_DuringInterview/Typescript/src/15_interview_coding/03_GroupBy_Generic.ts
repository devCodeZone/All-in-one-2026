/**
 * INTERVIEW ONE-LINER:
 * A generic groupBy preserves item type while grouping by a derived property key.
 *
 * RUN: npx tsx src/15_interview_coding/03_GroupBy_Generic.ts
 * Important code lines are commented for interview revision.
 */

function groupBy<T,K extends PropertyKey>(items:readonly T[],key:(x:T)=>K):Record<K,T[]>{return items.reduce((g,x)=>{const k=key(x);(g[k]??=[]).push(x);return g},{} as Record<K,T[]>)} console.log(groupBy([{name:"A",role:"admin"},{name:"B",role:"user"}],x=>x.role));
