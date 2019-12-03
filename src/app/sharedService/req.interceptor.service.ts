import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReqInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Oauthtoken =  localStorage.getItem('Oauthtoken')?localStorage.getItem('Oauthtoken'):null;
    const anonymous = localStorage.getItem('anonymous')?localStorage.getItem('anonymous'): null;

    if(Oauthtoken){
      request = request.clone({
        setHeaders: {
          Authorization: Oauthtoken
        }
      });

    }else if(anonymous){
      ////console.log("IN anonymous")
      request = request.clone({
        setHeaders: {
          anonymousUser: anonymous
        }
      });
    }
    return next.handle(request);
  }
}
