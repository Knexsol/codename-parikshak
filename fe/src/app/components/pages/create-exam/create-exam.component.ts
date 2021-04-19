import { Component, OnInit } from '@angular/core';
import { TQABlock } from '../../../types/question.types'
import { QAService } from '../../../services/qa.service'

@Component({
    selector: 'app-create-exam',
    templateUrl: './create-exam.component.html',
    styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

    qaBlocksObj: { [id:string]: TQABlock } = {}

    constructor(private _qaService: QAService) {
        this.addNewQABlock()
        // console.log('this.qaBlocksObj =', this.qaBlocksObj)
    }

    getQABlocks = () => Object.values(this.qaBlocksObj)

    addNewQABlock = () => {
        const newQABlockObj = this._qaService.getNewQABlock()
        this.qaBlocksObj[newQABlockObj.id] = newQABlockObj
    }

    ngOnInit(): void {
    }

}
