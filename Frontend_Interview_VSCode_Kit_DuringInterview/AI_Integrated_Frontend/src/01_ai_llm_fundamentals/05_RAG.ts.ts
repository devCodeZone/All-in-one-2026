/**
 * INTERVIEW ONE-LINER:
 * RAG retrieves relevant external knowledge and injects it into model context so answers can be grounded in information outside the model's parameters.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type DocumentChunk = {
  id: string;
  text: string;
  score: number;
};

function buildRagPrompt(question: string, chunks: DocumentChunk[]) {
  // Keep only the highest-scoring context to control latency/cost/context size.
  const context = chunks
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((chunk) => `[${chunk.id}] ${chunk.text}`)
    .join("\n");

  return `Use only this context:\n${context}\n\nQuestion: ${question}`;
}

console.log(buildRagPrompt("What is hydration?", [
  { id: "a", text: "Hydration attaches client behavior to server-rendered HTML.", score: 0.95 }
]));
