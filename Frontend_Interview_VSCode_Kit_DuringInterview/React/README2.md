# Senior React Frontend Interview Kit

This project is designed for quick interview revision and live showcase.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL (normally `http://localhost:5173`).

## How to use in your existing folder

If you already have a Vite React project, copy the numbered folders from this project's `src/` into your existing `React/src/`.
You can also replace your `App.jsx` and `index.css` with the included versions to get the automatic interview dashboard.

## Senior-level answer pattern

For any React/system-design question, answer in this order:

1. Requirement and scale
2. Component/state ownership
3. Data/API flow
4. Loading/error/race conditions
5. Performance
6. Accessibility
7. Testing
8. Trade-offs

## Coverage

The kit covers core React fundamentals, hooks, rendering/state behavior, component patterns, state management, data fetching, performance, accessibility, system design, and security/architecture concepts. It intentionally avoids depending on third-party libraries so every demo is easy to run in a clean Vite project.

## File-by-file interview one-liners

| File | What to say |
|---|---|
| `01_fundamentals/01_JSX_Props.jsx` | JSX is syntax for describing React UI, while props are read-only inputs passed from parent to child. |
| `01_fundamentals/02_State_Events.jsx` | State represents mutable UI data; event handlers update state and React re-renders the affected component. |
| `01_fundamentals/03_Conditional_Rendering.jsx` | React conditionally renders UI using normal JavaScript such as if, ternary, and logical AND. |
| `01_fundamentals/04_Lists_Keys.jsx` | Stable keys help React identify which list items changed, were added, or removed during reconciliation. |
| `01_fundamentals/05_Controlled_Form.jsx` | In a controlled input, React state is the source of truth for the field value. |
| `02_hooks/01_useState.jsx` | useState adds local state to a function component and its setter schedules a re-render. |
| `02_hooks/02_useEffect_Cleanup.jsx` | useEffect synchronizes React with external systems; cleanup removes subscriptions, timers, or pending work. |
| `02_hooks/03_useRef.jsx` | useRef stores a mutable value across renders without triggering re-renders and can reference DOM nodes. |
| `02_hooks/04_useMemo.jsx` | useMemo memoizes a computed value and recomputes it only when its dependencies change. |
| `02_hooks/05_useCallback.jsx` | useCallback memoizes a function reference, mainly useful when passing callbacks to memoized children or hook dependencies. |
| `02_hooks/06_useReducer.jsx` | useReducer centralizes complex state transitions into a reducer driven by explicit actions. |
| `02_hooks/07_Custom_Hook.jsx` | A custom hook extracts reusable stateful logic without adding another component to the DOM. |
| `02_hooks/08_useLayoutEffect.jsx` | useLayoutEffect runs before paint and is appropriate for DOM measurement that must avoid visible flicker. |
| `02_hooks/09_useId.jsx` | useId generates stable unique IDs useful for accessibility relationships such as label-to-input. |
| `02_hooks/10_useTransition.jsx` | useTransition marks non-urgent state updates so urgent interactions remain responsive. |
| `02_hooks/11_useDeferredValue.jsx` | useDeferredValue lets a slow part of the UI lag behind an urgent value such as typed input. |
| `03_rendering_state/01_Stale_Closure.jsx` | Functional state updates avoid stale captured values when the next state depends on the previous state. |
| `03_rendering_state/02_State_Batching.jsx` | React batches multiple state updates to reduce unnecessary renders and improve performance. |
| `03_rendering_state/03_Strict_Mode.jsx` | StrictMode adds development-only checks and may re-run render/effect logic to reveal unsafe side effects. |
| `03_rendering_state/04_Derived_State.jsx` | Avoid duplicating state when a value can be derived from existing props or state during render. |
| `03_rendering_state/05_Lifting_State.jsx` | Lift shared state to the closest common parent so sibling components stay synchronized. |
| `03_rendering_state/06_Reconciliation_Keys.jsx` | Reconciliation compares element trees; stable keys preserve the correct component identity and state across list updates. |
| `04_component_patterns/01_Composition.jsx` | Composition builds flexible components by combining smaller components instead of relying on inheritance. |
| `04_component_patterns/02_Compound_Components.jsx` | Compound components share implicit state through context while exposing a flexible, declarative API. |
| `04_component_patterns/03_Controlled_Uncontrolled.jsx` | Controlled inputs store value in React state; uncontrolled inputs let the DOM own the value and are read through refs. |
| `04_component_patterns/04_forwardRef.jsx` | forwardRef exposes a child DOM node or imperative handle to a parent when direct access is genuinely needed. |
| `04_component_patterns/05_useImperativeHandle.jsx` | useImperativeHandle limits and customizes what a parent can access through a forwarded ref. |
| `04_component_patterns/06_Render_Props.jsx` | A render prop shares behavior by passing a function that decides how reusable state should be rendered. |
| `05_state_management/01_Context.jsx` | Context shares cross-cutting values without prop drilling, but broad updates can re-render consumers. |
| `05_state_management/02_Reducer_Context.jsx` | Reducer plus Context is a lightweight global-state pattern for explicit transitions without an external library. |
| `05_state_management/03_useSyncExternalStore.jsx` | useSyncExternalStore safely subscribes React to external mutable stores with consistent snapshots. |
| `05_state_management/04_State_Selection_Strategy.jsx` | Keep state as local as possible; use Context for low-frequency shared state and a dedicated store for complex cross-feature state. |
| `06_data_fetching/01_Fetch_Loading_Error.jsx` | Every async UI should model loading, success, empty, and error states explicitly. |
| `06_data_fetching/02_AbortController.jsx` | AbortController cancels obsolete async work so stale requests do not waste resources or update current UI. |
| `06_data_fetching/03_Latest_Wins.jsx` | A request sequence ID ensures only the latest response is allowed to update the UI. |
| `06_data_fetching/04_Simple_Cache.jsx` | Client caching reduces repeated requests; production solutions also need staleness, invalidation, deduplication, and retries. |
| `06_data_fetching/05_Polling.jsx` | Polling periodically refetches server state; always clean up the interval and prefer push-based updates for truly real-time data. |
| `07_performance/01_ReactMemo.jsx` | React.memo skips re-rendering a component when its props are referentially unchanged. |
| `07_performance/02_Code_Splitting_Suspense.jsx` | React.lazy and Suspense split non-critical code into separate chunks that load only when needed. |
| `07_performance/03_Profiler.jsx` | React Profiler measures render cost so optimization is driven by evidence rather than guesswork. |
| `07_performance/04_Manual_Virtualization.jsx` | Virtualization renders only visible rows, reducing DOM nodes and render cost for very large lists. |
| `07_performance/05_Performance_Checklist.jsx` | Diagnose first with Profiler, Web Vitals, network and bundle tools; then optimize the proven bottleneck. |
| `08_accessibility/01_Semantic_HTML.jsx` | Prefer native semantic elements because they provide built-in keyboard and accessibility behavior before adding ARIA. |
| `08_accessibility/02_ARIA_Live.jsx` | aria-live announces dynamic non-focus changes such as status messages to screen-reader users. |
| `08_accessibility/03_Keyboard_Tabs.jsx` | Custom widgets must provide keyboard interaction, focus management, and ARIA relationships matching the expected pattern. |
| `08_accessibility/04_Accessible_Form.jsx` | Accessible forms need programmatic labels, clear instructions, keyboard usability, and errors associated with their fields. |
| `09_system_design/01_Typeahead_Autocomplete.jsx` | Debounce limits requests, AbortController/latest-wins prevents stale updates, and keyboard + ARIA support makes autocomplete accessible. |
| `09_system_design/02_Infinite_Scroll.jsx` | IntersectionObserver triggers cursor-based pagination near the viewport, while virtualization is added when the rendered list becomes very large. |
| `09_system_design/03_Toast_System.jsx` | A toast system separates global notification state from portal-based rendering and supports queueing, timers, manual close, and aria-live. |
| `09_system_design/04_Modal_Dialog.jsx` | A production dialog uses a portal, focus trap, Escape handling, focus restoration, scroll lock, and correct ARIA semantics. |
| `09_system_design/05_Data_Table.jsx` | Use client-side operations for small datasets, server-side sorting/filtering/pagination for large datasets, and virtualization for large rendered row counts. |
| `09_system_design/06_Optimistic_UI.jsx` | Optimistic UI updates immediately for perceived speed, then reconciles with the server or rolls back on failure. |
| `09_system_design/07_Design_System_Button.jsx` | A design-system component exposes a small consistent API for variants, states, theming, composition, accessibility, and ref access. |
| `09_system_design/08_Multi_Step_Form.jsx` | Keep shared wizard state above steps, validate per step, preserve values across navigation, and persist drafts when appropriate. |
| `09_system_design/09_Auth_Guard.jsx` | The frontend guard improves UX, but authorization must always be enforced by the backend because client code is not a security boundary. |
| `09_system_design/10_API_Cache_Stale_While_Revalidate.jsx` | Stale-while-revalidate serves cached data immediately and refreshes it in the background, balancing speed and freshness. |
| `09_system_design/11_Error_Boundary.jsx` | Error Boundaries isolate render failures and show fallback UI so one broken subtree does not crash the whole application. |
| `09_system_design/12_Lazy_Route_Suspense.jsx` | Route-level code splitting reduces initial JavaScript by loading feature bundles only when users navigate to them. |
| `09_system_design/13_Large_List_Windowing.jsx` | Windowing keeps DOM size roughly constant even when the logical dataset contains tens of thousands of rows. |
| `09_system_design/14_Offline_Retry.jsx` | Retriable mutations need idempotency, backoff, visible status, and careful handling to avoid duplicate server writes. |
| `09_system_design/15_Web_Vitals_Observer.jsx` | Core Web Vitals focus on LCP for loading, INP for responsiveness, and CLS for visual stability. |
| `09_system_design/16_File_Upload_Preview.jsx` | File upload UX should validate type/size, preview safely, show progress, support cancellation, and let the server enforce final validation. |
| `09_system_design/17_Feature_Based_Architecture.jsx` | Feature-based architecture colocates UI, hooks, services, state, and tests by business capability so ownership and scaling stay clear. |
| `09_system_design/18_Realtime_Polling.jsx` | Use polling for simple periodic freshness and WebSocket/SSE when the server should push frequent real-time updates. |
| `10_security_architecture/01_XSS_Safe_Rendering.jsx` | React escapes text values by default; avoid dangerouslySetInnerHTML unless content is trusted or sanitized. |
| `10_security_architecture/02_Token_Storage_Concept.jsx` | Prefer secure, HttpOnly, SameSite cookies for sensitive session tokens where architecture allows; frontend route guards are UX, not authorization. |
| `10_security_architecture/03_Error_Handling_Strategy.jsx` | Handle expected API errors near the feature, unexpected render errors with boundaries, and log actionable diagnostics centrally. |
| `10_security_architecture/04_Micro_Frontend_Concept.jsx` | Micro frontends split a large UI by independently owned business domains, trading team autonomy for integration and consistency complexity. |
Run --------------------


