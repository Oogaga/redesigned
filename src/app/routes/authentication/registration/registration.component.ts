import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {RegExpData} from "../../../static/reqexp_data";
import {UsersService} from "../../../services/users.service";
import {UsersAuthData} from "../../../models/users-authdata.model";
import {UsersDataOut} from "../../../models/data-out.model";
import * as moment from "moment";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide :boolean;
  hide2 :boolean;
  emailAlreadyTaken: boolean;
  private isLoaderShown: boolean;
  private hasEmptyFields: boolean;

  constructor(private service: UsersService) {
    this.emailAlreadyTaken = false;
    this.hide = true;
    this.hide2 = true;
    this.isLoaderShown = false;
    this.hasEmptyFields = false;

  }

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(RegExpData.MIN_LENGTH_PASSWORD),
    Validators.pattern(RegExpData.PASSWORD_VALIDATOR)
  ]);
  confirmPasswordControl = new FormControl('', [
    Validators.required,
    this.confirmPasswordValidator(this.passwordControl)
  ]);

  newUser = new FormGroup({
    enteredName: new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.NAME_VALIDATOR)
    ]),
    enteredSurname: new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.SURNAME_VALIDATOR)
    ]),
    email: new FormControl(null, [
      Validators.required,
      this.isEmailUnique(),
      Validators.pattern(RegExpData.EMAIL_VALIDATOR)]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.PHONE_VALIDATOR_1),
      Validators.pattern(RegExpData.PHONE_VALIDATOR_2)
    ]),
    birthday: new FormControl(null),
    agree: new FormControl(false, Validators.requiredTrue),
    password: this.passwordControl,
    confirmPassword: this.confirmPasswordControl
  });

  checkEmail() {
    if (this.newUser.controls['email'].invalid) {
      return;
    }
    const email = this.newUser.value.email;
    this.service.checkEmailUser(email).subscribe((data:string) => {
        this.emailAlreadyTaken = !data;
        this.newUser.controls['email'].updateValueAndValidity();
      }
    );
  }

  confirmPasswordValidator(originalPasswordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const confirm = control.value === originalPasswordControl.value;
      return confirm ? null : {doesntMatch: {value: control.value}};
    };
  }

  registrationUser() {
    this.hasEmptyFields = false;
    if(this.newUser.errors) {
      this.hasEmptyFields = true;
    }
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

    this.service.postDataUser(user).subscribe((data: UsersAuthData) => {
      this.isLoaderShown = false;
      this.newUser.reset();
    }, (error) => {
      this.isLoaderShown = false;
    });
  }

  isEmailUnique(): ValidatorFn {
    return (
      control: AbstractControl
    ): ValidationErrors | null => {
      return this.emailAlreadyTaken ? {invalid: true} : null;
    };
  }

  ngOnInit(): void {
  }

}
