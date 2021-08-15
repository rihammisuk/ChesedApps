import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpHelper} from '../common/http/httpHelper';
import { AuthResponseDto } from '../models/AuthModel/AuthResponseDto';
import { RegistrationResponseDto } from '../models/AuthModel/RegistrationResponseDto';
import { UserForAuthenticationDto } from '../models/AuthModel/UserForAuthenticationDto';
import { UserForRegistrationDto } from '../models/AuthModel/UserForRegistrationDto';
import { EnvironmentUrlService } from './EnvironmentUrlService';


@Injectable({
    providedIn: 'root'
})
export class SecurityService {

  

  constructor(private httpHelper: HttpHelper,private _http: HttpClient,private _envUrl: EnvironmentUrlService) {
      
  }
 
  login(userName: string,password: string,organization:string): Observable<any> {
    const url = 'api/security/login';
    return this.httpHelper.postHelper(url, {UserName:userName,Password:password,organization:organization});
  }

  public logout = () => {
    localStorage.removeItem("token");
  }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this._http.post<AuthResponseDto>(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }



  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

}
