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
    if(typeof(this.qaFinishObj.duration) !== 'undefined') {
      this.breakDownIntoHMS(Number(this.qaFinishObj.duration))
    }
  }

  updateTime () {
    console.log(this.hour, this.min, this.sec)
    if(this.hour < 0) this.hour = 0
    if(this.min < 0) this.min = 0
    if(this.sec < 0) this.sec = 0

    this.qaFinishObj.duration = this.hour * 3600 + this.min * 60 + this.sec
  }

  breakDownIntoHMS (sec: number) {
    this.hour = Math.floor(sec / 3600)
    sec %= 3600
    this.min = Math.floor(sec / 60)
    this.sec = sec %= 60
  }
}
