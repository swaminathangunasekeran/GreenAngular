import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";

@Injectable()
export class UserProfileService {

  constructor(private http:HttpClient) { }

  getUserProfile(userName){
    return this.http.get(environment.host+"/user/"+userName)
  }

}
