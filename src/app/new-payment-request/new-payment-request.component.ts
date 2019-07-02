import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

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
    var users = JSON.parse(localStorage.getItem("users"));
    this.name = users[sessionStorage.getItem("login-otp-auth")]["name"];
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

  changeCountry(countryValue) {
    switch (parseInt(countryValue)) {
      case 1: // Singapore
      console.log("display fields for sg");
        break;
      case 2: // US
      console.log("display fields for US");
        break;
      case 3: // UK
      console.log("display fields for UK");
        break;
      case 4: // Germany
      case 5: // Japan
      case 6: // China
      case 7: // Korea
      case 8: // Russia
      case 9: // India
      case 10: // Australia
        console.log("display fields for Aus");
        break;
      default:
        break;
    }
  }
}
