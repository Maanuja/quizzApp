import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/quizz.model';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
  // @Input() showResult: boolean = false;
  @Input() answers: any;
  @Input() questionId: number = 1;
  @Input() quiz: Quiz[] = [];
  @Output() selectedEmitter = new EventEmitter<boolean>();
  @Output() formEmitter = new EventEmitter<boolean>();

  isSelected: boolean = false;
  nextQuestionId: number = this.questionId;
  validForm: boolean = false;
  score:number = 0;
  showResult:boolean = false;

  constructor( private quizService: QuizzService, private router: Router) {}

  selectAnswer(questionId:number, answer:string ){
    this.quizService.setUserAnswer(questionId, answer);
    // console.log('user', this.quizService.getUserAnswer());
    this.validForm = this.quizService.isComplete();
    this.isSelected = true;
    this.selectedEmitter.emit(this.isSelected);
    this.formEmitter.emit(this.validForm);;
  }

  isAnswerSelected(answer: string, id: number) : boolean {
    // console.log('user', this.quizService.getUserAnswer());
    const isAnswered = this.quizService.getUserAnswer().find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }

  
}
