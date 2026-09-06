/**
 * INTERVIEW ONE-LINER:
 * An AI form assistant should generate suggestions separately from authoritative form state, validate every accepted suggestion, and make user acceptance explicit.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Suggestion<T> = {
  field: keyof T;
  proposedValue: unknown;
  accepted: boolean;
};

type ProfileForm = {
  title: string;
  summary: string;
};

const suggestion: Suggestion<ProfileForm> = {
  field: "summary",
  proposedValue: "Senior frontend developer with AI integration experience.",
  accepted: false
};

console.log(suggestion);
