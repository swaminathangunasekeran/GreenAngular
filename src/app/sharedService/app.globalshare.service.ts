
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class GlobalShareService{

  private _observer:Observer<any>
  private _navItemSource = new BehaviorSubject<any>(0);
  navItem$ = this._navItemSource.asObservable();
  editInsight :any= {};
  pubInsight:string ;
  commentInsight:any;
  constructor() {


  }

  setData(data:any) {

   this._navItemSource.next(data);
  }


  setEditInsight(insight){
    //alert("edit insight");
    this.editInsight = insight;
  }

  getEditInsight(){
    return this.editInsight;
  }
 setpubInsightId(pubInsight) {
   this.pubInsight=pubInsight;
 }
  getpubInsightId(): string{
    return this.pubInsight;
  }

  set CommentInsight(commentinsightID) {
    this.commentInsight = commentinsightID;
  }

  get CommentInsight() :any{
    return this.commentInsight ;
  }
}
