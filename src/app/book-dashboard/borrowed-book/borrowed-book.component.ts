import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-borrowed-book',
  templateUrl: './borrowed-book.component.html',
  styleUrls: ['./borrowed-book.component.scss']
})
export class BorrowedBookComponent implements OnInit {
  displayedColumns = ['ID', 'NameL', 'NameA', 'DD', 'DR', 'Action'];
  a = [
    {
      ID: 1, NameL: 'Ashraf et le loup', NameA: 'Ashraf', DD: '2019', DR: '2020'
    }
  ];
  g = [
    {
      ID: 2, NameL: 'G et le loup', NameA: 'Goul', DD: '2019', DR: '2020'
    }
  ];
  m = [
    {
      ID: 3, NameL: 'mAKA et le loup', NameA: 'MAKA', DD: '2019', DR: '2020'
    }
  ];
  all = this.a.concat(this.g.concat(this.m));
  constructor() {

  }
  ngOnInit() {
  }
  rendu(id) {
    alert(id);
  }
}
