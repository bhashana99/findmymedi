import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login() {
    window.location.assign(`${environment.backendBaseUrl}/oauth2/authorization/wso2`);
  }

  register() {
    window.location.assign(`${environment.backendBaseUrl}/auth/register`);
  }
}
