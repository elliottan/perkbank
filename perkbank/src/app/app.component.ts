import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perkbank';

  login(username, password) {
  	console.log(username)
  	console.log(password)
  }
}