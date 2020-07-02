import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginSignupComponent } from 'src/app/shared/partial-views/login-signup/login-signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router, private modalService: NgbModal) {

  }

  canActivate(): boolean {

    if (!this.authService.isAuthenticated()) {
      this.modalService.open(LoginSignupComponent)
      return false
    }
    return true
  }

}