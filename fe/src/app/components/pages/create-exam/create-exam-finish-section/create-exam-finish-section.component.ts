import { Component, Input, OnInit } from '@angular/core';
import { TQPaperFinish } from 'src/app/types/question.types';

@Component({
  selector: 'app-create-exam-finish-section',
  templateUrl: './create-exam-finish-section.component.html',
  styleUrls: ['./create-exam-finish-section.component.scss']
})
export class CreateExamFinishSectionComponent implements OnInit {
  @Input() qaFinishObj!: TQPaperFinish
  @Input() totalQ: number = 0

  hour = 0
  min = 0
  sec = 0

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
