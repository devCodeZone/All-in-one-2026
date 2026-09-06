/**
 * INTERVIEW ONE-LINER:
 * AI file-upload UX should validate size/type, preview locally when useful, upload to a trusted backend, and never place provider credentials in the browser.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { useState } from "react";

export function AIFileUpload() {
  const [name, setName] = useState("");

  return (
    <input
      type="file"
      accept=".pdf,image/*"
      onChange={(event) => {
        const file = event.target.files?.[0];

        if (!file) return;
        if (file.size > 10 * 1024 * 1024) {
          alert("File too large");
          return;
        }

        setName(file.name); // Next step: upload to your backend, not directly with a secret API key.
      }}
      aria-label={`Upload document ${name}`}
    />
  );
}
