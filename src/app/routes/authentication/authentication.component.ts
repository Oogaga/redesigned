import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {GoogleOauth2Service} from '../../services/google-oauth2.service';
import {RegExpData} from '../../static/reqexp_data';
import {StaticData} from '../../static/static-data';
import {UsersLoginForm} from '../../models/users-loginform.model';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';



import {ConditionComponent} from './condition/condition.component';
// import {confirmPasswordValidator} from '../../validators/ConfirmPasswordValidator';
// import {SuccessfulDataRecoveryComponent} from '../pop-up/successful-data-recovery/successful-data-recovery.component';
// import {SuccessfulRegistrationPopupComponent} from '../pop-up/successful-registration-popup/successful-registration-popup.component';
import {UsersAuthData} from '../../models/users-authdata.model';
import {UsersDataOut} from '../../models/data-out.model';
import * as moment from 'moment';
import {CONTROL} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


  wrongPass: boolean;
  hide = true;
  isRestoredEmailInvalid: boolean;
  currentPage: number;
  emailAlreadyTaken: boolean;
  emailNotFound: boolean;
  inputClean: boolean;
  hasEmptyFields: boolean;
  maxDate: Date;
  minDate: Date;
  phoneAlreadyTaken: boolean;
  emailValidator: any;
  emailError: boolean;

  constructor(private service: UsersService,
              private router: Router,
              private googleService: GoogleOauth2Service) {
    this.emailValidator = RegExpData.EMAIL_VALIDATOR;
    this.currentPage = 1;
    this.emailAlreadyTaken = false;
    this.emailNotFound = false;
    this.wrongPass = false;
    this.inputClean = true;
    this.hasEmptyFields = false;
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - StaticData.MIN_AGE);
    this.minDate = StaticData.MIN_DATE;
    this.passwordControl.valueChanges.subscribe((data: Observable<any>) => {
      this.confirmPasswordControl.updateValueAndValidity();
    });
    this.phoneAlreadyTaken = false;
    this.isRestoredEmailInvalid = false;
    this.emailError = false;
  }

  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(RegExpData.MIN_LENGTH_PASSWORD),
    Validators.pattern(RegExpData.PASSWORD_VALIDATOR)
  ]);

  confirmPasswordControl = new FormControl(null, [
    Validators.required,
    // confirmPasswordValidator(this.passwordControl)___________________________________________________________________________________>>>>>>>>>>>>>>>>>
  ]);

  loginUser = new FormGroup({
    enteredEmail: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern(RegExpData.EMAIL_ENTERED_VALIDATOR)
    ]),
    enteredPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.PASSWORD_ENTERED_VALIDATOR),
    ])
  });




  ngOnInit(): void {
  }



  //__________________________________________________________________________________________________________>>>>>>>>>>>>>>>>>
  // -------------------log in-------------------------
  logIn() {
    this.wrongPass = false;
    const loginForm = new UsersLoginForm(
      this.loginUser.value.enteredEmail,
      this.loginUser.value.enteredPassword
    );
    this.loginByParams(loginForm);

  }

  loginByParams(loginForm : UsersLoginForm) {
    this.service.confirmDataUser(loginForm).subscribe((result: any) => {
      const token = result.accessToken;
      if (token) {
        const role = result.user.role;
        this.service.saveToken(token);
        this.service.saveRole(role);
        this.loginUser.reset();
        this.router.navigate(['/home']);
      } else {
        this.wrongPass = true;
      }
    }, (error) => {
      this.wrongPass = true;
    });
  }

  //__________________________________________________________________________________________________________>>>>>>>>>>>>>>>>>

  // -------------------registration form-------------------------

  googleAuthenticate() {
    this.googleService.signInGoogle();
  }


  // checkPassword(): ValidatorFn {
  //   return (
  //     control: AbstractControl
  //   ): ValidationErrors | null => {
  //     return this.wrongPass ? {invalid: true} : null;
  //   };
  // }

  // refreshEmailValidity() {
  //   this.emailAlreadyTaken = false;
  //   this.newUser.controls['email'].updateValueAndValidity();
  // }
  //
  // openDialogConditions(): void {
  //   const dialogRef = this.dialog.open(ConditionComponent, {
  //     disableClose: false,
  //     data: {}
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //   });
  // }
  //
  // openDialogSuccessRegistration(isGoodResult): void {
  //   const dialogRef = this.dialog.open(SuccessfulRegistrationPopupComponent, {
  //     disableClose: true,
  //     data: {
  //       isSuccess: isGoodResult
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.currentPage = 1;
  //   });
  // }
  //
  // // -------------------registration form end-------------------------
   //
  // restorePass() {
  //   this.isRestoredEmailInvalid = false;
  //   if (this.restorePassForm.invalid) {
  //     this.isRestoredEmailInvalid = true;
  //     return;
  //   }
  //
  //   this.service.restorePassword(this.restorePassForm.controls['emailForRestorePass'].value).subscribe((result) => {
  //     this.emailNotFound = false;
  //     this.openDialogSuccess();
  //   }, (error) => {
  //     if (error.status === 200) {
  //       this.emailNotFound = false;
  //       this.openDialogSuccess();
  //     } else {
  //       this.emailNotFound = true;
  //     }
  //   });
  // }
  //
  // openDialogSuccess(): void {
  //   const dialogRef = this.dialog.open(SuccessfulDataRecoveryComponent, {
  //     disableClose: true,
  //     data: {}
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.currentPage = 1;
  //     this.restorePassForm.reset();
  //
  //   });
  // }

};

