import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";
// import * as AWS from "aws-sdk";

const httpOptions = {
    headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",

      }

    )
};


@Injectable()
export class NewInsightService {

  constructor(private http:HttpClient) { }

  /* // Uses http.get() to load data from a single API endpoint
    uploadContent() {
      //  return this.http.get("https://5q8rhhqc17.execute-api.ap-south-1.amazonaws.com/dev/first-endpoint",httpOptions);
      var lambda = new AWS.Lambda({region: environment.region, apiVersion: '2015-03-31'});
// create JSON object for parameters for invoking Lambda function
      var pullParams = {
        FunctionName : 'test',
        InvocationType : 'RequestResponse',
        LogType : 'None'
      };
// create variable to hold data returned by the Lambda function
      var pullResults;
      lambda.invoke(pullParams, function(error, data) {
        if (error) {
        //  prompt(error);
          return error;
        } else {
          pullResults = JSON.stringify(data.Payload);
          return pullResults;
        }
      });

    }
 */

    createInsight(insight) : Observable<any>{
      ////console.log(insight);
      return this.http.post(environment.host+"/createInsight",insight);
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
    console.log("Update insight");
      updateInsight = this.http.post(environment.host+"/updateInsight",insight);
    }
    return updateInsight;

   }

   searchImage(searchKeyord, page:number ){
     return this.http.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchKeyord}&client_id=042832128cd5cb5560227fc004f9fa017668fc50ee2b626be6ac1031bdcd8f07`)
   }

}
