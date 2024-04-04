// import { Directive } from '@angular/core';
import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[appLight]'
})
export class LightDirective {
  // @Input() appHighlight: string = ''; // Existing Input property
  // @Input() defaultColor: string = ''; // New Input property

  constructor(private el: ElementRef) {
    // yello light permanent 
    // this.el.nativeElement.style.backgroundColor = 'yellow';
}
// on hover color change 
// @HostListener('mouseenter') onMouseEnter() {
//   this.highlight('yellow');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.highlight('');
// }


private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.appLight || 'red');
}
@Input() appLight='';
@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}
}