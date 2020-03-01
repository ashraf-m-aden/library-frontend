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
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  myBooks;

  constructor(
    private aR: ActivatedRoute,
    private route: Router,
    private userS: ClientsService,
    private bookS: BooksService
  ) {
    this.aR.params.subscribe(params => {
      this.id = params.id;
      userS.getClient(this.id).subscribe((data: any) => {
        this.User = data[0];
      });
    });
    this.myBooks = [];
    userS.getAllmyBooks(this.id).subscribe(data => {
      data.forEach(pret => {
        bookS.getBook(pret.idBook).subscribe(results => {
          this.myBooks.push({
            title: pret.title,
            author: results[0].author,
            genre: results[0].genre,
            returnDate: pret.returnDate,
            rendu: pret.rendu,
            borrowDate: pret.borrowDate
          });
        });
      });
      this.chargeStatistic();
    });
  }
  chargeStatistic() {
    let cnt = 0;
    this.bookS.getGenres().subscribe(data => {
      data.forEach(genre => {
        cnt = 0;
        this.pieChartLabels.push(genre.name);
        this.myBooks.forEach(book => {
          if (book.genre === genre.name) {
            cnt += 1;
          }
        });
        this.pieChartData.push(cnt);
      });
    });
  }

}
