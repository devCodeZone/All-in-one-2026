/**
 * INTERVIEW ONE-LINER:
 * this is determined mainly by the call site: method call, explicit call/apply/bind, constructor new, or default binding; arrows capture lexical this.
 *
 * RUN:
 * node src/05_this_bind_classes/01_This_Rules.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const user = {
  name: "Sujata",
  show() {
    // Called as user.show(), so this is user.
    console.log(this.name);
  },
};

user.show();

const detached = user.show;
// detached(); // In ESM strict mode, this would be undefined.

const fixed = detached.bind(user);
fixed();
