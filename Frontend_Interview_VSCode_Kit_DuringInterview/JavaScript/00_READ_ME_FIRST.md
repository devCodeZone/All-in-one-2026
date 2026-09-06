# JavaScript Senior Frontend Interview Kit — Quick Use

This kit is organized from **absolute JavaScript basics → senior frontend JavaScript → ES2025/ES2026 current features**.

## Run

No third-party package is required for the examples.

```bash
node src/01_basics/01_Variables_Let_Const_Var.js
```

Run the current-language overview:

```bash
npm run latest
```

Run the event-loop demo:

```bash
npm run event-loop
```

## Recommended interview study order

### Level 1 — Must be automatic
- let / const / var
- primitives
- coercion
- equality
- truthy/falsy
- strings
- arrays/objects
- destructuring/rest/spread
- functions
- scope
- hoisting/TDZ
- closures

### Level 2 — Must explain and code
- this / call / apply / bind
- prototypes
- classes
- higher-order functions
- map/filter/reduce
- Map / Set
- iterators / generators
- modules
- errors

### Level 3 — Senior async/browser knowledge
- Promise + async/await
- Promise combinators
- event loop
- task vs microtask
- AbortController
- race conditions
- fetch
- DOM events/delegation
- observers
- storage
- workers
- WebSocket/SSE

### Level 4 — Senior architecture/performance
- debounce/throttle
- memoization
- garbage collection / leaks
- immutable updates
- pub-sub
- composition
- caching
- optimistic UI
- pagination vs virtualization
- XSS / CSRF / CORS
- accessibility behavior

### Level 5 — Current JavaScript
ES2025:
- Iterator helpers
- Set methods
- import attributes / JSON modules
- RegExp.escape
- RegExp inline modifiers
- Promise.try
- Float16Array / Math.f16round

ES2026:
- Array.fromAsync
- Math.sumPrecise
- Iterator.concat
- Error.isError
- Map/WeakMap get-or-insert APIs
- Uint8Array base64/hex helpers
- JSON.parse source context
- JSON.rawJSON

Some ES2025/ES2026 examples use feature detection because the JavaScript specification can be newer than the Node/browser runtime used during an interview.
