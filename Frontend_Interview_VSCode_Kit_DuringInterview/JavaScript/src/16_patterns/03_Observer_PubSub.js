/**
 * INTERVIEW ONE-LINER:
 * Observer/pub-sub decouples producers from consumers through subscription, but production systems need unsubscribe, error isolation, and lifecycle control.
 *
 * RUN:
 * node src/16_patterns/03_Observer_PubSub.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class EventBus {
  #listeners = new Map();

  on(event, listener) {
    const set = this.#listeners.get(event) ?? new Set();
    set.add(listener);
    this.#listeners.set(event, set);

    // Return cleanup function.
    return () => set.delete(listener);
  }

  emit(event, payload) {
    for (const listener of this.#listeners.get(event) ?? []) {
      listener(payload);
    }
  }
}

const bus = new EventBus();
const unsubscribe = bus.on("save", (data) => console.log("saved:", data));

bus.emit("save", { id: 1 });
unsubscribe();
