/**
 * INTERVIEW ONE-LINER:
 * Hosted file search is a retrieval tool that lets a model search configured vector stores and ground responses in uploaded documents.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const requestShape = {
  model: "gpt-5",
  input: "What does our frontend coding standard say about accessibility?",
  tools: [
    {
      type: "file_search",
      vector_store_ids: ["vs_your_vector_store_id"] // Create/store this server-side.
    }
  ]
};

console.log(requestShape);
