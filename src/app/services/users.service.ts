import {Inject, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL_TOKEN } from '../token';

import { StaticData } from '../static/static-data';
import { UsersLoginForm } from '../models/users-loginform.model';
import { UsersAuthData } from '../models/users-authdata.model';
import { UsersDataOut } from '../models/dataOut/data-out.model';



import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
  displayingUsers = new Subject<any>();
  arrayOfCountries = new Subject<any>();

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.getMyProfileInfo();
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

  getMyProfileInfo() {
    this.getInfoMyProfile().subscribe(data => {
      sessionStorage.setItem('im', JSON.stringify(data));
    });
  }

  updateMyInfo(dataToSend : any) {
    const url = `${this.baseUrl}/iam`;
    return this.http.put(url, dataToSend);
  }

  updateMyPassword(newPass: { matchingPassword: string; oldPassword: string; newPassword: string }) {
    const url = `${this.baseUrl}/password/change`;
    return this.http.put(url, newPass);
  }

  postDataUser(user: UsersAuthData) : Observable<UsersAuthData> {
    const url = `${this.baseUrl}/common/register/user`;
    return this.http.post<UsersAuthData>(url, user);
  }

  confirmDataUser(loginForm: UsersLoginForm): Observable<UsersLoginForm> {
    const url = `${this.baseUrl}/common/signin`;
    return this.http.post<UsersLoginForm>(url, loginForm);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/entrance']);
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

  checkEmailUser(email: string) {
    const params = email;
    const url = `${this.baseUrl}/common/util/unique/em`;
    return this.http.post<string>(url, params);
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
