/**
 * INTERVIEW ONE-LINER:
 * DOM APIs return nullable/specific element types, so frontend TypeScript should narrow or safely handle missing elements.
 *
 * RUN: npx tsx src/11_dom_frontend/01_DOM_Query_Types.ts
 * Important code lines are commented for interview revision.
 */

function focusInput(input:HTMLInputElement|null){input?.focus()} // Browser: document.querySelector<HTMLInputElement>("#search")
console.log("Compile-time DOM typing example");
