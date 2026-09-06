import { useSyncExternalStore } from "react";

let value = 0;
const listeners = new Set();

const store = {
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() { return value; },
  increment() {
    value += 1;
    listeners.forEach((l) => l());
  }
};

export default function ExternalStoreDemo() {
  const count = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return (
    <div className="demo">
      <h2>useSyncExternalStore</h2>
      <p className="interview-line">
        Interview one-liner: useSyncExternalStore safely subscribes React to external mutable stores with consistent snapshots.
      </p>
      <p>External value: {count}</p>
      <button onClick={store.increment}>Increment external store</button>
    </div>
  );
}
