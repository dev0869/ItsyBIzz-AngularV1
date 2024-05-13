import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css',
})
export class BlogsDetailsComponent {
private __html: any;
  constructor(private params: ActivatedRoute, private api: HttpClient) {}
data:any;
  ngOnInit() {
    this.params.paramMap.subscribe((data) => {
      const params = data.get('name');
      this.api
        .get(`https://itsybizz.deepmart.shop/api/blogs/${params}`)
        .subscribe((data) => this.data=data);
    });
  }
}
