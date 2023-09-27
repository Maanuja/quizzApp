import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzcardComponent } from './quizzcard/quizzcard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quizz',
    component: QuizzcardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
