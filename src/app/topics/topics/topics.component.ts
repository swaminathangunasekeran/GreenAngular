import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';

import { MzModalService } from 'ng2-materialize';
import {AuthService,LoggedInCallback} from "../../shared/auth/auth.service";
import {SocialLoginComponent} from "../../shared/social-login/social-login.component";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit,LoggedInCallback{
  public userLoggedInStatus:boolean;
    public userLoggedInLoading:boolean = true;
    private insightNonImage: any;
  constructor(private translateService:TranslateService,
     public authService: AuthService,
    private modalService: MzModalService,
    ) {
      this.authService.isAuthenticated(this);
      this.userLoggedInStatus = false;
      this.userLoggedInLoading = true;
  }

  ngOnInit() {
    this.translateService.get('TITLE').subscribe((respose: string) => {
       $('title').text(respose);
    });
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    ////console.log("AppComponent: the user is authenticated: in navbar component" + isLoggedIn);
    //let mythis = this;
      // this.userLoggedInLoading = false;
      this.userLoggedInLoading = false;
      this.userLoggedInStatus = isLoggedIn ? true:false;


  }

  openLoginModal() {

   this.modalService.open(SocialLoginComponent);
   //this.router.navigate(['auth']);
   }



}
