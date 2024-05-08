import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WebLayoutComponent,LucideAngularModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itsyansgualr';
}
