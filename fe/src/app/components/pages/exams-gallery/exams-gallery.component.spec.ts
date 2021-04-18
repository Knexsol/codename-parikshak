import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsGalleryComponent } from './exams-gallery.component';

describe('ExamsGalleryComponent', () => {
  let component: ExamsGalleryComponent;
  let fixture: ComponentFixture<ExamsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
