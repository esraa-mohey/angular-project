import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environment';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient: HttpClient) { }

  CreateCashOrder(cartId: string, shippingAddress: any): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + `orders/checkout-session/${cartId}?url=${environment.redirectURL}`, {
      shippingAddress
    }, {
      headers: {
        token: localStorage.getItem("userToken") || ""
      }
    })
  }
}
