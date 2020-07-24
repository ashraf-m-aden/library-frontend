import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
matBadge = 0;
  constructor(
    private notifS: NotificationsService,
    private router: Router
  ) {
    notifS.getAllNotifs().subscribe(data => {
      this.matBadge = data.length;
    });
    if (this.router.url === '/') {
      console.log('it\'s map');
    } else {
      console.log(this.router.url);

    }
  }

  ngOnInit(): void {
  }

}
