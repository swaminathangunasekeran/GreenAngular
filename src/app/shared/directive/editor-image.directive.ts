// https://alligator.io/angular/viewchild-access-component/
import { Directive, ElementRef, HostListener,Renderer2} from '@angular/core';
// import { ImageButtonDirective } from './image-button.directive';

@Directive({
  selector: '[appEditorImage]'
})
export class EditorImageDirective {
  ingredient = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { 


  }


  // @ContentChildren(ImageButtonDirective) imageButton !: QueryList<ImageButtonDirective>;

 
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
 
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // } 
 
  // public highlight(color: string) {
  //   // this.el.nativeElement.style.display = "none";
  // }

  public appendImage(url){
    const figure =  this.renderer.createElement('figure');
    // const figCaption = this.renderer.createElement('figcaption');
    const img = this.renderer.createElement('img');
    const p = this.renderer.createElement('p');
    const editor = this.el.nativeElement.querySelector('.medium-editor-element')
    // const placeholderText = this.renderer.createText('image caption');
    this.renderer.setProperty(img, 'src', url);
    // this.renderer.setAttribute(img, 'width','80px');
    // this.renderer.setAttribute(p, 'style','width:100%;height:20px');
    // this.renderer.setAttribute(figure, 'contenteditable','false');

    // this.renderer.appendChild(editor, figure);
    this.renderer.appendChild(editor, img);
    this.renderer.appendChild(editor, p);
    // this.renderer.appendChild(figure, figCaption);
    // this.renderer.appendChild(figCaption, placeholderText);
  }

 
   public appendHtml(html){
     
    const editor = this.el.nativeElement.querySelector('.medium-editor-element');
    // console.log("EDITOR",editor);
    // const innerHTml = this.renderer.createElement('div');
    // this.renderer.appendChild(editor, html);
    this.renderer.setProperty(editor, 'innerHTML', html);
  }
   
   

}
