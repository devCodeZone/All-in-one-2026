/**
 * INTERVIEW ONE-LINER:
 * A fake this parameter documents and type-checks the expected receiver without becoming a runtime argument.
 *
 * RUN: npx tsx src/02_functions/05_This_Parameter.ts
 * Important code lines are commented for interview revision.
 */

type Counter={value:number};
function increment(this:Counter,amount:number){this.value+=amount;}
const counter:Counter={value:0}; increment.call(counter,5); console.log(counter);
