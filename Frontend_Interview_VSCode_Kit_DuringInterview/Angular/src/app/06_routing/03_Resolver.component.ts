/**
 * INTERVIEW ONE-LINER: A resolver loads route-critical data before activation; use it selectively because it can delay navigation.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-resolver',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Route Resolver</h2>
      <p class="interview-line">A resolver loads route-critical data before activation; use it selectively because it can delay navigation.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class ResolverDemo {
  code=`export const userResolver: ResolveFn<User> = route => inject(UserService).get(route.paramMap.get('id')!);`;
}
