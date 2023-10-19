import { Component } from '@angular/core';
import { AuthService } from '../connection/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'Quizz App';
  description:string = 'This is a simple quiz app made with Angular 8';
  
  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }

  get isUserConnected() {
    return this.authService.isUserConnected();
  }

  get getUsername() {
    return this.authService.user?.username || '';
  }
}
