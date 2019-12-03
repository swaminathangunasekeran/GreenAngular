import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { MzModalModule } from 'ng2-materialize';
import {GlobalShareService} from '../../../sharedService/app.globalshare.service';
import {Subscription} from 'rxjs/Subscription';
import {Config} from '../../../config.service';
import { MzCardModule } from 'ng2-materialize';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from "../auth.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  title = Config.MAIN_HEADING;
    icons = Config.ICON;
    email :string;
    token: string;
    confirm_password:string;
    login_password:string;
    errorMessage:string;
    resetLoading:boolean = false;
    resetError:Boolean;
    active:string = "active";
  constructor(private globalService:GlobalShareService,
  public authService : AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private location:Location) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams['token'];
    //this.location.replaceState('token')
    localStorage.setItem('Oauthtoken', this.token);
  }

  resetPassword(){
    this.resetLoading = true;
    if(this.login_password  && this.login_password == this.confirm_password){

      this.authService.updatePassword(this.login_password).subscribe(res => {
        if(res["code"] == 1){
        //  this.successmsg = true;
          this.resetLoading = false;
          localStorage.removeItem('Oauthtoken');
          this.router.navigate(['/auth']);
        }else{
            //localStorage.removeItem('Oauthtoken');
            this.resetError = true;
            this.resetLoading = false;
        }
      })
    }else{
      this.resetLoading = false;
      this.resetError = true;

    }
  }


}
