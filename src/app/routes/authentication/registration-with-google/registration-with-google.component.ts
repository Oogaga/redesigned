import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-registration-with-google',
  templateUrl: './registration-with-google.component.html',
  styleUrls: ['./registration-with-google.component.css']
})
export class RegistrationWithGoogleComponent implements OnInit {

  // @ts-ignore
  start: number;
  // @ts-ignore
  end: number;
  // @ts-ignore
  token: string;

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit(): void {
    this.start = this.router.url.indexOf('access_token=') + 13;
    this.end = this.router.url.indexOf('&token_type');
    this.token = this.router.url.slice(this.start, this.end);
    this.service.sendGoogleToken(this.token).subscribe((result: any) => {
      const token = result.accessToken;
      if (token) {
        const role = result.user.role;
        this.service.saveToken(token);
        this.service.saveRole(role);
        this.router.navigate(['/home']);
      }
    });
  }

}
