/**
 * INTERVIEW ONE-LINER: Modern Angular built-in control flow uses @if, @for, and @switch with explicit list tracking.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-control-flow',
  standalone:true,

  template:`
    <div class="demo">
      <h2>@if / @for / @switch</h2>
      <p class="interview-line">Modern Angular built-in control flow uses @if, @for, and @switch with explicit list tracking.</p>
      @if(loggedIn){<p>Welcome</p>}@else{<p>Login</p>} @for(skill of skills;track skill){<div class="card">{{ skill }}</div>} @switch(level){@case("senior"){<p>Senior</p>}@default{<p>Other</p>}} <button (click)="loggedIn=!loggedIn">Toggle</button>
    </div>
  `
})
export class ControlFlowDemo {
  loggedIn=true;
  skills=['Signals','RxJS','Router'];
  level='senior';
}
