import { Injectable } from '@angular/core';
import { TQABlock } from '../types/question.types'
import { Q_TYPES } from '../utils/constants'

@Injectable({
    providedIn: 'root'
})
export class QAService {

    constructor() { }

    getNewQABlock (): TQABlock {
        return {
            id: 'QA_' + Date.now() + '_' + Math.random().toString().replace('.', ''),
            type: Q_TYPES[0].id,
            question: 'Who is Superman',
            options: [],
            ans: ''
        }
    }
}
