import { Component, OnInit, ElementRef,Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AuthService,LoggedInCallback} from "../auth/auth.service";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    @Input() userLoggedInStatus:boolean;
    name:any;
    public authService: AuthService
    profilePic:any;
    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
        this.getUserInfo()
    }

    ngOnInit() {
    }

    getUserInfo(){
        //alert("Get userInfo");
        let userInfo = JSON.parse(localStorage.getItem('currentUser'));
        //console.log("userInfo ====",userInfo);
        if(userInfo){
            this.name = userInfo.userDetails.firstName;
            if(userInfo.userDetails.profilePic){
              this.profilePic = userInfo.userDetails.profilePic;
            }else{
              this.profilePic = "assets/img/avatar.png";
            }
        }
 
      }

    sidebarOpen() {
    };
    sidebarClose() {
    };
    sidebarToggle() {
    };
    isHome() {
    }
    isDocumentation() {
    }
    logout(){
        this.authService.logout().subscribe((auth) => {
           if(auth){
            //  this.authService.isAuthenticated();
           }
        });
      }
}
