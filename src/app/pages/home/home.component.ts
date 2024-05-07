import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
getProducts=inject(ApiService)
ngOnInit(){
this.getProducts.get('products').subscribe((data)=>console.log(data))
}
}
