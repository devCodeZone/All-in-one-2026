/**
 * INTERVIEW ONE-LINER: A robust upload validates type/size, supports preview/progress/cancel/retry, and relies on server-side validation at the final boundary.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-14-file-upload',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: File Upload</h2>
      <p class="interview-line">A robust upload validates type/size, supports preview/progress/cancel/retry, and relies on server-side validation at the final boundary.</p>
      <input type="file" (change)="selected=$any($event.target).files?.[0]?.name??''"><p>{{ selected }}</p>
    </div>
  `
})
export class FileUploadDemo {
  selected='';
}
