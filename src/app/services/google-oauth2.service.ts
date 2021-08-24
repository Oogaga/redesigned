import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleOauth2Service {

  oauth2Endpoint: string;

  constructor(private http: HttpClient) {
    this.oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  }

  signInGoogle() {
    const requestParams = {
      // 'client_id': '196102785185-0lujurc7polnit9q0oj8mdglmoc1r0u6.apps.googleusercontent.com',  dev key
      // 'client_id': '627016178550-r7m5td14phpjumcgg3f66jpibi7sof9b.apps.googleusercontent.com', // customers key
      // 'redirect_uri': 'http://bioprom-test.zaiets.work/registrationWithGoogle',
      'client_id': `${environment.client_id}`,
      'redirect_uri': `${environment.deploymentUrl}/registrationWithGoogle`,
      'response_type': 'token',
      'scope': 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login',
      'include_granted_scopes': 'true',
      'state': 'pass-through value'
    };

    let googleUrl = `${this.oauth2Endpoint}?`;
    for (const i in requestParams) {
      // @ts-ignore
      googleUrl += `${i}=${requestParams[i]}&`;
    }

    window.open(googleUrl, '_self');
  }
}
