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
    private bookS: BooksService
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth , currentDay);
    this.maxDate = new Date(currentYear + 0, currentMonth, currentDay + 15);
  }

  ngOnInit() {
    this.initsearchForm();
    this.borrowForm = this.formBuilder.group({
      returnDate: ['', Validators.required],
      state: ['', Validators.required]
    });
  }
  async onSubmit() {
    const event = new Date(this.borrowForm.get('returnDate').value);

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = event.toLocaleDateString('fr-FR', options);
    const Pret = {
      idPret: '',
      idBook: this.book.idBook,
      idUser: this.choosenUser.idUser,
      title: this.book.title,
      genre: this.book.genre,
      userName: this.choosenUser.name,
      idCDC: '',
      borrowDate: new Date().toLocaleDateString('fr-FR', options),
      returnDate: date,
      nameAdmin: 'Kalia Mohamed Aden',
      rendu: false,
      state: this.borrowForm.get('state').value
    };
    await this.bookS.borrowBook(Pret);
    this.borrowed.emit();
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
