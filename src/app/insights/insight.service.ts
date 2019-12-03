import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";
import {TranslateService} from 'ng2-translate';

@Injectable()
export class InsightService {

  constructor(private http:HttpClient,private language:TranslateService) { }

  getInsight(insightID){
    
    return this.http.get(environment.host+"/getInsightToRead/"+insightID)

  }

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
