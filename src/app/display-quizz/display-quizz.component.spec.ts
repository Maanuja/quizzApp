import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuizzComponent } from './display-quizz.component';

describe('DisplayQuizzComponent', () => {
  let component: DisplayQuizzComponent;
  let fixture: ComponentFixture<DisplayQuizzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayQuizzComponent]
    });
    fixture = TestBed.createComponent(DisplayQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
