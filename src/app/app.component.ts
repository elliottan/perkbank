import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perkbank';

  ngOnInit() {
    localStorage.setItem("users", JSON.stringify( { "admin": { "username": "admin", "password": "admin", "mobilenumber": "91234567", "emailaddress": "admin@perkbank.com" }} )
    );
  }
}