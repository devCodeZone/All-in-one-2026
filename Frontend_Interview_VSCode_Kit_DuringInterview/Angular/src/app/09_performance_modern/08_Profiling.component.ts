/**
 * INTERVIEW ONE-LINER: Profile before optimizing: inspect Angular DevTools, browser Performance, network waterfalls, bundle size, and Web Vitals to find the real bottleneck.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-08-profiling',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Performance Profiling</h2>
      <p class="interview-line">Profile before optimizing: inspect Angular DevTools, browser Performance, network waterfalls, bundle size, and Web Vitals to find the real bottleneck.</p>
      <div class="stack"><div class="card">Angular DevTools → change detection/components</div><div class="card">Network → waterfalls/cache</div><div class="card">Performance → long tasks</div><div class="card">Bundle → lazy loading/tree shaking</div></div>
    </div>
  `
})
export class ProfilingDemo {

}
