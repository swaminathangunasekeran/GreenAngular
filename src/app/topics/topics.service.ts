import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";
import {LanguageService} from '../sharedService/language.service';

@Injectable()
export class TopicsService {

  constructor(private http:HttpClient,private languageService : LanguageService) { }

  getTopicsList(topic){
    return this.http.get(environment.host+"/topic/"+topic+"/"+this.languageService.getLanguage())
  }
}
