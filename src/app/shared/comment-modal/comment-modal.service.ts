import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../../environments/environment";

@Injectable()
export class CommentModalService {

  constructor(private http:HttpClient) { }


  getComments(insightId){
    return this.http.post(environment.host+"/getComments",{"insightId":insightId});
  }

  postComments(insightId,comments){

    return this.http.post(environment.host+"/comments",{"insightid":insightId,"comment":comments});
  }



}
