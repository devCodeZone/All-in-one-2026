/**
 * INTERVIEW ONE-LINER:
 * Reranking applies a stronger relevance model or heuristic to an initial retrieval candidate set, improving final context quality without searching the full corpus expensively.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Candidate = { id: string; vectorScore: number; keywordMatch: boolean };

const candidates: Candidate[] = [
  { id: "a", vectorScore: 0.86, keywordMatch: true },
  { id: "b", vectorScore: 0.91, keywordMatch: false }
];

// Simple hybrid reranker for interview illustration.
const reranked = candidates
  .map((item) => ({
    ...item,
    finalScore: item.vectorScore + (item.keywordMatch ? 0.1 : 0)
  }))
  .sort((a, b) => b.finalScore - a.finalScore);

console.log(reranked);
