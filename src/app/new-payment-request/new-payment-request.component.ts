import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  

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
      case 1: // Canada
        console.log("display fields for canada: need to include beneficiary bank address");
        document.getElementById("bankAddressRow").hidden = false;
        break;
      case 2: // US
      case 3: // UK
      case 4: // Germany
      case 5: // Japan
      case 6: // China
      case 7: // Korea
      case 8: // Russia
      case 9: // India
      case 10: // Australia
        console.log("hide bank address")
        document.getElementById("bankAddressRow").hidden = true;
        break;
      default:
        break;
    }
  }

  submit(country, accountname, accountno, currency, amount, valuedate, charges,
    beneficiaryname, beneficiaryaccountno, beneficiarybankcode, beneficiarybankname,
    intermediarybankcode, intermediarybankname, paymentdetails) {
      // Charges:
      // 1: Costs borne by beneficiary
      // 2: Costs borne by payer
      // 3: Shared costs

      // Store payment request details
      var paymentRequest = { "country": country, "accountname": accountname, "accountno": accountno,
        "currency": currency, "amount": amount, "valuedate": valuedate, "charges": charges,
        "beneficiaryname": beneficiaryname, "beneficiaryaccountno": beneficiaryaccountno,
        "beneficiarybankcode": beneficiarybankcode, "beneficiarybankname": beneficiarybankname,
        "intermediarybankcode": intermediarybankcode, "intermediarybankname": intermediarybankname,
        "paymentdetails": paymentdetails }

      if (localStorage.getItem("paymentrequests")) {
        let username = sessionStorage.getItem("login-otp-auth");
        JSON.parse(localStorage.getItem("paymentrequests"))[username] = JSON.stringify(paymentRequest);
      } else {
        localStorage.setItem("paymentrequests", JSON.stringify({ username: JSON.stringify(paymentRequest) }));
      }

      sessionStorage.setItem("systemMessage", "Payment request submitted.");
      this.router.navigate(["/dashboard"]);
  }

  saveDraft(country, accountname, accountno, currency, amount, valuedate, charges,
    beneficiaryname, beneficiaryaccountno, beneficiarybankcode, beneficiarybankname,
    intermediarybankcode, intermediarybankname, paymentdetails) {
      // TOOD: Save draft payment request
      this.router.navigate(["/draft-payment-request"]);
  }
}
