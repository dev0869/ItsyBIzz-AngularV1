import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private api: HttpClient) {}
  BASE_URL: string = 'https://itsybizz.deepmart.shop/api/';
  get(url:string):Observable<any> {
    return this.api.get(`${this.BASE_URL}${url}`);
  }
}
