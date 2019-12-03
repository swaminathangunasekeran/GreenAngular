import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { MzBaseModal, MzModalComponent,MzModalService } from 'ng2-materialize';
import {Config} from '../../config.service';
import {GlobalShareService} from '../../sharedService/app.globalshare.service';
import {SocialLoginComponent} from "../social-login/social-login.component";
import {CommentModalService} from './comment-modal.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],

})
export class CommentModalComponent extends MzBaseModal implements OnInit{
  @ViewChild('modal') modal: MzModalComponent;
  modalOptions:Materialize.ModalOptions= Config.modalOptions;
  insightInfo:any = {};
  yourcomments:string;
  comment:string;
  commentsList:any;
  constructor( private commentService: CommentModalService , private modalService: MzModalService, private globalService: GlobalShareService,) { 

    super();
  }

  ngOnInit(){
    this.comment = "";
    this.commentsList =[];
    this.yourcomments = "உங்கள் கருத்தைச் சொல்லுங்கள்...";
    this.insightInfo = this.globalService.CommentInsight;
    this.getComments();
  }

  getComments(){
    let insightID = this.insightInfo._id
    this.commentService.getComments(insightID).subscribe((res) => {
      console.log("Response",res)
      if(res['code'] === 1){
        let result = res["result"];
        this.commentsList = result;
      }
 
    });
  }

  postComment(){
    // alert(this.comment);
    let insightID = this.insightInfo._id
    this.commentService.postComments(insightID,this.comment).subscribe((res) => {
      
      if(res['code'] === 1){
        this.getComments();
      }
      if(res['code'] === -1){
        this.modalService.open(SocialLoginComponent);
      }
 
    });
  }


}
