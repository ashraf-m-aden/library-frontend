import { AuthService } from './../../services/auth.service';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sms = true;
  mail = false;
  searchForm: FormGroup;
  searchResults = false;
  displayedColumns = ['firstName', 'lastName', 'email', 'Action'];
  errorMessage = false;
  retrievedUsers;
  Users = [];
  datasource;
  length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  constructor(
    private userS: ClientsService,
    private route: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.userS.getClients().subscribe((data: any) => {
      this.retrievedUsers = data;
      this.datasource = new MatTableDataSource(data);
      this.length = data.length;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
  showSms() {
    this.sms = true;
    this.mail = false;
  }
  showMail() {
    this.sms = false;
    this.mail = true;
  }
  details(idUser) {
    this.route.navigate(['/client/', idUser]);
  }
  ngOnInit() {
    this.initForm();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    //
  }
  search() {
    this.Users = [];
    this.searchResults = false;
    const letter = this.searchForm
      .get('letter')
      .value.toLowerCase()
      .trim();
    if (letter === '') {
      this.errorMessage = true;
    } else {

      this.retrievedUsers.forEach(async user => {
        if (user.firstName.toLowerCase().includes(letter) || (user.lastName.toLowerCase().includes(letter))) {
          this.Users.push(user);
          this.searchResults = true;
        }
      });
      if (this.Users.length === 0) {
        this.errorMessage = true;
      }

    }
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      letter: ['', [Validators.required]]
    });
    this.Users = [];
    this.searchResults = false;
    this.errorMessage = false;
  }
}
