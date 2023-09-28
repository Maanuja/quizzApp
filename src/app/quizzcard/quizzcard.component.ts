import { Component } from '@angular/core';
import { QuizzService } from '../shared/quizz.service';

@Component({
  selector: 'app-quizzcard',
  templateUrl: './quizzcard.component.html',
  styleUrls: ['./quizzcard.component.css']
})
export class QuizzcardComponent {
  //variableName:variableType = variableValue
  quiz:any[] = [];

  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  score:number = 0;
  showResult:boolean = false;
  validForm: boolean = false;
  isSelected:boolean = false;
  
  constructor( private quizService: QuizzService) { }

  ngOnInit(){
    this.quiz = this.quizService.getQuiz();
    console.log(this.quiz);
  }

  selectAnswer(questionId:number, answer:string ){
    this.quizService.getUserAnswer(questionId, answer);
    this.validForm = this.quizService.isComplete();
  }

  // isAnswerSelected(questionId: number, answer: string) {
  //   this.quizService.isAnswerSelected(questionId, answer);
  // }


  onSubmit(){
    this.score = this.quizService.getScore();
    this.showResult = true;
  }

}
