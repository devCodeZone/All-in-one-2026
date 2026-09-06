/**
 * INTERVIEW ONE-LINER:
 * TypeScript uses structural typing: compatibility depends primarily on shape rather than explicit nominal declarations.
 *
 * RUN: npx tsx src/19_senior_interview/01_Structural_Typing.ts
 * Important code lines are commented for interview revision.
 */

type Named={name:string}; const full={name:"Sujata",experience:10}; const named:Named=full; console.log(named);
