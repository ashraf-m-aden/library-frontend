import { AuthService } from './../services/auth.service';
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
isAuth = false;
  constructor(
    private notifS: NotificationsService,
    private router: Router,
    public auth: AuthService
  ) {

    auth.isAuth.subscribe((auth: any)=>{
      this.isAuth = auth;
    });
   }

  logout(): void {
    this.auth.logout();
  }

  ngOnInit(): void {
  }

}
