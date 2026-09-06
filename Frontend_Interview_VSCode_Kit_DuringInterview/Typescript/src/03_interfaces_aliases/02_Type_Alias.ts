/**
 * INTERVIEW ONE-LINER:
 * A type alias can name objects, primitives, tuples, unions, functions, and advanced type expressions.
 *
 * RUN: npx tsx src/03_interfaces_aliases/02_Type_Alias.ts
 * Important code lines are commented for interview revision.
 */

type Id=string|number;
type Point={x:number;y:number};
type Handler=(id:Id)=>void;
const h:Handler=id=>console.log(id); h(101);
