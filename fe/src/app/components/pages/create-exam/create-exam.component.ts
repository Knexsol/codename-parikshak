import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  qTypes = [
    { id: 'MCQ_Single_Ans', text: 'MCQ - Single Answer' },
    { id: 'MCQ_Multi_Ans', text: 'MCQ - Multiple Answers' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
