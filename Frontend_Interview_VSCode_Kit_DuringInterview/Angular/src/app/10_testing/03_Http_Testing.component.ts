/**
 * INTERVIEW ONE-LINER: HTTP tests should assert request method/URL/body and flush deterministic mock responses instead of calling a real backend.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-http-testing',
  standalone:true,

  template:`
    <div class="demo">
      <h2>HTTP Testing</h2>
      <p class="interview-line">HTTP tests should assert request method/URL/body and flush deterministic mock responses instead of calling a real backend.</p>
      <pre>const req = httpTesting.expectOne('/api/users');
expect(req.request.method).toBe('GET');
req.flush(mockUsers);</pre>
    </div>
  `
})
export class HttpTestingDemo {

}
