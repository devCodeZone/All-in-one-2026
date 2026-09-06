/**
 * INTERVIEW ONE-LINER: httpResource() is Angular’s signal-based reactive wrapper around HttpClient for read requests and exposes resource status/value as signals.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-07-httpresource',
  standalone:true,

  template:`
    <div class="demo">
      <h2>httpResource()</h2>
      <p class="interview-line">httpResource() is Angular’s signal-based reactive wrapper around HttpClient for read requests and exposes resource status/value as signals.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class HttpResourceReferenceDemo {
  code=`todo = httpResource(() => '/api/todos/' + id());`;
}
