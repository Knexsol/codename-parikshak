import { Injectable } from '@angular/core';
import { QAPaper, QABlock } from '../models/QAPaper.model'

@Injectable({
    providedIn: 'root'
})
export class QAService {

    constructor() { }

    getNewQPaper (): QAPaper {
        return new QAPaper()
    }

    getNewQABlock(): QABlock {
        return new QABlock()
    }
}
