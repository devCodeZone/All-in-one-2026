/** INTERVIEW ONE-LINER: A custom pipe encapsulates reusable display transformation and should usually stay pure. */
import { Component, Pipe, PipeTransform } from '@angular/core';
@Pipe({name:'initials',standalone:true}) export class InitialsPipe implements PipeTransform{transform(v:string){return v.split(' ').filter(Boolean).map(x=>x[0]?.toUpperCase()??'').join('');}}
@Component({selector:'demo-custom-pipe',standalone:true,imports:[InitialsPipe],template:`<div class="demo"><h2>Custom Pipe</h2><p class="interview-line">A custom pipe encapsulates reusable display transformation and should usually stay pure.</p><p>{{ 'Sujata Kumari' | initials }}</p></div>`})
export class CustomPipeDemo{}
