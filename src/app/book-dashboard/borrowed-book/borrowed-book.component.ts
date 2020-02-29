import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowed-book',
  templateUrl: './borrowed-book.component.html',
  styleUrls: ['./borrowed-book.component.scss']
})
export class BorrowedBookComponent implements OnInit {
  Prets;
  searchResults;
  searchPrets;
  searchForm: FormGroup;
  errorMessage = false;
  constructor(private bookS: BooksService, private formbuilder: FormBuilder) {
    this.bookS.getAllPrets().subscribe(data => (this.Prets = data));
  }
  ngOnInit() {
    this.initsearchForm();
  }
  async rendu(pret) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    pret.returnDate = new Date().toLocaleDateString('fr-FR', options),
    await this.bookS.rendu(pret);
    this.initsearchForm();
  }
  notifier() {
    //
  }
  search() {
    this.searchPrets = [];
    const letter = this.searchForm
      .get('letter')
      .value.trim()
      .toLowerCase();
    if (letter === '') {
      this.errorMessage = true;
    } else {
      this.Prets.forEach(pret => {
        if (pret.title.toLowerCase().includes(letter)) {
          this.searchPrets.push(pret);
          this.searchResults = true;
        }
      });
      if (this.searchPrets.length === 0) {
        this.errorMessage = true;
      }
    }
  }
  initsearchForm() {
    this.searchForm = this.formbuilder.group({
      letter: ['', [Validators.required]]
    });
    this.searchPrets = [];
    this.searchResults = false;
    this.errorMessage = false;
  }
}
