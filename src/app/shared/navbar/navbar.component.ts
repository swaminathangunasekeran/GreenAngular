import { Component, OnInit, ElementRef,Renderer,Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {Config} from '../../config.service';
import {ViewEncapsulation} from '@angular/core';
import {LanguageService} from '../../sharedService/language.service';
import {AuthService,LoggedInCallback} from "../auth/auth.service";
import {Router} from "@angular/router";
import { MzModalService } from 'ng2-materialize';
//import {CognitoUtil , LoggedInCallback} from "../../sharedService/aws/cognito.service"
import {SocialLoginComponent} from "../social-login/social-login.component";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']

})
//    encapsulation: ViewEncapsulation.None,
export class NavbarComponent implements OnInit,LoggedInCallback{
    private toggleButton: any;
    private sidebarVisible: boolean;
    public userLoggedInLoading:boolean = true;
    public userLoggedInStatus:boolean;
    title = Config.MAIN_HEADING;
    icons = Config.ICON;
    notification = "notifications_none";
    profilePic:string;
    name:string;
    currentUrl :string;
    @Input() hideMenu: boolean = false;

    constructor(private renderer : Renderer,
     public location: Location,
     private element : ElementRef,
     private router: Router,
     public authService: AuthService,
     private modalService: MzModalService
   ) {
        this.sidebarVisible = false;
        this.authService.isAuthenticated(this);
           this.currentUrl = this.router.url


    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
      ////console.log("AppComponent: the user is authenticated: in navbar component" + isLoggedIn);
      //let mythis = this;
        this.userLoggedInLoading = false;
        this.userLoggedInStatus = isLoggedIn ? true:false;
      if(message == "success"){
        if(this.userLoggedInStatus){
          this.getUserInfo();
        }
      }

    }

    getUserInfo(){
      //alert("Get userInfo");
      let userInfo = JSON.parse(localStorage.getItem('currentUser'));
      //console.log("userInfo ====",userInfo);
        this.name = userInfo.userDetails.firstName;
      if(userInfo.userDetails.profilePic){
        this.profilePic = userInfo.userDetails.profilePic;
      }else{
        this.profilePic = "assets/img/avatar.png";
      }
    }

    ngOnInit() {

        this.renderer.listenGlobal('window', 'scroll', (event) => {
          const navbar: HTMLElement = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
          const  menunav: HTMLElement  =  this.element.nativeElement.children[1];
            const number = window.scrollY;
            if (number > 750 || window.pageYOffset > 750) {
                // add logic

                menunav.classList.add('menu-on-scroll');
            } else {
                // remove logic
                  menunav.classList.remove('menu-on-scroll');
            }
        });



    }



    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // //console.log(html);
        // //console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // //console.log(html);
        //this.toggleButton.classList.remove('toggled');
      //  this.sidebarVisible = false;
        //html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
          //  this.sidebarOpen();
        } else {
          //  this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
   openLoginModal() {

    this.modalService.open(SocialLoginComponent);
    //this.router.navigate(['auth']);
    }


    leftArrowClick(){
        $("#nav-mobile").css("transform","translateX(-10%)");
    }

    rightArrowClick(){
      $("#nav-mobile").css("transform","translateX(0px)");
    }
    newInsight(){
      if(this.userLoggedInStatus && !this.userLoggedInLoading){
        this.router.navigateByUrl('/newInsight');
      }else if(!this.userLoggedInLoading){
        this.modalService.open(SocialLoginComponent);
      }

    }

    showProfile(){
      $("#profile-options").toggle();
      $("#profile-options").css("opacity", "1");
    }


    logout(){
      this.authService.logout().subscribe((auth) => {
         if(auth){
           this.authService.isAuthenticated(this);
         }
      });
    }
}
