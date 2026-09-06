/**
 * INTERVIEW ONE-LINER:
 * extends links class prototypes for inheritance and super calls parent constructors or methods.
 *
 * RUN:
 * node src/05_this_bind_classes/04_Inheritance_Super.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class Employee {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return this.name;
  }
}

class SeniorDeveloper extends Employee {
  constructor(name, stack) {
    super(name); // parent constructor must run before using this.
    this.stack = stack;
  }

  describe() {
    return `${super.describe()} - ${this.stack}`;
  }
}

console.log(new SeniorDeveloper("Sujata", "Frontend").describe());
