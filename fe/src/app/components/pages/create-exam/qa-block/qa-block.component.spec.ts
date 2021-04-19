import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaBlockComponent } from './qa-block.component';

describe('QaBlockComponent', () => {
  let component: QaBlockComponent;
  let fixture: ComponentFixture<QaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
