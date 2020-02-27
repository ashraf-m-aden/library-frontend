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
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.bookS.getGenres().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }
  initForm() {
    this.genreForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  async onSubmit() {
    this.Genre = {
      idGenre: '',
      name: this.genreForm.get('name').value,
      description: this.genreForm.get('description').value,
      created: Date.now(),
      enabled: true
    };
    await this.bookS.addGenre(this.Genre);
    this.initForm();
  }
  async delete() {
    await this.bookS.deleteGenre(this.Genre.idGenre);
    this.route.navigate(['/genre']);
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
