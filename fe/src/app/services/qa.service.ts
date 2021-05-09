import { Injectable } from '@angular/core';
import { TQPaper, TQABlock } from '../types/question.types'
import { Q_TYPES } from '../utils/constants'

@Injectable({
    providedIn: 'root'
})
export class QAService {

    constructor() { }

    getNewQPaper (): TQPaper {
        let newQABlock = this.getNewQABlock()
        return {
            id: '_LOCAL_QPaper_' + Date.now() + '_' + Math.random().toString().replace('.', ''),
            intro: {
                name: 'New Exam Paper'
            },
            body: {
                [newQABlock.id]: newQABlock
            },
            finish: {
                duration: 1800  // 30 mins exam
            }
        }
    }

    getNewQABlock (): TQABlock {
        return {
            id: 'QA_' + Date.now() + '_' + Math.random().toString().replace('.', ''),
            type: Q_TYPES[0].id,
            question: '',
            options: [],
            ans: ''
        }
    }
}
