import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL_TOKEN } from '../token';
import {environment} from "../../environments/environment.prod-https";

import { StaticData } from '../static/static-data';
import { UsersLoginForm } from '../models/users-loginform.model';
import { UsersAuthData } from '../models/users-authdata.model';
import { UsersDataOut } from '../models/data-out.model';



import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  displayingUsers = new Subject<any>();
  arrayOfCountries = new Subject<any>();
  baseUrl = environment.baseUrl;

  constructor(@Inject(BASE_URL_TOKEN) private http: HttpClient, private router: Router) {
  }

  getUsers() {
    const url = `${this.baseUrl}/owned`;
    // @ts-ignore
    this.http.get(url).subscribe((user: UsersDataOut[]) => this.displayingUsers.next(user));
  }

  getInfoMyProfile(): Observable<any> {
    const url = `${this.baseUrl}/iam`;
    return this.http.get<any>(url);
  }

  updateMyInfo(dataToSend : any) {
    const url = `${this.baseUrl}/iam`;
    return this.http.put(url, dataToSend);
  }

  updateMyPassword(newPass: string) {
    const url = `${this.baseUrl}/password/change`;
    return this.http.put(url, newPass);
  }

  postDataUser(user: UsersAuthData) {
    const url = `${this.baseUrl}/common/register/user`;
    return this.http.post(url, user);
  }

  confirmDataUser(loginForm: UsersLoginForm): Observable<object> {
    const url = `${this.baseUrl}/common/signin`;
    return this.http.post(url, loginForm);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  saveRole(role: string) {
    localStorage.setItem('role', role);
  }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }

  getRole(): string {
    return <string>localStorage.getItem('role');
  }

  restorePassword(email: string) {
    const params = email;
    const url = `${this.baseUrl}/common/restore_pass`;
    return this.http.post(url, params);
  }

  checkEmailforOwned(email: string) {
    const params = encodeURIComponent(email);
    const url = `${this.baseUrl}/owned/check?email=${params}`;
    return this.http.get(url);
  }

  sendGoogleToken(token: string) {
    const dto = {
      token: token,
      type: StaticData.Social[3]
    };
    const url = `${this.baseUrl}/common/social`;
    return this.http.post(url, dto);
  }
}
