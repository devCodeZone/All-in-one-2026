# Senior JavaScript Frontend Interview Kit — ES2026 Edition

This kit is designed for a Senior Frontend Developer who wants one place for JavaScript study, application work, coding rounds, and live interview showcasing.

It contains **145 runnable/reference files** with an interview one-liner at the top and explanatory comments around the important code.

## Folder map

- `00_quick_revision` — JavaScript mental model and rapid senior revision
- `01_basics` — variables, primitives, operators, coercion-related foundations
- `02_strings` — string APIs, template/tagged templates, Unicode
- `03_control_flow` — conditionals and loops
- `04_functions_scope_closure` — functions, scope, hoisting, closures, HOFs, currying
- `05_this_bind_classes` — this, call/apply/bind, classes, private/static fields
- `06_objects_prototypes` — objects, descriptors, prototypes, copying, freeze/seal
- `07_arrays_collections` — array APIs, Map/Set/WeakMap, grouping, copying methods
- `08_iterators_generators` — iteration protocols, generators, async generators, iterator helpers
- `09_async_event_loop` — callbacks, Promise, async/await, event loop, cancellation/races
- `10_errors` — error handling, custom Error, cause, Error.isError
- `11_modules` — ES modules, dynamic import, import.meta, import attributes
- `12_regex_json_date` — RegExp, JSON, Date, Intl
- `13_browser_dom` — DOM/events/observers/storage/URL
- `14_fetch_webapis` — fetch, cancellation, WebSocket/SSE/Worker concepts, structuredClone
- `15_performance_memory` — debounce, throttle, memoization, GC, listener cleanup, WeakRef
- `16_patterns` — module/factory/pub-sub/composition/function composition
- `17_interview_coding` — common senior JavaScript implementation exercises
- `18_es2025_es2026_latest` — current standardized JavaScript features
- `19_senior_interview` — execution model, lexical environments, identity, rendering concepts
- `20_security_architecture` — XSS, prototype pollution, CSRF/CORS, a11y, error architecture
- `21_system_design` — typeahead, optimistic UI, SWR cache, pagination/virtualization, realtime transport

## Run any file

```bash
node src/04_functions_scope_closure/04_Closure.js
node src/09_async_event_loop/05_Event_Loop_Order.js
node src/15_performance_memory/01_Debounce.js
node src/18_es2025_es2026_latest/01_ES2025_2026_Overview.js
```

## File-by-file interview one-liners

