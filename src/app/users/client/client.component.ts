import { AuthService } from './../../services/auth.service';
import { BooksService } from 'src/app/services/books.service';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  ID: number;
  DD: number;
  DR: string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  message = false;
  id; // idUser
  User; // user Data

  myBooks;

  constructor(
    private aR: ActivatedRoute,
    private auth: AuthService,
    private userS: ClientsService,
    private bookS: BooksService
  ) {
    this.aR.params.subscribe(params => {
      this.id = params.id;
      userS.getClient(this.id).subscribe((data: any) => {
        this.User = data;
      }, (error) => {
        this.auth.checkAuthError(error);
      });
    });
    this.myBooks = [];
    userS.getAllmyBooks(this.id).subscribe((data: any) => {
      this.myBooks = data;
    }
      , (error) => {
        this.auth.checkAuthError(error);
      });
     this.chargeStatistic();
  }
  chargeStatistic() {
  }

}
