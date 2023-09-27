import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzcardComponent } from './quizzcard/quizzcard.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sign-in',
    component: QuizzcardComponent,
  },
  {
    path: 'sign-up',
    component: QuizzcardComponent,
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
    path: 'quizz/scoring',
    component: ScoreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
