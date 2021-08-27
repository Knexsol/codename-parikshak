import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { QABlock, MCQOption } from 'src/app/models/QAPaper.model'
import { Q_TYPES_INFO, Q_TYPES } from 'src/app/utils/constants'


@Component({
    selector: 'app-qa-block',
    templateUrl: './qa-block.component.html',
    styleUrls: ['./qa-block.component.scss']
})
export class QABlockComponent implements OnInit {
    @Input() qaBlock!: QABlock;
    @Input() qaBlockIndex: number = 0

    Q_TYPES_INFO = Q_TYPES_INFO
    Q_TYPES = Q_TYPES
    ALPHA = 'ABCDEFGHIJ'    // Max no. of options 10
    MAX_OPTION = 10
    isCollapsed = false

    constructor() {
        
    }

    ngOnInit(): void {
    }

    addNewOption () {
        const newOption = new MCQOption( (++this.qaBlock._ansCount).toString() , '')
        this.qaBlock.options.push(newOption)
    }

    updateOptionValue (ev: Event, opIndex: number) {
        this.qaBlock.options[opIndex] = {
            ...this.qaBlock.options[opIndex],
            text: (<HTMLInputElement>ev.target).value
        }
    }

    deleteOption (ev: Event, opId: string) {
        ev.stopPropagation()
        this.qaBlock.options = this.qaBlock.options.filter(op => op.id !== opId)
        console.log('deleting index = ' + opId)

        // Also delete this opId from ans[], if present
        this.qaBlock.ans = this.qaBlock.ans.filter(id => id !== opId)
    }

    markRadioAns(ev: MatRadioChange | Event) {
        if ('stopPropagation' in ev) {
            ev.stopPropagation()
            return
        }
        console.log(ev)
        // if(this.qaBlock.type === Q_TYPES.MCQ_SA) {
            this.qaBlock.ans = [ev.value]
        // }
    }

    updateCheckboxAns(ev: MatCheckboxChange | Event, opId: string) {
        if ('stopPropagation' in ev) {
            ev.stopPropagation()
            return
        }
        console.log(ev)

        if (ev.checked) {
            this.qaBlock.ans = Array.from(new Set([...this.qaBlock.ans, opId]))
        }
        else {
            this.qaBlock.ans = this.qaBlock.ans.filter(id => id !== opId)
        }
    }

}
