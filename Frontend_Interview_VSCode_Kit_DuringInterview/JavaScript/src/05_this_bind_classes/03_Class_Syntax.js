/**
 * INTERVIEW ONE-LINER:
 * Class syntax is primarily a clearer layer over JavaScript's prototype-based inheritance and supports fields, private fields, static members, and inheritance.
 *
 * RUN:
 * node src/05_this_bind_classes/03_Class_Syntax.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class Developer {
  // #name is a runtime-private field enforced by JavaScript.
  #name;

  constructor(name) {
    this.#name = name;
  }

  describe() {
    return this.#name;
  }

  static category = "Frontend";
}

const dev = new Developer("Sujata");
console.log(dev.describe(), Developer.category);
