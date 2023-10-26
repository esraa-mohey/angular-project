import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient) { }


  getAllCategories(): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'categories')
  }

  getCategoriesDetails(CategoriesId: string): Observable<any> {
    return this._HttpClient.get(Environment.baseURL + 'categories/' + CategoriesId)
  }
}

