/**
 * INTERVIEW ONE-LINER:
 * Generic callback types preserve input/output relationships in higher-order functions.
 *
 * RUN: npx tsx src/02_functions/04_Generic_Callback.ts
 * Important code lines are commented for interview revision.
 */

type Mapper<T,U>=(value:T,index:number)=>U;
function transform<T,U>(items:T[],mapper:Mapper<T,U>):U[]{return items.map(mapper);}
console.log(transform(["TS","Angular"],x=>x.length));
