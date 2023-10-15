import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  quiz:any[] = [ 
    {questionId: 1, question : 'What is the capital of France?', answers : ['Paris', 'Lyon', 'Marseille', 'Toulouse'], correctAnswer : 'Paris'},
    {questionId: 2, question : 'What is the capital of Spain?', answers : ['Madrid', 'Barcelona', 'Valencia', 'Seville'], correctAnswer : 'Madrid'},
    {questionId: 3, question : 'What is the capital of Italy?', answers : ['Turin', 'Milan', 'Naples', 'Rome'], correctAnswer : 'Rome'},
    // {questionId: 4, question : 'What is the capital of Germany?', answers : ['Berlin', 'Hamburg', 'Munich', 'Cologne'], correctAnswer : 'Berlin'},
    // {questionId: 5, question : 'What is the capital of Portugal?', answers : ['Porto', 'Lisbon', 'Braga', 'Faro'], correctAnswer : 'Lisbon'},
    // {questionId: 6, question : 'What is the capital of Belgium?', answers : ['Brussels', 'Antwerp', 'Ghent', 'Charleroi'], correctAnswer : 'Brussels'},
    // {questionId: 7, question : 'What is the capital of Netherlands?', answers : ['Rotterdam', 'Amsterdam','The Hague', 'Utrecht'], correctAnswer : 'Amsterdam'},
    // {questionId: 8, question : 'What is the capital of Switzerland?', answers : ['Bern', 'Zurich', 'Geneva', 'Basel'], correctAnswer : 'Bern'},
    // {questionId: 9, question : 'What is the capital of Austria?', answers : ['Graz', 'Linz', 'Vienna', 'Salzburg'], correctAnswer : 'Vienna'},
    // {questionId: 10, question : 'What is the capital of Poland?', answers : ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw'], correctAnswer : 'Warsaw'},
  ];

  user:any = {};
  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  showResult:boolean = false;

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

  setUserAnswer(questionId:number, answer:string){
    for(let i = 0; i < this.quiz.length; i++){
      if(this.quiz[i].questionId == questionId){
        this.selectedAnswer[i] = answer;
      }
    }
  }
  
  getUserAnswer(){
    return this.selectedAnswer;
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


  findScore(){
    let score = 0;
    for(let i = 0; i < this.quiz.length; i++){
      console.log('selectedAnswer',this.selectedAnswer[i]);
      console.log('correctAnswer',this.quiz[i].correctAnswer);
      if(this.selectedAnswer[i] == this.quiz[i].correctAnswer){
        score++;
      }
    }
    return score;
  }

  setScore(score : number){
    this.user['score'] = score;
  }

  getScore(){
    return this.user['score'];
  }

  resetUserAnswers(){
    this.selectedAnswer = [];
  }

  setPseudo(name: string){
    this.user['name'] = name;
  }
  getPseudo(){
    return this.user['name'];
  }

}
