import { useRef, useState } from "react";

export default function LatestWins() {
  const [result, setResult] = useState("");
  const latestId = useRef(0);

  async function search(term) {
    const id = ++latestId.current;
    const delay = Math.random() * 1200;
    await new Promise((r) => setTimeout(r, delay));

    // Ignore response if a newer request already started.
    if (id === latestId.current) setResult(`Latest result: ${term}`);
  }

  return (
    <div className="demo">
      <h2>Race Condition: Latest Wins</h2>
      <p className="interview-line">
        Interview one-liner: A request sequence ID ensures only the latest response is allowed to update the UI.
      </p>
      <button onClick={() => search("React")}>Search React</button>
      <button onClick={() => search("Angular")}>Search Angular</button>
      <p>{result}</p>
    </div>
  );
}
