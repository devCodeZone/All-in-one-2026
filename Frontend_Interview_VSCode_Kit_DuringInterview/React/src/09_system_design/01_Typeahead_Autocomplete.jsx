import { useEffect, useRef, useState } from "react";

const USERS = ["Amit", "Anjali", "Ankit", "Deepak", "Jyoti", "Pawan", "Priya", "Rahul", "Ravi", "Sujata", "Supriya", "Vikas"];

export default function Typeahead() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const requestId = useRef(0);

  useEffect(() => {
    if (!query.trim()) { setResults([]); setActiveIndex(-1); return; }

    const currentRequest = ++requestId.current;
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 450)); // mock API delay
        if (controller.signal.aborted) return;
        const filtered = USERS.filter((u) => u.toLowerCase().includes(query.toLowerCase()));
        if (currentRequest === requestId.current) {
          setResults(filtered);
          setActiveIndex(-1);
        }
      } finally {
        if (currentRequest === requestId.current) setLoading(false);
      }
    }, 300);

    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);

  function onKeyDown(e) {
    if (!results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => i < results.length - 1 ? i + 1 : 0); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => i > 0 ? i - 1 : results.length - 1); }
    if (e.key === "Enter" && activeIndex >= 0) { setQuery(results[activeIndex]); setResults([]); }
    if (e.key === "Escape") { setResults([]); setActiveIndex(-1); }
  }

  return (
    <div className="demo">
      <h2>System Design: Typeahead / Autocomplete</h2>
      <p className="interview-line">
        Interview one-liner: Debounce limits requests, AbortController/latest-wins prevents stale updates, and keyboard + ARIA support makes autocomplete accessible.
      </p>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={results.length > 0}
        aria-controls="typeahead-list"
        placeholder="Search user..."
      />
      {loading && <p>Searching...</p>}
      {!!results.length && (
        <ul id="typeahead-list" role="listbox">
          {results.map((name, index) => (
            <li
              role="option"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "active-item" : ""}
              key={name}
              onMouseDown={() => { setQuery(name); setResults([]); }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
