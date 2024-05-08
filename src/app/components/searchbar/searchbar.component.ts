import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule ,RouterLink],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  router:Router=new Router()
  searchValue: string = '';

  handleSubmit(){
    this.searchValue=''
    console.log(this.searchValue);
 
    // this.router.navigate(['store'], { queryParams: { search: this.searchValue.trim() } });
  }
}
