import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  id;
  constructor(private aR: ActivatedRoute, private router: Router) {
    this.id = this.aR.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
  }

}
