import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent,ButtonModule,CommonModule,LucideAngularModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productList: any;
  productsMeta:any;
  
  constructor(private products: ProductService) {
    this.products.getProducts();
    this.products.getProductsMetaData()
  }
  ngOnInit() {
    this.productList = this.products.products();
    this.productsMeta=this.products.productsMeta();

    console.log(this.productList,this.productsMeta);
  }
}

//   constructor(private profileService: ProfileService) {
//     this.userProfile = this.profileService.fetchProfile();
//   }
//   ngOnInit() {
//     this.userProfile = this.profileService.userProfileSignal();
//     // this.profileService.fetchProfile();
//     console.log(this.userProfile);
//   }
// }

// export class HomeComponent implements OnInit {
//   getProducts = inject(ApiService);
//   products$!: Observable<any>;
//   ngOnInit() {
//     this.products$ = this.getProducts.get('products').pipe(
//       map((data: any[]) => data.slice(0, 3).reverse()),
//     )
// this.products$.subscribe((data)=>console.log(data));
//   }
// }
