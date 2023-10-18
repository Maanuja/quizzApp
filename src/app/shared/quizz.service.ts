import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  // {questionId: number; categoryId: number, question: string, answers: string[], correctAnswer: string}
  quizContent: any[]  = [];
  playerName: string = '';
  user:any = {};
  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  showResult:boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  getQuizContent(categoryId: number) {
    this.quizContent = [];
    this.http.get(`http://localhost:3000/quiz?categoryId=${categoryId}`).subscribe((questions: any) => {
      console.log();
      for (const question of questions) {
        this.quizContent.push({
          questionId: question.questionId,
          categoryId: question.categoryId,
          question: question.question,
          answers: question.answers,
          correctAnswer: question.correctanswer,
        });
      }
    });
    console.log('quizContent', this.quizContent);
    return this.quizContent;
  }

  // setQuizContent(quizContent: { subscribe: (arg0: (questions: any) => void) => void; }){
  //   quizContent.subscribe((questions: any) => {
  //     console.log('questions', questions);
  //     for (const question of questions) {
  //       this.quizContent.push({
  //         questionId: question.questionId,
  //         categoryId: question.categoryId,
  //         question: question.question,
  //         answers: question.answers,
  //         correctAnswer: question.correctanswer,
  //       });
  //     }
  //   });
  //   console.log('quizContent', this.quizContent);
  //   console.log('quizContentLenght', this.quizContent.length);
  //   ;
  // }

  getQuestion(questionId:number){
    for(let i = 0; i < this.quizContent.length; i++){
      if(this.quizContent[i].questionId == questionId){
        return this.quizContent[i];
      }
    }
  }

  getCorrectAnswer(questionId:number){
    for(let i = 0; i < this.quizContent.length; i++){
      if(this.quizContent[i].questionId == questionId){
        return this.quizContent[i].correctAnswer;
      }
    }
  }

  setUserAnswer(questionId:number, answer:string){
    for(let i = 0; i < this.quizContent.length; i++){
      if(this.quizContent[i].questionId == questionId){
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
    if (this.selectedAnswer.length == this.quizContent.length) {
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
    for(let i = 0; i < this.quizContent.length; i++){
      console.log('selectedAnswer',this.selectedAnswer[i]);
      console.log('correctAnswer',this.quizContent[i].correctAnswer);
      if(this.selectedAnswer[i] == this.quizContent[i].correctAnswer){
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
