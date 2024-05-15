import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { RouterLink } from '@angular/router';
import { ServiceData } from '../../constants';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../services/product.service';
import { LucideAngularModule } from 'lucide-angular';
import { BusinessService } from '../../services/business.service';
import { BusinesscardComponent } from '../../components/businesscard/businesscard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchbarComponent,
    CommonModule,
    ButtonModule,
    LucideAngularModule,
    BusinesscardComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
// hiii
export class HomeComponent {
  productList: any;
  productsMeta: any;
  busnessList: any;
 data=ServiceData;

  constructor(
    private products: ProductService,
    private business: BusinessService
  ) {
    this.products.getProducts();
    this.products.getProductsMetaData();
    this.business.getBusiness();
  }
  ngOnInit() {
    this.productList = this.products.products();
    this.productsMeta = this.products.productsMeta();
    this.busnessList = this.business.buninessList();
    console.log(this.busnessList);
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
