/**
 * INTERVIEW ONE-LINER:
 * Custom Error subclasses carry domain-specific metadata while preserving stack traces and instanceof checks.
 *
 * RUN:
 * node src/10_errors/02_Custom_Error.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

const error = new HttpError(404, "Not found");

console.log(error instanceof Error, error instanceof HttpError, error.status);
