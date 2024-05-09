import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  get(arg0: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  apiService = inject(ApiService);

  getProductDetails(url: string): Observable<any> {
    return this.apiService.get(url);
  }
}
