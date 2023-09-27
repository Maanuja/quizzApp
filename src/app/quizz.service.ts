import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private quizUrl = 'http://localhost:3000/quiz';
  quiz:any[] = [];

  selectedAnswer:any[] = [];
  correctAnswer:string[] = [];
  score:number = 0;
  showResult:boolean = false;
  isSelected:boolean = false;


  constructor(private http: HttpClient) { 
  }

  getQuizData(): Observable<any[]> {
    return this.http.get<any[]>(this.quizUrl);
  }

  // getQuiz(){
  //   this.http.get(this.quizUrl).subscribe((data: any) => {
  //     this.quiz = data
  //   });
  //   return this.quiz;
  // }

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

  reset(){
    this.quiz = [];
  }
}