| File | What to say |
|---|---|
| `00_quick_revision/01_JavaScript_Overview.js` | JavaScript is a dynamically typed, prototype-based, garbage-collected language with first-class functions and an event-loop concurrency model. |
| `00_quick_revision/02_Interview_Mental_Model.js` | For senior JavaScript interviews, explain values/types, scope/closures, objects/prototypes, async/event loop, browser APIs, performance, and trade-offs. |
| `01_basics/01_Variables_Let_Const_Var.js` | Prefer const by default, use let for reassignment, and understand var's function scope plus hoisting for legacy/interview questions. |
| `01_basics/02_Primitive_Types.js` | JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol, and null. |
| `01_basics/03_Typeof_and_Type_Checking.js` | typeof is useful for primitive/function checks but has quirks, so arrays, null, dates, and cross-realm objects may need dedicated checks. |
| `01_basics/04_Operators.js` | Know arithmetic, comparison, logical, assignment, ternary, nullish-coalescing, and optional-chaining operators plus their coercion behavior. |
| `01_basics/05_Truthy_Falsy.js` | Falsy values are false, 0, -0, 0n, empty string, null, undefined, and NaN; every other value is truthy. |
| `01_basics/06_Equality.js` | Use strict equality === by default; loose equality == performs coercion and is mainly worth understanding for legacy/interview edge cases. |
| `01_basics/07_NaN_Infinity.js` | NaN is a numeric value representing an invalid number result; use Number.isNaN for reliable checks and Number.isFinite for finite-number validation. |
| `01_basics/08_Number_Precision.js` | JavaScript Number uses IEEE-754 double precision, so floating-point arithmetic can have rounding errors and integers are exact only through MAX_SAFE_INTEGER. |
| `01_basics/09_BigInt.js` | BigInt represents arbitrarily large integers but cannot be mixed directly with Number arithmetic. |
| `01_basics/10_Symbol.js` | Symbol creates unique primitive keys useful for collision-resistant object properties and well-known language protocols. |
| `02_strings/01_String_Methods.js` | Strings are immutable primitives; common methods include includes, startsWith, slice, replace, split, trim, and case conversion. |
| `02_strings/02_Template_Literals.js` | Template literals support interpolation and multiline strings, while tagged templates let a function process literal segments and expressions. |
| `02_strings/03_Tagged_Templates.js` | Tagged templates pass literal segments and expression values to a function, enabling custom escaping, localization, and DSL-style APIs. |
| `02_strings/04_Unicode_WellFormed.js` | isWellFormed and toWellFormed help detect or replace lone UTF-16 surrogates so strings are safe for Unicode-sensitive APIs. |
| `03_control_flow/01_If_Switch_Ternary.js` | Use if/else for general branching, switch for discrete cases, and ternary for compact value selection. |
| `03_control_flow/02_Loops.js` | for, while, for...of, and array iteration methods serve different needs; avoid for...in for array values because it enumerates property keys. |
| `03_control_flow/03_Break_Continue_Labels.js` | break exits a loop/switch, continue skips to the next iteration, and labels can target nested loops but should be used sparingly. |
| `04_functions_scope_closure/01_Function_Declaration_Expression_Arrow.js` | Function declarations are hoisted with their body, function expressions are values, and arrow functions have lexical this/arguments. |
| `04_functions_scope_closure/02_Scope.js` | JavaScript uses lexical scope: a function can access bindings from where it was defined, not from where it is called. |
| `04_functions_scope_closure/03_Hoisting_TDZ.js` | Declarations are processed before execution, but let/const/class remain in the temporal dead zone until initialization while var is initialized to undefined. |
| `04_functions_scope_closure/04_Closure.js` | A closure is a function retaining access to its lexical environment even after the outer function has returned. |
| `04_functions_scope_closure/05_IIFE.js` | An IIFE runs immediately and historically created private scope before block scope and ES modules became standard. |
| `04_functions_scope_closure/06_Default_Rest_Parameters.js` | Default parameters provide fallback values and rest parameters gather remaining arguments into a real array. |
| `04_functions_scope_closure/07_Spread_Syntax.js` | Spread expands iterable/object values while rest collects values; the syntax is the same but the role depends on position. |
| `04_functions_scope_closure/08_Higher_Order_Functions.js` | A higher-order function takes or returns functions, enabling reusable behaviors such as map, filter, decorators, middleware, and composition. |
| `04_functions_scope_closure/09_Currying.js` | Currying transforms a multi-argument function into nested single-argument functions and can improve partial reuse/configuration. |
| `04_functions_scope_closure/10_Recursion.js` | Recursion solves a problem by calling the same function on a smaller subproblem and requires a terminating base case. |
| `05_this_bind_classes/01_This_Rules.js` | this is determined mainly by the call site: method call, explicit call/apply/bind, constructor new, or default binding; arrows capture lexical this. |
| `05_this_bind_classes/02_Call_Apply_Bind.js` | call invokes immediately with positional arguments, apply invokes immediately with an argument array, and bind returns a new function with fixed this/arguments. |
| `05_this_bind_classes/03_Class_Syntax.js` | Class syntax is primarily a clearer layer over JavaScript's prototype-based inheritance and supports fields, private fields, static members, and inheritance. |
| `05_this_bind_classes/04_Inheritance_Super.js` | extends links class prototypes for inheritance and super calls parent constructors or methods. |
| `05_this_bind_classes/05_Private_Fields_Static_Blocks.js` | Private #fields are runtime-enforced class internals, while static blocks perform one-time class-level initialization. |
| `06_objects_prototypes/01_Object_Basics.js` | Objects are mutable key-value collections whose property keys are strings or symbols and whose behavior is influenced by descriptors and prototypes. |
| `06_objects_prototypes/02_Destructuring.js` | Destructuring extracts properties/elements with defaults, aliases, nesting, and rest syntax. |
| `06_objects_prototypes/03_Object_Methods.js` | Object.keys/values/entries enumerate own enumerable string-keyed properties, while fromEntries reconstructs objects from key-value pairs. |
| `06_objects_prototypes/04_Property_Descriptors.js` | Property descriptors control writable, enumerable, configurable, getter, and setter behavior beyond ordinary assignment. |
| `06_objects_prototypes/05_Getters_Setters.js` | Getters and setters expose property-like APIs backed by functions, useful for validation or derived access but should avoid surprising side effects. |
| `06_objects_prototypes/06_Prototype_Chain.js` | Property lookup walks an object's prototype chain until a matching property is found or the chain ends at null. |
| `06_objects_prototypes/07_Constructor_Prototype.js` | Constructor functions combined with new create objects linked to Constructor.prototype; class syntax formalizes the same prototype model. |
| `06_objects_prototypes/08_Object_Create_Assign.js` | Object.create chooses a prototype explicitly, while Object.assign performs a shallow enumerable-property copy into a target. |
| `06_objects_prototypes/09_Freeze_Seal.js` | Object.freeze prevents adding/removing/reassigning own properties and Object.seal prevents adding/removing, but both are shallow. |
| `06_objects_prototypes/10_Shallow_vs_Deep_Copy.js` | Spread and Object.assign are shallow copies; structuredClone performs a deep clone for many structured-clone-compatible values. |
| `07_arrays_collections/01_Array_Methods.js` | map transforms, filter selects, reduce aggregates, find returns the first match, some checks any, and every checks all. |
| `07_arrays_collections/02_Mutating_vs_NonMutating.js` | Know which array APIs mutate; modern toSorted, toReversed, toSpliced, and with provide immutable alternatives to sort, reverse, splice, and index assignment. |
| `07_arrays_collections/03_Flat_FlatMap.js` | flat reduces nested array depth while flatMap maps each item and flattens one level in one operation. |
| `07_arrays_collections/04_Array_From_FromAsync.js` | Array.from builds arrays from iterables/array-like values, while Array.fromAsync consumes async iterables or promise-like elements. |
| `07_arrays_collections/05_Set.js` | Set stores unique values and modern Set methods support union, intersection, difference, symmetricDifference, and relationship checks. |
| `07_arrays_collections/06_Map.js` | Map stores key-value pairs with keys of any type, preserves insertion order, and is often preferable to plain objects for dynamic keyed collections. |
| `07_arrays_collections/07_WeakMap_WeakSet.js` | WeakMap and WeakSet hold objects weakly so their presence does not prevent garbage collection; they are useful for private metadata and object-lifetime caches. |
| `07_arrays_collections/08_Object_GroupBy_Map_GroupBy.js` | Object.groupBy and Map.groupBy group iterable items by a callback-produced key, reducing manual reduce boilerplate. |
| `08_iterators_generators/01_Iterable_Iterator.js` | An iterable exposes Symbol.iterator and produces an iterator whose next() returns {value, done}. |
| `08_iterators_generators/02_Generator.js` | Generator functions pause with yield and return iterators, making lazy sequences easy to express. |
| `08_iterators_generators/03_Async_Generator.js` | Async generators combine async/await with yield and are consumed through for await...of. |
| `08_iterators_generators/04_Iterator_Helpers.js` | Iterator helpers provide lazy map/filter/take/drop/flatMap/reduce-style operations directly on iterator objects. |
| `08_iterators_generators/05_Iterator_Concat.js` | Iterator.concat sequences several iterable inputs lazily into one iterator without eagerly materializing all values. |
| `09_async_event_loop/01_Callbacks.js` | Callbacks are functions supplied for later execution; nested callback-style async code can become difficult to compose and error-handle. |
| `09_async_event_loop/02_Promise.js` | A Promise represents eventual fulfillment or rejection and supports chaining through then, catch, and finally. |
| `09_async_event_loop/03_Async_Await.js` | async/await is syntax over Promises that makes sequential asynchronous control flow easier to read while preserving Promise semantics. |
| `09_async_event_loop/04_Promise_Combinators.js` | Promise.all fails fast, allSettled waits for every result, race settles on the first settled promise, and any fulfills on the first fulfillment. |
| `09_async_event_loop/05_Event_Loop_Order.js` | Synchronous code runs first, then queued microtasks such as Promise callbacks, then task/macrotask callbacks such as timers. |
| `09_async_event_loop/06_Microtask_Queue.js` | queueMicrotask and Promise reactions schedule microtasks, which run after the current stack but before the next task; excessive microtasks can starve rendering. |
| `09_async_event_loop/07_Promise_WithResolvers.js` | Promise.withResolvers returns a promise together with external resolve/reject functions and is useful when completion is controlled outside the Promise constructor. |
| `09_async_event_loop/08_Promise_Try.js` | Promise.try invokes a callback and always returns a Promise, converting synchronous throws and async results into one Promise-based flow. |
| `09_async_event_loop/09_AbortController.js` | AbortController provides a standard cancellation signal used by fetch and many async APIs to stop obsolete work. |
| `09_async_event_loop/10_Async_Race_Latest_Wins.js` | For typeahead and similar UIs, combine cancellation or request IDs with debounce so older async responses cannot overwrite newer state. |
| `10_errors/01_Try_Catch_Finally.js` | try/catch handles thrown exceptions and finally runs cleanup regardless of success or failure. |
| `10_errors/02_Custom_Error.js` | Custom Error subclasses carry domain-specific metadata while preserving stack traces and instanceof checks. |
| `10_errors/03_Error_Cause.js` | The Error cause option preserves the original failure while wrapping it with higher-level context. |
| `10_errors/04_Error_IsError.js` | Error.isError provides a cross-realm-safe standard way to determine whether a value is an Error object. |
| `11_modules/01_ES_Modules.js` | ES modules use static import/export, have their own scope, are strict by default, and enable tree-shaking-friendly dependency graphs. |
| `11_modules/02_Dynamic_Import.js` | dynamic import() loads a module asynchronously at runtime and is the foundation of route/feature code splitting. |
| `11_modules/03_Import_Meta.js` | import.meta exposes module-specific metadata such as import.meta.url, which can resolve resources relative to the current module. |
| `11_modules/04_Import_Attributes.js` | Import attributes attach host-understood metadata to imports, with JSON modules standardized using with { type: 'json' }. |
| `12_regex_json_date/01_Regular_Expressions.js` | Regular expressions match text patterns; know flags, groups, lookarounds, replace callbacks, and the cost of pathological backtracking. |
| `12_regex_json_date/02_RegExp_Escape.js` | RegExp.escape safely escapes user text before embedding it into a dynamically constructed regular expression. |
| `12_regex_json_date/03_RegExp_Modifiers.js` | Inline RegExp modifiers can enable or disable selected flags for only part of a pattern, improving local control of matching behavior. |
| `12_regex_json_date/04_JSON_Parse_Stringify.js` | JSON.parse converts JSON text to values and JSON.stringify serializes JSON-compatible values with optional reviver/replacer hooks. |
| `12_regex_json_date/05_JSON_RawJSON_Source.js` | ES2026 adds JSON.rawJSON plus reviver source context, enabling finer control over primitive serialization and access to original JSON source text. |
| `12_regex_json_date/06_Date_Basics.js` | Date stores a timestamp in milliseconds and has legacy parsing/time-zone quirks, so use explicit ISO data and Intl for presentation. |
| `12_regex_json_date/07_Intl.js` | Intl provides locale-aware formatting for numbers, dates, lists, relative time, plural rules, segments, and more. |
| `13_browser_dom/01_DOM_Selection.js` | DOM querying returns live browser objects and may return null, so select narrowly, cache where appropriate, and prefer semantic markup over heavy manual DOM manipulation. |
| `13_browser_dom/02_Event_Propagation.js` | DOM events travel through capture, target, and bubble phases; delegation uses bubbling to handle many descendants efficiently. |
| `13_browser_dom/03_PreventDefault_StopPropagation.js` | preventDefault cancels a browser default action while stopPropagation stops event travel; they solve different problems and should not be used reflexively. |
| `13_browser_dom/04_CustomEvent.js` | CustomEvent lets browser components publish semantic events with a detail payload, reducing direct coupling. |
| `13_browser_dom/05_IntersectionObserver.js` | IntersectionObserver asynchronously reports visibility intersections and is ideal for lazy loading, infinite-scroll sentinels, and viewability tracking. |
| `13_browser_dom/06_MutationObserver.js` | MutationObserver watches DOM structural/attribute/text changes asynchronously and should be scoped carefully to avoid unnecessary work. |
| `13_browser_dom/07_ResizeObserver.js` | ResizeObserver reacts to element-size changes without global resize polling and is useful for responsive components. |
| `13_browser_dom/08_RequestAnimationFrame.js` | requestAnimationFrame schedules visual updates before the next browser paint and is preferred over timers for frame-synchronized animation. |
| `13_browser_dom/09_Web_Storage.js` | localStorage persists string data across sessions while sessionStorage is scoped to a tab/session; neither is appropriate for secrets. |
| `13_browser_dom/10_URL_URLSearchParams.js` | URL and URLSearchParams provide standards-based parsing and mutation of URLs instead of manual string concatenation. |
| `14_fetch_webapis/01_Fetch.js` | fetch returns a Promise for an HTTP Response; HTTP 4xx/5xx do not automatically reject, so check response.ok explicitly. |
| `14_fetch_webapis/02_Fetch_Abort_Timeout.js` | Combine fetch with AbortController or AbortSignal.timeout where supported to cancel stale requests and enforce time limits. |
| `14_fetch_webapis/03_WebSocket_Concept.js` | WebSocket provides persistent bidirectional client-server communication for frequent real-time messages, with reconnect/backpressure/protocol concerns handled by the application. |
| `14_fetch_webapis/04_Server_Sent_Events.js` | Server-Sent Events provide automatic-reconnecting one-way server-to-browser text streams over HTTP and fit notification/feed-style push updates. |
| `14_fetch_webapis/05_Web_Worker_Concept.js` | Web Workers move CPU-heavy JavaScript off the main thread and communicate through message passing rather than shared DOM access. |
| `14_fetch_webapis/06_StructuredClone.js` | structuredClone deep-clones many built-in structured data types and supports transferable objects, unlike JSON stringify/parse hacks. |
| `15_performance_memory/01_Debounce.js` | Debounce delays execution until calls stop for a period, making it ideal for search input, autosave, and bursty events. |
| `15_performance_memory/02_Throttle.js` | Throttle limits execution frequency during continuous events such as scroll, resize, pointer movement, or analytics signals. |
| `15_performance_memory/03_Memoization.js` | Memoization caches deterministic results by input so repeated expensive calculations can be reused at the cost of memory and invalidation complexity. |
| `15_performance_memory/04_Garbage_Collection.js` | JavaScript uses reachability-based garbage collection; memory leaks happen when obsolete objects remain reachable through listeners, timers, caches, globals, or closures. |
| `15_performance_memory/05_Event_Listener_Cleanup.js` | Long-lived event listeners retain their callbacks and captured state, so components should remove listeners or use AbortSignal-based cleanup when destroyed. |
| `15_performance_memory/06_WeakRef_FinalizationRegistry.js` | WeakRef and FinalizationRegistry are specialized GC-aware APIs and should not be used for correctness because garbage-collection timing is nondeterministic. |
| `16_patterns/01_Module_Pattern.js` | The module pattern uses closure to expose a public API while keeping internal state private; ES modules now provide a cleaner language-level module boundary. |
| `16_patterns/02_Factory_Function.js` | A factory function creates and configures objects without requiring new and can naturally use closure-based private state. |
| `16_patterns/03_Observer_PubSub.js` | Observer/pub-sub decouples producers from consumers through subscription, but production systems need unsubscribe, error isolation, and lifecycle control. |
| `16_patterns/04_Singleton_Caution.js` | A module export is naturally singleton-like per module instance, but global singletons can increase coupling and make testing/isolation harder. |
| `16_patterns/05_Composition_Over_Inheritance.js` | Composition combines small behaviors explicitly and often avoids the rigid coupling and fragile hierarchies of deep inheritance. |
| `16_patterns/06_Function_Composition.js` | Function composition builds larger transformations from small pure functions and is easiest to reason about when each function has no side effects. |
| `17_interview_coding/01_Flatten_Array.js` | Array flattening tests recursion/iteration, accumulator handling, and awareness of built-in flat(). |
| `17_interview_coding/02_GroupBy_Reduce.js` | Grouping with reduce tests object accumulation, dynamic keys, and immutable-vs-mutating accumulator trade-offs. |
| `17_interview_coding/03_Deep_Clone_Concept.js` | For general structured application data prefer structuredClone; writing a truly correct custom deep clone requires handling cycles and many built-in types. |
| `17_interview_coding/04_Deep_Equal.js` | Deep equality requires explicit semantics for primitives, arrays, object keys, cycles, prototypes, dates, maps, sets, and special values. |
| `17_interview_coding/05_Curry.js` | A generic curry interview solution accumulates arguments until the original function's declared arity is satisfied. |
| `17_interview_coding/06_Once.js` | once wraps a function so only its first invocation executes the underlying behavior and later calls reuse the stored result. |
| `17_interview_coding/07_Retry.js` | Retry logic should use bounded attempts, error propagation, optional backoff, and idempotency awareness for mutations. |
| `17_interview_coding/08_LRU_Cache.js` | An LRU cache evicts the least recently used entry when capacity is exceeded; Map insertion order makes a compact implementation possible. |
| `17_interview_coding/09_Promise_All_Polyfill.js` | A Promise.all-style implementation preserves input order, resolves when every input fulfills, and rejects immediately on the first rejection. |
| `17_interview_coding/10_Event_Emitter.js` | An event emitter maps event names to listener sets and should return or expose unsubscribe to avoid retained listeners. |
| `18_es2025_es2026_latest/01_ES2025_2026_Overview.js` | ES2025 standardized iterator helpers, Set methods, import attributes/JSON modules, RegExp.escape/modifiers, Promise.try, and Float16 APIs; ES2026 adds Array.fromAsync, Math.sumPrecise, Iterator.concat, Error.isError, Map/WeakMap get-or-insert methods, Uint8Array base64/hex helpers, and JSON source/raw JSON features. |
| `18_es2025_es2026_latest/02_Math_SumPrecise.js` | Math.sumPrecise sums an iterable of Numbers with better numerical accuracy than a naive reduce for values of very different magnitudes. |
| `18_es2025_es2026_latest/03_Map_GetOrInsert.js` | ES2026 Map/WeakMap get-or-insert methods remove repetitive has/get/set cache initialization patterns. |
| `18_es2025_es2026_latest/04_Uint8Array_Base64_Hex.js` | ES2026 Uint8Array helpers convert binary bytes to and from base64 and hexadecimal strings without manual browser/Node-specific glue. |
| `18_es2025_es2026_latest/05_Float16.js` | ES2025 added Float16Array, DataView float16 accessors, and Math.f16round for compact half-precision floating-point data. |
| `19_senior_interview/01_Execution_Context_Call_Stack.js` | Each function call creates an execution context pushed onto the call stack; synchronous JavaScript runs one stack frame at a time. |
| `19_senior_interview/02_Lexical_Environment.js` | A lexical environment pairs identifier bindings with a reference to an outer environment, which is the conceptual basis of lexical scope and closures. |
| `19_senior_interview/03_Pass_By_Value_Object_Sharing.js` | JavaScript always passes values; for objects that value is a reference-like pointer, so functions can mutate the same object but cannot replace the caller's binding. |
| `19_senior_interview/04_Immutability.js` | Immutability means creating new state instead of mutating existing state, which improves predictability and change detection but may increase allocation cost. |
| `19_senior_interview/05_Pure_Functions.js` | A pure function returns the same output for the same inputs and has no observable side effects, making it easy to test, cache, and compose. |
| `19_senior_interview/06_Deep_vs_Shallow_Equality.js` | Strict equality compares object identity, not deep structure; deep equality requires application-specific structural semantics. |
| `19_senior_interview/07_Prototype_vs_Class.js` | JavaScript's inheritance model is prototype-based; class syntax provides clearer constructor/inheritance/private-field syntax over that model. |
| `19_senior_interview/08_Concurrency_vs_Parallelism.js` | The event loop provides concurrency by interleaving async completions, while true parallel CPU work requires workers/processes or engine internals. |
| `19_senior_interview/09_CSR_SSR_Hydration_JS_View.js` | From JavaScript's perspective, CSR builds UI in the browser, SSR sends HTML from the server, and hydration attaches client behavior to existing server-rendered markup. |
| `19_senior_interview/10_Tree_Shaking.js` | Tree shaking is a bundler optimization that removes statically unreachable module exports and works best with side-effect-aware ES modules. |
| `20_security_architecture/01_XSS.js` | Prevent XSS by treating external text as untrusted, preferring textContent/framework escaping, sanitizing trusted-HTML cases, and enforcing CSP where appropriate. |
| `20_security_architecture/02_Prototype_Pollution.js` | Prototype pollution occurs when unsafe object-path/key merging lets attacker-controlled keys modify shared prototypes; reject dangerous keys and use safe merge strategies. |
| `20_security_architecture/03_CSRF_CORS.js` | CORS controls browser cross-origin read permissions, while CSRF is an authenticated cross-site request attack; they are different mechanisms. |
| `20_security_architecture/04_Accessibility_JS.js` | Use JavaScript to enhance native accessible semantics, not replace them; custom widgets must handle keyboard, focus, state, and ARIA correctly. |
| `20_security_architecture/05_Frontend_Error_Strategy.js` | A frontend error strategy separates validation errors, recoverable API failures, unexpected programming errors, logging, and user-facing fallbacks. |
| `21_system_design/01_Typeahead_Core.js` | A production typeahead combines debounce, cancellation/latest-wins, caching, loading/error state, keyboard navigation, and accessible combobox semantics. |
| `21_system_design/02_Optimistic_Update.js` | Optimistic UI applies the expected mutation immediately, records previous state, and rolls back or reconciles when the server responds. |
| `21_system_design/03_Cache_Stale_While_Revalidate.js` | Stale-while-revalidate returns cached data immediately when available and refreshes it in the background to balance latency with freshness. |
| `21_system_design/04_Pagination_Vs_Virtualization.js` | Pagination limits how much data is fetched, while virtualization limits how many DOM rows are rendered; large tables may need both. |
| `21_system_design/05_Realtime_Transport_Choice.js` | Choose polling, SSE, or WebSocket based on freshness, direction, frequency, infrastructure, reconnect behavior, and consistency requirements. |
