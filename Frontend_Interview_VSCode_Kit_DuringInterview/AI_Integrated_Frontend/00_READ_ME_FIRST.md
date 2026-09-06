# AI-Integrated Frontend Senior Interview Kit — 2026

Use this kit beside your JavaScript, TypeScript, React and Angular interview folders.

## Recommended folder in your master kit

```text
Frontend_Interview_VSCode_Kit/
├── JavaScript/
├── TypeScript/
├── React/
├── Angular/
└── AI_Integrated_Frontend/
```

## Run the starter app

1. Install Node.js 20+ (newer LTS is better).
2. Open this folder in VS Code.
3. Run:

```bash
npm install
```

4. Copy `.env.example` to `.env`.
5. Put your API key in `.env`:

```text
OPENAI_API_KEY=...
```

Important: **never place the API key in React/Angular frontend code or a `VITE_*` variable.**

6. Start both frontend and backend:

```bash
npm run dev
```

7. Open the Vite URL, normally:

```text
http://localhost:5173
```

The browser calls `/api/chat`; Vite proxies it to the local Express server at port 8787.

## Type-check

```bash
npm run check
```

## Study order

### Level 1 — AI foundations
LLM, tokens, context window, embeddings, RAG, probabilistic output.

### Level 2 — Integration
Responses API, streaming, structured outputs, function/tool calling, multimodal input.

### Level 3 — Frontend AI UX
chat state machines, optimistic user messages, stop/abort, citations, accessibility, loading/error/retry.

### Level 4 — Knowledge + actions
RAG, chunking, vector search, reranking, tools, bounded agents, human approval, MCP.

### Level 5 — Production
prompt injection defense, XSS, secret handling, output validation, PII minimization, rate limiting, evals, traces, latency/cost budgets, model routing.

### Level 6 — Current 2026 topics
Responses API, realtime/WebRTC, AI SDK streaming UI, browser/local models via WebGPU, MCP 2026 stateless core, resource/http tool patterns, structured tool schemas and eval-driven development.
