import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";
import {LanguageService} from '../sharedService/language.service';

@Injectable()
export class EditorsPickService {

  constructor(private http:HttpClient,private languageService : LanguageService) { }

  getHomePage(){
    return this.http.get(environment.host+"/getHomePage/"+this.languageService.getLanguage())
  }

  getTrending(){
    return this.http.get(environment.host+"/getTrending/"+this.languageService.getLanguage())
  }

}
