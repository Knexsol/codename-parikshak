import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { TQABlock, TQPaper } from '../../../types/deprecated-question.types'
import { QABlock, QAPaper } from '../../../models/QAPaper.model'
import { QAService } from '../../../services/qa.service'
import { RestService } from '../../../services/rest.service'

@Component({
    selector: 'app-create-exam',
    templateUrl: './create-exam.component.html',
    styleUrls: ['./create-exam.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateExamComponent implements OnInit {

    qPaper: QAPaper
    
    constructor(private _qaService: QAService,
                private _restService: RestService) {
        this.qPaper = _qaService.getNewQPaper()
        // console.log('this.qaBlocksObj =', this.qaBlocksObj)
    }

    ngOnInit(): void {
    }

    async saveDraft() {
        console.log(this.qPaper)

        const url = 'http://127.0.0.1:9099/api/exam'

        // this._restService.post(url, this.qPaper)

        const res = await this._qaService.saveQAPaper(this.qPaper)
        alert(res)
    }

    getTotalQ () {
        // console.log('inside getTotalQ')
        return Object.keys(this.qPaper.body).length
    }

}
