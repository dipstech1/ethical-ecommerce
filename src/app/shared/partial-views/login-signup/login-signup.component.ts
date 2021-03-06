import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;
  loginSubmitted = false;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal,private router: Router,)
    {}    

  ngOnInit() {
    this.loginForm = this.formBuilder.group
    ({     
      emails: ['', [Validators.required, Validators.email]],
      passwords: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
  }, { 
    validator: ConfirmedValidator('password', 'cpassword')
  });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
}
onLogin(){
  // this.loginSubmitted = true;
  // if (this.loginForm.invalid) {
  //   return;
  // }

  localStorage.setItem('token', '123');
  this.closeModal();
  this.router.navigate(["add-to-cart"]);
}
}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
