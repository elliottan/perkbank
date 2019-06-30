import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-check',
  templateUrl: './otp-check.component.html',
  styleUrls: ['./otp-check.component.css']
})
export class OtpCheckComponent implements OnInit {
  alertMessage: string;
  alertClass: string;
  mobileNumberLastFourDigits: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.mobileNumberLastFourDigits = 9047;

    this.alertMessage = "For enchanced security, please enter the OTP code sent to your mobile number: xxxx" + this.mobileNumberLastFourDigits.toString();
    this.alertClass = "alert-primary";
  }

  navigateToLogin() {
    sessionStorage.setItem("systemMessage", "Login cancelled.");
    this.router.navigate(["/login-select"]);
  }

  resendOtp() {
    // TODO: re-send OTP to phone

    this.alertMessage = "A new OTP code has been sent to your mobile number: xxxx" + this.mobileNumberLastFourDigits.toString();
    this.alertClass = "alert-warning";
  }

  verifyOtp(otpCode) {
    // TODO: verfication of OTP

    this.router.navigate(["/dashboard"]);
  }
}
