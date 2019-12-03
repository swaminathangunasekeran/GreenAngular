import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../../environments/environment";

@Injectable()
export class PublishService {

  constructor(private http:HttpClient) { }


  getPublications(){
    return this.http.get(environment.host+"/getUsersPublications");
  }

  publishInsight(publishInsight){
    return this.http.post(environment.host+"/reqpublishInsight",publishInsight);
  }
  republishInsight(publishInsight){
    return this.http.post(environment.host+"/reqRepublishInsight",publishInsight);
  }

  getInsightToEdit(insightid){
    let insightDetail = {
      insightId : insightid
    }
      return this.http.post(environment.host+"/getInsightToEdit",insightDetail);
  }

  uploadTitleImage(selectedFile){
    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);

    return this.http.post(environment.host+'/uploadImage', uploadData, {
    reportProgress: true,
    observe: 'events'
  })
  }

  searchImage(searchKeyord,page){
    return this.http.get(`https://api.unsplash.com/search/photos?page=
    ${page}&query=${searchKeyord}&orientation=landscape&client_id=042832128cd5cb5560227fc004f9fa017668fc50ee2b626be6ac1031bdcd8f07`)
  }
  
}
