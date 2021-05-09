import { Component, Input, OnInit } from '@angular/core';
import { TQPaperFinish } from 'src/app/types/question.types';

@Component({
  selector: 'app-create-exam-finish-section',
  templateUrl: './create-exam-finish-section.component.html',
  styleUrls: ['./create-exam-finish-section.component.scss']
})
export class CreateExamFinishSectionComponent implements OnInit {
  @Input() qaFinishObj!: TQPaperFinish

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
