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
  secondFormGroup: FormGroup;
  Users;
  searchResults = false;
  selected = false;
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
    this.initForm();
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  search() {
    this.Users = [];
    this.selected = false;
    const letter = this.searchForm.get('letter').value;
    this.userS.getClients().subscribe(data => {
      data.forEach(user => {
        if (user.name.toLowerCase().includes(letter.toLowerCase())) {
          this.Users.push(user);
          this.searchResults = true;
        }
      });
    });
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      letter: ['', [Validators.required]]
    });
  }
  choose(choosenUser) {
    this.choosenUser = choosenUser;
    this.selected = true;
    this.searchResults = false;
  }
}
