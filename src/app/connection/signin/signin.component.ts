import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get usernameInput() { return this.signin.get('username'); }
  get passwordInput() { return this.signin.get('password'); }

  login(){
    this.authService.login(this.signin.value).subscribe((user: any) => {
      if (user.length === 0) alert('Erreur dans le pseudo ou le mot de passe');
      this.authService.user = user[0];
      if (!this.authService.user) return;
      this.authService.saveUser();
      this.router.navigate(['/']);
    }, (error) => {
      alert('Erreur dans la requête');
    });
  }
}
