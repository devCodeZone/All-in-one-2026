/**
 * INTERVIEW ONE-LINER: Modern Angular uses Vitest as the primary test runner; good tests remain behavior-focused regardless of runner.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-vitest',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Vitest</h2>
      <p class="interview-line">Modern Angular uses Vitest as the primary test runner; good tests remain behavior-focused regardless of runner.</p>
      <pre>it('adds', () => expect(1 + 1).toBe(2));</pre>
    </div>
  `
})
export class VitestDemo {

}
