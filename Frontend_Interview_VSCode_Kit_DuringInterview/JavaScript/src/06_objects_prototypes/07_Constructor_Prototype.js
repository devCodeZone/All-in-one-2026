/**
 * INTERVIEW ONE-LINER:
 * Constructor functions combined with new create objects linked to Constructor.prototype; class syntax formalizes the same prototype model.
 *
 * RUN:
 * node src/06_objects_prototypes/07_Constructor_Prototype.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function Person(name) {
  // new creates this and links it to Person.prototype.
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const person = new Person("Sujata");

console.log(person.greet());
console.log(Object.getPrototypeOf(person) === Person.prototype);
