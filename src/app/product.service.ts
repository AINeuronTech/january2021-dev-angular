import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private serviceUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.serviceUrl);
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`this.serviceUrl/${id}`);
  }
}

export interface IProduct {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
