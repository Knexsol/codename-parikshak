import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QABlock, QAPaper } from 'src/app/models/QAPaper.model'
import { QAService } from 'src/app/services/qa.service'
import { RestService } from 'src/app/services/rest.service'

@Component({
    selector: 'app-create-exam',
    templateUrl: './create-exam.component.html',
    styleUrls: ['./create-exam.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateExamComponent implements OnInit {

    qPaper: QAPaper
    
    constructor(private _qaService: QAService,
                private _restService: RestService,
                private _activatedRoute: ActivatedRoute) {
        
        // console.log(this._activatedRoute.snapshot)
        // If it is Edit Exam
        // then there will be an ID
        if(this._activatedRoute.snapshot.params.examId) {
            const examId = this._activatedRoute.snapshot.params.examId
            this._qaService
                .getSavedQPaper(examId)
                .then(res => this.qPaper = res as QAPaper)
        }
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
