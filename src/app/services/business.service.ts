import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BASE_URL } from '../constants';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  buninessList = signal<any | null>(null);
  constructor(private http: HttpClient) {}

  getBusiness() {
    this.http
      .get(`${BASE_URL}business`)
      .pipe(
        retry(3),
        catchError((err) => {
          console.log(err);
          return of(1);
        })
      )
      .subscribe((data) => this.buninessList.set(data));
  }
}
