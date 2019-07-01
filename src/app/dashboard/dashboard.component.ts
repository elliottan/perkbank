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


    this.name = sessionStorage.getItem("login-otp-auth");
    this.draftCount = 0;
  }

  newPaymentRequest() {
    this.router.navigate(["/new-payment-request"]);
  }

  viewDrafts() {

  }

  viewExisting() {

  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "You have logged out.");
    this.router.navigate(["/login-select"]);
  }
}
