# Senior TypeScript Frontend Interview Kit

This kit progresses from scratch through senior frontend TypeScript and current TypeScript 6.0 topics.

## Folder map
- 01 basics
- 02 functions
- 03 interfaces & aliases
- 04 unions & narrowing
- 05 generics
- 06 utility types
- 07 advanced types
- 08 classes/OOP
- 09 modules
- 10 async/promises
- 11 DOM/frontend
- 12 strict safety
- 13 tsconfig/build
- 14 patterns/system design
- 15 interview coding
- 16 TypeScript 6 latest
- 17 frontend integration
- 18 decorators/declarations
- 19 senior interview concepts

## Commands
```bash
npm install
npm run check
npx tsx src/15_interview_coding/01_Debounce_Generic.ts
```

## File-by-file one-liners
| File | Interview one-liner |
|---|---|
| `01_basics/01_Primitive_Types.ts` | TypeScript adds static types to JavaScript; primitives include string, number, boolean, bigint, symbol, null, and undefined. |
| `01_basics/02_Type_Inference.ts` | Type inference lets TypeScript derive types from values and context, reducing unnecessary annotations. |
| `01_basics/03_Arrays_Tuples.ts` | Arrays hold one element type while tuples model fixed positions with known types. |
| `01_basics/04_Object_Optional_Readonly.ts` | Object types describe required, optional, and readonly properties of structured values. |
| `01_basics/05_Any_Unknown_Never.ts` | any disables checking, unknown requires narrowing, and never represents impossible/non-returning values. |
| `01_basics/06_Enum_vs_Const_Object.ts` | Enums create named constants, but const objects plus literal unions are often simpler for frontend APIs. |
| `02_functions/01_Function_Types.ts` | Function types define parameter and return contracts and make callbacks type-safe. |
| `02_functions/02_Optional_Default_Rest.ts` | Functions support optional parameters, defaults, and typed rest parameters for flexible signatures. |
| `02_functions/03_Overloads.ts` | Overloads expose multiple caller signatures while sharing a single runtime implementation. |
| `02_functions/04_Generic_Callback.ts` | Generic callback types preserve input/output relationships in higher-order functions. |
| `02_functions/05_This_Parameter.ts` | A fake this parameter documents and type-checks the expected receiver without becoming a runtime argument. |
| `03_interfaces_aliases/01_Interface.ts` | Interfaces name object contracts and support extension and declaration merging. |
| `03_interfaces_aliases/02_Type_Alias.ts` | A type alias can name objects, primitives, tuples, unions, functions, and advanced type expressions. |
| `03_interfaces_aliases/03_Interface_vs_Type.ts` | Use interfaces naturally for extensible object contracts and type aliases for unions/advanced composition; consistency matters most. |
| `03_interfaces_aliases/04_Declaration_Merging.ts` | Interfaces with the same name merge declarations, useful for augmentation but best used deliberately. |
| `03_interfaces_aliases/05_Extends_Intersection.ts` | extends composes interfaces while intersections combine multiple type requirements into one shape. |
| `04_unions_narrowing/01_Union_Literal.ts` | Union and literal types model finite alternatives and require safe narrowing before member-specific operations. |
| `04_unions_narrowing/02_Discriminated_Union.ts` | A discriminated union uses a shared literal field to model safe state machines and API results. |
| `04_unions_narrowing/03_Typeof_In_Instanceof.ts` | typeof, in, and instanceof are runtime checks TypeScript uses to narrow union types. |
| `04_unions_narrowing/04_Type_Guard.ts` | A type predicate value is Type packages reusable runtime validation that narrows values for TypeScript. |
| `04_unions_narrowing/05_Assertion_Function.ts` | Assertion functions use asserts to tell TypeScript that runtime validation guarantees a condition afterward. |
| `04_unions_narrowing/06_Exhaustive_Never.ts` | Assigning an unhandled union case to never gives compile-time exhaustiveness checking. |
| `05_generics/01_Generic_Function.ts` | Generics preserve relationships between input and output types without falling back to any. |
| `05_generics/02_Constraints.ts` | Generic constraints restrict type parameters to capabilities the implementation actually needs. |
| `05_generics/03_Keyof_Generic.ts` | keyof plus generics creates type-safe property access where the key must exist on the object. |
| `05_generics/04_Generic_Interface.ts` | Generic interfaces create reusable contracts whose payload type is chosen by the consumer. |
| `05_generics/05_Default_Generics.ts` | Default generic parameters provide sensible type defaults while allowing callers to override them. |
| `05_generics/06_Const_Type_Parameters.ts` | const type parameters preserve literal information during generic inference and reduce extra as const usage. |
| `06_utility_types/01_Partial_Required_Readonly.ts` | Partial makes properties optional, Required makes them mandatory, and Readonly prevents assignment through that type. |
| `06_utility_types/02_Pick_Omit.ts` | Pick selects properties while Omit removes selected properties from an object type. |
| `06_utility_types/03_Record.ts` | Record<K,V> creates an object type whose known keys map to a consistent value type. |
| `06_utility_types/04_Exclude_Extract.ts` | Exclude removes matching union members while Extract keeps only matching members. |
| `06_utility_types/05_NonNullable.ts` | NonNullable removes null and undefined from a union type. |
| `06_utility_types/06_Parameters_ReturnType.ts` | Parameters and ReturnType derive function input tuples and return types from an existing function signature. |
| `06_utility_types/07_Awaited.ts` | Awaited recursively unwraps Promise-like types to the eventual resolved value. |
| `07_advanced_types/01_Keyof_Typeof.ts` | typeof captures a value type and keyof turns an object type into a union of its property names. |
| `07_advanced_types/02_Indexed_Access.ts` | Indexed access types obtain nested property or array-element types using T[K]. |
| `07_advanced_types/03_Mapped_Types.ts` | Mapped types iterate over property keys to systematically transform an existing object type. |
| `07_advanced_types/04_Conditional_Types.ts` | Conditional types select one type or another based on assignability and power reusable compile-time logic. |
| `07_advanced_types/05_Infer.ts` | infer introduces a type variable inside a conditional type so nested types can be extracted. |
| `07_advanced_types/06_Distributive_Conditional.ts` | Conditional types distribute over naked union parameters, applying the condition to each union member. |
| `07_advanced_types/07_Template_Literal_Types.ts` | Template literal types build string unions and are powerful for event names, routes, and component APIs. |
| `07_advanced_types/08_Key_Remap.ts` | Mapped types can remap keys with as, enabling transformations such as generating getter names. |
| `07_advanced_types/09_Recursive_Types.ts` | Recursive types reference themselves and model trees, menus, JSON-like structures, and schemas. |
| `08_classes_oop/01_Class_Basics.ts` | TypeScript classes add typed fields, constructors, methods, and compile-time contracts on top of JavaScript classes. |
| `08_classes_oop/02_Access_Modifiers.ts` | public is externally accessible, protected is class/subclass-only, and private is class-only at compile time. |
| `08_classes_oop/03_Readonly_Parameter_Properties.ts` | Constructor parameter properties declare and initialize class fields in one concise parameter list. |
| `08_classes_oop/04_Abstract_Class.ts` | Abstract classes provide shared implementation plus abstract members concrete subclasses must implement. |
| `08_classes_oop/05_Implements.ts` | implements verifies that a class satisfies an interface contract without changing runtime behavior. |
| `08_classes_oop/06_Override.ts` | The override modifier explicitly marks subclass overrides and noImplicitOverride catches accidental mismatches. |
| `09_modules/01_ES_Modules.ts` | Modern TypeScript follows JavaScript ESM with explicit import/export boundaries and type checking across modules. |
| `09_modules/02_Type_Only_Imports.ts` | import type and export type make type-only dependencies explicit and erase them from emitted JavaScript. |
| `09_modules/03_Namespace_vs_Module.ts` | ES modules are preferred for modern code; namespaces mainly remain for legacy/global-script scenarios. |
| `09_modules/04_Module_Resolution.ts` | moduleResolution controls import lookup; use Bundler with frontend bundlers or NodeNext when Node resolves modules itself. |
| `10_async_promises/01_Promise_Types.ts` | Promise<T> represents an eventual T, and async functions automatically return Promise-wrapped results. |
| `10_async_promises/02_Validate_External_Data.ts` | TypeScript types do not validate network JSON at runtime, so external unknown data should be parsed before trusting it. |
| `10_async_promises/03_Result_Pattern.ts` | A discriminated Result type models success/failure explicitly instead of relying only on thrown exceptions. |
| `11_dom_frontend/01_DOM_Query_Types.ts` | DOM APIs return nullable/specific element types, so frontend TypeScript should narrow or safely handle missing elements. |
| `11_dom_frontend/02_Event_Types.ts` | Browser event handlers should narrow currentTarget/target to the correct element type instead of using any. |
| `11_dom_frontend/03_Typed_Event_Map.ts` | Typed event maps constrain event names and payloads and are useful for event-bus/component APIs. |
| `12_strict_safety/01_Strict_Null_Checks.ts` | Strict null checking forces null/undefined to be handled explicitly instead of silently flowing into ordinary values. |
| `12_strict_safety/02_NoUncheckedIndexedAccess.ts` | noUncheckedIndexedAccess adds undefined to unchecked indexed reads, forcing safer bounds/existence handling. |
| `12_strict_safety/03_ExactOptionalPropertyTypes.ts` | exactOptionalPropertyTypes distinguishes a missing optional property from explicitly assigning undefined. |
| `12_strict_safety/04_Unknown_Catch.ts` | Catch variables are safest as unknown because JavaScript can throw any value, not only Error objects. |
| `12_strict_safety/05_Satisfies.ts` | satisfies validates a value against a target type while preserving the value’s more specific inferred type. |
| `12_strict_safety/06_As_Const.ts` | as const prevents literal widening and makes object/array properties readonly, preserving exact literal information. |
| `12_strict_safety/07_Type_Assertion_Caution.ts` | A type assertion performs no runtime validation, so prefer narrowing/parsing when data is uncertain. |
| `13_tsconfig_build/01_TSConfig_Core.ts` | tsconfig defines project boundaries/compiler behavior; senior developers should know target, module, resolution, strictness, libs, and emit. |
| `13_tsconfig_build/02_Target_vs_Lib.ts` | target controls emitted JavaScript syntax while lib controls which runtime API types TypeScript assumes exist. |
| `13_tsconfig_build/03_Declaration_Files.ts` | declaration emit creates .d.ts API descriptions so TypeScript consumers can type-check compiled JavaScript libraries. |
| `13_tsconfig_build/04_Project_References.ts` | Project references split large codebases into buildable dependency units and improve incremental build/editor scalability. |
| `13_tsconfig_build/05_IsolatedModules.ts` | isolatedModules ensures each file can be transpiled independently, matching modern bundler behavior. |
| `13_tsconfig_build/06_VerbatimModuleSyntax.ts` | verbatimModuleSyntax keeps module emit predictable and makes type-only imports explicit. |
| `14_patterns_system_design/01_Typed_API_Response.ts` | A generic API envelope centralizes response metadata while preserving endpoint-specific payload types. |
| `14_patterns_system_design/02_UI_State_Machine.ts` | Discriminated unions model UI state so impossible loading/data/error combinations are excluded by construction. |
| `14_patterns_system_design/03_Typed_Event_Bus.ts` | A generic event map makes event names type-safe and links each event to the correct payload shape. |
| `14_patterns_system_design/04_Branded_Types.ts` | Branded types create nominal-like distinctions between structurally identical primitives such as UserId and OrderId. |
| `14_patterns_system_design/05_Deep_Readonly.ts` | Recursive mapped types can express deep immutability, though runtime freezing is separate. |
| `14_patterns_system_design/06_Parse_Dont_Cast.ts` | For external data, parse/validate unknown into trusted domain types instead of directly casting JSON. |
| `14_patterns_system_design/07_Typed_Routes.ts` | Template literal types can make route builders type-safe and reduce hard-coded path mistakes. |
| `14_patterns_system_design/08_Design_System_Props.ts` | Literal/discriminated unions create component prop APIs that make invalid variant combinations impossible. |
| `15_interview_coding/01_Debounce_Generic.ts` | A generic debounce delays execution until calls stop for a configured interval while preserving argument types. |
| `15_interview_coding/02_Throttle_Generic.ts` | Throttle limits a function to at most one execution per interval for high-frequency events such as scroll/resize. |
| `15_interview_coding/03_GroupBy_Generic.ts` | A generic groupBy preserves item type while grouping by a derived property key. |
| `15_interview_coding/04_UniqueBy_Generic.ts` | A generic uniqueBy removes duplicates using a typed key selector while preserving the original item type. |
| `15_interview_coding/05_Memoize_Generic.ts` | Memoization caches deterministic results by key to avoid repeating expensive work. |
| `15_interview_coding/06_Retry_Async.ts` | A typed retry helper repeats failing async work with bounded attempts while preserving the resolved result type. |
| `15_interview_coding/07_Deep_Partial.ts` | DeepPartial recursively makes nested properties optional and is useful for patches, fixtures, and test builders. |
| `15_interview_coding/08_Typed_Object_Keys.ts` | A typed Object.keys helper preserves keyof T for known closed objects but should be used carefully with runtime extra keys. |
| `16_typescript_6_latest/01_TS6_Overview.ts` | TypeScript 6.0 is a transition release toward the native TypeScript 7 compiler, with modern defaults and legacy-option deprecations. |
| `16_typescript_6_latest/02_ES2025_Target.ts` | TypeScript 6.0 supports es2025 for target/lib, aligning type checking with modern built-in APIs. |
| `16_typescript_6_latest/03_Temporal_Types.ts` | TypeScript 6.0 includes Temporal API types under esnext/esnext.temporal, while runtime availability still depends on the environment. |
| `16_typescript_6_latest/04_Modern_Defaults.ts` | TypeScript 6.0 modernizes defaults around strictness, ESM, target level, side-effect import checking, and rootDir behavior. |
| `16_typescript_6_latest/05_ModuleResolution_Migration.ts` | TypeScript 6.0 deprecates node/node10 resolution; use Bundler for frontend bundlers or NodeNext for Node-driven resolution. |
| `16_typescript_6_latest/06_Import_Attributes.ts` | Modern import attributes use with syntax; TypeScript 6.0 deprecates the older asserts import-assertion syntax. |
| `16_typescript_6_latest/07_Stable_Type_Ordering.ts` | stableTypeOrdering is a migration-oriented TypeScript 6 flag intended to reduce ordering differences when moving toward TypeScript 7. |
| `16_typescript_6_latest/08_TS7_Preparation.ts` | Projects should remove TypeScript 6 deprecated options before TypeScript 7, whose compiler is moving to a native implementation. |
| `17_frontend_integration/01_React_Props_Types.ts` | In React, TypeScript should model props, events, refs, state machines, and API contracts without over-annotating inferred locals. |
| `17_frontend_integration/02_Angular_Service_Types.ts` | In Angular, TypeScript provides contracts behind DI services, HttpClient models, RxJS streams, forms, signals, and component APIs. |
| `17_frontend_integration/03_DTO_vs_Domain.ts` | Separate API DTOs from domain/view models when transport shapes differ from application needs. |
| `17_frontend_integration/04_Form_Model.ts` | A form model can intentionally differ from API/domain models so UI-only fields do not leak into backend contracts. |
| `18_decorators_declarations/01_Decorator_Concept.ts` | Decorators are metaprogramming hooks; understand whether your framework uses legacy experimental decorators or standard ECMAScript decorators. |
| `18_decorators_declarations/02_Declare_Global.ts` | declare describes runtime values TypeScript cannot see and emits no JavaScript implementation. |
| `18_decorators_declarations/03_Module_Augmentation.ts` | Module augmentation extends an existing module’s declared types without replacing its runtime implementation. |
| `19_senior_interview/01_Structural_Typing.ts` | TypeScript uses structural typing: compatibility depends primarily on shape rather than explicit nominal declarations. |
| `19_senior_interview/02_Excess_Property_Check.ts` | Fresh object literals receive excess-property checks, helping catch misspelled or unexpected fields. |
| `19_senior_interview/03_Variance_Basics.ts` | Variance describes how generic compatibility changes with subtype relationships and matters most for callbacks and mutable containers. |
| `19_senior_interview/04_Type_Erasure.ts` | TypeScript types are erased during compilation, so interfaces and aliases cannot perform runtime validation. |
| `19_senior_interview/05_Compile_vs_Runtime.ts` | TypeScript catches many compile-time mistakes, but runtime correctness still needs validation, tests, error handling, and security controls. |
| `19_senior_interview/06_Unknown_Over_Any.ts` | unknown is safer than any because it requires explicit narrowing before operations. |
| `19_senior_interview/07_Interface_or_Type.ts` | Choose interface for naturally extensible object contracts and type for unions/composition; consistency matters more than dogma. |
| `19_senior_interview/08_Never_vs_Void.ts` | void means a function returns no useful value; never means it cannot complete normally or a code path is impossible. |
