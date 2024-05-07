import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent,RouterLink,NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
