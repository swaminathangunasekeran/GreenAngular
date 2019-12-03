import { Component, OnInit,ViewEncapsulation,ViewChild} from '@angular/core';
import { MzBaseModal, MzModalComponent,MzModalService } from 'ng2-materialize';
import {LanguageService} from '../../sharedService/language.service';
import {Router} from "@angular/router";
import {TranslateService} from 'ng2-translate';
import {Config} from '../../config.service';
import {GlobalShareService} from '../../sharedService/app.globalshare.service';
import {PublishService} from  "./publish.service";


@Component({
  selector: 'app-publish-model',
  templateUrl: './publish-model.component.html',
  styleUrls: ['./publish-model.component.scss']
})
export class PublishModelComponent extends MzBaseModal implements OnInit {
@ViewChild('modal') modal: MzModalComponent;

modalOptions:Materialize.ModalOptions= Config.modalOptions;
pubInsight:any ={};
profilePic:string;
userPublications:any;
selectedTopic:string;
publicatonLoadingStatus:boolean = true;
pubInsightId:string;
errorMessage:string;
topics:Array<string>;
publishedMessage:string;
pubErrorMessage:string;
publisImageUrl:string;
displayUploadImage:boolean = false;
imgSearchKeyword:string;
imageLoading:boolean = false;
errorOnImage:boolean = false;
errorOnImageMessage:string;
searchResultimages:any;
description:string ="";
imageIndex:number = 0;
  constructor(
    private router: Router,
    private modalService: MzModalService,
    private languageService : LanguageService,
    private globalService: GlobalShareService,
    private publishService:PublishService,
    private translateService:TranslateService) {
    super();
  }

  ngOnInit() {
    this.profilePic = "assets/img/faces/avatar.png";
    this.pubInsightId = this.globalService.getpubInsightId();
    ////console.log(this.globalService.getpubInsight());
    this.getpubInsightDetails();
    this.getUserPublication();
  }
  getpubInsightDetails(){
    this.publishService.getInsightToEdit(this.pubInsightId).subscribe(res => {
      if(res["code"] == 1){
        this.pubInsight = res["result"];
      }else{
        this.errorMessage = "error_message";
      }
    });
  }

  getUserPublication(){
    this.userPublications = [];
    this.publishService.getPublications().subscribe(res => {
      if(res["code"] == 1){
        this.userPublications = res["result"].publications[0].pubId;
        this.topics = res["result"].publications[0].pubDetails.topics;
      //  //console.log("insights ====",this.insights);
      }else{
        this.errorMessage = res["msg"];
      }
    });
  }

  publishInsight(){
    if(this.publicatonLoadingStatus){
      this.publicatonLoadingStatus = false;
      if(this.selectedTopic && this.description && !/^\s*$/.test(this.description) ){
        let publishInsight = {
          InsightTitle :this.pubInsight.title,
          InsightBody :this.pubInsight.insightbody,
          insightId:this.pubInsightId,
          description:this.description ,
          publication:this.userPublications,
          topic:this.selectedTopic,
          imageUrl:this.publisImageUrl,
          language : this.languageService.getLanguage(),
        }
        // let good = $(this.pubInsight.insightbody).text();
        // console.log("HTML GOOD IS",good);
        this.publishService.publishInsight(publishInsight).subscribe(res => {
            this.publicatonLoadingStatus = true;
          if(res["code"] == 1) {
            this.publishedMessage = res["msg"];
          }else{
              //this.modal.close();
              this.pubErrorMessage = res["msg"];
          }
        })
      }else{
          this.publicatonLoadingStatus = true;
          this.translateService.get('myDiaries.publishError').subscribe((respose: string) => {
            this.pubErrorMessage = respose;
        });;
      }


    }


  }

  importDescription(){
    if(this.publicatonLoadingStatus){
      if(this.pubInsight.sample){
        let imageUrl
        let sample = this.pubInsight.sample
       let isImage =  sample.search("src=");
       if(isImage => 0 && imageUrl == "" ){
        var n = sample.split("src=")[1];
        imageUrl = n.match(/"([^"]+)"/)[1];
        sample = sample.split(">")[1];
        this.publisImageUrl = imageUrl;
        this.displayUploadImage = true;
       }
       this.description = sample;
       


      }

    }
  }

  republishInsight(isDelete){
    if(this.publicatonLoadingStatus){
      this.publicatonLoadingStatus = false;
      if(this.selectedTopic && this.description  && !/^\s*$/.test(this.description) ){
        let publishInsight = {
          InsightTitle :this.pubInsight.title,
          InsightBody :this.pubInsight.insightbody,
          insightId:this.pubInsightId,
          publication:this.userPublications,
          topic:this.selectedTopic,
          description:this.description ,
          pubinsightID: this.pubInsight.pubinsightID,
          imageUrl:this.publisImageUrl,
          isDelete : isDelete,
          language : this.languageService.getLanguage(),
        }
        this.publishService.republishInsight(publishInsight).subscribe(res => {
            this.publicatonLoadingStatus = true;
          if(res["code"] == 1) {
            this.publishedMessage = res["msg"];
          }else{
              //this.modal.close();
              this.pubErrorMessage = res["msg"];
          }
        })
      }else{
        this.publicatonLoadingStatus = true;
       this.translateService.get('myDiaries.publishError').subscribe((respose: string) => {
          this.pubErrorMessage = respose;
      });;
      }

    }

  }

  async searchImage(){
    this.errorOnImage  = false;
    this.imageLoading = true;
    this.imageIndex =0;
    this.publishService.searchImage(this.imgSearchKeyword,1).subscribe((res) => {
      this.searchResultimages = res["results"];
      this.imageLoading = false;
  },(error) => {
    this.errorOnImage = true;
    this.imageLoading = false;
    if(error.status == 401){
      this.translateService.get('newInsight.imagenotFound').subscribe((respose: string) => {
        this.errorOnImageMessage = respose;
    });
    }else{
      this.translateService.get('newInsight.networkError').subscribe((respose: string) => {
        this.errorOnImageMessage = respose;
    });
    }

  });


  }

  async loadmoreImage(){
    this.errorOnImage  = false;
    this.imageLoading = true;
    this.imageIndex =this.imageIndex == 0 ?2: this.imageIndex+1;
    this.publishService.searchImage(this.imgSearchKeyword,this.imageIndex).subscribe((res) => {
      this.searchResultimages = res["results"];
      this.imageLoading = false;
  },(error) => {
    this.errorOnImage = true;
    this.imageLoading = false;
    if(error.status == 401){
      this.translateService.get('newInsight.imagenotFound').subscribe((respose: string) => {
        this.errorOnImageMessage = respose;
    });
    }else{
      this.translateService.get('newInsight.networkError').subscribe((respose: string) => {
        this.errorOnImageMessage = respose;
    });
    }

  });
  }

  addPhoto(){
    this.displayUploadImage = !this.displayUploadImage;
    this.publisImageUrl = null;
  }

  imageSelectd(index){
   this.displayUploadImage = true;
   const selectedImage = this.searchResultimages[index].urls.regular;
   // this.imageDirective.appendImage(selectedImage);
   this.publisImageUrl =  selectedImage ;
  }

  onFileChanged(event){
     const file = event.target.files[0];
     this.publishService.uploadTitleImage(file).subscribe((res) => {
       if(res["status"] === 200 && res["body"]){

          this.publisImageUrl = res["body"]["url"];

       }
     });
  }

}
