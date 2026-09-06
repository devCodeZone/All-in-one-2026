/**
 * INTERVIEW ONE-LINER:
 * Getters and setters expose property-like APIs backed by functions, useful for validation or derived access but should avoid surprising side effects.
 *
 * RUN:
 * node src/06_objects_prototypes/05_Getters_Setters.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const account = {
  _balance: 100,

  get balance() {
    return this._balance;
  },

  set balance(value) {
    if (value < 0) throw new Error("Balance cannot be negative");
    this._balance = value;
  },
};

account.balance = 250;
console.log(account.balance);
