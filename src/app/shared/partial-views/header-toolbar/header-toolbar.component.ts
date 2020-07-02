import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  modalOpen = false;


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
