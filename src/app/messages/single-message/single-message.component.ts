import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent implements OnInit {
  mail = false;
  sms = false;
  constructor() {}

  showSms() {
    this.sms = true;
    this.mail = false;
  }
  showMail() {
    this.sms = false;
    this.mail = true;
  }
  ngOnInit(): void {}
}
