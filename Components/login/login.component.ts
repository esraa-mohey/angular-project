import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false
  errorMessage: string = ""

  constructor(private _AuthService: AuthService, private _Router: Router) {

    if (localStorage.getItem("userToken") != null) {
      _Router.navigate(['/home'])
    }
  }

  loginForm: FormGroup = new FormGroup({

    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),

  })


  login(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.errorMessage = ""
      this.isLoading = true
      this._AuthService.login(loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem("userToken", res.token)
          this._AuthService.isUserLoggedIn.next(true)
          if (res.message == 'success')
            this._Router.navigate(['home'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message
          this.isLoading = false
        }
      })
    } else {
      this.loginForm.markAllAsTouched()
    }
  }



}
