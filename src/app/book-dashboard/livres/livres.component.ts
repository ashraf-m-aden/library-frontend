import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { BooksService } from 'src/app/services/books.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {
  @Input() genre: string;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['precedent', 'suivant'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['title', 'author', 'year', 'Action'];
  datasource;
  length;
  books;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  constructor(
    private bookS: BooksService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.bookS.getBooksByGenre(this.genre).subscribe(data => {
      this.books = data;
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
      console.log(this.books);
        });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
  }
}
