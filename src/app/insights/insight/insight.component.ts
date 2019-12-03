import { Component, OnInit ,Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {InsightService} from '../insight.service'
import {TranslateService} from 'ng2-translate';
import { MzModalService } from 'ng2-materialize';
import {GlobalShareService} from '../../sharedService/app.globalshare.service';
import {SocialLoginComponent} from "../../shared/social-login/social-login.component";
import {CommentModalComponent} from "../../shared/comment-modal/comment-modal.component";


@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {
  insightInfo ;
  profilePic: "assets/img/avatar.png";
  insightAuthor : any;
  comment:string;
  yourcomments:string;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private globalService:GlobalShareService,
  private insightService:InsightService,
private translateService:TranslateService,
private modalService: MzModalService) { }

  ngOnInit() {
    let params = this.activatedroute.snapshot.params['id'];
    this.comment = "";
    this.yourcomments = "உங்கள் கருத்தைச் சொல்லுங்கள்...";
    if(params && params != ""){
      this.insightService.getInsight(params).subscribe((res) => {
        if(res["code"] == 1){
          this.insightInfo = res["result"];
          this.insightAuthor = res["result"].authorDetails[0];
          let result = res["result"];
          let title = result.title;
          this.translateService.get('TITLE').subscribe((respose: string) => {
             $('title').text(title);
          });

          //$('title').text(res["result"].title);

        }else{
          alert("no insight")
      //  this.router.navigateByUrl('/home');
        }

      })
    }else{
      this.router.navigateByUrl('/home');
    }


  }

  likeInsight(insightId){
    this.insightService.likeInsight(insightId).subscribe(res => {
        // console.log(res);
        if(res["code"] == -1){
          this.modalService.open(SocialLoginComponent);
        }
        if(res["code"] == 1){
          //  this.like.emit(insightId);
          this.insightInfo["userReaction"] = res["result"];
          this.insightInfo["numberOfLikes"] += 1; 
         }
    });
  }

  unlikeInsight(insightId){
    this.insightService.unlikeInsight(insightId).subscribe(res => {
      // console.log(res);
      if(res["code"] == -1){
        this.modalService.open(SocialLoginComponent);
      }if(res["code"] == 1){
        this.insightInfo["userReaction"] = res["result"];
        this.insightInfo["numberOfLikes"] -= 1;
      }
  });
  }

  showCommentBox(insightInfo){
  
    this.globalService.CommentInsight = insightInfo;
    this.modalService.open(CommentModalComponent); 
  }

}
