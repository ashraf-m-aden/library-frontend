import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns = ['Photo', 'Nom', 'Sexe'];
  ELEMENT_DATA = [
    { ID: 1, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 2, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 3, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 4, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 5, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 6, Nom: 'Fatouma', Sexe: 'Feminin' },
    { ID: 7, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 8, Nom: 'Fatouma', Sexe: 'Feminin', },
    { ID: 9, Nom: 'Houssein', Sexe: 'Masculin' },
    { ID: 10, Nom: 'Fatouma', Sexe: 'Feminin' },
  ];
  datasource = new MatTableDataSource(this.ELEMENT_DATA);
  length = this.ELEMENT_DATA.length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }


}
