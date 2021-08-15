import { AuthGuardService } from './auth.guard.service';
import { Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { SecurityService } from 'src/app/services/securityService';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private authGuardService: AuthGuardService,
    private router: Router,
    private _authService: SecurityService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> 
  {
    return this.authGuardService.isLoggedIn
      .pipe(map((isLoggedIn: boolean) => {

        if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined )
        {
          return false;
        }
        else if( localStorage.getItem("token").length == 0 && this.router.url == '/login'||this.router.url == '/register')
        {
          return true;
        }
        else if(localStorage.getItem("token").length > 0)
        {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
        //  if(isLoggedIn == true)
        // {
        //   console.log("isLoggedIn 1 "+localStorage.getItem("token"))
        //   return true;

        // }
        // else{
        //   console.log("isLoggedIn 2 "+localStorage.getItem("token"))
        //   this.router.navigate(['/login']);
        //   return false;
        // }

      }));
  }
}

   
   


  // canActivate(
  //   next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  //     if (localStorage.getItem('session') != null) {
  //       return true;
  //     }
  //     else {
  //       this.routes.navigate(['/login']);
  //       return false;
  //     }
  // }