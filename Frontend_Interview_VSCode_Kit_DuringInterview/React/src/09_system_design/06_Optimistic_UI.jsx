import { useState } from "react";

export default function OptimisticUI() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (loading) return;
    const previous = { liked, count };
    const next = !liked;

    // Update immediately before server confirms.
    setLiked(next);
    setCount((c) => next ? c + 1 : c - 1);
    setLoading(true);

    try {
      await new Promise((resolve, reject) => setTimeout(() => Math.random() > .3 ? resolve() : reject(), 700));
    } catch {
      // Roll back when the mutation fails.
      setLiked(previous.liked);
      setCount(previous.count);
      alert("Server failed: rolled back");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="demo">
      <h2>System Design: Optimistic UI</h2>
      <p className="interview-line">
        Interview one-liner: Optimistic UI updates immediately for perceived speed, then reconciles with the server or rolls back on failure.
      </p>
      <button onClick={toggle}>{liked ? "❤️ Liked" : "🤍 Like"} {count}</button>
      {loading && <span> syncing...</span>}
    </div>
  );
}
