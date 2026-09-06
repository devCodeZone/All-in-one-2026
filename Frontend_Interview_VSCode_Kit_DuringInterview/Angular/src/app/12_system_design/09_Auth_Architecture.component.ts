/**
 * INTERVIEW ONE-LINER: Use a central auth/session service, guards for UX, interceptors for request policy, and backend authorization for every protected operation.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-09-auth-architecture',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Auth Architecture</h2>
      <p class="interview-line">Use a central auth/session service, guards for UX, interceptors for request policy, and backend authorization for every protected operation.</p>
      <pre>Login → Session State → Guard + Interceptor + Feature UI → Backend authorization</pre>
    </div>
  `
})
export class AuthArchitectureDemo {

}
