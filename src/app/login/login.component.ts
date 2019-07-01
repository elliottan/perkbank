import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertMessage: string;
  alertClass: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.alertMessage = "Welcome to PerkBank online banking!";
    this.alertClass = "alert-primary";

    if (sessionStorage.getItem("systemMessage")) {
      this.alertMessage = sessionStorage.getItem("systemMessage");
      this.alertClass = "alert-warning";
      sessionStorage.removeItem("systemMessage")
    }
  }

  login(username, password) {
    var users = JSON.parse(localStorage.getItem("users"));

    // Perform username and password checks
    if (!users[username]) {
      this.alertMessage = "Username does not exist"
      this.alertClass = "alert-danger";
      return
    }

    if (users[username]["password"] != password) {
      this.alertMessage = "Password is incorrect"
      this.alertClass = "alert-danger";
      return;
    }

    sessionStorage.setItem("login-auth", username);
    this.router.navigate(["/otp-check"]);
  }

  navigateToLoginSelection() {
  sessionStorage.setItem("systemMessage", "Login cancelled.");
    this.router.navigate(["/login-select"]);
  }

  navigateToRegister() {
    this.router.navigate(["/register"]);
  }

  navigateToForgotPassword() {
    this.alertMessage = "The \"forget password\" feature will be launched soon :)"
    this.alertClass = "alert-danger";
  }
}
