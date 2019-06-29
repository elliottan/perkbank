import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-select',
  templateUrl: './login-select.component.html',
  styleUrls: ['./login-select.component.css']
})
export class LoginSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToClientLogin() {
    this.router.navigate(["/login"]);
  }

  navigateToEmployeeLogin() {
    this.router.navigate(["/login"]);
  }
}
