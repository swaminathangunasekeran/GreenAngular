import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { MzModalModule } from 'ng2-materialize';
import {GlobalShareService} from '../../sharedService/app.globalshare.service';
import {LanguageService} from '../../sharedService/language.service';
import {Subscription} from 'rxjs/Subscription';
import {Config} from '../../config.service';
import { MzCardModule } from 'ng2-materialize';
import {Router} from "@angular/router";
import {AuthService,LoggedInCallback} from "./auth.service";
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-signup',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit ,LoggedInCallback{
    test : Date = new Date();
    item:String;
    title = Config.MAIN_HEADING;
    subscription:Subscription;
    showLogin:boolean = true;
    icons = Config.ICON;
    email: string;
    password: string;
    errorMessage: string;
    signupError :boolean = false;
    signup_name : string;
    signup_email : string;
    signup_password : string;
    signupServerError:boolean;
    signupServererrorMessage:any;
    password_email:string;
    passwordError:boolean;
    successmsg:boolean;
    resetErrorMessage:string;
    loadingSignup:boolean = false;
    loadingLogin:boolean = false;
    loadingForgotPassword :boolean= false;

    constructor(
      private globalService:GlobalShareService,
      public authService : AuthService,
      private languageService : LanguageService,
      private router: Router,
      private cookieService: CookieService) {
      this.subscription = this.globalService.navItem$.subscribe(
        (item) => {
          this.item = item;
        })
    }

    ngOnInit() {
      this.globalService.setData({"title":"Kadal"});
      //this.userService.isAuthenticated(this);
    }

    showTab(){
    this.showLogin = !this.showLogin;
    }


    signup(){
      this.loadingSignup = true;
      let signup ={
        firstName : this.signup_name,
        email: this.signup_email,
        password: this.signup_password,
        language: this.languageService.getLanguage(),
      }

      if(this.validateEmail(signup.email) && signup.firstName && signup.email && signup.password){
        this.authService.signup(signup).subscribe(res => {
          if(res["code"] == 1){
            //alert("Signup completed")
            this.email = this.signup_email;
              this.loadingSignup = false;
             this.password = this.signup_password;
            this.onLogin();
          }else{
              this.signupServerError = true;
                this.loadingSignup = false;
              this.signupServererrorMessage = res["result"].message;
              ////console.log("RESULT++++++======",res["result"])
          }
        })
      }else{
        this.loadingSignup = false;
        this.signupError = true;
        return;
      }
    }


    validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }



    onLogin() {
      this.loadingLogin = true;
        if (this.email == null || this.password == null) {
            this.errorMessage = "signupError";
            this.loadingLogin = false;
            return;
        }
        this.errorMessage = null;
        let auth = {
          "email": this.email,
          "password":  this.password
        }
       this.authService.authenticate(auth).subscribe(res => {
         if(res["code"] == 1){
          localStorage.setItem('Oauthtoken', res['result']);
          localStorage.removeItem('anonymous');
           this.router.navigate(['/home']);
           this.loadingLogin = false;
         }else{
           this.errorMessage = res["result"];
           this.loadingLogin = false;
         }
       });
    }


    isLoggedIn(message: string, isLoggedIn: boolean) {
      if (isLoggedIn) {
          this.router.navigate(['/home']);
      }
    }

    forgotpassword(){
      let password_email = this.password_email;
      this.loadingForgotPassword = true;
      if(this.validateEmail(password_email) ){
          this.authService.forgotPassword(password_email).subscribe(res => {
            if(res["code"] == 1){
              this.successmsg = true;
              //this.router.navigate(['/home']);
                this.loadingForgotPassword = true;
            }else{
              this.resetErrorMessage = res["result"];
              this.successmsg = false;
              this.loadingForgotPassword = false;
            }
          })
      }else{
        this.loadingForgotPassword = false;
        this.passwordError = true;
      }
    }

}
