import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
