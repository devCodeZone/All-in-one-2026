/**
 * INTERVIEW ONE-LINER:
 * React AI UX can combine server streaming, Suspense boundaries, and progressive UI so slow AI/data regions do not block the whole page.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { Suspense } from "react";

function SlowAIResult() {
  return <div>AI result region</div>;
}

export function AIPage() {
  return (
    <main>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Preparing AI insight...</p>}>
        <SlowAIResult />
      </Suspense>
    </main>
  );
}
