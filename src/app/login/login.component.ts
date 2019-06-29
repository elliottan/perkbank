import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    console.log(username)
    console.log(password)
  }

  navigateToLoginSelection() {
    this.router.navigate(["/login-select"]);
  }

  navigateToRegister() {
    /*app.controller("demoController", function($scope, $window) {
      $scope.save = function() {
           window.alert("hi!");
      };
    });
    Window.alert("The register page will be created in the future.")*/
  }

  navigateToForgotPassword() {
    //Window.alert("The forget password page will be created in the future.")
  }
}
