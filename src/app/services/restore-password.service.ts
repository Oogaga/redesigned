import {Inject, Injectable} from '@angular/core';
import {BASE_URL_TOKEN} from "../token";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class RestorePasswordService {
  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string, private http: HttpClient) {
  }
  checkSecretCode(code: string): Observable<any> {
    const fullPath = `${this.baseUrl}/common/util/exists/restore_key`;
    return this.http.post(fullPath, code)
      .map(resp => resp)
      .catch((error: any) => Observable.throw(error));
  }
  sendPasswordToChange(pass: string, confPass: string, code: string) {
    const pwdDto = {
      secretKey: code,
      newPassword: pass,
      matchingPassword: confPass
    };
    const fullPath = `${this.baseUrl}/common/password/change_with_key`;
    return this.http.put(fullPath, pwdDto)
      .map(resp => resp)
      .catch((error: any) => Observable.throw(error));
  }
}
