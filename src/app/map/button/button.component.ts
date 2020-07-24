import { Component, OnInit, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @HostListener('click') onMouseEnter() {
    alert('Don\'t touch my bacon!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
