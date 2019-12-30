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
    { path: '/livres/0', title: 'Livres', icon: 'menu_book', class: '' },
    { path: '/clients', title: 'Mes clients', icon: 'person', class: '' },
    { path: '/finances', title: 'Finance', icon: 'content_paste', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  ];
}
