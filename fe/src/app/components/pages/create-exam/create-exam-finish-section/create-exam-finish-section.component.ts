import { Component, Input, OnInit } from '@angular/core';
// import { TQPaperFinish } from 'src/app/types/deprecated-question.types';
import { QAPaper_Finish } from 'src/app/models/QAPaper.model'

@Component({
  selector: 'app-create-exam-finish-section',
  templateUrl: './create-exam-finish-section.component.html',
  styleUrls: ['./create-exam-finish-section.component.scss']
})
export class CreateExamFinishSectionComponent implements OnInit {
  @Input() qaFinishObj!: QAPaper_Finish
  @Input() totalQ: number = 0

  hour = 0
  min = 0
  sec = 0

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
