import { AuthService } from './services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Library';
  constructor(private router: Router,
    private auth: AuthService) {
    //
    auth.Authenticated();
  }
}
