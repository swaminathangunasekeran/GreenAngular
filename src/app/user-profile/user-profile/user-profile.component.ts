import { Component, OnInit } from '@angular/core';
import {UserProfileService} from "../user-profile.service"
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile:{};
  skills:Array<string> = [];
  profilePic:string = "assets/img/avatar.png";
  userInfo:any;
  insights:any;
  constructor(
    private userProfileService: UserProfileService,
    private router: Router,private activatedroute: ActivatedRoute
    ) {
      this.getDetails();
   }

  ngOnInit() {
  


  }

  getDetails(){
    let params = this.activatedroute.snapshot.params['id'];
    if(params && params != ""){
      this.userProfileService.getUserProfile(params).subscribe((res) => {
        if(res["code"] == 1){
          this.userInfo = res["result"];
          this.insights = res["result"]["publishedInsight"];
          console.log("Insights",this.insights);
        }else{
      //  this.router.navigateByUrl('/home');
        }

      })
    }else{
      this.router.navigateByUrl('/home');
    }
  }

  navToInsight(insightId){
    // console.log("INSIGHT Clicked",insightId);
    if(insightId){
      this.router.navigateByUrl(`/insight/${insightId}`);
    }
  
  }

}
