/**
 * INTERVIEW ONE-LINER:
 * An AI code-review feature should chunk/diff intelligently, ground against project conventions, return structured findings, preserve file/line references, and run evals for precision/noise.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Finding = {
  file: string;
  line: number;
  category: "bug" | "a11y" | "performance" | "security";
  explanation: string;
};

const finding: Finding = {
  file: "Search.tsx",
  line: 42,
  category: "bug",
  explanation: "Older request can overwrite the latest query result."
};

console.log(finding);
