import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  searchString: string = "";
  questionId: any;

  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  // getFirstQuestion(categoryId: number) {
  //   this.http.get(`http://localhost:3000/quiz?idCategory=${categoryId}`).subscribe((questions: any) => {
  //     this.questionId = questions[0].id;
  //     console.log('questionId', this.questionId);
  //   });
    
  //   return this.questionId;
  // }
  
}
