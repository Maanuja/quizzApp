import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: this.checkPasswords });
  }

  
  hide = true;
  hide2 = true;

  signup() {
    if (this.signupForm.invalid) return;
    this.authService.addUser({
      id: this.authService.getUsersLength() + 1,
      username: this.signupForm.value.username,
      password: this.signupForm.value.password
    });
    this.router.navigate(['/log-in']);
  }

  private checkPasswords(control: FormGroup) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password?.value !== confirmPassword?.value ? { missMatch: true } : null;
  }


  get getErrorLabel() {
    if (this.signupForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.signupForm.controls?.['password']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.signupForm.controls?.['password']?.errors?.['minlength']?.requiredLength}`;
    if (this.signupForm.errors?.['missMatch']) return 'Les mots de passe ne correspondent pas';
    return 'Un problème est survenu';
  }



}
