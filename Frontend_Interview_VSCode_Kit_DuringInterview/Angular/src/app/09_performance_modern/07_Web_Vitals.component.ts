/**
 * INTERVIEW ONE-LINER: Core Web Vitals measure LCP for loading, INP for interaction responsiveness, and CLS for visual stability.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-07-web-vitals',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Web Vitals</h2>
      <p class="interview-line">Core Web Vitals measure LCP for loading, INP for interaction responsiveness, and CLS for visual stability.</p>
      <div class="card">LCP ≤ 2.5s • INP ≤ 200ms • CLS ≤ 0.1 are common good targets.</div>
    </div>
  `
})
export class WebVitalsDemo {

}
