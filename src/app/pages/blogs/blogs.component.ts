import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  blogs: any;
  constructor(private api: BlogsService) {
    this.api.getBlogs();
  }

  ngOnInit() {
    this.blogs = this.api.blogs();
  }
}
