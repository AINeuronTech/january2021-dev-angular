import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'https://fakestoreapi.com/products';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productsUrl);
  }

  getProductById(productid: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.productsUrl}/${productid}`);
  }
}
