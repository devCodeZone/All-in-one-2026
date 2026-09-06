/**
 * INTERVIEW ONE-LINER: A facade hides API/store complexity behind a feature-oriented interface, reducing coupling between UI and implementation details.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-facade-pattern',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Facade Pattern</h2>
      <p class="interview-line">A facade hides API/store complexity behind a feature-oriented interface, reducing coupling between UI and implementation details.</p>
      <pre>ProfileFacade
  user()
  loading()
  loadUser(id)
  updateUser(command)</pre>
    </div>
  `
})
export class FacadePatternDemo {

}
