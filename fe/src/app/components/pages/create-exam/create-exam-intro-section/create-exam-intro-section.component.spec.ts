import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamIntroSectionComponent } from './create-exam-intro-section.component';

describe('CreateExamIntroSectionComponent', () => {
  let component: CreateExamIntroSectionComponent;
  let fixture: ComponentFixture<CreateExamIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamIntroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
