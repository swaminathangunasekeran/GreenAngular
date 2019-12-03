import { Directive, ElementRef, HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appEditInsight]'
})
export class EditInsightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

 
  public initInsight(){
    alert("EDIT INSIGHT");
    const editor = this.el.nativeElement.querySelector('.medium-editor-element')
  }

}
