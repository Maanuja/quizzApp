import { Component } from '@angular/core';
import { QuizzService } from '../shared/quizz.service';
import { Router } from '@angular/router';

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
  
  isQuizFinished = false;

  constructor( private quizService: QuizzService, private router: Router) { }

  ngOnInit(){
    this.quiz = this.quizService.getQuiz();
  }

  selectAnswer(questionId:number, answer:string ){
    this.quizService.setUserAnswer(questionId, answer);
    console.log('user', this.quizService.getUserAnswer());
    this.validForm = this.quizService.isComplete();
    // this.isSelected = this.isAnswerSelected(answer, questionId);
  }

  // isAnswerSelected(questionId: number, answer: string) {
  //   this.quizService.isAnswerSelected(questionId, answer);
  // }

  isAnswerSelected(answer: string, id: number) : boolean {
    console.log('user', this.quizService.getUserAnswer());
    const isAnswered = this.quizService.getUserAnswer().find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }



  onSubmit(){
    this.score = this.quizService.getScore();
    this.showResult = true;
    this.router.navigate(
      ['/score'],
      { 
        queryParams: { 
          score: this.score,
          quiz: JSON.stringify(this.quiz)
        } 
      }
    );
  }

}
