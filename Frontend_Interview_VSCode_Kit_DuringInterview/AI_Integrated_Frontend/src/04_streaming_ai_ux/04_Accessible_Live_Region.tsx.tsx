/**
 * INTERVIEW ONE-LINER:
 * Streaming AI text should use restrained aria-live announcements so screen-reader users receive updates without being overwhelmed by every token.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { useState } from "react";

export function AccessibleAnswer() {
  const [text] = useState("Streaming answer...");

  return (
    <section>
      {/* "polite" waits for a suitable announcement opportunity. */}
      <div aria-live="polite" aria-atomic="false">
        {text}
      </div>
    </section>
  );
}
