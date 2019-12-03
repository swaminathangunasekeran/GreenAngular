import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import {EditorsPickService} from "../editors-pick.service";
import {AuthService,LoggedInCallback} from "../../shared/auth/auth.service";
import {SocialLoginComponent} from "../../shared/social-login/social-login.component";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit,LoggedInCallback {
  insights:any;
  public userLoggedInStatus:boolean ;
  public userLoggedInLoading:boolean = true;
  constructor( private modalService: MzModalService,
      private editorsPIck: EditorsPickService,public authService: AuthService,) {
        this.authService.isAuthenticated(this);
  }

  ngOnInit() {
    this.editorsPIck.getHomePage().subscribe((res) => {
        // console.log("EDITORS PICK",res);
        this.insights = res["result"];

        // this.translate.get('homeBody.writer').subscribe((respose: string) => {
        //     this.role = respose;
        // });
        // console.log("EDITORS PICK === ",this.insights);
    });
  }

  openLoginModal() {

    this.modalService.open(SocialLoginComponent);
    //this.router.navigate(['auth']);
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
      ////console.log("AppComponent: the user is authenticated: in navbar component" + isLoggedIn);
      //let mythis = this;
        // this.userLoggedInLoading = false;
        this.userLoggedInLoading = false;
        this.userLoggedInStatus = isLoggedIn ? true:false;


    }

}