Running the entire kit

Unzip it and open:

React_Senior_Frontend_Interview_Kit

in VS Code.

Then:

npm install

Only once.

After that:

npm run dev

You should get something like:

http://localhost:5173

The important improvement I made is that you do not need to manually modify App.jsx every time.

The dashboard automatically detects the JSX files and gives you a left-side menu grouped by:

Fundamentals
Hooks
Rendering State
Component Patterns
State Management
Data Fetching
Performance
Accessibility
System Design
Security Architecture

So during an interview you can simply click:

System Design
→ Typeahead Autocomplete

or:

Hooks
→ useEffect Cleanup

or:

Performance
→ Profiler

and immediately show it.

There are also two useful files at the root:

00_READ_ME_FIRST.md
SRC_FOLDER_TREE.txt

and a detailed:

README.md

which contains the file-by-file interview one-liners.

The priority I want you to follow

Don't try to memorize all 68 files equally. For a Senior Frontend interview, your sequence should be:

Level 1 — Must be extremely strong: JavaScript fundamentals, React state/props/events, hooks, useEffect, cleanup, stale closures, batching, Strict Mode, rendering and reconciliation.

Level 2 — Must confidently explain: Context, reducer, controlled/uncontrolled components, composition, custom hooks, refs, memoization.

Level 3 — Must confidently code: API fetching, loading/error states, AbortController, race conditions, caching, optimistic updates.

Level 4 — Must know as senior: Profiler, memoization strategy, virtualization, code splitting, Suspense, Web Vitals, accessibility.

Level 5 — Senior system design: Typeahead, Modal, Data Table, Toasts, Infinite Scroll, Optimistic UI, Design System, Form Wizard, Auth, caching, error architecture, real-time updates and feature-based architecture.

You do not need to memorize every bracket. The goal is that when the interviewer asks a topic, you know:

what it is → why it is needed → how it works → important API → edge cases → trade-off → small working code.

That is the level of command I would target for your Senior Frontend interviews. 