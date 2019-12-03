import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";
import {LanguageService} from '../sharedService/language.service';

@Injectable()
export class MydiariesService {
  constructor(private http:HttpClient,private languageService : LanguageService){

  }

  public getUserInsights(){
    return this.http.get(environment.host+"/getUserInsight")
  }

  public getwebInsights(){

    return this.http.get(environment.host+"/getWebInsights/"+this.languageService.getLanguage())
  }

  public updateWebInsights(insight){
    return this.http.post(environment.host+"/updateWebInsights",insight)
  }

  public uploadImage(selectedFile){
    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);

    return this.http.post(environment.host+'/uploadImage', uploadData, {
    reportProgress: true,
    observe: 'events'
  })
  }

  public updateUser(userInfo){
  return this.http.post(environment.host+'/updateUser', userInfo)
    // return this.http.get(environment.host+"/getUserInsight")
  }





}
