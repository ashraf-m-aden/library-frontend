import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNotifComponent } from './single-notif.component';

describe('SingleNotifComponent', () => {
  let component: SingleNotifComponent;
  let fixture: ComponentFixture<SingleNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
