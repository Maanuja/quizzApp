import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/quizz.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  score!: number;
  quiz!: Quiz[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.score = params['score'];
      // this.quiz = params['quiz'];
      const quizObjectString = params['quiz'];
      this.quiz = JSON.parse(quizObjectString);
  
      // Now you can use these values in your component as needed.
      console.log('score:', this.score);
      console.log('quiz:', this.quiz);
    });
  }
}
