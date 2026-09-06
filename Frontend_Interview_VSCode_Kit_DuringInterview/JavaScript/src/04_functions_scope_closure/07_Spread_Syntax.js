/**
 * INTERVIEW ONE-LINER:
 * Spread expands iterable/object values while rest collects values; the syntax is the same but the role depends on position.
 *
 * RUN:
 * node src/04_functions_scope_closure/07_Spread_Syntax.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const first = [1, 2];
const second = [3, 4];

// Array spread copies/combines iterable elements.
const combined = [...first, ...second];

// Object spread creates a shallow copy/merge.
const user = { id: 1, name: "Sujata" };
const updated = { ...user, name: "Senior Developer" };

console.log(combined, updated);
