import { Component, OnInit } from '@angular/core';
import { TQABlock, TQPaper } from '../../../types/question.types'
import { QAService } from '../../../services/qa.service'

@Component({
    selector: 'app-create-exam',
    templateUrl: './create-exam.component.html',
    styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

    qPaper: TQPaper
    
    constructor(private _qaService: QAService) {
        this.qPaper = _qaService.getNewQPaper()
        // console.log('this.qaBlocksObj =', this.qaBlocksObj)
    }

    ngOnInit(): void {
    }

}
