import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { QAPaper_Intro } from 'src/app/models/QAPaper.model'
import { CATS, SUBCATS } from 'src/app/utils/constants'
type TCat = {
  id: string,
  name: string
}

@Component({
  selector: 'app-create-exam-intro-section',
  templateUrl: './create-exam-intro-section.component.html',
  styleUrls: ['./create-exam-intro-section.component.scss']
})
export class CreateExamIntroSectionComponent implements OnInit {
  @Input() qaIntroObj!: QAPaper_Intro

  cats: Array<TCat>

  subcats: Array<{ [id: string]: string }> = []

  constructor() { 
    // @ts-ignore
    this.cats = Object.keys(CATS).reduce((acc, id) => {
      // @ts-ignore
      acc.push({ id, name: CATS[id] })
      return acc
    }, [])
  }

  ngOnInit(): void {
    // this.qaIntroObj.cat = Object.keys(CATS)[0]
    // console.log(this.qaIntroObj)
    if(this.qaIntroObj.cat && this.qaIntroObj.subcat) {
      this.populateSubcats(this.qaIntroObj.cat)
    }
  }

  onCatSelect (ev: MatSelectChange) {
    // console.log('Cat = ', ev.value)
    this.qaIntroObj.cat = ev.value  // category ID
    this.populateSubcats(this.qaIntroObj.cat)
  }

  onSubcatSelect (ev: MatSelectChange) {
    // console.log('Subcat = ', ev.value)
    this.qaIntroObj.subcat = ev.value  // subcat ID
  }

  populateSubcats (cat: string) {
    this.subcats = SUBCATS[cat].map(sc => {
      return {
        id: Object.keys(sc)[0],
        name: Object.values(sc)[0]
      }
    })
  }

}
