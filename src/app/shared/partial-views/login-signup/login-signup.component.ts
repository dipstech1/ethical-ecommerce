import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(   public activeModal: NgbActiveModal
    ) { }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
