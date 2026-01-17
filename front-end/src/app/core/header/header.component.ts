import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn = false;
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }

  register() {
    this.authService.register();
  }
}
