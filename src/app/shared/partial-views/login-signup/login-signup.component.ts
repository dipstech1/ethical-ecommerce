import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public activeModal: NgbActiveModal
    ) { 
      this.loginForm = this.formBuilder.group({     
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  onSubmit() {
    this.submitted = true;
  console.log("here it is submitted");
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert(this.registerForm.invalid);
        return;
    }

}
onLogin(){
  
}
}
