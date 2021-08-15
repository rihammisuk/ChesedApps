import { Component, OnInit } from '@angular/core';
import {MessageHelper} from '../../common/message/messageHelper';
import {ResponseStatus} from '../../common/enums/appEnums';
import { SecurityService } from 'src/app/services/securityService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserForAuthenticationDto } from 'src/app/models/AuthModel/UserForAuthenticationDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  


  public username:string="";
  public password:string="";
  public organization:string="Datavanced";

  constructor(private messageHelper: MessageHelper,private _authService: SecurityService,private _router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("token","");
    localStorage.setItem("User","");
  }

  public onSubmit(loginForm: { valid: any; }): void {
    if (loginForm.valid) {
      const userForAuth: UserForAuthenticationDto = {
              organization: this.organization,
              email: this.username,
              password: this.password
            }

            this._authService.loginUser('api/accounts/login', userForAuth)
              .subscribe(res => {
                if(res.isAuthSuccessful)
                {
                  localStorage.setItem("token", res.token);
                  localStorage.setItem("User",JSON.stringify(res.user));
                  this._router.navigateByUrl('/call');
                }
                else
                {
                  this.messageHelper.showMessage(res.statusCode, res.errorMessage);
                }
                
              })
            }
      // this.securityService.loginUser(userForAuth).subscribe((response) => {
      //   if (response.responseCode === ResponseStatus.success) {
      //     localStorage.setItem("Token",response.responseObj.token);
      //     localStorage.setItem("User",JSON.stringify(response.responseObj.user));
      //     this.router.navigateByUrl('/call');
      //   } else {
      //     this.messageHelper.showMessage(response.responseCode, response.message);
      //   }
      // });
    }
  }





// public loginForm: FormGroup;
//   public errorMessage: string = '';
//   public showError: boolean;
//   private _returnUrl: string;
//   public organization:string="Datavanced";
//   username;
//   password;
//   token;
//   constructor(private _authService: SecurityService, private _router: Router, private _route: ActivatedRoute,private fb:FormBuilder) { }
//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       organization : [this.organization],
//       username:["", [Validators.required]],
//       password: ["", [Validators.required]]
//     })
//     this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
//   }
//   public validateControl = (controlName: string) => {
//     return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
//   }
//   public hasError = (controlName: string, errorName: string) => {
//     return this.loginForm.controls[controlName].hasError(errorName)
//   }
//   public loginUser = (loginFormValue) => {
//     this.showError = false;
//     const login = {... loginFormValue };
//     const userForAuth: UserForAuthenticationDto = {
//       organization: login.organization,
//       email: login.username,
//       password: login.password
//     }
//     this._authService.loginUser('api/accounts/login', userForAuth)
//     .subscribe(res => {
//        localStorage.setItem("token", res.token);
//        this._router.navigateByUrl('/call');
//     },
//     (error) => {
//       this.errorMessage = error;
//       this.showError = true;
//     })
//   }

// }