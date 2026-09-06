import { useEffect, useState } from "react";

export default function AbortControllerDemo() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      await new Promise((r) => setTimeout(r, 600));
      if (!controller.signal.aborted) setResult(`Result for "${query}"`);
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="demo">
      <h2>AbortController</h2>
      <p className="interview-line">
        Interview one-liner: AbortController cancels obsolete async work so stale requests do not waste resources or update current UI.
      </p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type quickly" />
      <p>{result}</p>
    </div>
  );
}
