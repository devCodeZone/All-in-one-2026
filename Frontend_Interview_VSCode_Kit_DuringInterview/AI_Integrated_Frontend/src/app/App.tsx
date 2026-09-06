import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Explain RAG in one line.");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);
    setAnswer("");

    try {
      // Browser calls our own backend; the API key never enters the browser bundle.
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }

      setAnswer(data.text);
    } catch (error) {
      setAnswer(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <h1>AI-Integrated Frontend Interview Kit</h1>
      <p>
        Runnable starter + categorized code references for senior frontend AI interviews.
      </p>

      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={5}
      />

      <button onClick={askAI} disabled={loading}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <section aria-live="polite">
        <h2>Response</h2>
        <pre>{answer || "Run the API server and ask a question."}</pre>
      </section>
    </main>
  );
}
