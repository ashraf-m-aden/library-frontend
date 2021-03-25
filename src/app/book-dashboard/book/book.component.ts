import { AuthService } from './../../services/auth.service';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  id;
  Books = [];
  book;
  borrow = false;
  prets;
  constructor(
    private aR: ActivatedRoute,
    private auth: AuthService,
    private bookS: BooksService
  ) {
    this.aR.params.subscribe(params => {
      this.id = params.id;
      bookS.getBook(this.id).subscribe((data: any) => {
        this.book = data;
        this.bookS
          .getPretBook(this.book.id)
          .subscribe(results => (this.prets = results));
      }, (error) => {
        this.auth.checkAuthError(error);
      });

      bookS.getPretBook(this.id).subscribe((data)=>{
        this.prets = data;
        console.log(data);

      }, (error) => {
        this.auth.checkAuthError(error);
      })
    });
  }
  borrowBook() {
    this.borrow = true;
  }
  ngOnInit() {}
}
