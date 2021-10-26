import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.css']
})
export class IAmComponent implements OnInit {

  firstName: string
  lastName: string
  email: string
  phone: string
  remainingPrimeTime: any
  startPrimeDate: string
  endPrimeDate: string
  prime: boolean
  birthday: string


  //___________________________________________________ не используется, но ЕСТЬ :)
  isOwner: any
  firmwareStatus: any
  id: any
  deviceDtos: any
  locale: any
  role: any
  socialDataDtos: any
  isOnline: any
  lastOnline: any
  permissions: any
  socialProvider: any
  newMsgCount: any
  profileData: any

  firstNameForm = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]{2,25}$')]);
  lastNameForm = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]{3,35}$')]);
  phoneForm = new FormControl('', [Validators.required, Validators.pattern('^[0-9()+-]{10,20}$')])

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.pattern('^[A-Za-z0-9 !?@#$%^&_+*=\\-.,:;~(){}\\[\\]«»]{5,18}$')
  ]);
  confirmPasswordControl = new FormControl('', this.confirmPasswordValidator(this.passwordControl));

  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: this.passwordControl,
    confirmPassword: this.confirmPasswordControl,
  });

  constructor(private im: UsersService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.startPrimeDate = '';
    this.endPrimeDate = '';
    this.prime = false;
    this.birthday = '';

    this.passwordControl.valueChanges.subscribe(data => {
      this.confirmPasswordControl.updateValueAndValidity();
    });

  }

  ngOnInit() {
    this.profileData = JSON.parse(sessionStorage.getItem('im')!)
    this.firstName = this.profileData.firstName;
    this.lastName = this.profileData.lastName;
    this.email = this.profileData.email;
    this.phone = this.profileData.phone;
    this.startPrimeDate = this.profileData.startPrimeDate;
    this.endPrimeDate = this.profileData.endPrimeDate;
    this.prime = this.profileData.prime;
    this.birthday = this.profileData.birthday;

    this.firstNameForm.setValue(this.firstName);
    this.phoneForm.setValue(this.phone)
    this.lastNameForm.setValue(this.lastName)
  }

  changeMyInfo() {
    this.profileData.firstName = this.firstNameForm.value
    this.profileData.lastName = this.lastNameForm.value
    this.profileData.phone = this.phoneForm.value


    this.im.updateMyInfo(this.profileData).subscribe(() => {
    }, error => {
      console.log(error)
    });
  }

  sendNewPassword() {
      this.changePasswordForm.updateValueAndValidity();
      if (!this.changePasswordForm.valid) {
        return;
      }
      const DataToSend = {
        oldPassword: '',
        newPassword: '',
        matchingPassword: ''
      };
      DataToSend.oldPassword = this.changePasswordForm.value['oldPassword'];
      DataToSend.newPassword = this.changePasswordForm.value['password'];
      DataToSend.matchingPassword = this.changePasswordForm.value['confirmPassword'];
      this.im.updateMyPassword(DataToSend).subscribe(() => {

      }, error2 =>{console.log(error2)} );
      this.changePasswordForm.reset();

  }

  confirmPasswordValidator(originalPasswordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const confirm = control.value === originalPasswordControl.value;
      return confirm ? {doesntMatch: false} : {doesntMatch: {value: control.value}};
    };
  }

}
