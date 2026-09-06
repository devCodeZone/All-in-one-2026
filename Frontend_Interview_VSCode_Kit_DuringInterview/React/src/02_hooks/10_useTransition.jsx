import { useState, useTransition } from "react";

const items = Array.from({ length: 4000 }, (_, i) => `Item ${i + 1}`);

export default function UseTransitionDemo() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // urgent update: input stays responsive

    startTransition(() => {
      // non-urgent update can be interrupted
      setFiltered(items.filter((x) => x.toLowerCase().includes(value.toLowerCase())));
    });
  };

  return (
    <div className="demo">
      <h2>useTransition</h2>
      <p className="interview-line">
        Interview one-liner: useTransition marks non-urgent state updates so urgent interactions remain responsive.
      </p>
      <input value={query} onChange={handleChange} placeholder="Filter 4000 items" />
      <p>{isPending ? "Updating..." : `${filtered.length} matches`}</p>
      <div>{filtered.slice(0, 20).map((x) => <div key={x}>{x}</div>)}</div>
    </div>
  );
}
