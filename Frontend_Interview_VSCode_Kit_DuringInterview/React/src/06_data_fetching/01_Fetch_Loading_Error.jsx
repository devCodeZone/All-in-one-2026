import { useState } from "react";

export default function FetchLoadingError() {
  const [state, setState] = useState({ loading: false, data: null, error: null });

  async function load() {
    setState({ loading: true, data: null, error: null });
    try {
      await new Promise((r) => setTimeout(r, 700));
      if (Math.random() < 0.25) throw new Error("Mock network error");
      setState({ loading: false, data: { message: "Loaded successfully" }, error: null });
    } catch (error) {
      setState({ loading: false, data: null, error: error.message });
    }
  }

  return (
    <div className="demo">
      <h2>Fetch: Loading + Error + Success</h2>
      <p className="interview-line">
        Interview one-liner: Every async UI should model loading, success, empty, and error states explicitly.
      </p>
      <button onClick={load}>Load Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p role="alert">Error: {state.error}</p>}
      {state.data && <p>{state.data.message}</p>}
    </div>
  );
}
