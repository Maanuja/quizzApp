import { Component } from '@angular/core';
import { QuizzService } from '../shared/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  //variableName:variableType = variableValue
  quiz:any[] = [];
  startQuiz:boolean = false;
  // selectedAnswer:any[] = [];
  // correctAnswer:string[] = [];
  // score:number = 0;
  // showResult:boolean = false;
  // validForm: boolean = false;
  // isSelected:boolean = false;
  idCategory = 1;
  playerName = '';
  isQuizFinished = false;

  constructor( 
    private quizService: QuizzService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.idCategory = params['categoryId'];
    });
  }

  ngOnInit(){
    this.quiz = this.quizService.quizContent;
    console.log('quiz', this.quiz);
    console.log('quizuer ans', this.quizService.selectedAnswer);
  }

  start(){
    this.startQuiz = true;
    this.router.navigate([`/categories/${this.idCategory}/quiz/${this.quiz[0].questionId}`]);
  }
  // selectAnswer(questionId:number, answer:string ){
  //   this.quizService.setUserAnswer(questionId, answer);
  //   console.log('user', this.quizService.getUserAnswer());
  //   this.validForm = this.quizService.isComplete();
  //   // this.isSelected = this.isAnswerSelected(answer, questionId);
  // }

  // // isAnswerSelected(questionId: number, answer: string) {
  // //   this.quizService.isAnswerSelected(questionId, answer);
  // // }

  // isAnswerSelected(answer: string, id: number) : boolean {
  //   console.log('user', this.quizService.getUserAnswer());
  //   const isAnswered = this.quizService.getUserAnswer().find((a) => a.questionId === id);
  //   if (!isAnswered) return false;
  //   return isAnswered.answer === answer;
  // }



  // onSubmit(){
  //   this.score = this.quizService.getScore();
  //   this.showResult = true;
  //   this.router.navigate(
  //     ['/score'],
  //     { 
  //       queryParams: { 
  //         score: this.score,
  //         quiz: JSON.stringify(this.quiz)
  //       } 
  //     }
  //   );
  // }

}
