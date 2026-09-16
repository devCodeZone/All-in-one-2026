import { Component } from '@angular/core';

@Component({
  selector: 'demo-03-rxresource',
  standalone: true,

  template: `
    <div class="demo">
      <h2>rxResource()</h2>

      <p class="interview-line">
        rxResource() provides Resource semantics when the asynchronous
        loader is naturally expressed as an RxJS Observable.
      </p>

      <!-- Angular safely displays the code stored in the property -->
      <pre>{{ exampleCode }}</pre>
    </div>
  `
})
export class RxResourceDemo {

  // Store example code in TypeScript instead of directly inside HTML.
  // This prevents Angular from parsing its curly brackets.
  readonly exampleCode =
    'rxResource({ params: () => ({ id: id() }), ' +
    'stream: ({ params }) => service.getUser(params.id) })';
}