import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _HttpClient: HttpClient) {
    this.getUserCartProducts().subscribe((res) => {
      console.log(res.numOfCartItems);

      this.numOfCartItems.next(res.numOfCartItems)

    })
  }


  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'cart', {
      productId: productId
    })
  }


  getUserCartProducts(): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'cart')
  }


  removeCartProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(Environment.baseURL + 'cart/' + productId)
  }

  clearUserCart(): Observable<any> {
    return this._HttpClient.delete(Environment.baseURL + 'cart')
  }

  updateProductCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(Environment.baseURL + 'cart/' + productId, {
      count
    })
  }


}
