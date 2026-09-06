/**
 * INTERVIEW ONE-LINER:
 * call invokes immediately with positional arguments, apply invokes immediately with an argument array, and bind returns a new function with fixed this/arguments.
 *
 * RUN:
 * node src/05_this_bind_classes/02_Call_Apply_Bind.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function introduce(city, role) {
  return `${this.name} - ${role} - ${city}`;
}

const person = { name: "Sujata" };

console.log(introduce.call(person, "Gurugram", "Frontend"));
console.log(introduce.apply(person, ["Gurugram", "Frontend"]));

const bound = introduce.bind(person, "Gurugram");
console.log(bound("Senior Developer"));
