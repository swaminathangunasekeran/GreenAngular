import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { MydiariesService } from './my-diaries-service';
import {Router} from "@angular/router";
import {GlobalShareService} from '../sharedService/app.globalshare.service';
//import {SocialLoginComponent} from "../shared/social-login/social-login.component";
import { PublishModelComponent } from '../shared/publish-model/publish-model.component';

@Component({
  selector: 'app-my-diaries',
  templateUrl: './my-diaries.component.html',
  styleUrls: ['./my-diaries.component.scss']
})
export class MyDairiesComponent implements OnInit {
  profilePic : string;
  coverPic:string;
  firstName:string;
  description:string;
  skills:string;
  email:string;
  insights:any;
  errorMessage:any;
  publishedInsights:any;
  userName:any;
  userRole:any;
  webInsights:any;
  userInfo:any;
  constructor(private modalService: MzModalService,
    private mydiaries:MydiariesService,
   private router: Router,
   private globalService:GlobalShareService) {


   }

  ngOnInit() {
    let userInfo = JSON.parse(localStorage.getItem('currentUser')).userDetails;
    this.userInfo = userInfo;
    this.profilePic = userInfo.profilePic?userInfo.profilePic:"assets/img/avatar.png";
    this.coverPic = userInfo.coverPic?userInfo.coverPic:"";
    this.firstName =userInfo.firstName;
    this.description = userInfo.description?userInfo.description:"";
    this.skills = userInfo.skills.length>0?userInfo.skills:[];
    this.email = userInfo.email;
    this.userName = userInfo.userName;
    this.userRole = userInfo.role;
    ////console.log("SKILLS ++++++",this.skills,"USER INFO SKILLS",userInfo.skills)
    this.showInsights();
  }

  addSkill(){
  //  this.modalService.open(SocialLoginComponent);
  }
  showInsights(){
    this.mydiaries.getUserInsights().subscribe(res => {
      if(res["code"] == 1){
        this.insights = res["result"].insights;
        this.publishedInsights = res["result"].publishedInsight;
        ////console.log("insights ====",this.insights);
      }else{
        this.errorMessage = res["result"];
      }
    });
  }



 newInsight(){
     this.router.navigateByUrl('/newInsight');
 }

 navEditInsight(insightId){
    let insight ={
      "id" : insightId,
      "type" : 0
    }
   this.globalService.setEditInsight(insight);
   this.router.navigateByUrl('/editInsight');
 }

  publishInsight(index){
    //  alert(index)
      let insight = this.insights[index]
    //  //console.log(insight);
    this.globalService.setpubInsightId(insight.insightID)
    this.modalService.open(PublishModelComponent);
  }

  onProfilePicUpdate(event){
    try{

      const file = event.target.files[0];
      let userInfo = this.userInfo;
      // const profilePic= 
      // this.profilePic = "https://thudup-image-store.s3.ap-southeast-1.amazonaws.com/e7.jpg";
      // userInfo.profilePic = this.profilePic;
   
  
      this.mydiaries.uploadImage(file).subscribe((res) => {
        if(res["status"] === 200 && res["body"]){
           this.profilePic = res["body"]["url"];
           userInfo.profilePic = this.profilePic;
           this.mydiaries.updateUser(userInfo).subscribe(res => {
            if(res["code"] == 1){
              // this.insights = res["result"].insights;
              // this.publishedInsights = res["result"].publishedInsight;
              ////console.log("insights ====",this.insights);
            }else{
              this.errorMessage = res["result"];
            }
          });;
        }
      });
    }catch(error){
      console.log("ERROR",error);
    }
  
 }

 onCoverPicUpdate(event){
  try{

    const file = event.target.files[0];
    let userInfo = this.userInfo;
    // const profilePic= 
    // this.profilePic = "https://thudup-image-store.s3.ap-southeast-1.amazonaws.com/e7.jpg";
    // userInfo.profilePic = this.profilePic;
 

    this.mydiaries.uploadImage(file).subscribe((res) => {
      if(res["status"] === 200 && res["body"]){
         this.coverPic = res["body"]["url"];
         userInfo.coverPic = this.coverPic;
         this.mydiaries.updateUser(userInfo).subscribe(res => {
          if(res["code"] == 1){
            // this.insights = res["result"].insights;
            // this.publishedInsights = res["result"].publishedInsight;
            ////console.log("insights ====",this.insights);
          }else{
            this.errorMessage = res["result"];
          }
        });;
      }
    });
  }catch(error){
    console.log("ERROR",error);
  }

}




}
