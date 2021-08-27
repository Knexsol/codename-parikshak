import { Component, Input, OnInit } from '@angular/core';
import { QAService } from 'src/app/services/qa.service';
import { QABlock } from 'src/app/models/QAPaper.model'

@Component({
  selector: 'app-create-exam-body-section',
  templateUrl: './create-exam-body-section.component.html',
  styleUrls: ['./create-exam-body-section.component.scss']
})
export class CreateExamBodySectionComponent implements OnInit {
  @Input() qaBlocksObj: { [id: string]: QABlock } = {};

  constructor(private _qaService: QAService) { }

  ngOnInit(): void {
  }

  getQABlocks = () => Object.values(this.qaBlocksObj)

  addNewQABlock = () => {
      const newQABlockObj = this._qaService.getNewQABlock()
      this.qaBlocksObj[newQABlockObj.id] = newQABlockObj
  }

}
