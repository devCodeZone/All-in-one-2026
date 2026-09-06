/**
 * INTERVIEW ONE-LINER: Frontend caching must define keys, freshness, invalidation, deduplication, retries, and mutation reconciliation—not just store responses.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-15-caching',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Caching</h2>
      <p class="interview-line">Frontend caching must define keys, freshness, invalidation, deduplication, retries, and mutation reconciliation—not just store responses.</p>
      <pre>Key → cache hit? → show → maybe revalidate
Mutation → update/invalidate related keys</pre>
    </div>
  `
})
export class CachingDemo {

}
