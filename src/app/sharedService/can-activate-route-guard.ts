import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService,LoggedInCallback} from "../shared/auth/auth.service";

@Injectable()
export class CanActivateRouteGuard implements CanActivate,LoggedInCallback {
  private userLoggedInStatus:boolean;
  constructor(private authService : AuthService) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
     if(localStorage.getItem('Oauthtoken')){
        return new Observable((observer) => {
            observer.next(true);
        })
     }else if(!localStorage.getItem('Oauthtoken')){
        return this.authService.isAuthenticatedObservable();
     }


  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    ////console.log("AppComponent: the user is authenticated: in navbar component" + isLoggedIn);
    let mythis = this;

    this.userLoggedInStatus = isLoggedIn ? true:false;
  }
}
