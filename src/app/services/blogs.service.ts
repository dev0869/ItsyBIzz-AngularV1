import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  BASE_URL: string = 'https://itsybizz.deepmart.shop/api/';
  blogs = signal<any | null>(null);
  constructor(private http: HttpClient) {}

  getBlogs() {
    this.http
      .get('https://itsybizz.deepmart.shop/api/blogs')
      .subscribe((data) => this.blogs.set(data));
  }
}
