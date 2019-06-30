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
    // Ensure that username has not been taken

    this.alertMessage = "The \"forget password\" feature will be launched soon :)"
    this.alertClass = "alert-danger";

    // Ensure that password matches

    // TODO: validate all other fields (e.g. email address unique and valid format, etc)

    // Complete registration

    sessionStorage.setItem("systemMessage", "Registration successful, please login.");
    this.router.navigate(["/login"]);
  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "Registration cancelled.");
    this.router.navigate(["/login-select"]);
  }
}
