import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../../environments/environment";


export interface LoggedInCallback {
    isLoggedIn(message: string, loggedIn: boolean): void;
}
@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  public authenticate(auth){
    return this.http.post(environment.host+"/signin",auth);
   }



  public isAuthenticated(callback: LoggedInCallback){
      if (callback == null)
        throw("UserLoginService: Callback in isAuthenticated() cannot be null");
        this.getCurrentUser().subscribe(res => {
        if(res["code"] == 1){
          localStorage.setItem('currentUser', JSON.stringify({ userDetails: res['result']}));
            callback.isLoggedIn("success",true);
          }else if(res["code"] == 2){
            localStorage.removeItem('Oauthtoken');
           localStorage.setItem('anonymous', res['result']);
           callback.isLoggedIn("anonymous",false);
          }else{
            localStorage.removeItem('Oauthtoken');
            localStorage.removeItem('anonymous');
              callback.isLoggedIn("failure",false);
          }

        })
  }

public isAuthenticatedObservable():Observable<boolean>{
  return new Observable<boolean>((observer) => {
    this.getCurrentUser().subscribe(res => {
    if(res["code"] == 1){
        localStorage.setItem('currentUser', JSON.stringify({ userDetails: res['result']}));
        observer.next(true);
      }else if(res["code"] == 2){
        localStorage.removeItem('Oauthtoken');
        localStorage.setItem('anonymous', res['result']);
      }else{
        observer.next(false);
      }
    })
  });
}
public signup(signup){

  return this.http.post(environment.host+"/signup", signup) // ...using post request

}


  public getCurrentUser(){

    return this.http.get(environment.host+"/users");
  }

  public logout(){
     return new Observable((observer) => {
    // observable execution
        localStorage.removeItem('Oauthtoken');
        observer.next(true);
        observer.complete()
    });

  }

  public forgotPassword(email){
     let userEmail = {
       email : email
     }
    return this.http.post(environment.host+"/forgotPassword",userEmail);
  }


  public loginFB(user){
    return this.http.post(environment.host+"/fbSignin",user);
  }

  public updatePassword(password){
    let userPassword = {
      password : password
    }
      return this.http.post(environment.host+"/updatePassword",userPassword);
  }

}
