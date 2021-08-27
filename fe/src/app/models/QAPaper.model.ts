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
    name: string = ''
    cat: string = ''
    subcat: string = ''
    desc: string = ''
}

export class QAPaper_Finish {
    duration: number = 1800
}


export class QABlock {
    id: string = 'QA_' + Date.now() + '_' + Math.random().toString().replace('.', '')
    type: string = Q_TYPES.MCQ_SA
    question: string = ''
    options: Array<MCQOption> = [new MCQOption('0', '')]
    ans: Array<string> = []
    _ansCount: number = 0
}

export class MCQOption {
    id: string
    text: string

    constructor (_id: string, _text: string) {
        this.id = _id
        this.text = _text
    }
}

