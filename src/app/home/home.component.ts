import { Component, OnInit,ViewChild} from '@angular/core';
import {TranslateService} from 'ng2-translate';

import {AuthService,LoggedInCallback} from "../shared/auth/auth.service";

import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

      private insightNonImage: any;
    constructor(private translateService:TranslateService
     ) {
    }

    @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

    moveLeft() {
      this.ds.moveLeft();
    }
   
    moveRight() {
      this.ds.moveRight();
    }
    
    ngOnInit() {
      this.translateService.get('TITLE').subscribe((respose: string) => {
         $('title').text(respose);
      });
    }



 



}
