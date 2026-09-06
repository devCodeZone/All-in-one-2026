/** INTERVIEW ONE-LINER: This dashboard uses NgComponentOutlet to render compact standalone interview demos from a registry. */
import { Component, Type, signal } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { StandaloneComponentDemo } from './01_fundamentals/01_Standalone_Component.component';
import { TemplateBindingsDemo } from './01_fundamentals/02_Template_Bindings.component';
import { TwoWayBindingDemo } from './01_fundamentals/03_Two_Way_Binding.component';
import { TemplateReferenceDemo } from './01_fundamentals/04_Template_Reference.component';
import { PipesDemo } from './01_fundamentals/05_Pipes.component';
import { ControlFlowDemo } from './02_templates_directives/01_Control_Flow.component';
import { TemplateContainerDemo } from './02_templates_directives/02_NgTemplate_Container.component';
import { CustomDirectiveDemo } from './02_templates_directives/03_Custom_Directive.component';
import { CustomPipeDemo } from './02_templates_directives/04_Custom_Pipe.component';
import { SignalDemo } from './03_signals_reactivity/01_Signal.component';
import { ComputedDemo } from './03_signals_reactivity/02_Computed.component';
import { EffectDemo } from './03_signals_reactivity/03_Effect.component';
import { LinkedSignalDemo } from './03_signals_reactivity/04_LinkedSignal.component';
import { InputOutputModelDemo } from './03_signals_reactivity/05_Input_Output_Model.component';
import { ResourceDemo } from './03_signals_reactivity/06_Resource.component';
import { DiInjectDemo } from './04_di_lifecycle/01_DI_Inject.component';
import { LifecycleHooksDemo } from './04_di_lifecycle/02_Lifecycle_Hooks.component';
import { DestroyRefDemo } from './04_di_lifecycle/03_DestroyRef.component';
import { AfterNextRenderDemo } from './04_di_lifecycle/04_AfterNextRender.component';
import { TemplateDrivenDemo } from './05_forms/01_Template_Driven.component';
import { ReactiveFormDemo } from './05_forms/02_Reactive_Form.component';
import { CustomValidatorDemo } from './05_forms/03_Custom_Validator.component';
import { FormArrayDemo } from './05_forms/04_FormArray.component';
import { RouterBasicsDemo } from './06_routing/01_Router_Basics.component';
import { FunctionalGuardDemo } from './06_routing/02_Functional_Guard.component';
import { ResolverDemo } from './06_routing/03_Resolver.component';
import { LazyLoadingDemo } from './06_routing/04_Lazy_Loading.component';
import { HttpClientDemo } from './07_http_rxjs/01_HttpClient.component';
import { FunctionalInterceptorDemo } from './07_http_rxjs/02_Functional_Interceptor.component';
import { SwitchMapTypeaheadDemo } from './07_http_rxjs/03_SwitchMap_Typeahead.component';
import { RxjsOperatorsDemo } from './07_http_rxjs/04_RxJS_Operators.component';
import { TakeUntilDestroyedDemo } from './07_http_rxjs/05_TakeUntilDestroyed.component';
import { ToSignalToObservableDemo } from './07_http_rxjs/06_ToSignal_ToObservable.component';
import { HttpResourceReferenceDemo } from './07_http_rxjs/07_HttpResource.component';
import { StateScopeDemo } from './08_state_architecture/01_State_Scope.component';
import { SignalStoreDemo } from './08_state_architecture/02_Signal_Store.component';
import { FacadePatternDemo } from './08_state_architecture/03_Facade_Pattern.component';
import { NgrxAwarenessDemo } from './08_state_architecture/04_NgRx_Awareness.component';
import { OnPushDemo } from './09_performance_modern/01_OnPush.component';
import { ZonelessDemo } from './09_performance_modern/02_Zoneless.component';
import { DeferDemo } from './09_performance_modern/03_Defer.component';
import { TrackDemo } from './09_performance_modern/04_Track.component';
import { SsrHydrationDemo } from './09_performance_modern/05_SSR_Hydration.component';
import { IncrementalHydrationDemo } from './09_performance_modern/06_Incremental_Hydration.component';
import { WebVitalsDemo } from './09_performance_modern/07_Web_Vitals.component';
import { ProfilingDemo } from './09_performance_modern/08_Profiling.component';
import { ComponentTestDemo } from './10_testing/01_Component_Test.component';
import { ServiceTestDemo } from './10_testing/02_Service_Test.component';
import { HttpTestingDemo } from './10_testing/03_Http_Testing.component';
import { VitestDemo } from './10_testing/04_Vitest.component';
import { XssDemo } from './11_security/01_XSS.component';
import { AuthDemo } from './11_security/02_Auth.component';
import { CspCsrfDemo } from './11_security/03_CSP_CSRF.component';
import { AutocompleteConceptDemo } from './12_system_design/01_Autocomplete.component';
import { InfiniteScrollConceptDemo } from './12_system_design/02_Infinite_Scroll.component';
import { ToastConceptDemo } from './12_system_design/03_Toast.component';
import { ModalConceptDemo } from './12_system_design/04_Modal.component';
import { DataTableConceptDemo } from './12_system_design/05_Data_Table.component';
import { OptimisticConceptDemo } from './12_system_design/06_Optimistic_UI.component';
import { DesignSystemDemo } from './12_system_design/07_Design_System.component';
import { FormWizardConceptDemo } from './12_system_design/08_Form_Wizard.component';
import { AuthArchitectureDemo } from './12_system_design/09_Auth_Architecture.component';
import { ErrorHandlingDemo } from './12_system_design/10_Error_Handling.component';
import { FeatureArchitectureDemo } from './12_system_design/11_Feature_Architecture.component';
import { MicroFrontendsDemo } from './12_system_design/12_Micro_Frontends.component';
import { RealtimeDemo } from './12_system_design/13_Realtime.component';
import { FileUploadDemo } from './12_system_design/14_File_Upload.component';
import { CachingDemo } from './12_system_design/15_Caching.component';
import { Angular22Demo } from './13_latest_angular22/01_Angular22.component';
import { SignalFormsDemo } from './13_latest_angular22/02_Signal_Forms.component';
import { RxResourceDemo } from './13_latest_angular22/03_RxResource.component';
import { OnPushDirectionDemo } from './13_latest_angular22/04_OnPush_Default_Direction.component';
type DemoItem={group:string;label:string;component:Type<unknown>};
const DEMOS:DemoItem[]=[
  {group:'Fundamentals',label:'Standalone Component',component:StandaloneComponentDemo},
  {group:'Fundamentals',label:'Interpolation / Property / Event Binding',component:TemplateBindingsDemo},
  {group:'Fundamentals',label:'Two-Way Binding',component:TwoWayBindingDemo},
  {group:'Fundamentals',label:'Template Reference Variable',component:TemplateReferenceDemo},
  {group:'Fundamentals',label:'Built-in Pipes',component:PipesDemo},
  {group:'Templates Directives',label:'@if / @for / @switch',component:ControlFlowDemo},
  {group:'Templates Directives',label:'ng-template / ng-container',component:TemplateContainerDemo},
  {group:'Templates Directives',label:'Custom Directive',component:CustomDirectiveDemo},
  {group:'Templates Directives',label:'Custom Pipe',component:CustomPipeDemo},
  {group:'Signals Reactivity',label:'signal()',component:SignalDemo},
  {group:'Signals Reactivity',label:'computed()',component:ComputedDemo},
  {group:'Signals Reactivity',label:'effect()',component:EffectDemo},
  {group:'Signals Reactivity',label:'linkedSignal()',component:LinkedSignalDemo},
  {group:'Signals Reactivity',label:'input / output / model',component:InputOutputModelDemo},
  {group:'Signals Reactivity',label:'resource()',component:ResourceDemo},
  {group:'Di Lifecycle',label:'DI + inject()',component:DiInjectDemo},
  {group:'Di Lifecycle',label:'Lifecycle Hooks',component:LifecycleHooksDemo},
  {group:'Di Lifecycle',label:'DestroyRef',component:DestroyRefDemo},
  {group:'Di Lifecycle',label:'afterNextRender()',component:AfterNextRenderDemo},
  {group:'Forms',label:'Template-Driven Forms',component:TemplateDrivenDemo},
  {group:'Forms',label:'Reactive Forms',component:ReactiveFormDemo},
  {group:'Forms',label:'Custom Validator',component:CustomValidatorDemo},
  {group:'Forms',label:'FormArray',component:FormArrayDemo},
  {group:'Routing',label:'Router Basics',component:RouterBasicsDemo},
  {group:'Routing',label:'Functional Route Guard',component:FunctionalGuardDemo},
  {group:'Routing',label:'Route Resolver',component:ResolverDemo},
  {group:'Routing',label:'Lazy Loading',component:LazyLoadingDemo},
  {group:'Http Rxjs',label:'HttpClient',component:HttpClientDemo},
  {group:'Http Rxjs',label:'Functional Interceptor',component:FunctionalInterceptorDemo},
  {group:'Http Rxjs',label:'switchMap Typeahead',component:SwitchMapTypeaheadDemo},
  {group:'Http Rxjs',label:'RxJS Flattening Operators',component:RxjsOperatorsDemo},
  {group:'Http Rxjs',label:'takeUntilDestroyed()',component:TakeUntilDestroyedDemo},
  {group:'Http Rxjs',label:'Signals ↔ RxJS',component:ToSignalToObservableDemo},
  {group:'Http Rxjs',label:'httpResource()',component:HttpResourceReferenceDemo},
  {group:'State Architecture',label:'Local vs Global State',component:StateScopeDemo},
  {group:'State Architecture',label:'Signal Store Service',component:SignalStoreDemo},
  {group:'State Architecture',label:'Facade Pattern',component:FacadePatternDemo},
  {group:'State Architecture',label:'NgRx / Store Awareness',component:NgrxAwarenessDemo},
  {group:'Performance Modern',label:'OnPush Change Detection',component:OnPushDemo},
  {group:'Performance Modern',label:'Zoneless Angular',component:ZonelessDemo},
  {group:'Performance Modern',label:'@defer',component:DeferDemo},
  {group:'Performance Modern',label:'@for track',component:TrackDemo},
  {group:'Performance Modern',label:'SSR + Hydration',component:SsrHydrationDemo},
  {group:'Performance Modern',label:'Incremental Hydration',component:IncrementalHydrationDemo},
  {group:'Performance Modern',label:'Web Vitals',component:WebVitalsDemo},
  {group:'Performance Modern',label:'Performance Profiling',component:ProfilingDemo},
  {group:'Testing',label:'Component Testing',component:ComponentTestDemo},
  {group:'Testing',label:'Service Testing',component:ServiceTestDemo},
  {group:'Testing',label:'HTTP Testing',component:HttpTestingDemo},
  {group:'Testing',label:'Vitest',component:VitestDemo},
  {group:'Security',label:'XSS / Sanitization',component:XssDemo},
  {group:'Security',label:'Authentication / Authorization',component:AuthDemo},
  {group:'Security',label:'CSP + CSRF/XSRF',component:CspCsrfDemo},
  {group:'System Design',label:'System Design: Autocomplete',component:AutocompleteConceptDemo},
  {group:'System Design',label:'System Design: Infinite Scroll',component:InfiniteScrollConceptDemo},
  {group:'System Design',label:'System Design: Toast System',component:ToastConceptDemo},
  {group:'System Design',label:'System Design: Modal/Dialog',component:ModalConceptDemo},
  {group:'System Design',label:'System Design: Data Table',component:DataTableConceptDemo},
  {group:'System Design',label:'System Design: Optimistic UI',component:OptimisticConceptDemo},
  {group:'System Design',label:'System Design: Design System',component:DesignSystemDemo},
  {group:'System Design',label:'System Design: Multi-Step Form',component:FormWizardConceptDemo},
  {group:'System Design',label:'System Design: Auth Architecture',component:AuthArchitectureDemo},
  {group:'System Design',label:'System Design: Error Handling',component:ErrorHandlingDemo},
  {group:'System Design',label:'System Design: Feature Architecture',component:FeatureArchitectureDemo},
  {group:'System Design',label:'System Design: Micro Frontends',component:MicroFrontendsDemo},
  {group:'System Design',label:'System Design: Real-Time Updates',component:RealtimeDemo},
  {group:'System Design',label:'System Design: File Upload',component:FileUploadDemo},
  {group:'System Design',label:'System Design: Caching',component:CachingDemo},
  {group:'Latest Angular22',label:'Angular 22 Overview',component:Angular22Demo},
  {group:'Latest Angular22',label:'Signal Forms',component:SignalFormsDemo},
  {group:'Latest Angular22',label:'rxResource()',component:RxResourceDemo},
  {group:'Latest Angular22',label:'Modern Change Detection Direction',component:OnPushDirectionDemo},
];
@Component({selector:'app-root',standalone:true,imports:[NgComponentOutlet],template:`
<div class="shell"><aside class="sidebar"><h1>Senior Angular Interview Kit</h1><div class="sub">Angular 22 • runnable compact demos</div>
@for(group of groups;track group){<section class="group"><h3>{{ group }}</h3>@for(item of itemsFor(group);track item.label){<button class="nav-btn" [class.active]="selected().label===item.label" (click)="selected.set(item)">{{ item.label }}</button>}</section>}
</aside><main class="content"><ng-container *ngComponentOutlet="selected().component"/></main></div>`})
export class AppComponent{demos=DEMOS;groups=[...new Set(DEMOS.map(d=>d.group))];selected=signal(DEMOS[0]!);itemsFor(group:string){return this.demos.filter(x=>x.group===group)}}
