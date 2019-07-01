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
  mobileNumberLastFourDigits: string;
  triesLeft: number;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem("login-auth")) {
      sessionStorage.setItem("systemMessage", "Login session expired.");
      this.router.navigate(["/login-select"]);
    }

    this.triesLeft = 3;

    this.mobileNumberLastFourDigits = "????";
    var users = JSON.parse(localStorage.getItem("users"));
    if (users[sessionStorage.getItem("login-auth")]) {
      this.mobileNumberLastFourDigits = users[sessionStorage.getItem("login-auth")]["mobilenumber"].slice(-4)
    }

    this.alertMessage = "For enchanced security, please enter the OTP code sent to your mobile number: xxxx" + this.mobileNumberLastFourDigits;
    this.alertClass = "alert-primary";
  }

  navigateToLogin() {
    sessionStorage.setItem("systemMessage", "Login cancelled.");
    this.router.navigate(["/login-select"]);
  }

  resendOtp() {
    // Re-send OTP to phone
    this.alertMessage = "A new OTP code has been sent to your mobile number: xxxx" + this.mobileNumberLastFourDigits;
    this.alertClass = "alert-warning";
  }

  verifyOtp(otpCode) {
    // Verfication of OTP
    if (otpCode != "1234") {
      this.triesLeft--;
      if (this.triesLeft == 0) {
        this.navigateToLogin();
      }

      this.alertMessage = "OTP is invalid. Tries left: " + this.triesLeft;
      this.alertClass = "alert-danger";
      return
    }

    sessionStorage.setItem("login-otp-auth", sessionStorage.getItem("login-auth"));
    this.router.navigate(["/dashboard"]);
  }
}
