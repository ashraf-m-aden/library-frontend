import { AuthService } from './../../services/auth.service';
import { BooksService } from './../../services/books.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  genreForm: FormGroup;
  displayedColumns = ['name', 'description', 'Action'];
  Genre;
  datasource;
  length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  constructor(
    private bookS: BooksService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
  this.initForm();
  }
  initForm() {
    this.genreForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.datasource = new MatTableDataSource(null);
    this.bookS.getGenres().subscribe((data: any) => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
  async onSubmit() {
    this.Genre = {
      idGenre: '',
      name: this.genreForm.get('name').value,
      description: this.genreForm.get('description').value,
      enabled: 1
    };
    await this.bookS.addGenre(this.Genre).subscribe(() => {
      this.initForm();

    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
  async delete(id) {
    await this.bookS.deleteGenre(id).subscribe(() => {
      this.initForm();
    }, (error) => {
      this.auth.checkAuthError(error);
      if (error.status === 500) {
        alert('You have to remove first the books from that type');
      }
    });

  }
  details(idGenre) {
    //
  }
  ngOnInit() {
    this.initForm();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    //
  }
}
