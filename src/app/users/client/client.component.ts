import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  ID: number;
  DD: number;
  DR: string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent  {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  id; // idUser
  User; // user Data
  public pieChartLabels = ['Journal', 'Roman', 'Conte', 'Bande dessinée'];
  public pieChartData = [10, 4, 8, 9];
  public pieChartType = 'pie';

  displayedColumns: string[] = ['ID', 'name', 'DD', 'DR', 'Agent'];
  ELEMENT_DATA = [
    { ID: 1, name: 'Hydrogen', DD: 1.0079, DR: 'H', Agent: 'Ashraf' },
    { ID: 2, name: 'Helium', DD: 4.0026, DR: 'He', Agent: 'Ashraf' },
    { ID: 3, name: 'Lithium', DD: 6.941, DR: 'Li', Agent: 'Ashraf' },
    { ID: 4, name: 'Beryllium', DD: 9.0122, DR: 'Be', Agent: 'Ashraf' },
    { ID: 5, name: 'Boron', DD: 10.811, DR: 'B', Agent: 'Ashraf' },
    { ID: 6, name: 'Carbon', DD: 12.0107, DR: 'C', Agent: 'Ashraf' },
    { ID: 7, name: 'Nitrogen', DD: 14.0067, DR: 'N', Agent: 'Ashraf' },
    { ID: 8, name: 'Oxygen', DD: 15.9994, DR: 'O', Agent: 'Ashraf' },
    { ID: 9, name: 'Fluorine', DD: 18.9984, DR: 'F', Agent: 'Ashraf' },
    { ID: 10, name: 'Neon', DD: 20.1797, DR: 'Ne', Agent: 'Ashraf' }
  ];
  length = this.ELEMENT_DATA.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA); // nescessaire

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(
    private aR: ActivatedRoute,
    private route: Router,
    private userS: ClientsService
  ) {
    this.id = this.aR.params.subscribe(params => {
      this.id = params.id;
      userS.getClient(this.id).subscribe((data: any) => {
        this.User = data[0];
        console.log(this.User);
      });
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
