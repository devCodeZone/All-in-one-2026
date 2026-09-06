/** INTERVIEW ONE-LINER: input(), output(), and model() provide signal-friendly component APIs; model() supports two-way binding. */
import { Component, input, output, model, signal } from '@angular/core';
@Component({selector:'demo-child-counter',standalone:true,template:`<div class="card"><p>{{ label() }}: {{ value() }}</p><button (click)="inc()">+1</button></div>`})
export class ChildCounter{label=input('Counter');value=model(0);changed=output<number>();inc(){this.value.update(v=>v+1);this.changed.emit(this.value());}}
@Component({selector:'demo-input-output-model',standalone:true,imports:[ChildCounter],template:`<div class="demo"><h2>input / output / model</h2><p class="interview-line">input(), output(), and model() provide signal-friendly component APIs; model() supports two-way binding.</p><demo-child-counter label="Score" [(value)]="score" (changed)="last.set($event)"/><p>Parent: {{ score() }} / Event: {{ last() }}</p></div>`})
export class InputOutputModelDemo{score=signal(5);last=signal(0);}
