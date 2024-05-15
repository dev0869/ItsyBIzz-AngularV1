import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private api: HttpClient) {}
  get(url:string):Observable<any> {
    return this.api.get(`${BASE_URL}${url}`);
  }
}
