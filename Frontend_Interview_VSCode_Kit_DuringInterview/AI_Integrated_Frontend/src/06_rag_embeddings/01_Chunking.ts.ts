/**
 * INTERVIEW ONE-LINER:
 * Chunking splits source documents into retrieval-sized units with metadata so relevant context can be found without sending entire documents to the model.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


function chunkText(text: string, maxChars = 500): string[] {
  const chunks: string[] = [];

  for (let start = 0; start < text.length; start += maxChars) {
    chunks.push(text.slice(start, start + maxChars)); // Simple demo; production chunking should respect semantic boundaries.
  }

  return chunks;
}

console.log(chunkText("A".repeat(1200)).map((c) => c.length));
