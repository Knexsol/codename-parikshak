import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamFinishSectionComponent } from './create-exam-finish-section.component';

describe('CreateExamFinishSectionComponent', () => {
  let component: CreateExamFinishSectionComponent;
  let fixture: ComponentFixture<CreateExamFinishSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamFinishSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamFinishSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
