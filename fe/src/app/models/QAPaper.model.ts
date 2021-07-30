import { Q_TYPES } from '../utils/constants'

export class QAPaper {
    id: string = '_LOCAL_QPaper_' + Date.now() + '_' + Math.random().toString().replace('.', '')
    intro = new QAPaper_Intro()
    body: { [QABlockID: string]: QABlock }
    finish = new QAPaper_Finish()

    constructor () {
        let newQABlock = new QABlock()

        // Give one QA Block to start with
        this.body = {
            [newQABlock.id]: newQABlock
        }
    }
}


export class QAPaper_Intro {
    name: string = 'New Exam Paper'
}

export class QAPaper_Finish {
    duration: number = 1800
}


export class QABlock {
    id: string = 'QA_' + Date.now() + '_' + Math.random().toString().replace('.', '')
    type: string = Q_TYPES[0].id
    question: string = ''
    options: Array<string> = []
    ans: string = ''
}

