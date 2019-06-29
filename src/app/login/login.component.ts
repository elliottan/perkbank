import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.alertMessage = "Welcome to PerkBank online banking!";
  }

  login(username, password) {
    console.log(username);
    console.log(password);
  }

  navigateToLoginSelection() {
    this.router.navigate(["/login-select"]);
  }

  navigateToRegister() {
    this.alertMessage = "The registration page will be launched soon :)"
  }

  navigateToForgotPassword() {
   this.alertMessage = "The \"forget password\" feature will be launched soon :)"
  }
}
