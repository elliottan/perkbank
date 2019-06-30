import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertMessage: string;
  alertClass: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.alertMessage = "Welcome to PerkBank online banking!";
    this.alertClass = "alert-primary";
  }

  login(username, password) {
    // console.log(username);
    // console.log(password);

    // TODO: perform username and password checks

    sessionStorage.setItem("login-auth", "true")
    this.router.navigate(["/otp-check"]);
  }

  navigateToLoginSelection() {
    this.router.navigate(["/login-select"]);
  }

  navigateToRegister() {
    this.alertMessage = "The registration page will be launched soon :)"
    this.alertClass = "alert-danger";
  }

  navigateToForgotPassword() {
    this.alertMessage = "The \"forget password\" feature will be launched soon :)"
    this.alertClass = "alert-danger";
  }
}
