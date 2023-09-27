import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzcard',
  templateUrl: './quizzcard.component.html',
  styleUrls: ['./quizzcard.component.css']
})
export class QuizzcardComponent {

  constructor(private router: Router) { }

  goToQuizPage() {
    this.router.navigate(['/quiz']);
  }
}
