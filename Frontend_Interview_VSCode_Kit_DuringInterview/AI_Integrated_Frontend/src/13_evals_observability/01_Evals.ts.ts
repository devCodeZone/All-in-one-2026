/**
 * INTERVIEW ONE-LINER:
 * AI evals are repeatable test datasets plus graders/criteria used to measure model behavior before and after prompt, model, retrieval, or tool changes.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type EvalCase = {
  input: string;
  expectedKeyword: string;
};

const cases: EvalCase[] = [
  { input: "Define LCP", expectedKeyword: "loading" },
  { input: "Define CLS", expectedKeyword: "stability" }
];

function simpleGrade(output: string, expectedKeyword: string) {
  return output.toLowerCase().includes(expectedKeyword.toLowerCase());
}

console.log(cases, simpleGrade("LCP measures loading performance", "loading"));
