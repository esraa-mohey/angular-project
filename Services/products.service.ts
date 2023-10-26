import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'products')
  }



  getProductDetails(productId: string): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'products/' + productId)
  }
}
