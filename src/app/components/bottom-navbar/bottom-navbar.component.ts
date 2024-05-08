import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css',
})
export class BottomNavbarComponent {
  menus = [
    {
      name: 'Home',
      path: '/',
      icon: <HomeIcon />,
    },
    {
      name: 'Store',
      path: '/store',
      icon: <StoreIcon />,
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Briefcase />,
    },
    {
      name: 'Blog',
      path: '/blogs',
      icon: <FaBlog />,
    },
    {
      name: 'Profile',
      path: '/user/profile',
      icon: <User2Icon />,
    },
  ];
}
