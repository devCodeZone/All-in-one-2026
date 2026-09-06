/**
 * INTERVIEW ONE-LINER: Functional guards use inject() and return boolean/UrlTree/async results; they improve UX but never replace backend authorization.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-functional-guard',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Functional Route Guard</h2>
      <p class="interview-line">Functional guards use inject() and return boolean/UrlTree/async results; they improve UX but never replace backend authorization.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class FunctionalGuardDemo {
  code=`export const authGuard: CanActivateFn = () => inject(AuthService).loggedIn() ? true : inject(Router).createUrlTree(['/login']);`;
}
