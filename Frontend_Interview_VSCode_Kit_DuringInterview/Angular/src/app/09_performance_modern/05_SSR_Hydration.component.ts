/**
 * INTERVIEW ONE-LINER: SSR renders HTML on the server for fast first content/SEO; hydration attaches client behavior while preserving the server DOM.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-05-ssr-hydration',
  standalone:true,

  template:`
    <div class="demo">
      <h2>SSR + Hydration</h2>
      <p class="interview-line">SSR renders HTML on the server for fast first content/SEO; hydration attaches client behavior while preserving the server DOM.</p>
      <div class="card">Keep server/client output deterministic and guard browser-only APIs.</div>
    </div>
  `
})
export class SsrHydrationDemo {

}
