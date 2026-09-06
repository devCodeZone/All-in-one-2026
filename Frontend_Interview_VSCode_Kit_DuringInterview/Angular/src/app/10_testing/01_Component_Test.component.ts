/**
 * INTERVIEW ONE-LINER: Component tests should verify user-visible behavior and public interactions rather than private implementation details.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-component-test',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Component Testing</h2>
      <p class="interview-line">Component tests should verify user-visible behavior and public interactions rather than private implementation details.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class ComponentTestDemo {
  code=`const fixture = TestBed.createComponent(Counter);
fixture.nativeElement.querySelector('button').click();
fixture.detectChanges();
expect(fixture.nativeElement.textContent).toContain('1');`;
}
