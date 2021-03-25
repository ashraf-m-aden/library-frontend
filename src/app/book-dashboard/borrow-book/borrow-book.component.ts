import { AuthService } from './../../services/auth.service';
import { BooksService } from 'src/app/services/books.service';
import { async } from '@angular/core/testing';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.scss']
})
export class BorrowBookComponent implements OnInit {
  @Input() book;
  @Output() borrowed = new EventEmitter<boolean>();
  isLinear = true;
  searchForm: FormGroup;
  borrowForm: FormGroup;
  Users;
  searchResults = false;
  selected = false;
  errorMessage = false;
  choosenUser;
  minDate;
  maxDate;
  errorDate = false;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and friday from being selected.
    return day !== 0 && day !== 5;
  }
  constructor(
    private formBuilder: FormBuilder,
    private userS: ClientsService,
    private bookS: BooksService,
    private auth: AuthService
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 0, currentMonth, currentDay + 15);
  }

  ngOnInit() {
    this.initsearchForm();
    this.borrowForm = this.formBuilder.group({
      returnDate: ['', Validators.required],
    });
  }
  onSubmit() {
    const event = new Date(this.borrowForm.get('returnDate').value);

    const options: any = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = event.toLocaleDateString('fr-FR', options);
    const Pret = {
      userId: localStorage.getItem('id'),
      bookId: this.book.id,
      clientId: this.choosenUser.id,
      borrowDate: new Date().toLocaleDateString('fr-FR', options),
      returnDate: date,
      returned: 0,
    };
    this.bookS.borrowBook(Pret).subscribe(() => {
      this.borrowed.emit();
    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
  search() {
    this.Users = [];
    this.searchResults = false;
    this.selected = false;
    const letter = this.searchForm
      .get('letter')
      .value.toLowerCase().trim()
      ;
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.userS.getClients().subscribe((data: any) => {
        data.forEach(async user => {
          if (user.firstName.toLowerCase().includes(letter) || user.lastName.toLowerCase().includes(letter)) {
            await this.Users.push(user);
            this.searchResults = true;
          }
        });
        if (this.Users.length === 0) {
          this.errorMessage = true;
        }
      }, (error) => {
        this.auth.checkAuthError(error);
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

  resetUser() {
    this.choosenUser = null;
    this.selected = false;
    this.searchResults = false;
    this.initsearchForm();
  }
}
