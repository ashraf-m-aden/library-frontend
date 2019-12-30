import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('search', { static: false }) searchObject;

  search = false;
  titleSearch;
  id;
  displayedColumns = ['ID', 'Nom', 'auteur', 'Annee', 'action'];
  ELEMENT_DATA = [
    { ID: 1, Nom: 'Hydrogen', auteur: 1.0079, Annee: 'H' },
    { ID: 2, Nom: 'Helium', auteur: 4.0026, Annee: 'He' },
    { ID: 3, Nom: 'Lithium', auteur: 6.941, Annee: 'Li' },
    { ID: 4, Nom: 'Beryllium', auteur: 9.0122, Annee: 'Be' },
    { ID: 5, Nom: 'Boron', auteur: 10.811, Annee: 'B' },
    { ID: 6, Nom: 'Carbon', auteur: 12.0107, Annee: 'C' },
    { ID: 7, Nom: 'Nitrogen', auteur: 14.0067, Annee: 'N' },
    { ID: 8, Nom: 'Oxygen', auteur: 15.9994, Annee: 'O' },
    { ID: 9, Nom: 'Fluorine', auteur: 18.9984, Annee: 'F' },
    { ID: 10, Nom: 'Neon', auteur: 20.1797, Annee: 'Ne' },
  ];
  datasource = new MatTableDataSource(this.ELEMENT_DATA);
  length = this.ELEMENT_DATA.length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  searchData = [];
  constructor(private ar: ActivatedRoute) {
    this.id = ar.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    //
    if (this.searchObject === '') {
      this.search = false;
    }
  }
  searchBook() {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.ELEMENT_DATA.length; index++) {
      if (this.ELEMENT_DATA[index].Nom.toLocaleLowerCase().includes(this.titleSearch)) {
        this.searchData.push(this.ELEMENT_DATA[index]);
      }
      this.search = true;

    }
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }


}
