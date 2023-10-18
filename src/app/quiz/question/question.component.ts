import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Quiz } from 'src/app/models/quizz.model';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() showResult: boolean = false;
  quiz!: Quiz[];
  @Input() question!: Question;
  @Input() questionId: number = 1;
  @Input() idCategory: number = 1;

  
  isSelected: boolean = false;
  validForm: boolean = false;
  score:number = 0;

  constructor( private quizService: QuizzService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.questionId = +params['questionId'];
      this.idCategory = +params['idCategory'];
    });
    
    this.quiz = this.quizService.quizContent;
    this.question = this.quizService.getQuestion(this.questionId);
    console.log('question', this.question);
  }

  nextQuestion(){
    this.questionId = this.questionId+1;
    const url = `/categories/${this.idCategory}/quiz/${this.questionId}`;
    this.router.navigate([url]);
    this.question = this.quizService.getQuestion(this.questionId);

    // console.log('nextQuestionId', this.questionId);
    // console.log('nextQuestion', this.question);
  }

  recieveData(selected: boolean){
    // console.log('selected', selected);
    this.isSelected = selected;
  }

  recievedForm(validForm: boolean){
    this.validForm = validForm;
  }

  onSubmit(){
    this.score = this.quizService.findScore();
    this.quizService.setScore(this.score);
    this.showResult = true;
    this.quizService.resetUserAnswers();

    this.router.navigate(
      ['/score'],
    );
  }
}
