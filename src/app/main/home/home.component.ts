import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form = new FormGroup({
    pseudo: new FormControl('', Validators.required),
  });
  hasPseudo = true;

  constructor( private quizService: QuizzService, private router: Router) {}

  onPseudoInput(event:any) {
    // console.log('val :',event.target.value);
    this.hasPseudo = event.target.value === '' ? true : false;
    // console.log("hasPseudo",this.hasPseudo);
  }

  onSubmit() {
    this.quizService.setPseudo(this.form.value.pseudo as string);
    this.router.navigate(['quiz/1']);
  }

}

