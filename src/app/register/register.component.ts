import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alertMessage: string;
  alertClass: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(username, password, passwordconfirm, mobilenumber, emailaddress) {
    var users = JSON.parse(localStorage.getItem("users"));

    // Ensure that username has not been taken
    if (users[username]) {
      this.alertMessage = "Username already exists"
      this.alertClass = "alert-danger";
      return
    }

    // Ensure that password matches
    if (password != passwordconfirm) {
      this.alertMessage = "Passwords do not match"
      this.alertClass = "alert-danger";
      return;
    }

    // TODO: validate all other fields (e.g. email address unique and valid format, etc)

    // Complete registration
    users[username] = { "username": username, "password": password, "mobilenumber": mobilenumber, "emailaddress": emailaddress };
    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.setItem("systemMessage", "Registration successful, please login.");
    this.router.navigate(["/login"]);
  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "Registration cancelled.");
    this.router.navigate(["/login-select"]);
  }
}
