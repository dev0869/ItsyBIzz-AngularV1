import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ProductDetailService } from '../../services/product-detail.service';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css',
})
export class ProductpageComponent implements OnInit {
  getProducts = inject(ApiService);

  poke: ActivatedRoute = inject(ActivatedRoute);
  detailService: ProductDetailService = inject(ProductDetailService);
  detailaProduct$!: Observable<any>;
  data: any;

  ngOnInit() {
    this.poke?.paramMap.subscribe((params) => {
      this.data = params.get('name');
    });
    this.detailaProduct$ = this.getProducts.get(`products/get/${this.data}`);
    this.detailaProduct$.subscribe((data)=>console.log(data));
  }
}