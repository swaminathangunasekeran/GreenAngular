import { Component, OnInit,ElementRef,AfterViewInit,ViewChild,forwardRef } from '@angular/core';
import {Config} from '../config.service';
import {ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {TranslateService} from 'ng2-translate';
import {NewInsightService} from "./new-insight.service";
import { environment } from "../../environments/environment";
import {EditorImageDirective} from '../shared/directive/editor-image.directive';
import {googleTransliterate} from 'google-transliterate';


@Component({
  selector: 'app-new-insight',
  templateUrl: './new-insight.component.html',
  styleUrls: ['./new-insight.component.scss']
})
export class NewInsightComponent implements AfterViewInit {
  title = Config.MAIN_HEADING;
  icons = Config.ICON;
  insightHTML :string = "";
  editorConfig = {};
  insightId:string = "";
  insightInfo:object ;
  insightTitle:string;
  insightUpdatestatus : Boolean = true;
  uploadURL = "";
  placeholderVar ;
  imageDirective;
  displayUploadImage:boolean = false;
  imgSearchKeyword:string;
  imageLoading:boolean = false;
  errorOnImage:boolean = false;
  errorOnImageMessage:string;
  searchResultimages:any;
  imageIndex:number = 0;
  editableText:any;
  constructor(
    private element : ElementRef,
       private router: Router,
       private translateService:TranslateService,
        private newInsightService : NewInsightService) {

       }

  ngOnInit() {
    this.uploadURL = environment.host+"/uploadImage";

  }
  saveSelection(){
    //alert(this.el.nativeElement.selectionStart;);
    if(this.insightUpdatestatus){
      this.insightUpdatestatus = false;
      let insightInfo = {
        InsightTitle:this.insightTitle,
        InsightBody: this.insightHTML,
        insightId : this.insightId,
      }
      this.newInsightService.updateInsight(insightInfo).subscribe(res => {
        setTimeout(() => {
          this.insightUpdatestatus =  true;
          if(res["code"] == 1){
            ////console.log("success")
          }
        },2000)

      });

    }


  }
  showPubOps(){
    $("#pub-options").toggle();
    $("#pub-options").css("opacity", "1");
  }
  createInsight(){
    if(this.insightId == "" && this.insightTitle){
         let insightInfo = {
           InsightTitle :this.insightTitle,
           InsightBody:this.insightHTML
         }
      this.newInsightService.createInsight(insightInfo).subscribe(res => {
        if(res["code"] == 1){
            this.insightId = res["result"];
        }
      });
    }else{
      ////console.log("Insight created")
    }
  }

  // @ViewChild('newInsight') sinhalaTextInput: ElementRef;


  @ViewChild(forwardRef(() => EditorImageDirective))
  set appBacon(directive: EditorImageDirective) {
    this.imageDirective = directive;
  };

  // appendImage(){
  //   this.imageDirective.appendImage();
  // }

  addPhoto(){
    this.displayUploadImage = !this.displayUploadImage;
  }

  ngAfterViewInit() {
    try{
      // let transliteration = [];
      // googleTransliterate.transliterate('おあややおやにおあやまり', 'ja-Hira', 'ja', function(err, transliteration){
      //   transliteration = [
      //     [ 'おあやや', [ 'お文や', 'おあやや', 'お彩や', 'お綾や', 'オアヤヤ' ] ],
      //     [ 'おやに', [ '親に', 'おやに', 'オヤに', 'お屋に', 'お矢に' ] ],
      //     [ 'おあやまり', [ 'お誤り', 'お謝り', 'おあやまり', 'オアヤマリ', 'ｵｱﾔﾏﾘ' ] ]
      //   ];
      // });

      // console.log("TRANSLITRATION",transliteration[0]["おあやや"])

      // this.editableText = this.element.nativeElement.querySelector('.medium-editor-element');
      // google.load("elements", "1", {
   
      //  packages: "transliteration"
   
      //  });   
   
      //  google.setOnLoadCallback(() => this.onLoad()); // Don't lose "this" context 
    }catch(error){
      console.log(error)
    }

  }

  private onLoad() {
    try{
      // const elements = this.element.nativeElement.querySelector('.medium-editor-element');
      // const title = this.element.nativeElement.querySelector('#title'); 
      // var options = {
      //     sourceLanguage:
      //         google.elements.transliteration.LanguageCode.ENGLISH,
      //     destinationLanguage:
      //         [google.elements.transliteration.LanguageCode.TAMIL],
      //     shortcutKey: 'ctrl+g',
      //     transliterationEnabled: true
      // };
      
      // // Create an instance on TransliterationControl with the required
      // // options.
      // var control =
      //     new google.elements.transliteration.TransliterationControl(options);
      
      // // Enable transliteration in the textbox with id
      // // 'transliterateTextarea'.
      // control.makeTransliteratable([elements,title]);
      
    }catch(error){
      console.log("error",error)
    }
  
    
    }

  async searchImage(){
    this.errorOnImage  = false;
    this.imageLoading = true;
    this.imageIndex = 0;
    this.newInsightService.searchImage(this.imgSearchKeyword,this.imageIndex).subscribe((res) => {
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
    this.newInsightService.searchImage(this.imgSearchKeyword,this.imageIndex).subscribe((res) => {
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

  imageSelectd(index){
   this.displayUploadImage = false;
   const selectedImage = this.searchResultimages[index].urls.regular;
   this.imageDirective.appendImage(selectedImage);
  }



}
