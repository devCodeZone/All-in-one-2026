# Senior AI-Integrated Frontend Interview Kit — September 2026

This kit focuses specifically on **AI-enabled frontend engineering**, not generic machine learning theory.

It contains runnable/reference files covering:

- LLM fundamentals, tokens, context, embeddings and RAG
- Prompt engineering and prompt-injection boundaries
- OpenAI Responses API concepts
- Streaming AI UI and cancellation
- Structured outputs
- Function/tool calling and bounded agent loops
- RAG, vector search, reranking and citations
- Multimodal image/file/voice UX
- React AI integration
- Angular AI integration
- Vercel AI SDK concepts
- Browser/local inference, WebGPU, WebLLM and Transformers.js concepts
- Model Context Protocol (MCP)
- Security, output validation, PII handling and rate limits
- Evals, observability, latency, model routing and prompt caching
- Senior AI system-design prompts
- Portfolio projects for an AI-enabled frontend profile

## Why the architecture uses a backend

A browser bundle is public. Permanent model-provider API keys must stay server-side. The supplied Express BFF owns the OpenAI SDK and the React app calls `/api/chat`.

## Folder structure

```text
src/
├── 01_ai_llm_fundamentals/
├── 02_prompt_engineering/
├── 03_openai_responses_api/
├── 04_streaming_ai_ux/
├── 05_tools_agents/
├── 06_rag_embeddings/
├── 07_multimodal/
├── 08_react_ai/
├── 09_angular_ai/
├── 10_browser_local_ai/
├── 11_mcp/
├── 12_ai_security_guardrails/
├── 13_evals_observability/
├── 14_cost_performance/
├── 15_ai_system_design/
├── 16_interview_questions/
└── 17_portfolio_projects/
```

## Senior interview answer formula

For an AI frontend design question, answer in this order:

**User experience → trust boundary → model/backend flow → streaming/state → structured data/tools → grounding → safety/security → latency/cost → evals/observability → fallback/trade-offs.**

## Key architectural rule

```text
Browser UI
    ↓
Authenticated Backend / BFF
    ↓
AI Orchestration
 ┌───────┼─────────┐
 Model   RAG       Tools/MCP
    ↓      ↓          ↓
 Streaming / Structured Result
    ↓
Accessible Frontend UI
```

## File-by-file interview one-liners

