/**
 * INTERVIEW ONE-LINER: Frontend guards improve navigation UX, but authentication and authorization must be enforced by the backend because client code is not a trust boundary.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-auth',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Authentication / Authorization</h2>
      <p class="interview-line">Frontend guards improve navigation UX, but authentication and authorization must be enforced by the backend because client code is not a trust boundary.</p>
      <div class="card">UI guard = UX • Backend policy = security</div>
    </div>
  `
})
export class AuthDemo {

}
