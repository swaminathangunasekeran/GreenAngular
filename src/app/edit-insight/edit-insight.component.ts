import { Component, OnInit,ElementRef,ViewChild,forwardRef} from '@angular/core';
import {Config} from '../config.service';
import {ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {EditInsightService} from './edit-insight.service';
import {TranslateService} from 'ng2-translate';
import {GlobalShareService} from '../sharedService/app.globalshare.service';
import {EditorImageDirective} from '../shared/directive/editor-image.directive';
import {EditInsightDirective} from '../shared/directive/edit-insight.directive'

@Component({
  selector: 'app-edit-insight',
  templateUrl: './edit-insight.component.html',
  styleUrls: ['./edit-insight.component.scss']
})
export class EditInsightComponent implements OnInit {
  title = Config.MAIN_HEADING;
  icons = Config.ICON;
  insightHTML:string ="";
  editorConfig = {};
  insightId:string = "";
  insightInfo:object ;
  insightTitle:string;
  imageIndex:number=0;
  insightUpdatestatus : Boolean = true;
  imageDirective:any;
  initInsightDirective:any;
  displayUploadImage:boolean = false;
  imgSearchKeyword:string;
  imageLoading:boolean = false;
  errorOnImage:boolean = false;
  errorOnImageMessage:string;
  searchResultimages:any;
  editableText:any;
  constructor(
    private element : ElementRef,
       private router: Router, 
       private editInsightService : EditInsightService,
       private globalService:GlobalShareService,
       private translateService:TranslateService) {

       }

  ngOnInit() {
    this.editorConfig ={
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "400px",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "imageEndPoint": "",
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image"],
        ["code"]
    ]
  }
  let insight = this.globalService.getEditInsight();
  this.insightId = insight.id;
  if(insight.type == 0){
    this.getInsightDetails();
  }else{
    return 0 ;
  }
  
  

  }

  @ViewChild(forwardRef(() => EditorImageDirective))
  set appBacon(directive: EditorImageDirective) {
    this.imageDirective = directive;
  };



  // ngAfterViewInit() {
  //   this.editableText = this.element.nativeElement.querySelector('.medium-editor-element');
   
  //   google.load("elements", "1", {
 
  //    packages: "transliteration"
 
  //    });   
 
  //    google.setOnLoadCallback(() => this.onLoad()); // Don't lose "this" context 
  //  }
 
  //  private onLoad() {
  //    const elements = this.element.nativeElement.querySelector('.medium-editor-element');
  //    const title = this.element.nativeElement.querySelector('#title');
  //    var options = {
  //        sourceLanguage:
  //            google.elements.transliteration.LanguageCode.ENGLISH,
  //        destinationLanguage:
  //            [google.elements.transliteration.LanguageCode.TAMIL],
  //        shortcutKey: 'ctrl+g',
  //        transliterationEnabled: true
  //    };
     
  //    // Create an instance on TransliterationControl with the required
  //    // options.
  //    var control =
  //        new google.elements.transliteration.TransliterationControl(options);
     
  //    // Enable transliteration in the textbox with id
  //    // 'transliterateTextarea'.
  //    control.makeTransliteratable([elements,title]);


  //    }


  addPhoto(){
    this.displayUploadImage = !this.displayUploadImage;
  }

  getInsightDetails(){
    console.log(this.initInsightDirective);
   this.editInsightService.getInsightToEdit(this.insightId).subscribe(res => {
     if(res["code"] == 1){
       let insightDetails = res["result"];
       this.insightTitle = insightDetails.title;
       this.insightHTML = insightDetails.insightbody;
       this.imageDirective.appendHtml(this.insightHTML);
     
     }else{
       this.router.navigateByUrl('/newInsight');
     }
   });
  }


  saveSelection(){
    console.log("UPDATE INSIGHT",this.insightHTML);
    if(this.insightUpdatestatus){
      this.insightUpdatestatus = false;
      let insightInfo = {
        InsightTitle:this.insightTitle,
        InsightBody: this.insightHTML,
        insightId : this.insightId,
      }
     
      this.editInsightService.updateInsight(insightInfo).subscribe(res => {
       
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


  async searchImage(){
    this.errorOnImage  = false;
    this.imageLoading = true;
    this.imageIndex = 0;
    this.editInsightService.searchImage(this.imgSearchKeyword,this.imageIndex).subscribe((res) => {
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
    this.editInsightService.searchImage(this.imgSearchKeyword,this.imageIndex).subscribe((res) => {
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
