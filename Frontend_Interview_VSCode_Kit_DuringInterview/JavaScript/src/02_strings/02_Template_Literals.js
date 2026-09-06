/**
 * INTERVIEW ONE-LINER:
 * Template literals support interpolation and multiline strings, while tagged templates let a function process literal segments and expressions.
 *
 * RUN:
 * node src/02_strings/02_Template_Literals.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const name = "Sujata";
const role = "Senior Frontend Developer";

// ${...} evaluates JavaScript expressions inside the template.
const sentence = `${name} is a ${role}.`;

console.log(sentence);
