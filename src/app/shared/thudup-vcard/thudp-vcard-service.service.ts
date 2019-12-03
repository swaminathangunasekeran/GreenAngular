import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../../environments/environment";

@Injectable()
export class ThudpVcardServiceService {

  constructor(private http:HttpClient) { }


   likeInsight(insightid){
      return this.http.post(environment.host+"/likeInsight",{"insightid":insightid});
   }

   unlikeInsight(insightid){
      return this.http.post(environment.host+"/unlikeInsight",{"insightid":insightid});
   }

   isFollow(followId){
      return this.http.post(environment.host+"/isFollow",{"isfollow":followId});
   }

   follow(followId){
      return this.http.post(environment.host+"/follow",{"follow":followId});
   }

   unfollow(unfollowId){
      return this.http.post(environment.host+"/unfollow",{"unfollow":unfollowId});
   }


}
