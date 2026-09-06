/**
 * INTERVIEW ONE-LINER:
 * Prototype pollution occurs when unsafe object-path/key merging lets attacker-controlled keys modify shared prototypes; reject dangerous keys and use safe merge strategies.
 *
 * RUN:
 * node src/20_security_architecture/02_Prototype_Pollution.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function safeAssign(target, key, value) {
  const blocked = new Set(["__proto__", "constructor", "prototype"]);

  if (blocked.has(key)) {
    throw new Error(`Blocked dangerous key: ${key}`);
  }

  target[key] = value;
}

const config = {};
safeAssign(config, "theme", "dark");

console.log(config);
