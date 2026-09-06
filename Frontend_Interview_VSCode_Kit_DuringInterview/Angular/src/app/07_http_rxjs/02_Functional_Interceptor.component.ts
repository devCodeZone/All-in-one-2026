/**
 * INTERVIEW ONE-LINER: Functional interceptors centralize cross-cutting HTTP policy such as auth headers, correlation IDs, logging, retries, and error mapping.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-functional-interceptor',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Functional Interceptor</h2>
      <p class="interview-line">Functional interceptors centralize cross-cutting HTTP policy such as auth headers, correlation IDs, logging, retries, and error mapping.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class FunctionalInterceptorDemo {
  code=`export const authInterceptor: HttpInterceptorFn = (req,next) => next(req.clone({setHeaders:{Authorization:'Bearer ...'}}));`;
}
