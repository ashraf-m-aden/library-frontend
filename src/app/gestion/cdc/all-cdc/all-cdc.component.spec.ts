import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCDCComponent } from './all-cdc.component';

describe('AllCDCComponent', () => {
  let component: AllCDCComponent;
  let fixture: ComponentFixture<AllCDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
