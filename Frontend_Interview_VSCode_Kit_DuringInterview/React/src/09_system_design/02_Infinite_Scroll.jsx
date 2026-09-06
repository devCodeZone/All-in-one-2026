import { useEffect, useRef, useState } from "react";

const PAGE = 10;
const TOTAL = 80;

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(false);
  const sentinel = useRef(null);

  async function loadMore() {
    if (loading || cursor >= TOTAL) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const next = Array.from({ length: Math.min(PAGE, TOTAL - cursor) }, (_, i) => `Record ${cursor + i + 1}`);
    setItems((old) => [...old, ...next]);
    setCursor((c) => c + next.length);
    setLoading(false);
  }

  useEffect(() => { loadMore(); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading && cursor < TOTAL) loadMore();
    }, { rootMargin: "100px" });
    const el = sentinel.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [cursor, loading]);

  return (
    <div className="demo">
      <h2>System Design: Infinite Scroll</h2>
      <p className="interview-line">
        Interview one-liner: IntersectionObserver triggers cursor-based pagination near the viewport, while virtualization is added when the rendered list becomes very large.
      </p>
      {items.map((x) => <div className="card" key={x}>{x}</div>)}
      <div ref={sentinel}>{loading ? "Loading..." : cursor >= TOTAL ? "End" : "Scroll more"}</div>
    </div>
  );
}
