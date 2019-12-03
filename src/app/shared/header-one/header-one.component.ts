import { Component, OnInit,ElementRef } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Config} from '../../config.service';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
  title = Config.MAIN_HEADING;
  icons = Config.ICON;
  profilePic:string;
  currentUrl:string;
  coverPic:string;
  name:string;
  constructor(private element : ElementRef,
     public authService: AuthService,
     private router: Router) {
       this.currentUrl = this.router.url
      // //console.log(this.currentUrl)
     }

  ngOnInit() {
    let userInfo = JSON.parse(localStorage.getItem('currentUser'));
    this.name = userInfo.userDetails.firstName;
    if(userInfo.userDetails.profilePic){
      this.profilePic = userInfo.userDetails.profilePic;
    }else{
      this.profilePic = "assets/img/avatar.png";
    }

    if(userInfo.userDetails.coverPic){
      this.coverPic = userInfo.userDetails.profilePic;
    }else{
      this.coverPic = "assets/img/coverPic.jpeg"
    }
  }
  showProfile(){
    $("#profile-options").toggle();
    $("#profile-options").css("opacity", "1");
  }

  navMyDiaries(){
    this.router.navigateByUrl('/myDiaries');
  }

  navNewInsight(){
      this.router.navigateByUrl('/newInsight');
  }

  logout(){
    this.authService.logout().subscribe((auth) => {
       if(auth){
        this.router.navigateByUrl('/');
       }
    });
  }
}
