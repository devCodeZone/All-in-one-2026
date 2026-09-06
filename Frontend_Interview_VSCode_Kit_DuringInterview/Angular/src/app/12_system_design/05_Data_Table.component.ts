/**
 * INTERVIEW ONE-LINER: For small data sort/filter/page client-side; for large data push them server-side and virtualize large rendered row counts.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-05-data-table',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Data Table</h2>
      <p class="interview-line">For small data sort/filter/page client-side; for large data push them server-side and virtualize large rendered row counts.</p>
      <div class="card">Pagination reduces network data; virtualization reduces DOM cost.</div>
    </div>
  `
})
export class DataTableConceptDemo {

}
