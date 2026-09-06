import { useRef, useState } from "react";

export default function SimpleCache() {
  const cache = useRef(new Map());
  const [value, setValue] = useState("");
  const [source, setSource] = useState("");

  async function load(key) {
    if (cache.current.has(key)) {
      setValue(cache.current.get(key));
      setSource("cache");
      return;
    }

    await new Promise((r) => setTimeout(r, 600));
    const data = `${key} data @ ${new Date().toLocaleTimeString()}`;
    cache.current.set(key, data);
    setValue(data);
    setSource("network");
  }

  return (
    <div className="demo">
      <h2>Simple Client Cache</h2>
      <p className="interview-line">
        Interview one-liner: Client caching reduces repeated requests; production solutions also need staleness, invalidation, deduplication, and retries.
      </p>
      <button onClick={() => load("profile")}>Load Profile</button>
      <p>{value}</p>
      <span className="badge">Source: {source || "—"}</span>
    </div>
  );
}
