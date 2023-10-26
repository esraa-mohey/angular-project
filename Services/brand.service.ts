import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _HttpClient: HttpClient) { }


  getAllBrand(): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'brands')
  }

  getBrandDetails(BrandId: string): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'brands/' + BrandId)
  }
}
