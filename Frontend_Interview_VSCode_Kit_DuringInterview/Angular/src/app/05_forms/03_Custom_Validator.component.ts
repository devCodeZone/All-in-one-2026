/**
 * INTERVIEW ONE-LINER: A custom validator is a reusable pure function returning ValidationErrors or null for domain-specific rules.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector:'demo-03-custom-validator',
  standalone:true,
  imports:[ReactiveFormsModule],
  template:`
    <div class="demo">
      <h2>Custom Validator</h2>
      <p class="interview-line">A custom validator is a reusable pure function returning ValidationErrors or null for domain-specific rules.</p>
      <input [formControl]="role">@if(role.touched&&role.invalid){<p role="alert">Must include senior</p>}
    </div>
  `
})
export class CustomValidatorDemo {
  role=new FormControl('',{nonNullable:true,validators:[c=>String(c.value).toLowerCase().includes('senior')?null:{senior:true}]});
}
