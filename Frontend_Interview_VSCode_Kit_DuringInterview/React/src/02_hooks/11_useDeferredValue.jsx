import { useDeferredValue, useMemo, useState } from "react";

const items = Array.from({ length: 4000 }, (_, i) => `Frontend record ${i + 1}`);

export default function UseDeferredValueDemo() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(
    () => items.filter((x) => x.toLowerCase().includes(deferredQuery.toLowerCase())),
    [deferredQuery]
  );

  return (
    <div className="demo">
      <h2>useDeferredValue</h2>
      <p className="interview-line">
        Interview one-liner: useDeferredValue lets a slow part of the UI lag behind an urgent value such as typed input.
      </p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>{filtered.length} matches</p>
    </div>
  );
}
