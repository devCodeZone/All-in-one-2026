/**
 * INTERVIEW ONE-LINER:
 * An AI data-table assistant converts natural-language intent into validated filter/sort schemas instead of allowing the model to directly execute arbitrary queries.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type TableIntent = {
  filters: Array<{ field: string; operator: "eq" | "contains"; value: string }>;
  sort?: { field: string; direction: "asc" | "desc" };
};

const intent: TableIntent = {
  filters: [{ field: "role", operator: "contains", value: "frontend" }],
  sort: { field: "experience", direction: "desc" }
};

console.log(intent);
