import { async } from '@angular/core/testing';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.scss']
})
export class BorrowBookComponent implements OnInit {
  isLinear = true;
  searchForm: FormGroup;
  borrowForm: FormGroup;
  Users;
  searchResults = false;
  selected = false;
  errorMessage = false;
  returnDate;
  choosenUser;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and friday from being selected.
    return day !== 0 && day !== 5;
  }
  constructor(
    private formBuilder: FormBuilder,
    private userS: ClientsService
  ) {}

  date(date) {
    this.returnDate = date;
  }
  ngOnInit() {
    this.initsearchForm();
    this.borrowForm = this.formBuilder.group({
      returnDate: ['', Validators.required]
    });
  }
  onSubmit() {
    const event = new Date(this.borrowForm.get('returnDate').value);

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    console.log(event.toLocaleDateString('fr-FR', options));
    console.log(this.choosenUser);
  }
  search() {
    this.Users = [];
    this.selected = false;
    const letter = this.searchForm
      .get('letter')
      .value.trim()
      .toLowerCase();
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.userS.getClients().subscribe(data => {
        data.forEach(user => {
          if (user.name.toLowerCase().includes(letter)) {
            this.Users.push(user);
            this.searchResults = true;
          }
        });
        if (this.Users.length === 0) {
          this.errorMessage = true;
        }
      });
    }
  }
  initsearchForm() {
    this.searchForm = this.formBuilder.group({
      letter: ['', [Validators.required]]
    });
    this.Users = [];
    this.selected = false;
    this.searchResults = false;
    this.errorMessage = false;
  }
  choose(choosenUser) {
    this.choosenUser = choosenUser;
    this.selected = true;
    this.searchResults = false;
  }
}
