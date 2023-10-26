import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(private _HttpClient: HttpClient, private _Router: Router) {



  }

  register(registerData: any): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'auth/signup', registerData)
  }

  login(loginData: any): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'auth/signin', loginData)
  }


  forgetPass(forgetData: object): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'auth/forgotPasswords', forgetData)
  }
  verifyResetCode(code: object): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'auth/verifyResetCode', code)
  }
  updatePassWord(resetPassword:object): Observable<any> {
    return this._HttpClient.put(Environment.baseURL + 'auth/resetPassword',resetPassword)
  } //,newPassword



  logOut() {
    localStorage.removeItem("userToken")
    this.isUserLoggedIn.next(false)
    this._Router.navigate(['login'])
  }


}
