import { Hospital } from './../models/hospital';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHelper} from '../common/http/httpHelper';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './EnvironmentUrlService';
import { PaginationDTO } from '../models/PaginationDTO';


@Injectable({
    providedIn: 'root'
})
export class HospitalService {
    
    
   

  constructor(private httpHelper: HttpHelper,private http: HttpClient,private _envUrl: EnvironmentUrlService) {
      
  }
 
  // GetAllHospital(): Observable<Hospital[]> {
  //   const url = 'https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/';
  //    return this.http.get<Hospital[]>(url+'hospitals.json');
  //   //  return  this.httpHelper.getHelper('https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/hospitals.json');

  // }

  public GetAllHospital = () => {
    const route = "api/Hospital/GetAllHospital";
    return this.http.get<Hospital[]> (this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public GetHospitalFilter = (hospitalCode?:string) => {
    const route = "api/Hospital/GetHospitalByHospitalCode/"+hospitalCode;
    return this.http.get<Hospital[]> (this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }


}
