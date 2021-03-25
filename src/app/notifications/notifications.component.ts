import { NotificationsService } from './../services/notifications.service';
import { BooksService } from './../services/books.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['title', 'name', 'returnDate', 'Action'];
  datasource;
  length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  notifs;
  constructor(
    private bookS: BooksService,
    private notifS: NotificationsService
  ) {
    notifS.getAllNotifs().subscribe((data:any) => {
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {}
}
