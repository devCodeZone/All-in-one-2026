/**
 * INTERVIEW ONE-LINER:
 * ES2026 Map/WeakMap get-or-insert methods remove repetitive has/get/set cache initialization patterns.
 *
 * RUN:
 * node src/18_es2025_es2026_latest/03_Map_GetOrInsert.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const cache = new Map();

if (typeof cache.getOrInsert === "function") {
  const value = cache.getOrInsert("profile", { loaded: false });
  console.log(value);
} else if (typeof cache.getOrInsertComputed === "function") {
  console.log(cache.getOrInsertComputed("profile", () => ({ loaded: false })));
} else {
  // Portable fallback equivalent.
  if (!cache.has("profile")) {
    cache.set("profile", { loaded: false });
  }

  console.log("fallback:", cache.get("profile"));
}
