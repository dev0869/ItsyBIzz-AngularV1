import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {

   userProfile: any;

  constructor(private profileService: ProfileService) {
    this.userProfile = this.profileService.fetchProfile();
  }
  ngOnInit() {
    this.userProfile = this.profileService.userProfileSignal();
    // this.profileService.fetchProfile();
    console.log(this.userProfile);
  }
}


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


