/**
 * INTERVIEW ONE-LINER:
 * A factory function creates and configures objects without requiring new and can naturally use closure-based private state.
 *
 * RUN:
 * node src/16_patterns/02_Factory_Function.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function createUser(name) {
  let loginCount = 0;

  return {
    name,

    login() {
      loginCount += 1;
      return loginCount;
    },
  };
}

const user = createUser("Sujata");
console.log(user.login());
