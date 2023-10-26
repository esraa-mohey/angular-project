import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading: boolean = false
  errorMessage: string = ""

  constructor(private _AuthService: AuthService, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      _Router.navigate(['/home'])
    }
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[A-Z][a-zA-Z0-9]+$/)]),

    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })


  register(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.errorMessage = ""
      this.isLoading = true
      this._AuthService.register(registerForm.value).subscribe({
        next: (res) => {
          if (res.message == 'success')
            this._Router.navigate(['login'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message
          this.isLoading = false
        }
      })
    } else {
      this.registerForm.markAllAsTouched()
    }
  }


  matching(password: string, rePassword: string): boolean {
    if (password == rePassword) {
      return true
    } else {
      return false
    }
  }



} 
