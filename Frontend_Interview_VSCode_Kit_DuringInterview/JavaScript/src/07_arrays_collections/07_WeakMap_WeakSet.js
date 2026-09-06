/**
 * INTERVIEW ONE-LINER:
 * WeakMap and WeakSet hold objects weakly so their presence does not prevent garbage collection; they are useful for private metadata and object-lifetime caches.
 *
 * RUN:
 * node src/07_arrays_collections/07_WeakMap_WeakSet.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const cache = new WeakMap();
const user = { id: 1 };

cache.set(user, { computed: "value" });

console.log(cache.get(user));

// WeakMap keys must be objects or non-registered symbols and cannot be enumerated.
