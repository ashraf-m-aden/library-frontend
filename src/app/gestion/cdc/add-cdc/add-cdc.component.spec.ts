import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCDCComponent } from './add-cdc.component';

describe('AddCDCComponent', () => {
  let component: AddCDCComponent;
  let fixture: ComponentFixture<AddCDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
