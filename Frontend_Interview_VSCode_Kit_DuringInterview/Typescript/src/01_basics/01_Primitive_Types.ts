/**
 * INTERVIEW ONE-LINER:
 * TypeScript adds static types to JavaScript; primitives include string, number, boolean, bigint, symbol, null, and undefined.
 *
 * RUN: npx tsx src/01_basics/01_Primitive_Types.ts
 * Important code lines are commented for interview revision.
 */

const name: string = "Sujata";
const years: number = 10;
const active: boolean = true;
const big: bigint = 123n;
const key: symbol = Symbol("id");
const nothing: null = null;
const missing: undefined = undefined;
// Types are checked at compile time and erased from emitted JavaScript.
console.log({name,years,active,big,key,nothing,missing});
