/**
 * INTERVIEW ONE-LINER:
 * Grounded AI UX should carry source IDs/URLs through retrieval and render citations beside claims so users can inspect supporting evidence.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Citation = {
  sourceId: string;
  title: string;
  excerpt: string;
};

const answer = {
  text: "Hydration attaches interactivity to server-rendered HTML.",
  citations: [
    {
      sourceId: "doc-12",
      title: "Frontend Rendering Guide",
      excerpt: "Hydration attaches client-side handlers..."
    }
  ] satisfies Citation[]
};

console.log(answer);
