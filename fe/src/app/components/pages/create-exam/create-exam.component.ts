import { Component, OnInit } from '@angular/core';
import { TQABlock, TQPaper } from '../../../types/question.types'
import { QAService } from '../../../services/qa.service'
import { RestService } from '../../../services/rest.service'

@Component({
    selector: 'app-create-exam',
    templateUrl: './create-exam.component.html',
    styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

    qPaper: TQPaper
    
    constructor(private _qaService: QAService,
                private _restService: RestService) {
        this.qPaper = _qaService.getNewQPaper()
        // console.log('this.qaBlocksObj =', this.qaBlocksObj)
    }

    ngOnInit(): void {
    }

    saveDraft(): void {
        console.log(this.qPaper)

        const url = 'http://127.0.0.1:9099/api/exam'

        this._restService.post(url, this.qPaper)
    }

}
