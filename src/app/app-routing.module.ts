import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './main/home/home.component';
import { ScoreComponent } from './main/score/score.component';
import { LoginComponent } from './connection/login/login.component';
import { SignupComponent } from './connection/signup/signup.component';
import { QuestionComponent } from './quiz/question/question.component';
import { CategoriesComponent } from './quiz/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'log-in',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: QuizComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryId',
    component : QuizComponent
  },
  {
    path: 'categories/:idCategory/quiz/:questionId',
    component: QuestionComponent,
  },
  {
    path: 'quiz/:id/scoring',
    component: QuizComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
