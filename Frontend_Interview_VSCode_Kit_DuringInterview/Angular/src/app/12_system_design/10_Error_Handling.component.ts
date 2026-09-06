/**
 * INTERVIEW ONE-LINER: Handle expected feature/API errors near the feature, cross-cutting HTTP policy centrally, and log unexpected failures with actionable context.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-10-error-handling',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Error Handling</h2>
      <p class="interview-line">Handle expected feature/API errors near the feature, cross-cutting HTTP policy centrally, and log unexpected failures with actionable context.</p>
      <div class="stack"><div class="card">4xx validation → inline feedback</div><div class="card">401 → session flow</div><div class="card">5xx → retry/fallback/log</div></div>
    </div>
  `
})
export class ErrorHandlingDemo {

}
