import { CdcService } from './../../../services/cdc.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-all-cdc',
  templateUrl: './all-cdc.component.html',
  styleUrls: ['./all-cdc.component.scss']
})
export class AllCDCComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchForm: FormGroup;
  searchResults = false;
  displayedColumns = ['name', 'address', 'number', 'Action'];
  Cdcs = [];
  datasource;
  length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  errorMessage: boolean;
  constructor(
    private cdcS: CdcService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.cdcS.getCdcs().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }
  details(idCdc) {
    this.route.navigate(['/cdc/', idCdc]);
  }
  ngOnInit() {
    this.initForm();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    //
  }
  search() {
    this.Cdcs = [];
    const letter = this.searchForm
      .get('letter')
      .value.toLowerCase()
      .trim();
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.cdcS.getCdcs().subscribe(data => {
        data.forEach(cdc => {
          if (cdc.name.toLowerCase().includes(letter)) {
            this.Cdcs.push(cdc);
            this.searchResults = true;
          }
        });
      });
      if (this.Cdcs.length === 0) {
        this.errorMessage = true;
      }
    }
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      letter: ['', [Validators.required]]
    });
    this.Cdcs = [];
    this.searchResults = false;
    this.errorMessage = false;
  }
}
