import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {GoogleOauth2Service} from '../../services/google-oauth2.service';
import {RegExpData} from '../../static/reqexp_data';
import {StaticData} from '../../static/static-data';
import {UsersLoginForm} from '../../models/users-loginform.model';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {Platform} from "@angular/cdk/platform";


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
  emailNotFound: boolean;
  inputClean: boolean;
  hasEmptyFields: boolean;
  maxDate: Date;
  minDate: Date;
  phoneAlreadyTaken: boolean;
  emailValidator: any;
  emailError: boolean;
  isSafari: boolean
  savedEmail: string;
  savedPassword: string;

  constructor(private service: UsersService,
              private router: Router,
              private platform: Platform,
              private googleService: GoogleOauth2Service) {
    this.isSafari = platform.SAFARI;
    this.emailValidator = RegExpData.EMAIL_VALIDATOR;
    this.currentPage = 1;
    this.emailNotFound = false;
    this.wrongPass = false;
    this.inputClean = true;
    this.hasEmptyFields = false;
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - StaticData.MIN_AGE);
    this.minDate = StaticData.MIN_DATE;
    this.phoneAlreadyTaken = false;
    this.isRestoredEmailInvalid = false;
    this.emailError = false;
    this.savedEmail = '';
    this.savedPassword = '';
  }


  loginUser = new FormGroup({
    enteredEmail: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    enteredPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.PASSWORD_ENTERED_VALIDATOR),
    ])
  });

  ngOnInit() {
    if (localStorage.getItem('login')) {
      this.loginUser.setValue({
        enteredEmail: JSON.parse(<string>localStorage.getItem('login')).email,
        enteredPassword: JSON.parse(<string>localStorage.getItem('login')).password
      })
    }
  }

  // -------------------log in-------------------------
  logIn() {
    this.wrongPass = false;
    const loginForm = new UsersLoginForm(
      this.loginUser.value.enteredEmail,
      this.loginUser.value.enteredPassword
    );
    localStorage.setItem('login', JSON.stringify(loginForm))
    this.loginByParams(loginForm);

  }

  loginByParams(loginForm: UsersLoginForm) {
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
      setTimeout(() => {
        this.wrongPass = false
        this.loginUser.updateValueAndValidity()
      }, 2000)
    });
  }


  // -------------------registration form-------------------------

  googleAuthenticate() {
    this.googleAuthenticate()
  }
};

