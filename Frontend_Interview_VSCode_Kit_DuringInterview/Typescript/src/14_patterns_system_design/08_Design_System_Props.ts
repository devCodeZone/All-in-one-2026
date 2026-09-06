/**
 * INTERVIEW ONE-LINER:
 * Literal/discriminated unions create component prop APIs that make invalid variant combinations impossible.
 *
 * RUN: npx tsx src/14_patterns_system_design/08_Design_System_Props.ts
 * Important code lines are commented for interview revision.
 */

type ButtonProps={kind:"link";href:string;onClick?:never}|{kind:"button";href?:never;onClick:()=>void}; const p:ButtonProps={kind:"button",onClick:()=>console.log("click")}; console.log(p.kind);
