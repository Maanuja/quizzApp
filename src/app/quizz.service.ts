import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  quiz:any[] = [ 
    {questionId: 1, question : 'What is the capital of France?', answer : ['Paris', 'Lyon', 'Marseille', 'Toulouse'], correctAnswer : 'Paris'},
    {questionId: 2, question : 'What is the capital of Spain?', answer : ['Madrid', 'Barcelona', 'Valencia', 'Seville'], correctAnswer : 'Madrid'},
    {questionId: 3, question : 'What is the capital of Italy?', answer : ['Turin', 'Milan', 'Naples', 'Rome'], correctAnswer : 'Rome'},
    {questionId: 4, question : 'What is the capital of Germany?', answer : ['Berlin', 'Hamburg', 'Munich', 'Cologne'], correctAnswer : 'Berlin'},
    {questionId: 5, question : 'What is the capital of Portugal?', answer : ['Porto', 'Lisbon', 'Braga', 'Faro'], correctAnswer : 'Lisbon'},
    {questionId: 6, question : 'What is the capital of Belgium?', answer : ['Brussels', 'Antwerp', 'Ghent', 'Charleroi'], correctAnswer : 'Brussels'},
    {questionId: 7, question : 'What is the capital of Netherlands?', answer : ['Rotterdam', 'Amsterdam','The Hague', 'Utrecht'], correctAnswer : 'Amsterdam'},
    {questionId: 8, question : 'What is the capital of Switzerland?', answer : ['Bern', 'Zurich', 'Geneva', 'Basel'], correctAnswer : 'Bern'},
    {questionId: 9, question : 'What is the capital of Austria?', answer : ['Graz', 'Linz', 'Vienna', 'Salzburg'], correctAnswer : 'Vienna'},
    {questionId: 10, question : 'What is the capital of Poland?', answer : ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw'], correctAnswer : 'Warsaw'},
  ];

  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  score:number = 0;
  showResult:boolean = false;
  isSelected:boolean = false;


  constructor() { }

  getQuiz(){
    return this.quiz;
  }

  getQuestion(questionId:number){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.quiz[i].questionId == questionId){
        return this.quiz[i];
      }
    }
  }

  getCorrectAnswer(questionId:number){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.quiz[i].questionId == questionId){
        return this.quiz[i].correctAnswer;
      }
    }
  }

  getUserAnswer(questionId:number, answer:string){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.quiz[i].questionId == questionId){
        this.selectedAnswer[i] = answer;
      }
    }
  }


  // isAnswerSelected(questionId: number, answer: string) {
  //   const isAnswered = this.selectedAnswer.find((a) => a.questionId === questionId);
  //   if (!isAnswered) return false;
  //   return isAnswered.answer === answer;
  // }

  isComplete(): boolean {
    if (this.selectedAnswer.length == this.quiz.length) {
      for (let i = 0; i < this.selectedAnswer.length; i++) {
        if (this.selectedAnswer[i] == undefined) {
          return false;
        }
      }
      return true;
    }
    return false;
  }


  getScore(){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.selectedAnswer[i] == this.quiz[i].correctAnswer){
        this.score++;
      }
    }
    return this.score;
  }

}
