import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get usernameInput() { return this.loginform.get('username'); }
  get passwordInput() { return this.loginform.get('password'); }

  login(){
    this.authService.login(this.loginform.value).subscribe((user: any) => {
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
