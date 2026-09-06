import { useEffect, useState } from "react";

export default function WebVitalsObserver() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (!("PerformanceObserver" in window)) return;

    const supported = PerformanceObserver.supportedEntryTypes || [];
    const wanted = ["largest-contentful-paint", "layout-shift"];
    const observers = [];

    wanted.forEach((type) => {
      if (!supported.includes(type)) return;
      const observer = new PerformanceObserver((list) => {
        setEntries((old) => [...old, ...list.getEntries().map((e) => ({ name: e.entryType, value: Math.round(e.startTime || e.value || 0) }))]);
      });
      observer.observe({ type, buffered: true });
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="demo">
      <h2>System Design: Web Vitals / Performance Observation</h2>
      <p className="interview-line">
        Interview one-liner: Core Web Vitals focus on LCP for loading, INP for responsiveness, and CLS for visual stability.
      </p>
      <p>This browser may expose only some performance entry types.</p>
      {entries.map((e, i) => <div className="card" key={i}>{e.name}: {e.value}</div>)}
    </div>
  );
}
