/**
 * INTERVIEW ONE-LINER: FormArray models a dynamic ordered collection of controls such as phone numbers, addresses, or line items.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';

@Component({
  selector:'demo-04-formarray',
  standalone:true,
  imports:[ReactiveFormsModule],
  template:`
    <div class="demo">
      <h2>FormArray</h2>
      <p class="interview-line">FormArray models a dynamic ordered collection of controls such as phone numbers, addresses, or line items.</p>
      @for(ctrl of skills.controls;track $index){<input [formControl]="ctrl">}<button (click)="add()">Add</button>
    </div>
  `
})
export class FormArrayDemo {
  skills=new FormArray([new FormControl('Angular',{nonNullable:true})]);
  add(){this.skills.push(new FormControl('',{nonNullable:true}));}
}
