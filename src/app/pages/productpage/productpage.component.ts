import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ProductDetailService } from '../../services/product-detail.service';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [RouterLink, LucideAngularModule,CommonModule],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css',
})
export class ProductpageComponent implements OnInit {
  getProducts = inject(ApiService);

  params: ActivatedRoute = inject(ActivatedRoute);
  detailService: ProductDetailService = inject(ProductDetailService);
  data: any;

  handleCart(){}
  ngOnInit() {
    this.params?.paramMap.subscribe((params) => {
      const param=params.get('name');
      this.getProducts.get(`products/get/${param}`).subscribe((data)=>this.data=data);

    });
  
  }
}