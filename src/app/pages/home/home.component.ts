import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { RouterLink } from '@angular/router';
import { Observable, map, toArray } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  getProducts = inject(ApiService);
  products$!: Observable<any>;
  ngOnInit() {
    this.products$ = this.getProducts.get('products').pipe(
      map((data: any[]) => data.slice(0, 3).reverse()), 
    )
this.products$.subscribe((data)=>console.log(data));
  }
}
