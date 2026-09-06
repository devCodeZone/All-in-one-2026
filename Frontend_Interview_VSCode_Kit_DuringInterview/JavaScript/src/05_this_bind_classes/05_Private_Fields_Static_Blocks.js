/**
 * INTERVIEW ONE-LINER:
 * Private #fields are runtime-enforced class internals, while static blocks perform one-time class-level initialization.
 *
 * RUN:
 * node src/05_this_bind_classes/05_Private_Fields_Static_Blocks.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class Config {
  static #token;

  static {
    // Static block runs once when the class is evaluated.
    Config.#token = "initialized";
  }

  static getToken() {
    return Config.#token;
  }
}

console.log(Config.getToken());
