import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGood]'
})
export class GoodDirective {
  constructor( private highlight:ElementRef) { 
    highlight.nativeElement.style.backgroundColor ="crimson"
  }

  

}
