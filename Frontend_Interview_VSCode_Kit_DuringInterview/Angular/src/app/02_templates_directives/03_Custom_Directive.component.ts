/** INTERVIEW ONE-LINER: A directive adds reusable behavior to an existing element/component without creating a separate view. */
import { Component, Directive, ElementRef, HostListener, inject } from '@angular/core';
@Directive({selector:'[appHighlight]',standalone:true})
export class HighlightDirective{
  private el=inject(ElementRef<HTMLElement>);
  @HostListener('mouseenter') enter(){this.el.nativeElement.style.background='#dbeafe';}
  @HostListener('mouseleave') leave(){this.el.nativeElement.style.background='';}
}
@Component({selector:'demo-custom-directive',standalone:true,imports:[HighlightDirective],template:`<div class="demo"><h2>Custom Directive</h2><p class="interview-line">A directive adds reusable behavior to an existing element/component without creating a separate view.</p><div appHighlight class="card">Hover me</div></div>`})
export class CustomDirectiveDemo{}
