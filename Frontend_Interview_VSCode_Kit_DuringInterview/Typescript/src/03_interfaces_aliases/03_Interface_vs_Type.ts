/**
 * INTERVIEW ONE-LINER:
 * Use interfaces naturally for extensible object contracts and type aliases for unions/advanced composition; consistency matters most.
 *
 * RUN: npx tsx src/03_interfaces_aliases/03_Interface_vs_Type.ts
 * Important code lines are commented for interview revision.
 */

interface Base{id:number}
interface Admin extends Base{permissions:string[]}
type Guest=Base&{expiresAt:Date};
type User=Admin|Guest;
const u:User={id:1,permissions:["write"]}; console.log(u);
