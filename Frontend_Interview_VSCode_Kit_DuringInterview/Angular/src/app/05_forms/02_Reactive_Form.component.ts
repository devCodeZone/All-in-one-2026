/**
 * INTERVIEW ONE-LINER: Reactive Forms model form state explicitly in TypeScript, making complex validation, dynamic controls, and testing easier.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector:'demo-02-reactive-form',
  standalone:true,
  imports:[ReactiveFormsModule],
  template:`
    <div class="demo">
      <h2>Reactive Forms</h2>
      <p class="interview-line">Reactive Forms model form state explicitly in TypeScript, making complex validation, dynamic controls, and testing easier.</p>
      <form [formGroup]="form"><input formControlName="email">@if(form.controls.email.touched&&form.controls.email.invalid){<p role="alert">Valid email required</p>}</form>
    </div>
  `
})
export class ReactiveFormDemo {
  form=new FormGroup({email:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.email]})});
}
