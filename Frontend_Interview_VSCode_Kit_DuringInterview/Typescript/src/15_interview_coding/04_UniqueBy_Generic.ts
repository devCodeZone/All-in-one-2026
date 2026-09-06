/**
 * INTERVIEW ONE-LINER:
 * A generic uniqueBy removes duplicates using a typed key selector while preserving the original item type.
 *
 * RUN: npx tsx src/15_interview_coding/04_UniqueBy_Generic.ts
 * Important code lines are commented for interview revision.
 */

function uniqueBy<T,K>(items:readonly T[],key:(x:T)=>K){const seen=new Set<K>();return items.filter(x=>{const k=key(x);if(seen.has(k))return false;seen.add(k);return true})} console.log(uniqueBy([{id:1},{id:1},{id:2}],x=>x.id));
