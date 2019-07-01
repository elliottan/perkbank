import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-payment-request',
  templateUrl: './draft-payment-request.component.html',
  styleUrls: ['./draft-payment-request.component.css']
})
export class DraftPaymentRequestComponent implements OnInit {
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

  viewExisting() {
    this.router.navigate(["/dashboard"]); 
  }

  navigateToLoginSelection() {
    sessionStorage.setItem("systemMessage", "You have logged out.");
    this.router.navigate(["/login-select"]);
  }
}
