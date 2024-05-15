import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, of, retry } from 'rxjs';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = 'https://itsybizz.deepmart.shop/api/';

  products = signal<any | null>(null);
  productsMeta = signal<any | null>(null);

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<any>(BASE_URL + 'products').pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return of(1);
      })
    ).subscribe((data)=>{
      this.products.set(data)
    })
  }

  getProductsMetaData() {
    this.http.get<any>(this.BASE_URL + 'products/metadata').pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return of(1);
      })
    ).subscribe((data)=>{
      this.productsMeta.set(data)
    })
  }
}
