import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _HttpClient: HttpClient)
   {
    this.getwishlist().subscribe((res) => {
      console.log(res.numOfCartItems);

      this.numOfCartItems.next(res.numOfCartItems)

    })
   }
  addToWishlistCart(productId: string): Observable<any> {
    return this._HttpClient.post(Environment.baseURL + 'wishlist', {
      productId: productId
    })
  }


  getwishlist(): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'wishlist')
  }


  removewishlist(wishlistId: string): Observable<any> {
    return this._HttpClient.delete(Environment.baseURL + 'wishlist/' + wishlistId)
  }
}
