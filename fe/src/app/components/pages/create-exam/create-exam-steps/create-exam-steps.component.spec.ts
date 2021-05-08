import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamStepsComponent } from './create-exam-steps.component';

describe('CreateExamStepsComponent', () => {
  let component: CreateExamStepsComponent;
  let fixture: ComponentFixture<CreateExamStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
