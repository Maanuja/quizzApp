import { Component, Input } from '@angular/core';
import { Quiz } from 'src/app/quizz.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() quizz: Quiz[] = [];
  // @Input() showResult: boolean = false;
}
