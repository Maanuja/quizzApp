import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonGroupComponent } from './custom-button-group.component';

describe('CustomButtonGroupComponent', () => {
  let component: CustomButtonGroupComponent;
  let fixture: ComponentFixture<CustomButtonGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomButtonGroupComponent]
    });
    fixture = TestBed.createComponent(CustomButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
