import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-web-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.css'
})
export class WebLayoutComponent {

}
