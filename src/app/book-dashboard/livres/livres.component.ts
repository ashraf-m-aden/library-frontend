import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
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
  @Input() genreId: number;
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
    this.bookS.getBooksByGenre(this.genreId).subscribe((data:any) => {
      this.books = data;
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
        });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.bookS.getBooksByGenre(this.genreId).subscribe((data:any) => {
      this.books = data;
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
        });
  }
}