| File | Interview line |
|---|---|
| `01_ai_llm_fundamentals/01_LLM.ts.ts` | An LLM predicts tokens from context; frontend engineers integrate it as a probabilistic service rather than deterministic business logic. |
| `01_ai_llm_fundamentals/02_Tokens_Context_Window.ts.ts` | Tokens are model input/output units, and the context window is the maximum token budget available for instructions, conversation, retrieved data, and generated output. |
| `01_ai_llm_fundamentals/03_Temperature_Determinism.ts.ts` | Model generation is probabilistic; lower randomness improves repeatability, but production reliability should come from schemas, validation, tools, and evals—not temperature alone. |
| `01_ai_llm_fundamentals/04_Embeddings.ts.ts` | An embedding converts content into a numeric vector so semantically similar items can be compared for retrieval, clustering, or recommendations. |
| `01_ai_llm_fundamentals/05_RAG.ts.ts` | RAG retrieves relevant external knowledge and injects it into model context so answers can be grounded in information outside the model's parameters. |
| `02_prompt_engineering/01_System_User_Instructions.ts.ts` | Separate durable developer instructions from user content so policy, role, output constraints, and task data are not mixed together. |
| `02_prompt_engineering/02_Few_Shot.ts.ts` | Few-shot prompting supplies representative input-output examples to demonstrate a pattern when plain instructions are insufficient. |
| `02_prompt_engineering/03_Prompt_Template.ts.ts` | Prompt templates keep instructions versionable and inject only validated variables into well-defined placeholders. |
| `02_prompt_engineering/04_Prompt_Injection_Defense.ts.ts` | Treat retrieved/user content as untrusted data; never let it redefine system policy, tool permissions, or authorization decisions. |
| `03_openai_responses_api/01_Basic_Response.ts.ts` | The Responses API is a unified model interface for text, multimodal input, tools, structured outputs, conversation state, and streaming. |
| `03_openai_responses_api/02_Multiturn_Previous_Response.ts.ts` | previous_response_id lets a backend continue a Responses API conversation without manually resending every prior response item. |
| `03_openai_responses_api/03_Structured_Output.ts.ts` | Structured Outputs constrain model responses to a JSON Schema so frontend code receives predictable machine-readable data. |
| `03_openai_responses_api/04_Function_Calling.ts.ts` | Function calling lets the model request application capabilities with schema-validated arguments; your code executes the function and returns the result. |
| `03_openai_responses_api/05_Streaming.ts.ts` | Streaming sends partial response events as generation happens, reducing perceived latency and enabling progressive AI UI rendering. |
| `03_openai_responses_api/06_File_Search_RAG.ts.ts` | Hosted file search is a retrieval tool that lets a model search configured vector stores and ground responses in uploaded documents. |
| `03_openai_responses_api/07_Web_Search_Tool.ts.ts` | Built-in web search lets the model retrieve current public information when freshness is required instead of relying only on training knowledge. |
| `04_streaming_ai_ux/01_Streaming_State_Machine.ts.ts` | AI chat UIs should model idle, submitted, streaming, completed, stopped, and error states instead of a single loading boolean. |
| `04_streaming_ai_ux/02_Abort_Stop_Generation.ts.ts` | A Stop button should abort the current request/stream, update UI state immediately, and discard late chunks from the cancelled generation. |
| `04_streaming_ai_ux/03_Optimistic_User_Message.ts.ts` | AI chat should render the user's message immediately, then append or stream the assistant response while preserving a stable message ID. |
| `04_streaming_ai_ux/04_Accessible_Live_Region.tsx.tsx` | Streaming AI text should use restrained aria-live announcements so screen-reader users receive updates without being overwhelmed by every token. |
| `05_tools_agents/01_Tool_Schema.ts.ts` | Tool schemas are contracts: describe narrowly scoped capabilities with strict arguments, validate them again server-side, and authorize each execution. |
| `05_tools_agents/02_Agent_Loop.ts.ts` | An agent loop alternates model reasoning/selection with tool execution until it produces a final answer or reaches explicit step/time/tool limits. |
| `05_tools_agents/03_Human_Approval.ts.ts` | Require explicit human approval before high-impact tool actions such as sending messages, publishing, purchases, deletions, or production changes. |
| `05_tools_agents/04_Tool_Result_UI.tsx.tsx` | Render tool calls as first-class UI states—pending, succeeded, failed, approval-required—rather than hiding them inside plain assistant text. |
| `06_rag_embeddings/01_Chunking.ts.ts` | Chunking splits source documents into retrieval-sized units with metadata so relevant context can be found without sending entire documents to the model. |
| `06_rag_embeddings/02_Vector_Search.ts.ts` | Vector search ranks stored embeddings by semantic similarity to the query embedding; production systems combine scores with metadata filters and access control. |
| `06_rag_embeddings/03_Citations.ts.ts` | Grounded AI UX should carry source IDs/URLs through retrieval and render citations beside claims so users can inspect supporting evidence. |
| `06_rag_embeddings/04_Reranking.ts.ts` | Reranking applies a stronger relevance model or heuristic to an initial retrieval candidate set, improving final context quality without searching the full corpus expensively. |
| `07_multimodal/01_Image_Input.ts.ts` | Multimodal models can combine text with image input, enabling frontend flows such as screenshot analysis, visual search, document understanding, and design review. |
| `07_multimodal/02_File_Upload_AI.tsx.tsx` | AI file-upload UX should validate size/type, preview locally when useful, upload to a trusted backend, and never place provider credentials in the browser. |
| `07_multimodal/03_Realtime_Voice_WebRTC.ts.ts` | Realtime voice AI uses low-latency transports such as WebRTC for browser audio and requires server-mediated session authorization rather than exposing permanent API keys. |
| `08_react_ai/01_React_Chat_State.tsx.tsx` | A React AI chat component needs stable message IDs, explicit async status, abortable requests, streaming-safe updates, and accessible announcements. |
| `08_react_ai/02_Vercel_AI_SDK_useChat.tsx.tsx` | AI SDK useChat packages common streaming-chat state, transport, messages, status, and tool-aware UI behavior for React applications. |
| `08_react_ai/03_AI_Suspense_Streaming_Concept.tsx.tsx` | React AI UX can combine server streaming, Suspense boundaries, and progressive UI so slow AI/data regions do not block the whole page. |
| `09_angular_ai/01_Angular_AI_Service.ts.ts` | In Angular, isolate AI transport in an injectable service and expose typed Signals/Observables so components remain presentation-focused. |
| `09_angular_ai/02_Angular_Signal_AI_State.ts.ts` | Signals are a natural fit for AI UI state such as messages, status, selected citations, tool calls, and streaming progress. |
| `09_angular_ai/03_RxJS_AI_Typeahead.ts.ts` | Angular AI suggestions can use debounceTime plus switchMap so only the latest query drives results and obsolete requests are unsubscribed. |
| `10_browser_local_ai/01_WebGPU_Concept.ts.ts` | WebGPU enables high-performance GPU compute in the browser, making local/on-device AI inference possible on supported hardware. |
| `10_browser_local_ai/02_WebLLM_Concept.ts.ts` | WebLLM runs compatible LLMs locally in the browser over WebGPU, improving privacy/offline behavior at the cost of download size, memory, hardware variability, and model capability. |
| `10_browser_local_ai/03_TransformersJS_Concept.ts.ts` | Transformers.js enables transformer inference in JavaScript/browser environments for tasks such as embeddings, classification, vision, and smaller generative workloads. |
| `10_browser_local_ai/04_Hybrid_Local_Cloud.ts.ts` | A hybrid AI architecture routes privacy-sensitive or lightweight tasks locally and sends complex reasoning to cloud models when needed. |
| `11_mcp/01_MCP_Overview.ts.ts` | MCP is an open protocol for connecting AI hosts to external tools, resources, and prompts through standardized server interfaces. |
| `11_mcp/02_MCP_2026_Stateless.ts.ts` | The 2026-07-28 MCP specification moves the core protocol to stateless request/response behavior, improving routing, scaling, caching, and authorization infrastructure. |
| `11_mcp/03_MCP_Tool_Server.ts.ts` | An MCP tool server publishes schema-described capabilities so compatible AI hosts can discover and invoke application functions. |
| `11_mcp/04_MCP_Security.ts.ts` | MCP authorization must be enforced by servers/gateways; model intent never substitutes for user identity, scopes, tenant boundaries, or application authorization. |
| `12_ai_security_guardrails/01_Secrets_BFF.ts.ts` | Never call a paid model provider from browser code with a permanent secret; use a backend-for-frontend that owns credentials, policy, rate limits, and logging. |
| `12_ai_security_guardrails/02_Output_Validation.ts.ts` | Model output is untrusted input to your application; validate structured values before using them for rendering, database writes, tool arguments, or business logic. |
| `12_ai_security_guardrails/03_XSS_AI_Markdown.ts.ts` | AI-generated Markdown/HTML must be treated as untrusted content; sanitize HTML and prefer safe renderers instead of directly assigning innerHTML. |
| `12_ai_security_guardrails/04_PII_Minimization.ts.ts` | Send only the user data needed for the AI task, redact unnecessary PII, define retention, and separate authorization from model prompting. |
| `12_ai_security_guardrails/05_Rate_Limit_Budget.ts.ts` | AI endpoints need per-user/tenant rate limits, concurrency caps, token/output limits, and abuse controls because inference is costly and potentially tool-enabled. |
| `13_evals_observability/01_Evals.ts.ts` | AI evals are repeatable test datasets plus graders/criteria used to measure model behavior before and after prompt, model, retrieval, or tool changes. |
| `13_evals_observability/02_AI_Trace.ts.ts` | Trace every AI request with request IDs, model/prompt version, latency, token/cost metadata, tool calls, retrieval IDs, outcome, and user-visible errors—without logging sensitive content unnecessarily. |
| `13_evals_observability/03_Latency_Budget.ts.ts` | AI latency should be decomposed into network, retrieval, model time-to-first-token, streaming duration, and tool latency so optimization targets the real bottleneck. |
| `13_evals_observability/04_Model_Routing.ts.ts` | Model routing selects a model based on task complexity, latency, quality, modality, and cost rather than sending every request to the largest model. |
| `14_cost_performance/01_Prompt_Caching.ts.ts` | Prompt caching improves repeated-prefix efficiency by keeping stable instructions/context prefixes consistent and separating frequently changing user content later in the prompt. |
| `14_cost_performance/02_Context_Trimming.ts.ts` | Long-running AI chats need context management such as summarization, retrieval, truncation, or state extraction instead of blindly resending unlimited history. |
| `14_cost_performance/03_Deduplicate_Requests.ts.ts` | Deduplicate identical in-flight AI requests so repeated renders/clicks do not create duplicate inference cost. |
| `15_ai_system_design/01_AI_Chat_Architecture.ts.ts` | A production AI chat separates UI, authenticated BFF/API, model orchestration, tools/retrieval, persistence, observability, and safety boundaries. |
| `15_ai_system_design/02_Copilot_Architecture.ts.ts` | An in-product copilot should be context-aware, scoped to the current user/resource, offer explainable actions, and require confirmation for consequential mutations. |
| `15_ai_system_design/03_AI_Search.ts.ts` | AI search typically combines lexical/vector retrieval, metadata/permission filters, optional reranking, answer synthesis, and citations. |
| `15_ai_system_design/04_AI_Form_Assistant.ts.ts` | An AI form assistant should generate suggestions separately from authoritative form state, validate every accepted suggestion, and make user acceptance explicit. |
| `15_ai_system_design/05_AI_Code_Review_Feature.ts.ts` | An AI code-review feature should chunk/diff intelligently, ground against project conventions, return structured findings, preserve file/line references, and run evals for precision/noise. |
| `16_interview_questions/01_What_Is_AI_Frontend.ts.ts` | AI-integrated frontend engineering is the design of responsive, safe, observable user experiences around probabilistic models, streaming, tools, retrieval, and multimodal interactions. |
| `16_interview_questions/02_RAG_vs_FineTuning.ts.ts` | Use RAG for fresh/private/retrievable knowledge, fine-tuning for learned behavior/style/task patterns, and combine them when both knowledge grounding and behavior specialization are needed. |
| `16_interview_questions/03_Agent_vs_Workflow.ts.ts` | A workflow has mostly predefined steps, while an agent dynamically chooses actions/tools; prefer deterministic workflows unless open-ended decision-making genuinely adds value. |
| `16_interview_questions/04_AI_Failure_Modes.ts.ts` | Senior AI frontend engineers plan for hallucinations, malformed output, prompt injection, tool failure, stale retrieval, partial streams, timeouts, model drift, rate limits, and inaccessible AI UI states. |
| `17_portfolio_projects/01_AI_Interview_Copilot.ts.ts` | An interview copilot project demonstrates streaming chat, RAG over personal notes, structured answers, citations, model/tool controls, and accessible UX. |
| `17_portfolio_projects/02_AI_A11y_Reviewer.ts.ts` | An AI accessibility reviewer combines deterministic DOM/a11y checks with model explanation so AI augments standards-based testing instead of replacing it. |
| `17_portfolio_projects/03_AI_Data_Table_Assistant.ts.ts` | An AI data-table assistant converts natural-language intent into validated filter/sort schemas instead of allowing the model to directly execute arbitrary queries. |
