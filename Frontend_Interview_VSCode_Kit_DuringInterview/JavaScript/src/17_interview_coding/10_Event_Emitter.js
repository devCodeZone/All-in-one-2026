/**
 * INTERVIEW ONE-LINER:
 * An event emitter maps event names to listener sets and should return or expose unsubscribe to avoid retained listeners.
 *
 * RUN:
 * node src/17_interview_coding/10_Event_Emitter.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class EventEmitter {
  #events = new Map();

  on(name, listener) {
    const listeners = this.#events.get(name) ?? new Set();
    listeners.add(listener);
    this.#events.set(name, listeners);

    return () => listeners.delete(listener);
  }

  emit(name, ...args) {
    for (const listener of this.#events.get(name) ?? []) {
      listener(...args);
    }
  }
}

const emitter = new EventEmitter();
const off = emitter.on("data", (value) => console.log(value));

emitter.emit("data", 123);
off();
