import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private bookS: BooksService, private formbuilder: FormBuilder,
              private router: Router, private auth: AuthService) {

    this.getAllPrets();
  }
  ngOnInit() {
    this.initsearchForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.getAllPrets();
  }
  rendu(pret) {
    const options: any = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    pret.returnDate = new Date().toLocaleDateString('fr-FR', options),
      pret.returned = 1;
    this.bookS.rendu(pret).subscribe(() => {
      this.initsearchForm();
    }, (error) => {
      this.auth.checkAuthError(error);
    });

  }
  notifier() {
    //
  }
  getAllPrets() {
    this.bookS.getAllPrets().subscribe((data: any) => {
      this.Prets = data;
    }, (error) => {
      this.auth.checkAuthError(error);
    });
  }
  search() {
    this.searchPrets = [];
    this.searchResults = false;
    const letter = this.searchForm
      .get('letter')
      .value.trim()
      .toLowerCase();
    if (letter === '') {
      this.errorMessage = true;

    } else {
      this.Prets.forEach(async pret => {
        if (pret.book.title.toLowerCase().includes(letter)) {
          await this.searchPrets.push(pret);
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

  check(id) {

    this.router.navigate(['/book/' + id]);

  }
}
