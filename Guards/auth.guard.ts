import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _Router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("userToken") != null) {
      try {
        var decoded = jwt_decode(localStorage.getItem("userToken") || "");
        return true;
      } catch (error) {
        localStorage.removeItem("userToken")
        this._Router.navigate(['/login'])
        return false;
      }
      
    } else {
      return false
    }
  }

}
