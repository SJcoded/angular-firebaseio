import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBigger]'
})
export class BiggerDirective {
  @HostBinding('style.font-size') width = '100px';

  @HostListener('mouseenter', ['$event']) 
  onHover() {
    this.width = '200px';
  }

}
