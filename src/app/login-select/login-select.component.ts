import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-select',
  templateUrl: './login-select.component.html',
  styleUrls: ['./login-select.component.css']
})
export class LoginSelectComponent implements OnInit {
  alertMessage: string;
  alertClass: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("systemMessage")) {
      this.alertMessage = sessionStorage.getItem("systemMessage");
      this.alertClass = "alert-warning";
    }

    sessionStorage.clear(); // Clear login
  }

  navigateToClientLogin() {
    this.router.navigate(["/login"]);
  }

  navigateToEmployeeLogin() {
    this.router.navigate(["/login"]);
  }
}
