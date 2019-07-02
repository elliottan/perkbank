import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alertMessage: string;
  alertClass: string;
  name: string;
  draftCount: number;

  constructor(private router: Router) { }

  ngOnInit() {
    var users = JSON.parse(localStorage.getItem("users"));
    this.name = users[sessionStorage.getItem("login-otp-auth")]["name"];
    this.draftCount = 0;

    if (sessionStorage.getItem("systemMessage")) {
      this.alertMessage = sessionStorage.getItem("systemMessage");
      this.alertClass = "alert-warning";
      sessionStorage.removeItem("systemMessage")
    }
  }

  newPaymentRequest() {
    this.router.navigate(["/new-payment-request"]);
  }

  viewDrafts() {
    this.router.navigate(["/draft-payment-request"]); 
  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "You have logged out.");
    this.router.navigate(["/login-select"]);
  }
}
