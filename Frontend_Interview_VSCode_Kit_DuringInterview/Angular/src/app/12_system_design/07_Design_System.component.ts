/**
 * INTERVIEW ONE-LINER: A design system standardizes tokens, accessibility, variants, composition, theming, and component contracts across products.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-07-design-system',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Design System</h2>
      <p class="interview-line">A design system standardizes tokens, accessibility, variants, composition, theming, and component contracts across products.</p>
      <pre>Tokens → Primitives → Components → Patterns → Product UI</pre>
    </div>
  `
})
export class DesignSystemDemo {

}
