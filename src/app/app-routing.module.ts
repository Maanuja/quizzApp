import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './main/home/home.component';
import { ScoreComponent } from './main/score/score.component';
import { SigninComponent } from './connection/signin/signin.component';
import { SignupComponent } from './connection/signup/signup.component';
import { QuestionComponent } from './quiz/question/question.component';

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
    path: 'sign-in',
    component: SigninComponent,
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
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'quiz/:questionId',
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
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
