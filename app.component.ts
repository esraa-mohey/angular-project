import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private _AuthService: AuthService) {
    if (localStorage.getItem("userToken") != null) {
      this._AuthService.isUserLoggedIn.next(true)
    }
  }
}
