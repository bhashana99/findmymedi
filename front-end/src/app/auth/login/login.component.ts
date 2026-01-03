import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login() {
    window.location.href = `${environment.backendBaseUrl}/oauth2/authorization/wso2`;
  }
}
