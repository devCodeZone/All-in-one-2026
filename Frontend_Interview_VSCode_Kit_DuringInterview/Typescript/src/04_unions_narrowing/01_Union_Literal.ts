/**
 * INTERVIEW ONE-LINER:
 * Union and literal types model finite alternatives and require safe narrowing before member-specific operations.
 *
 * RUN: npx tsx src/04_unions_narrowing/01_Union_Literal.ts
 * Important code lines are commented for interview revision.
 */

type Variant="primary"|"secondary"|"danger";
function printId(id:string|number){if(typeof id==="string") return id.toUpperCase(); return id.toFixed(0);}
const v:Variant="primary"; console.log(v,printId("abc"));
