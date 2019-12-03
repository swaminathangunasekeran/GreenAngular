import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageButton]'
})
export class ImageButtonDirective {

  numberOfClicks = 0;
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }
 
  private highlight(color: string) {

    this.el.nativeElement.style.background = color;

  }

}
