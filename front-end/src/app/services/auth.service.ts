import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login() {
    window.location.href =
      `${environment.backendBaseUrl}/oauth2/authorization/wso2`;
  }
  
}
