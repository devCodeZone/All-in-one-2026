/**
 * INTERVIEW ONE-LINER: switchMap cancels stale work, mergeMap runs concurrently, concatMap queues sequentially, and exhaustMap ignores repeats while busy.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-rxjs-operators',
  standalone:true,

  template:`
    <div class="demo">
      <h2>RxJS Flattening Operators</h2>
      <p class="interview-line">switchMap cancels stale work, mergeMap runs concurrently, concatMap queues sequentially, and exhaustMap ignores repeats while busy.</p>
      <table><tr><th>Operator</th><th>Use</th></tr><tr><td>switchMap</td><td>Latest wins/search</td></tr><tr><td>mergeMap</td><td>Concurrent</td></tr><tr><td>concatMap</td><td>Sequential</td></tr><tr><td>exhaustMap</td><td>Ignore repeat submit</td></tr></table>
    </div>
  `
})
export class RxjsOperatorsDemo {

}
