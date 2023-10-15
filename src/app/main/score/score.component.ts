import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quizz.model';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  score!: number;
  quiz!: Quiz[];
  name!: string;

  constructor(private quizService: QuizzService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.name = this.quizService.getPseudo();
    this.score = this.quizService.getScore();
    this.quiz = this.quizService.getQuiz();

    // this.route.queryParamMap.subscribe((queryParams) => {
    //   const serializedData = queryParams.get('data');
    //   const data = serializedData ? JSON.parse(decodeURIComponent(serializedData)) : null;

    //   if (data) {
    //     this.score = data['score'];
    //     const quizObjectString = data['quiz'];
    //     this.quiz = JSON.parse(quizObjectString);
    //   }
    // });

    // this.route.queryParams.subscribe(params => {
    //   this.score = params['score'];
    //   // this.quiz = params['quiz'];
    //   const quizObjectString = params['quiz'];
    //   this.quiz = JSON.parse(quizObjectString);
  
    //   // Now you can use these values in your component as needed.
    //   console.log('score:', this.score);
    //   console.log('quiz:', this.quiz);
    // });
  }

  recievedName(name: string){
    this.name = name;
  }

  recieveData(selected: boolean){
    console.log('selected', selected);
  }
}
