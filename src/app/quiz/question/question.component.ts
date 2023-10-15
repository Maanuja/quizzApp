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
  
  isSelected: boolean = false;
  validForm: boolean = false;
  score:number = 0;

  constructor( private quizService: QuizzService, private router: Router, private route: ActivatedRoute) {
    console.log(this.isSelected);

  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.questionId = +params['questionId'];
    });
    
    this.quiz = this.quizService.getQuiz();
    this.question = this.quizService.getQuestion(this.questionId);
  }

  nextQuestion(){
    this.questionId = this.questionId+1;
    const url = `/quiz/${this.questionId}`;
    this.router.navigate([url]);
    this.question = this.quizService.getQuestion(this.questionId);

    console.log('nextQuestionId', this.questionId);
    console.log('nextQuestion', this.question);
  }

  recieveData(selected: boolean){
    console.log('selected', selected);
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

    // const data = {
    //   score: this.score,
    //   quiz: JSON.stringify(this.quiz)
    // };

    this.router.navigate(
      ['/score'],
      // { 
      //   queryParams: {data : encodeURIComponent(JSON.stringify(data))} 
      // }
    );
  }
}
