import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  modalOpen = false;
  isLoggedIn : boolean

  constructor(private modalService: NgbModal, private auth : AuthService, private router :Router) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isAuthenticated()
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
  login() {
    this.modalService.open(LoginSignupComponent);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
}
