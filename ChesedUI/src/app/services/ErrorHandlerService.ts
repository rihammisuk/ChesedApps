import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EnvironmentUrlService } from './EnvironmentUrlService';
import { MessageHelper } from '../common/message/messageHelper';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  
  constructor(private _router: Router,private messageHelper: MessageHelper) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var url = req.url;
    var authToken = localStorage.getItem("token");
    if (authToken != null && authToken != "") {
      authToken = `Bearer ${authToken}`;
    }

    const rheader = req.headers
    .append("Access-Control-Allow-Origin", "*")
    .append("Access-Control-Allow-Methods", "*")
    .append("Authorization", `${authToken}`);
  const reqClone = req.clone({
    url,
    headers: rheader,
  });
  
    return next.handle(reqClone)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if(error.status === 404){
          errorMessage =   this.handleNotFound(error);
        }
        else if(error.status === 400){
          errorMessage = this.handleBadRequest(error);
        }
        else if(error.status === 401){
          errorMessage = this.handleUnauthorized(error);
        }
        
        this.messageHelper.showMessage(error.status, errorMessage);
        return throwError(errorMessage);
      })
    )
  }


private handleUnauthorized = (error: HttpErrorResponse) => {
  if(this._router.url === '/login') {
    return 'Authentication failed. Wrong Username or Password';
  }
  else {
    this._router.navigate(['/login']);
    return error.message;
  }
}
private handleNotFound = (error: HttpErrorResponse)=> {
  this._router.navigate(['/404']);
  return error.message;
}

private handleBadRequest = (error: HttpErrorResponse): string => {
  if(this._router.url === '/register'){
    let message = '';
    const values = Object.values(error.error.errors);
    values.map((m) => {
       message += m + '<br>';
    })

    return message.slice(0, -4);
  }
  else{
    return error.error ? error.error : error.message;
  }
}

}