import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() imageDetails: any ;
  @Output() selectedImage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 
  imageSelectd(selectedImage){
    this.selectedImage.emit(selectedImage);
  }
   
}
