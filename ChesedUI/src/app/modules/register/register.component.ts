import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageHelper } from 'src/app/common/message/messageHelper';
import { UserForRegistrationDto } from 'src/app/models/AuthModel/UserForRegistrationDto';
import { PasswordConfirmationValidatorService } from 'src/app/services/PasswordConfirmationValidatorService';
import { SecurityService } from 'src/app/services/securityService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirm:  ['', [Validators.required]],
  })

  public errorMessage: string = '';
  public showError: boolean | undefined;
  constructor(private _authService:SecurityService, private _passConfValidator: PasswordConfirmationValidatorService,
    private fb: FormBuilder,private _router: Router,private messageHelper: MessageHelper) { }

  ngOnInit(): void {
   
    this.registerForm.get('confirm').setValidators([Validators.required,
      this._passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }


  

  public validateControl = (controlName: string) => {
    return this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName)
  }
  public registerUser = (registerFormValue: any) => {
    this.showError = false;
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };
    this._authService.registerUser("api/accounts/registration", user)
    .subscribe(_res => {
      debugger;
      if(_res.statusCode = 201)
      {
        this._router.navigate(["/login"]);
      }
      else
      {
        this.messageHelper.showMessage(_res.statusCode,_res.errros[0]);
        this._router.navigate(["/registration"]);
      }
      

      
    })
  }

}


