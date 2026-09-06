/**
 * INTERVIEW ONE-LINER: Feature-based architecture colocates components, data access, state, routes, and tests by business domain so ownership stays clear.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-11-feature-architecture',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Feature Architecture</h2>
      <p class="interview-line">Feature-based architecture colocates components, data access, state, routes, and tests by business domain so ownership stays clear.</p>
      <pre>app/
  core/
  shared/
  features/
    checkout/
    profile/</pre>
    </div>
  `
})
export class FeatureArchitectureDemo {

}
