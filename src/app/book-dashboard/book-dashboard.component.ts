import { BooksService } from './../services/books.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchForm: FormGroup;
  searchResults = false;
  displayedColumns = ['title', 'author', 'genre', 'Action'];
  Books = [];
  genres;
  datasource;
  length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  allBooks = true;
  specificBooks = false;
  bookGenre;
  errorMessage: boolean;
  constructor(
    private bookS: BooksService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.bookS.getBooks().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
    this.bookS.getGenres().subscribe(data => {
      this.genres = data;
    });
  }
  ngOnInit() {
    this.initForm();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    //
  }
  search() {
    this.Books = [];
    const letter = this.searchForm
      .get('letter')
      .value.toLowerCase()
      .trim();
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.bookS.getBooks().subscribe(data => {
        data.forEach(book => {
          if (book.title.toLowerCase().includes(letter.toLowerCase())) {
            this.Books.push(book);
            this.searchResults = true;
          }
        });
      });
      if (this.Books.length === 0) {
        this.errorMessage = true;
      }
    }
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      letter: ['', [Validators.required]]
    });
    this.Books = [];
    this.searchResults = false;
    this.errorMessage = false;
  }
  details(idBook) {
    this.route.navigate(['/book/', idBook]);
  }
  displayAll() {
    this.allBooks = true;
    this.specificBooks = false;
  }
  display(genre) {
    this.allBooks = false;
    this.specificBooks = true;
    this.bookGenre = genre.name;
  }
}
