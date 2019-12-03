import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { MzModalService } from 'ng2-materialize';
import {Router} from "@angular/router";
import {Config} from '../../config.service';
import * as AWS from "aws-sdk/global";
import { FacebookService, InitParams} from 'ngx-facebook';
import {AuthService} from "../auth/auth.service";
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialLoginComponent extends MzBaseModal implements OnInit  {
  modalOptions:Materialize.ModalOptions= Config.modalOptions;
  fbconf = environment.production  ?  Config.fbconf  : Config.devFB;
  errorMessage = "";


  constructor(
    private router: Router,
    private FB: FacebookService,
    private authService: AuthService,
) {
   super();

   this.fbInit();

   }

  fbInit():void{
    this.FB.init(this.fbconf);

  //FB.AppEvents.logPageView();
  }

  fbLogin(){
  this.FB.getLoginStatus().then((response) => {
    if (response["status"] == "connected") {
            // resolve(response);
            this.getFBDetials(response);
      }else{
        this.FB.login().then((response: any) => {
            // Check if the user logged in successfully.
            if (response.authResponse) {
               console.log('You are now logged in.',response);
               this.getFBDetials(response);

            } else {
              //console.log('There was a problem logging you in.');
            }
        }).catch(e => {
          //console.log('Error logging in',e)
        });
      }
  }).catch(e => {
    //console.log('Error logging in',e)
  });
  }

  getFBDetials(response){
    this.FB.api("/"+  response.authResponse.userID+'?fields=political,birthday,favorite_athletes,hometown,inspirational_people,languages,link,id,name,first_name,email,gender,picture.width(150).height(150),age_range,friends').
    then((res:any) =>  {
       if (res && !res["error"]) {
       this.authService.loginFB(res).subscribe((res:any) => {
         if(res["code"] == 1){
          localStorage.setItem('Oauthtoken', res['result']);
          localStorage.removeItem('anonymous');
           this.router.navigate(['/home']);
         }else{
           this.errorMessage = res["result"];
         }
       });

       }else{
           console.log("Error on fetching user info")
       }
     });

  }

  cognitoCallback(message: string, result: any){
    ////console.log(message);
    if(message){
      this.errorMessage = message;
    }else{
      //this.userService.isAuthenticated(this);
    }

  }


  ngOnInit():void {}


}
