import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-payment-request',
  templateUrl: './new-payment-request.component.html',
  styleUrls: ['./new-payment-request.component.css']
})
export class NewPaymentRequestComponent implements OnInit {
  alertMessage: string;
  alertClass: string;
  name: string;
  draftCount: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = sessionStorage.getItem("login-otp-auth");
    this.draftCount = 0;
  }

  viewDrafts() {
    this.router.navigate(["/draft-payment-request"]); 
  }

  viewExisting() {
    this.router.navigate(["/dashboard"]); 
  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "You have logged out.");
    this.router.navigate(["/login-select"]);
  }
}
