/**
 * INTERVIEW ONE-LINER: rxResource() provides Resource semantics when the asynchronous loader is naturally expressed as an RxJS Observable.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-rxresource',
  standalone:true,

  template:`
    <div class="demo">
      <h2>rxResource()</h2>
      <p class="interview-line">rxResource() provides Resource semantics when the asynchronous loader is naturally expressed as an RxJS Observable.</p>
      <pre>rxResource({ params: () => ({ id: id() }), stream: ({ params }) => service.getUser(params.id) })</pre>
    </div>
  `
})
export class RxResourceDemo {

}
