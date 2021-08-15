import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { SecurityService } from 'src/app/services/securityService';
@Injectable({
  providedIn:'root'
})
export class AuthGuardService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private router: Router, private _authService: SecurityService) {

  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  setLoggedIn() {
    this.loggedIn.next(true);
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

   hasToken(): boolean {

    //  if( localStorage.getItem("token").length == 0 && this.router.url == '/login'||this.router.url == '/register')
    // {
    //   console.log("token 1 "+localStorage.getItem("token") + " lenth "+localStorage.getItem("token").length);
    //   return true;
    // }
    // else if(localStorage.getItem("token").length > 0)
    // {
    //   console.log("token 2 "+localStorage.getItem("token") + " lenth "+localStorage.getItem("token").length);
    //   return true;
    // }
    // console.log("token 3 "+localStorage.getItem("token") + " lenth "+localStorage.getItem("token").length);
   return false;
  //  return !!localStorage.getItem("token");
  }
}
