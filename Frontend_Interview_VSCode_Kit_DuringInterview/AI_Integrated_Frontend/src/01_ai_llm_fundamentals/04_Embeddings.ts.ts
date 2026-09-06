/**
 * INTERVIEW ONE-LINER:
 * An embedding converts content into a numeric vector so semantically similar items can be compared for retrieval, clustering, or recommendations.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Embedding = number[];

function cosineSimilarity(a: Embedding, b: Embedding): number {
  // Dot product measures alignment between vectors.
  const dot = a.reduce((sum, value, index) => sum + value * (b[index] ?? 0), 0);

  // Magnitudes normalize vector length.
  const magA = Math.sqrt(a.reduce((sum, value) => sum + value ** 2, 0));
  const magB = Math.sqrt(b.reduce((sum, value) => sum + value ** 2, 0));

  return dot / (magA * magB);
}

console.log(cosineSimilarity([1, 0, 1], [0.9, 0.1, 1]));
