import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";


@Injectable()
export class EditInsightService {

  constructor(private http:HttpClient) { }


  getInsightToEdit(insightid){
    let insightDetail = {
      insightId : insightid
    }
      return this.http.post(environment.host+"/getInsightToEdit",insightDetail);
  }
  updateInsight(insight) :Observable<any>{
    let updateInsight:Observable<any> ;
   if(insight.insightId == "" || !insight.insightId){
     updateInsight= new Observable((observer) => {
       const {next, error} = observer;
       return error("Insight ID is required");
     })
     //return UpdateInsightObservable;
   }else{
     updateInsight = this.http.post(environment.host+"/updateInsight",insight);
   }
   return updateInsight;

  }

  searchImage(searchKeyord,page){
    return this.http.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchKeyord}&client_id=042832128cd5cb5560227fc004f9fa017668fc50ee2b626be6ac1031bdcd8f07`)
  }

}
