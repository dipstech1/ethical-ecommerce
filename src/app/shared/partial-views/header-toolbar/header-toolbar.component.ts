import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginSignupComponent } from '../login-signup/login-signup.component';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  modalOpen = false;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
  login() {
    this.modalService.open(LoginSignupComponent);
  }
}
