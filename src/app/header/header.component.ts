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
    private notifS: NotificationsService
  ) {
    notifS.getAllNotifs().subscribe(data => {
      this.matBadge = data.length;
    });
  }

  ngOnInit(): void {
  }

}
