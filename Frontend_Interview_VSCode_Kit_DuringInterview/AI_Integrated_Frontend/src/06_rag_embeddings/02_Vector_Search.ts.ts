/**
 * INTERVIEW ONE-LINER:
 * Vector search ranks stored embeddings by semantic similarity to the query embedding; production systems combine scores with metadata filters and access control.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type VectorRow = {
  id: string;
  embedding: number[];
  tenantId: string;
};

function dot(a: number[], b: number[]) {
  return a.reduce((sum, value, index) => sum + value * (b[index] ?? 0), 0);
}

function retrieve(query: number[], rows: VectorRow[], tenantId: string) {
  return rows
    .filter((row) => row.tenantId === tenantId) // Security filter before ranking.
    .map((row) => ({ ...row, score: dot(query, row.embedding) }))
    .sort((a, b) => b.score - a.score);
}

console.log(retrieve([1, 0], [
  { id: "a", embedding: [0.9, 0.1], tenantId: "t1" },
  { id: "b", embedding: [0.1, 0.9], tenantId: "t1" }
], "t1"));
