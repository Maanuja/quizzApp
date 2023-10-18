import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/connection/auth.service';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  playerName!: string;
  disablePseudo = true;

  form = new FormGroup({
    pseudo: new FormControl('', Validators.required),
  });

  constructor( private quizService: QuizzService,  private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    //Nous verrons plus tard comment gérer cela avec des observables
    this.authService.isUserConnected();
    if(this.authService.isUserConnected()){
      this.disablePseudo = false;
    }
    if (this.authService.user){
      // console.log('Connected user', this.authService.user);
    }
    this.playerName = this.authService.user?.username || '';
  }

  onPseudoInput(event:any) {
    // console.log('val :',event.target.value);
    this.disablePseudo = event.target.value === '' ? true : false;
    // console.log("hasPseudo",this.hasPseudo);
  }

  onSubmit() {
    // console.log('none connected user name', this.form.value.pseudo);
    this.quizService.setPseudo(this.form.value.pseudo as string);
    this.quizService.playerName = this.form.value.pseudo as string;
    this.router.navigate(['/categories']);
  }

  navigateToCategories() {
    this.quizService.setPseudo(this.playerName);
    // console.log('connected user name', this.quizService.playerName);
    this.router.navigate(['/categories']);
  }

}

