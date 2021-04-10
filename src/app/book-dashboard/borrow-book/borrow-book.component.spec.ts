import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBookComponent } from './borrow-book.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('BorrowBookComponent', () => {
  let component: BorrowBookComponent;
  let fixture: ComponentFixture<BorrowBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowBookComponent ],
      imports: [FormBuilder, FormGroup, Validators]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
