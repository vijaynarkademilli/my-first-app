import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler} from "@angular/common/http";

@Injectable()
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor {

  constructor() { }

  intercept(request:HttpRequest<any>, next:HttpHandler) {

    let username = 'vijay'
    let password = 'password'
    let basicAuthString = 'Basic '+ window.btoa(username + ':' +password)

    //noinspection TypeScriptUnresolvedFunction
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthString
      }
    })

    return next.handle(request);
  }



}
