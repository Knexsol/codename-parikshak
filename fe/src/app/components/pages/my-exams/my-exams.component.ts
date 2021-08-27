import { Component, OnInit } from '@angular/core';
import { QAService } from 'src/app/services/qa.service'
import { QAPaper } from 'src/app/models/QAPaper.model'

@Component({
  selector: 'app-my-exams',
  templateUrl: './my-exams.component.html',
  styleUrls: ['./my-exams.component.scss']
})
export class MyExamsComponent implements OnInit {
  myExams: Array<QAPaper> = []

  constructor(private _qaService: QAService) {
    this._qaService.getMyQAPapers().then(res => {
      // console.log(res)
      this.myExams = res
    })
  }

  ngOnInit(): void {
  }

}
