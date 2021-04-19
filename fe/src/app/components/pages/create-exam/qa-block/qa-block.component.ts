import { Component, Input, OnInit } from '@angular/core';
import { TQABlock } from '../../../../types/question.types';
import { Q_TYPES } from '../../../../utils/constants'

@Component({
    selector: 'app-qa-block',
    templateUrl: './qa-block.component.html',
    styleUrls: ['./qa-block.component.scss']
})
export class QABlockComponent implements OnInit {
    @Input() qaBlock: TQABlock | any = {};
    @Input() qaBlockIndex: number = 0

    Q_TYPES = Q_TYPES
    ALPHA = 'ABCDEFGHIJ'    // Max no. of options 10
    MAX_OPTION = 10
    isCollapsed = false

    constructor() {
        
    }

    ngOnInit(): void {
    }

    addNewOption () {
        this.qaBlock.options.push('')
    }

    updateOptionValue (ev: Event, opIndex: number) {
        this.qaBlock.options[opIndex] = (<HTMLInputElement>ev.target).value
    }

}
