import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  hide2 = true;
  get emailInput() { return this.signup.get('email'); }
  get passwordInput() { return this.signup.get('password'); } 
}
