import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //variableName:variableType = variableValue
  quiz:any[] = [ 
    {question : 'What is the capital of France?', answer : ['Paris', 'Lyon', 'Marseille', 'Toulouse'], correctAnswer : 'Paris'},
    {question : 'What is the capital of Spain?', answer : ['Madrid', 'Barcelona', 'Valencia', 'Seville'], correctAnswer : 'Madrid'},
    {question : 'What is the capital of Italy?', answer : ['Turin', 'Milan', 'Naples', 'Rome'], correctAnswer : 'Rome'},
    {question : 'What is the capital of Germany?', answer : ['Berlin', 'Hamburg', 'Munich', 'Cologne'], correctAnswer : 'Berlin'},
    {question : 'What is the capital of Portugal?', answer : ['Porto', 'Lisbon', 'Braga', 'Faro'], correctAnswer : 'Lisbon'},
    {question : 'What is the capital of Belgium?', answer : ['Brussels', 'Antwerp', 'Ghent', 'Charleroi'], correctAnswer : 'Brussels'},
    {question : 'What is the capital of Netherlands?', answer : ['Rotterdam', 'Amsterdam','The Hague', 'Utrecht'], correctAnswer : 'Amsterdam'},
    {question : 'What is the capital of Switzerland?', answer : ['Bern', 'Zurich', 'Geneva', 'Basel'], correctAnswer : 'Bern'},
    {question : 'What is the capital of Austria?', answer : ['Graz', 'Linz', 'Vienna', 'Salzburg'], correctAnswer : 'Vienna'},
    {question : 'What is the capital of Poland?', answer : ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw'], correctAnswer : 'Warsaw'},
  ];

  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  score:number = 0;
  showResult:boolean = false;
  validForm: boolean = false;
  isSelected:boolean = false;


  selectAnswer(answer:string, index:number){
    this.selectedAnswer[index] = answer;
    this.correctAnswer[index] = this.quiz[index].correctAnswer;
    this.isSelected = true;
    this.isComplete();
  }

  isComplete(){
    if(this.selectedAnswer.length == this.quiz.length){
      for (let i = 0; i < this.selectedAnswer.length; i++){
        if(this.selectedAnswer[i] == undefined){
          this.validForm = false;
          return;
        }
      }
      this.validForm = true;    }
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.selectedAnswer.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }


  onSubmit(){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.selectedAnswer[i] == this.correctAnswer[i]){
        this.score++;
      }
    }
    this.showResult = true;
  }

}
