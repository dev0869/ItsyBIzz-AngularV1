import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-businesscard',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './businesscard.component.html',
  styleUrl: './businesscard.component.css',
})
export class BusinesscardComponent {
  router = inject(Router);
  showMobile: boolean = false;
  @Input() data: any;
  handleseen() {
    if (this.data.user) {
      this.showMobile = true;
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
