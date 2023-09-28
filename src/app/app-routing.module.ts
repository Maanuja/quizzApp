import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzcardComponent } from './quizzcard/quizzcard.component';
import { HomeComponent } from './main/home/home.component';
import { ScoreComponent } from './main/score/score.component';
import { SigninComponent } from './connection/signin/signin.component';
import { SignupComponent } from './connection/signup/signup.component';

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
    component: QuizzcardComponent,
  },
  {
    path: 'quizz',
    component: QuizzcardComponent,
  },
  {
    path: 'quizz/:id',
    component: QuizzcardComponent,
  },
  {
    path: 'quizz/:id/scoring',
    component: QuizzcardComponent,
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
