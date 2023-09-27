import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzcardComponent } from './quizzcard.component';

describe('QuizzcardComponent', () => {
  let component: QuizzcardComponent;
  let fixture: ComponentFixture<QuizzcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzcardComponent]
    });
    fixture = TestBed.createComponent(QuizzcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
