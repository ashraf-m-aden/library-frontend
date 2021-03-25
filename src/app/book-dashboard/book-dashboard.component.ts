import { AuthService } from './../services/auth.service';
import { BooksService } from './../services/books.service';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  bookGenreId: number;
  errorMessage: boolean;
  constructor(
    private bookS: BooksService,
    private route: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.bookS.getBooks().subscribe((data: any) => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    }, (error) => {
      this.auth.checkAuthError(error);
    });
    this.bookS.getGenres().subscribe((data: any) => {
      this.genres = data;
    }, (error) => {
      this.auth.checkAuthError(error);
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
    this.searchResults = false;
    const letter = this.searchForm
      .get('letter')
      .value.toLowerCase()
      .trim();
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.bookS.getBooks().subscribe((data: any) => {
        data.forEach(async book => {
          if (book.title.toLowerCase().includes(letter.toLowerCase())) {
            await this.Books.push(book);
            this.searchResults = true;
            this.errorMessage = false;

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
  display(id) {
    this.allBooks = false;
    this.specificBooks = true;
    this.bookGenreId = id;
  }

  delete(id) {
    this.bookS.delete(id).subscribe(() => {

    }, (error) => {
      this.auth.checkAuthError(error);
      if (error.status === 500) {
        alert('This book was already borrowed, it\'s saved in the borrowed book db, you can\'t delete it');
      }
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.bookS.getBooks().subscribe((data: any) => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
}
