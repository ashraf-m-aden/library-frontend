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
  constructor(
    private aR: ActivatedRoute,
    private router: Router,
    private bookS: BooksService
  ) {
    this.aR.params.subscribe(params => {
      this.id = params.id;
      bookS.getBook(this.id).subscribe((data: any) => {
        this.book = data[0];
      });
    });
    bookS.getBooks().subscribe(data => {
      this.Books = data;
    });
  }

  ngOnInit() {}
}
