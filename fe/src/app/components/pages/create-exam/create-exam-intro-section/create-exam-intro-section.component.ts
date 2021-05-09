import { Component, Input, OnInit } from '@angular/core';
import { TQPaperIntro } from 'src/app/types/question.types';

@Component({
  selector: 'app-create-exam-intro-section',
  templateUrl: './create-exam-intro-section.component.html',
  styleUrls: ['./create-exam-intro-section.component.scss']
})
export class CreateExamIntroSectionComponent implements OnInit {
  @Input() qaIntroObj!: TQPaperIntro

  constructor() { }

  ngOnInit(): void {
  }

}
