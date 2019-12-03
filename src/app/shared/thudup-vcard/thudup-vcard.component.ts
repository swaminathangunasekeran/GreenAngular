import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import {TranslateService} from 'ng2-translate';
import {SocialLoginComponent} from "../social-login/social-login.component";
import {ThudpVcardServiceService} from './thudp-vcard-service.service'
import {GlobalShareService} from '../../sharedService/app.globalshare.service';
import {CommentModalComponent} from "../../shared/comment-modal/comment-modal.component";

@Component({
  selector: 'app-thudup-vcard',
  templateUrl: './thudup-vcard.component.html',
  styleUrls: ['./thudup-vcard.component.scss']
})
export class ThudupVcardComponent implements OnInit {
  @Input() insightDetails: any ;
  @Input() index:any;
  


  constructor(
    private translateService: TranslateService,
     private modalService: MzModalService,
     private globalService:GlobalShareService,
     private vCardService : ThudpVcardServiceService) { }

  ngOnInit() {
    // console.log("INDEX",this.index);
  }

   getTopicTranslated(topic){
     let topicTranslated;
    this.translateService.get(topic).subscribe((respose: string) => {
      topicTranslated = respose
  });;
  return topicTranslated 
   }

   likeInsight(insightId){
    this.vCardService.likeInsight(insightId).subscribe(res => {
        // console.log(res);
        if(res["code"] == -1){
          this.modalService.open(SocialLoginComponent);
        }
        if(res["code"] == 1){
         //  this.like.emit(insightId);
         this.insightDetails.userReaction = res["result"];
         this.insightDetails.numberOfLikes += 1; 
        }
    });
  }

  unlikeInsight(insightId){
    this.vCardService.unlikeInsight(insightId).subscribe(res => {
      // console.log(res);
      if(res["code"] == -1){
        this.modalService.open(SocialLoginComponent);
      }if(res["code"] == 1){
        this.insightDetails.userReaction = res["result"];
        this.insightDetails.numberOfLikes -= 1;
      }
  });
  }

  showCommentBox(insightInfo){
  
    this.globalService.CommentInsight = insightInfo;
    this.modalService.open(CommentModalComponent); 
  }

}
