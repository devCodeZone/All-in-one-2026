/**
 * INTERVIEW ONE-LINER: Service tests isolate business logic and replace dependencies with fakes/spies so behavior stays deterministic.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-service-test',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Service Testing</h2>
      <p class="interview-line">Service tests isolate business logic and replace dependencies with fakes/spies so behavior stays deterministic.</p>
      <pre>const service = TestBed.inject(UserService);
expect(service.mapUser(raw)).toEqual(expected);</pre>
    </div>
  `
})
export class ServiceTestDemo {

}
