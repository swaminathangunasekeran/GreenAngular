import { Component, OnInit,Input } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import {TranslateService} from 'ng2-translate';
import {SocialLoginComponent} from "../social-login/social-login.component";
import {ThudpVcardServiceService} from '../thudup-vcard/thudp-vcard-service.service'

@Component({
  selector: 'app-user-high-light',
  templateUrl: './user-high-light.component.html',
  styleUrls: ['./user-high-light.component.scss']
})
export class UserHighLightComponent implements OnInit {
  @Input() userDetails: any ;
  popOverUser:any;
  profilePic:string;
  name:string;
  constructor( 
    private vCardService : ThudpVcardServiceService,
    private modalService: MzModalService,
    ) {
   }

  ngOnInit() {
    this.name = this.userDetails.firstName;
    this.userDetails.isfollow = false;
  if(this.userDetails.profilePic){
    this.profilePic = this.userDetails.profilePic;
  }else{
    this.profilePic = "assets/img/avatar.png";
  }
  }

showUserDetail(){
    this.userDetails.showUser = true;
    this.isfollow();
}
hideUserDetails(){
    this.userDetails.showUser = false;
}

follow(){
  const followId =  this.userDetails.userName;
  this.vCardService.follow(followId).subscribe(res => {
      // console.log(res);
      if(res["code"] == -1){
        this.modalService.open(SocialLoginComponent);
      }
      if(res["code"] == 1){
        //  this.like.emit(insightId);
        this.userDetails.isfollow = true;
       }
  });
}

unfollow(){
  const followId =  this.userDetails.userName
  this.vCardService.unfollow(followId).subscribe(res => {
    // console.log(res);
    if(res["code"] == -1){
      this.modalService.open(SocialLoginComponent);
    }if(res["code"] == 1){
      this.userDetails.isfollow = false;
    }
});
}

isfollow(){
  const followId =  this.userDetails.userName
  this.vCardService.isFollow(followId).subscribe(res => {
    if(res["code"] == -1){
      //this.modalService.open(SocialLoginComponent);
      this.userDetails.isfollow = false;
    }if(res["code"] == 1 && res["result"] == true){

      this.userDetails.isfollow = true;
    }else{
      this.userDetails.isfollow = false;
    }
});
}

}
