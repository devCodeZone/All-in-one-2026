/**
 * INTERVIEW ONE-LINER:
 * extends composes interfaces while intersections combine multiple type requirements into one shape.
 *
 * RUN: npx tsx src/03_interfaces_aliases/05_Extends_Intersection.ts
 * Important code lines are commented for interview revision.
 */

interface Identifiable{id:number}
interface Named extends Identifiable{name:string}
type Timestamped={createdAt:Date};
type Entity=Named&Timestamped;
const e:Entity={id:1,name:"Record",createdAt:new Date()}; console.log(e);
