import { Component } from '@angular/core';
import { LucideAngularModule, File, Home, Menu, UserCheck } from 'lucide-angular';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [    LucideAngularModule.pick({File, Home, Menu, UserCheck})
  ],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})

export class BottomNavbarComponent {
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Store",
      path: "/store",
      icon: <StoreIcon />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <Briefcase />,
    },
    {
      name: "Blog",
      path: "/blogs",
      icon: <FaBlog />,
    },
    {
      name: "Profile",
      path: "/user/profile",
      icon: <User2Icon />,
    },
  ];
}
