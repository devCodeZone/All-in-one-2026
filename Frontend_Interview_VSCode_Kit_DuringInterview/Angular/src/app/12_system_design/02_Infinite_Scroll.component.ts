/**
 * INTERVIEW ONE-LINER: Infinite scroll uses IntersectionObserver plus cursor pagination, request guards, and virtualization for very large lists.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-infinite-scroll',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Infinite Scroll</h2>
      <p class="interview-line">Infinite scroll uses IntersectionObserver plus cursor pagination, request guards, and virtualization for very large lists.</p>
      <pre>Sentinel visible → load next cursor → append → update nextCursor</pre>
    </div>
  `
})
export class InfiniteScrollConceptDemo {

}
