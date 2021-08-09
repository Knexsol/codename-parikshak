import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TQPaperIntro } from 'src/app/types/question.types';

type TCat = {
  name: string,
  value: string
  subcat?: Array<TCat>
}

@Component({
  selector: 'app-create-exam-intro-section',
  templateUrl: './create-exam-intro-section.component.html',
  styleUrls: ['./create-exam-intro-section.component.scss']
})
export class CreateExamIntroSectionComponent implements OnInit {
  @Input() qaIntroObj!: TQPaperIntro

  cats: Array<TCat> = [
    { 
      name: 'Engineering', 
      value: 'engineering',
      subcat: [
        { name: 'Electronics and Communication', value: 'ece' },
        { name: 'Electrical', value: 'ee' },
        { name: 'Chemical', value: 'ch' },
      ]
    },
    { 
      name: 'IT', 
      value: 'it',
      subcat: [
        { name: 'Networking', value: 'ntwk' },
        { name: 'Cloud Computing', value: 'cc' },
        { name: 'Web Dev', value: 'wd' },
      ]
    },
  ]

  subcats: Array<TCat> = []

  constructor() { }

  ngOnInit(): void {
  }

  onCatSelect (ev: MatSelectChange) {
    // console.log('Selected id = ', ev)
    for(let c of this.cats) {
      if(c.value === ev.value) {
        this.subcats = c.subcat!
      }
    }
  }

}
