import { Component } from '@angular/core';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-display-quizz',
  templateUrl: './display-quizz.component.html',
  styleUrls: ['./display-quizz.component.css']
})
export class DisplayQuizzComponent {
  //variableName:variableType = variableValue
  quiz:any[] = [];

  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  score:number = 0;
  showResult:boolean = false;
  validForm: boolean = false;
  isSelected:boolean = false;
  
  constructor( private quizzService: QuizzService) { }

  ngOnInit(){
    this.quizzService.getQuizData().subscribe(data => {
      this.quiz = data;
    });
    console.log(this.quiz);
  }

  selectAnswer(questionId:number, answer:string ){
    this.quizzService.getUserAnswer(questionId, answer);
    this.validForm = this.quizzService.isComplete();
  }

  onSubmit(){
    this.score = this.quizzService.getScore();
    this.showResult = true;
    this.quizzService.reset();
  }

}
