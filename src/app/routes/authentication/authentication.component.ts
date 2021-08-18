import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  ngOnInit(): void {
  }
  // @ts-ignore
  hasError: boolean;
  email: string;


  constructor() {
    this.email = '';
  }

  loginForm: any = {
    email: '',
    password: '',
  }

}
