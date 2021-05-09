import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamBodySectionComponent } from './create-exam-body-section.component';

describe('CreateExamBodySectionComponent', () => {
  let component: CreateExamBodySectionComponent;
  let fixture: ComponentFixture<CreateExamBodySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamBodySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamBodySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
