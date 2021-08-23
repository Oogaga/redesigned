import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import {ConditionsComponent} from './conditions/conditions.component';

import {confirmPasswordValidator} from '../../validators/ConfirmPasswordValidator';

import {GoogleOauth2Service} from '../../services/google-oauth2.service';
import {RegExpData} from '../../utils/reqexp_data';
import {StaticData} from '../../static/static-data';

import {SuccessfulDataRecoveryComponent} from '../pop-up/successful-data-recovery/successful-data-recovery.component';
import {SuccessfulRegistrationPopupComponent} from '../pop-up/successful-registration-popup/successful-registration-popup.component';

import {UsersAuthData} from '../../models/users-authdata.model';

import {UsersDataOut} from '../../models/dataOut/dataOut.model';
import {UsersLoginForm} from '../../models/users-loginform.model';
import {UsersService} from '../../services/users.service';

import * as moment from 'moment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isRestoredEmailInvalid: boolean;
  arrayOfLanguages: StaticdataLanguages[];
  currentPage: number;
  hasError: boolean;
  email: string;
  emailAlreadyTaken: boolean;
  emailNotFound: boolean;
  inputClean: boolean;
  isLoaderShown: boolean;
  hasEmptyFields: boolean;
  locale: string;
  maxDate: Date;
  minDate: Date;
  name: string;
  phoneAlreadyTaken: boolean;
  biopromUrl: string;
  emailValidator: any;

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(RegExpData.MIN_LENGTH_PASSWORD),
    Validators.pattern(RegExpData.PASSWORD_VALIDATOR)
  ]);
  confirmPasswordControl = new FormControl('', [
    Validators.required,
    confirmPasswordValidator(this.passwordControl)
  ]);

  newUser = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.NAME_VALIDATOR)
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.SURNAME_VALIDATOR)
    ]),
    email: new FormControl('', [
      Validators.required, this.isEmailUnique(),
      Validators.pattern(RegExpData.EMAIL_VALIDATOR)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.PHONE_VALIDATOR_1),
      Validators.pattern(RegExpData.PHONE_VALIDATOR_2)
    ]),
    birthday: new FormControl(''),
    agree: new FormControl(false, Validators.requiredTrue),
    password: this.passwordControl,
    confirmPassword: this.confirmPasswordControl
  });

  restorePassForm = new FormGroup({
    emailForRestorePass: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.EMAIL_VALIDATOR)
    ])
  });

  loginUser = new FormGroup({
    enteredEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.EMAIL_ENTERED_VALIDATOR)
    ]),
    enteredPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExpData.PASSWORD_ENTERED_VALIDATOR)
    ])
  });


  constructor(private service: UsersService,
              private router: Router,
              private googleService: GoogleOauth2Service) {
    this.emailValidator = RegExpData.EMAIL_VALIDATOR;
    this.biopromUrl = StaticData.BIOPROM_LINK;
    this.arrayOfLanguages = StaticData.Languages;
    this.currentPage = 1;
    this.emailAlreadyTaken = false;
    this.emailNotFound = false;
    this.hasError = false;
    this.inputClean = true;
    this.hasEmptyFields = false;
    this.locale = Language.getLang();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - StaticData.MIN_AGE);
    this.minDate = StaticData.MIN_DATE;
    this.passwordControl.valueChanges.subscribe((data: Observable<any>) => {
      this.confirmPasswordControl.updateValueAndValidity();
    });
    this.phoneAlreadyTaken = false;
  }

  getDateStringValidator(pattern: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      if (this.dateInput && this.dateInput.nativeElement.value.match(pattern)) {
        return null;
      }
      return {invalid: true};
    };
  }


  changeTabIndex(page) {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.hasError = false;
      this.emailAlreadyTaken = false;
      this.phoneAlreadyTaken = false;
      this.emailNotFound = false;
      this.hasEmptyFields = false;
      this.newUser.reset();
      this.loginUser.reset();
    }
  }

  // -------------------registration form-------------------------

  googleAuthenticate() {
    this.googleService.signInGoogle();
  }

  registrationUser() {
    this.hasEmptyFields = false;
    Object.keys(this.newUser.controls).forEach((key) => {
      const control = this.newUser.get(key);
      control.markAsTouched();
      control.markAsDirty();
      this.hasEmptyFields = !control.value || this.hasEmptyFields;
    });
    this.newUser.updateValueAndValidity();
    if (!this.newUser.valid) {
      return;
    }
    this.isLoaderShown = true;
    const birthdayString = moment(this.newUser.value.birthday).format(RegExpData.DATE_FORMAT);
    const user = new UsersAuthData(
      this.newUser.value.email,
      this.newUser.value.password,
      this.newUser.value.phone,
      this.newUser.value.name,
      this.newUser.value.surname,
      birthdayString);

    this.service.postDataUser(user).subscribe((data: UsersDataOut) => {
      this.isLoaderShown = false;
      this.newUser.reset();
      this.openDialogSuccessRegistration(true);
    }, (error) => {
      this.isLoaderShown = false;
    });
  }

  isEmailUnique(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return this.emailAlreadyTaken ? {invalid: true} : null;
    };
  }

  refreshEmailValidity() {
    this.emailAlreadyTaken = false;
    this.newUser.controls['email'].updateValueAndValidity();
  }

  checkEmail() {
    if (this.newUser.controls['email'].invalid) {
      return;
    }
    const email = this.newUser.value.email;
    this.service.checkEmailUser(email).subscribe((data: boolean) => {
        this.emailAlreadyTaken = !data;
        this.newUser.controls['email'].updateValueAndValidity();
      }
    );
  }

  openDialogConditions(): void {
    const dialogRef = this.dialog.open(ConditionsComponent, {
      disableClose: false,
      data: {}
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openDialogSuccessRegistration(isGoodResult): void {
    const dialogRef = this.dialog.open(SuccessfulRegistrationPopupComponent, {
      disableClose: true,
      data: {
        isSuccess: isGoodResult
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.currentPage = 1;
    });
  }

  // -------------------registration form end-------------------------
  // -------------------log in-------------------------
  logIn() {
    this.hasError = false;
    const loginForm = new UsersLoginForm(
      this.loginUser.value.enteredEmail,
      this.loginUser.value.enteredPassword
    );
    this.loginByParams(loginForm);
  }

  loginByParams(loginForm) {
    this.service.confirmDataUser(loginForm).subscribe((result: any) => {
      const token = result.accessToken;
      if (token) {
        const role = result.user.role;
        this.service.saveToken(token);
        this.service.saveRole(role);
        this.loginUser.reset();
        this.router.navigate(['/home/devices']);
      } else {
        this.hasError = true;
      }
    }, (error) => {
      this.hasError = true;
    });
  }

  // -------------------log in end-------------------------

  restorePass() {
    this.isRestoredEmailInvalid = false;
    if (this.restorePassForm.invalid) {
      this.isRestoredEmailInvalid = true;
      return;
    }

    this.service.restorePassword(this.restorePassForm.controls['emailForRestorePass'].value).subscribe((result) => {
      this.emailNotFound = false;
      this.openDialogSuccess();
    }, (error) => {
      if (error.status === 200) {
        this.emailNotFound = false;
        this.openDialogSuccess();
      } else {
        this.emailNotFound = true;
      }
    });
  }

  openDialogSuccess(): void {
    const dialogRef = this.dialog.open(SuccessfulDataRecoveryComponent, {
      disableClose: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.currentPage = 1;
      this.restorePassForm.reset();

    });
  }

}
