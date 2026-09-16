import { Component } from '@angular/core';

@Component({
  selector: 'demo-control-flow',
  standalone: true,

  template: `
    <div class="demo">
      <h2>&#64;if / &#64;for / &#64;switch</h2>

      <p class="interview-line">
        Modern Angular built-in control flow uses &#64;if, &#64;for and
        &#64;switch with explicit list tracking.
      </p>

      <!-- Safely displays the example without parsing its brackets -->
      <pre>{{ exampleCode }}</pre>

      <button type="button" (click)="loggedIn = !loggedIn">
        Toggle
      </button>
    </div>
  `
})
export class ControlFlowDemo {
  loggedIn = true;

  skills = ['Signals', 'RxJS', 'Router'];

  level = 'senior';

  readonly exampleCode = `
@if (loggedIn) {
  <p>Welcome</p>
} @else {
  <p>Login</p>
}

@for (skill of skills; track skill) {
  <div class="card">{{ skill }}</div>
}

@switch (level) {
  @case ('senior') {
    <p>Senior</p>
  }

  @default {
    <p>Other</p>
  }
}`;
}