import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym';
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/clients', title: 'Mes clients', icon: 'person', class: '' },
    { path: '/finances', title: 'Finance', icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
  ];
}
