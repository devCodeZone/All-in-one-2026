import { useRef, useState } from "react";

export default function SWRDemo() {
  const cache = useRef(new Map());
  const [data, setData] = useState("");
  const [status, setStatus] = useState("idle");

  async function fetchFresh(key) {
    setStatus("refreshing");
    await new Promise((r) => setTimeout(r, 700));
    const fresh = `Fresh ${key} @ ${new Date().toLocaleTimeString()}`;
    cache.current.set(key, fresh);
    setData(fresh);
    setStatus("fresh");
  }

  function load(key) {
    if (cache.current.has(key)) {
      setData(cache.current.get(key)); // show stale cached data immediately
      setStatus("stale shown");
      fetchFresh(key); // refresh in background
    } else {
      fetchFresh(key);
    }
  }

  return (
    <div className="demo">
      <h2>System Design: Client Cache / SWR</h2>
      <p className="interview-line">
        Interview one-liner: Stale-while-revalidate serves cached data immediately and refreshes it in the background, balancing speed and freshness.
      </p>
      <button onClick={() => load("profile")}>Load Profile</button>
      <p>{data || "No data"}</p>
      <span className="badge">{status}</span>
    </div>
  );
}
